<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\ProductVariant;
use App\Models\SiteSetting;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CheckoutController extends Controller
{
    public function quote(Request $request): JsonResponse
    {
        return response()->json($this->totals($request->validate(['items' => ['required', 'array'], 'items.*.variant_id' => ['required', 'integer'], 'items.*.quantity' => ['required', 'integer', 'min:1']])['items']));
    }

    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'email' => ['required', 'email', 'max:190'],
            'customer_name' => ['required', 'string', 'max:160'],
            'phone' => ['nullable', 'string', 'max:60'],
            'shipping_address' => ['required', 'array'],
            'billing_address' => ['nullable', 'array'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.variant_id' => ['required', 'integer', 'exists:product_variants,id'],
            'items.*.quantity' => ['required', 'integer', 'min:1'],
        ]);

        $totals = $this->totals($data['items']);

        $order = Order::query()->create([
            'user_id' => $request->user()?->id,
            'order_number' => '960-' . now()->format('ymd') . '-' . Str::upper(Str::random(5)),
            'email' => $data['email'],
            'customer_name' => $data['customer_name'],
            'phone' => $data['phone'] ?? null,
            'shipping_address' => $data['shipping_address'],
            'billing_address' => $data['billing_address'] ?? $data['shipping_address'],
            'subtotal' => $totals['subtotal'],
            'shipping_total' => $totals['shipping_total'],
            'grand_total' => $totals['grand_total'],
            'trees_planted' => $totals['trees_planted'],
            'status' => 'pending',
            'payment_status' => 'pending',
        ]);

        foreach ($totals['items'] as $item) {
            $order->items()->create($item);
        }

        return response()->json([
            'order' => $order->load('items'),
            'stripe' => [
                'publishable_key_configured' => filled(SiteSetting::getValue('stripe_publishable_key')),
                'client_secret' => null,
                'wallets' => ['apple_pay' => true, 'google_pay' => true],
            ],
        ], 201);
    }

    public function paid(Order $order): JsonResponse
    {
        $order->update(['status' => 'paid', 'payment_status' => 'paid']);

        return response()->json([
            'order' => $order->fresh('items'),
            'integrations' => [
                'shiptheory_queued' => filled(SiteSetting::getValue('shiptheory_api_key')),
                'tree_email_queued' => $order->trees_planted > 0,
            ],
        ]);
    }

    private function totals(array $items): array
    {
        $shippingFee = (float) SiteSetting::getValue('shipping_fee', '5.99');
        $freeThreshold = (float) SiteSetting::getValue('free_shipping_threshold', '70');
        $subtotal = 0;
        $lines = [];

        foreach ($items as $item) {
            $variant = ProductVariant::query()->with('product')->findOrFail($item['variant_id']);
            $unit = (float) $variant->product->price + (float) $variant->price_delta;
            $line = $unit * (int) $item['quantity'];
            $subtotal += $line;
            $lines[] = [
                'product_id' => $variant->product_id,
                'product_variant_id' => $variant->id,
                'name' => $variant->product->name,
                'variant_name' => $variant->name,
                'quantity' => (int) $item['quantity'],
                'unit_price' => $unit,
                'line_total' => $line,
            ];
        }

        $shipping = $subtotal >= $freeThreshold ? 0 : $shippingFee;

        return [
            'items' => $lines,
            'subtotal' => round($subtotal, 2),
            'shipping_total' => round($shipping, 2),
            'grand_total' => round($subtotal + $shipping, 2),
            'trees_planted' => (int) floor($subtotal / 50),
        ];
    }
}
