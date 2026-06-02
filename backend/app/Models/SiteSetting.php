<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'value', 'is_encrypted'];

    protected $casts = ['is_encrypted' => 'boolean'];

    public static function getValue(string $key, mixed $default = null): mixed
    {
        $setting = static::query()->where('key', $key)->first();
        if (! $setting) {
            return $default;
        }

        return $setting->is_encrypted ? Crypt::decryptString($setting->value) : $setting->value;
    }

    public static function putValue(string $key, mixed $value, bool $encrypted = false): void
    {
        static::query()->updateOrCreate(
            ['key' => $key],
            ['value' => $encrypted ? Crypt::encryptString((string) $value) : (string) $value, 'is_encrypted' => $encrypted],
        );
    }
}
