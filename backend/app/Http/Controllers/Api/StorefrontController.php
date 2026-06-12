<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class StorefrontController extends Controller
{
    public function siteStatus(): JsonResponse
    {
        return response()->json([
            'maintenance_mode' => SiteSetting::getValue('maintenance_mode', '1') === '1',
        ]);
    }

    public function media(string $filename)
    {
        $path = 'media/' . basename($filename);
        abort_unless(Storage::disk('public')->exists($path), 404);

        return Storage::disk('public')->response($path);
    }

    public function home(): JsonResponse
    {
        return response()->json([
            'featured_products' => Product::query()->with(['category', 'variants'])->where('is_featured', true)->where('is_active', true)->latest()->limit(6)->get(),
            'reviews' => Review::query()->with('user:id,name')->where('status', 'approved')->latest()->limit(3)->get(),
            'settings' => $this->publicSettings(),
        ]);
    }

    public function products(Request $request): JsonResponse
    {
        $query = Product::query()->with(['category', 'variants'])->where('is_active', true);

        if ($request->filled('category')) {
            $query->whereHas('category', fn ($category) => $category->where('slug', $request->string('category')));
        }

        if ($request->filled('colour')) {
            $query->whereHas('variants', fn ($variant) => $variant->where('colour_name', $request->string('colour')));
        }

        return response()->json([
            'products' => $query->latest()->paginate(12),
            'categories' => Category::query()->orderBy('name')->get(),
        ]);
    }

    public function product(Product $product): JsonResponse
    {
        abort_unless($product->is_active, 404);

        return response()->json([
            'product' => $product->load(['category', 'variants', 'reviews' => fn ($q) => $q->where('status', 'approved')->with('user:id,name')]),
            'schema' => [
                '@context' => 'https://schema.org',
                '@type' => 'Product',
                'name' => $product->name,
                'description' => $product->meta_description ?: $product->short_description,
                'offers' => ['@type' => 'Offer', 'priceCurrency' => 'GBP', 'price' => $product->price],
            ],
        ]);
    }

    public function blog(): JsonResponse
    {
        return response()->json(['posts' => BlogPost::query()->where('is_published', true)->latest('published_at')->paginate(9)]);
    }

    public function blogPost(BlogPost $post): JsonResponse
    {
        abort_unless($post->is_published, 404);

        return response()->json([
            'post' => $post,
            'schema' => [
                '@context' => 'https://schema.org',
                '@type' => 'BlogPosting',
                'headline' => $post->title,
                'description' => $post->meta_description ?: $post->excerpt,
            ],
        ]);
    }

    public function review(Request $request, Product $product): JsonResponse
    {
        $data = $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'title' => ['nullable', 'string', 'max:140'],
            'body' => ['required', 'string', 'max:2000'],
        ]);

        $review = $product->reviews()->create($data + [
            'user_id' => $request->user()->id,
            'status' => 'pending',
        ]);

        return response()->json(['review' => $review, 'message' => 'Review submitted for approval.'], 201);
    }

    public function newsletter(Request $request): JsonResponse
    {
        $data = $request->validate(['email' => ['required', 'email', 'max:190']]);

        return response()->json([
            'message' => 'Thanks for signing up.',
            'mailchimp_configured' => filled(SiteSetting::getValue('mailchimp_api_key')),
            'email' => $data['email'],
        ]);
    }

    private function publicSettings(): array
    {
        return [
            'maintenance_mode' => SiteSetting::getValue('maintenance_mode', '1') === '1',
            'shipping_fee' => (float) SiteSetting::getValue('shipping_fee', '5.99'),
            'free_shipping_threshold' => (float) SiteSetting::getValue('free_shipping_threshold', '70'),
            'tree_threshold' => 50,
        ];
    }
}
