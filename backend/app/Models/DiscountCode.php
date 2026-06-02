<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DiscountCode extends Model
{
    protected $fillable = ['code', 'type', 'value', 'starts_at', 'expires_at', 'is_active'];
    protected $casts = ['value' => 'decimal:2', 'starts_at' => 'datetime', 'expires_at' => 'datetime', 'is_active' => 'boolean'];
}
