<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\Category;
use App\Models\DiscountCode;
use App\Models\GiftCard;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\Review;
use App\Models\SiteSetting;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public function dashboard(): JsonResponse
    {
        return response()->json([
            'orders' => Order::query()->count(),
            'revenue' => Order::query()->where('payment_status', 'paid')->sum('grand_total'),
            'customers' => User::query()->where('role', 'customer')->count(),
            'pending_reviews' => Review::query()->where('status', 'pending')->count(),
            'recent_orders' => Order::query()->with('items')->latest()->limit(6)->get(),
        ]);
    }

    public function products(): JsonResponse
    {
        return response()->json(['products' => Product::query()->with(['category', 'variants'])->latest()->paginate(30)]);
    }

    public function saveProduct(Request $request, ?Product $product = null): JsonResponse
    {
        $data = $request->validate([
            'category_id' => ['nullable', 'exists:categories,id'],
            'name' => ['required', 'string', 'max:160'],
            'slug' => ['nullable', 'string', 'max:190', Rule::unique('products', 'slug')->ignore($product)],
            'short_description' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'sku' => ['nullable', 'string', 'max:120', Rule::unique('products', 'sku')->ignore($product)],
            'price' => ['required', 'numeric', 'min:0'],
            'sale_price' => ['nullable', 'numeric', 'min:0'],
            'hero_image' => ['nullable', 'string'],
            'gallery' => ['nullable', 'array'],
            'specifications' => ['nullable', 'array'],
            'features' => ['nullable', 'array'],
            'meta_title' => ['nullable', 'string', 'max:190'],
            'meta_description' => ['nullable', 'string'],
            'manage_stock' => ['boolean'],
            'stock_quantity' => ['nullable', 'integer', 'min:0'],
            'stock_status' => ['nullable', Rule::in(['in_stock', 'out_of_stock', 'on_backorder'])],
            'low_stock_threshold' => ['nullable', 'integer', 'min:0'],
            'weight' => ['nullable', 'numeric', 'min:0'],
            'dimensions' => ['nullable', 'string', 'max:120'],
            'is_featured' => ['boolean'],
            'is_active' => ['boolean'],
            'variants' => ['nullable', 'array'],
        ]);

        $variants = $data['variants'] ?? [];
        unset($data['variants']);
        $data['slug'] = $data['slug'] ?? Str::slug($data['name']);
        $data['sku'] = filled($data['sku'] ?? null) ? $data['sku'] : null;
        $data['stock_status'] = $data['stock_status'] ?? 'in_stock';
        $product = Product::query()->updateOrCreate(['id' => $product?->id], $data);

        foreach ($variants as $variant) {
            ProductVariant::query()->updateOrCreate(
                ['id' => $variant['id'] ?? null, 'product_id' => $product->id],
                [
                    'product_id' => $product->id,
                    'name' => $variant['name'] ?? $variant['colour_name'],
                    'colour_name' => $variant['colour_name'],
                    'colour_hex' => $variant['colour_hex'] ?? '#000000',
                    'accent_hex' => $variant['accent_hex'] ?? '#A6936F',
                    'image' => $variant['image'] ?? null,
                    'price_delta' => $variant['price_delta'] ?? 0,
                    'is_active' => $variant['is_active'] ?? true,
                ],
            );
        }

        return response()->json(['product' => $product->fresh(['category', 'variants'])]);
    }

    public function destroyProduct(Product $product): JsonResponse
    {
        $product->delete();
        return response()->json(['message' => 'Product deleted.']);
    }

    public function categories(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = $request->validate(['name' => ['required', 'string'], 'slug' => ['nullable', 'string'], 'description' => ['nullable', 'string']]);
            $data['slug'] = filled($data['slug'] ?? null) ? $data['slug'] : Str::slug($data['name']);
            return response()->json(['category' => Category::query()->create($data)], 201);
        }
        return response()->json(['categories' => Category::query()->orderBy('name')->get()]);
    }

    public function orders(): JsonResponse
    {
        return response()->json(['orders' => Order::query()->with(['items', 'user:id,name,email'])->latest()->paginate(30)]);
    }

    public function updateOrder(Request $request, Order $order): JsonResponse
    {
        $data = $request->validate([
            'status' => ['required', Rule::in(['pending', 'paid', 'processing', 'shipped', 'complete', 'refunded', 'cancelled'])],
            'refund_status' => ['nullable', 'string', 'max:80'],
            'refund_details' => ['nullable', 'string'],
        ]);
        $order->update($data);
        return response()->json(['order' => $order->fresh('items')]);
    }

    public function customers(): JsonResponse
    {
        return response()->json(['customers' => User::query()->where('role', 'customer')->withCount('orders')->latest()->paginate(30)]);
    }

    public function reviews(): JsonResponse
    {
        return response()->json(['reviews' => Review::query()->with(['product:id,name', 'user:id,name,email'])->latest()->paginate(50)]);
    }

    public function updateReview(Request $request, Review $review): JsonResponse
    {
        $review->update($request->validate(['status' => ['required', Rule::in(['pending', 'approved', 'rejected'])]]));
        return response()->json(['review' => $review->fresh(['product:id,name', 'user:id,name,email'])]);
    }

    public function blogPosts(Request $request, ?BlogPost $post = null): JsonResponse
    {
        if ($request->isMethod('get')) {
            return response()->json(['posts' => BlogPost::query()->latest()->paginate(30)]);
        }

        $data = $request->validate([
            'title' => ['required', 'string', 'max:190'],
            'slug' => ['nullable', 'string', 'max:190', Rule::unique('blog_posts', 'slug')->ignore($post)],
            'category' => ['nullable', 'string'],
            'excerpt' => ['nullable', 'string'],
            'body' => ['nullable', 'string'],
            'featured_image' => ['nullable', 'string'],
            'meta_title' => ['nullable', 'string'],
            'meta_description' => ['nullable', 'string'],
            'is_published' => ['boolean'],
        ]);
        $data['slug'] = $data['slug'] ?? Str::slug($data['title']);
        $data['published_at'] = ($data['is_published'] ?? false) ? now() : null;
        return response()->json(['post' => BlogPost::query()->updateOrCreate(['id' => $post?->id], $data)]);
    }

    public function settings(Request $request): JsonResponse
    {
        if ($request->isMethod('put')) {
            foreach ($request->all() as $key => $value) {
                if ($key === 'maintenance_mode') {
                    $value = filter_var($value, FILTER_VALIDATE_BOOLEAN) ? '1' : '0';
                }

                $encrypted = str_contains($key, 'key') || str_contains($key, 'secret') || str_contains($key, 'password');
                if ($encrypted && blank($value)) {
                    continue;
                }

                SiteSetting::putValue($key, $value, $encrypted);
            }
        }

        $plain = ['maintenance_mode', 'shipping_fee', 'free_shipping_threshold', 'stripe_publishable_key'];
        $secret = ['stripe_secret_key', 'smtp2go_api_key', 'smtp2go_password', 'mailchimp_api_key', 'mailchimp_list_id', 'tree_nation_api_key', 'shiptheory_api_key'];

        return response()->json([
            'settings' => collect($plain)->mapWithKeys(fn ($key) => [$key => $key === 'maintenance_mode' ? SiteSetting::getValue($key, '1') === '1' : SiteSetting::getValue($key)])->all(),
            'secrets' => collect($secret)->mapWithKeys(fn ($key) => [$key => filled(SiteSetting::getValue($key))])->all(),
        ]);
    }

    public function discountCodes(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
            return response()->json(['discount' => DiscountCode::query()->create($request->validate(['code' => ['required'], 'type' => ['required'], 'value' => ['required', 'numeric'], 'is_active' => ['boolean']]))], 201);
        }
        return response()->json(['discounts' => DiscountCode::query()->latest()->get()]);
    }

    public function giftCards(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = $request->validate(['code' => ['required'], 'initial_balance' => ['required', 'numeric'], 'recipient_email' => ['nullable', 'email'], 'is_active' => ['boolean']]);
            $data['balance'] = $data['initial_balance'];
            return response()->json(['gift_card' => GiftCard::query()->create($data)], 201);
        }
        return response()->json(['gift_cards' => GiftCard::query()->latest()->get()]);
    }

    public function media(Request $request): JsonResponse
    {
        if ($request->isMethod('post')) {
            $data = $request->validate(['file' => ['required', 'image', 'max:5120']]);
            $path = $data['file']->store('media', 'public');
            return response()->json(['path' => Storage::url($path)], 201);
        }
        return response()->json(['media' => collect(Storage::disk('public')->files('media'))->map(fn ($path) => Storage::url($path))->values()]);
    }
}
