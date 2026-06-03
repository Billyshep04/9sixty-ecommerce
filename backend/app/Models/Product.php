<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'short_description',
        'description',
        'sku',
        'price',
        'sale_price',
        'hero_image',
        'gallery',
        'specifications',
        'features',
        'meta_title',
        'meta_description',
        'manage_stock',
        'stock_quantity',
        'stock_status',
        'low_stock_threshold',
        'weight',
        'dimensions',
        'is_featured',
        'is_active',
    ];

    protected $casts = [
        'gallery' => 'array',
        'specifications' => 'array',
        'features' => 'array',
        'price' => 'decimal:2',
        'sale_price' => 'decimal:2',
        'manage_stock' => 'boolean',
        'stock_quantity' => 'integer',
        'low_stock_threshold' => 'integer',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function variants(): HasMany
    {
        return $this->hasMany(ProductVariant::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
