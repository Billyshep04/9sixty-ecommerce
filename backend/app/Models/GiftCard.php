<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GiftCard extends Model
{
    protected $fillable = ['code', 'initial_balance', 'balance', 'recipient_email', 'expires_at', 'is_active'];
    protected $casts = ['initial_balance' => 'decimal:2', 'balance' => 'decimal:2', 'expires_at' => 'datetime', 'is_active' => 'boolean'];
}
