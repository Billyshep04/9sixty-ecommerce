<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'order_number',
        'email',
        'customer_name',
        'phone',
        'shipping_address',
        'billing_address',
        'subtotal',
        'shipping_total',
        'discount_total',
        'gift_card_total',
        'grand_total',
        'status',
        'payment_status',
        'stripe_payment_intent_id',
        'refund_status',
        'refund_details',
        'trees_planted',
        'shiptheory_reference',
    ];

    protected $casts = [
        'shipping_address' => 'array',
        'billing_address' => 'array',
        'subtotal' => 'decimal:2',
        'shipping_total' => 'decimal:2',
        'discount_total' => 'decimal:2',
        'gift_card_total' => 'decimal:2',
        'grand_total' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
