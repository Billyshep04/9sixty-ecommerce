<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table): void {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->timestamps();
        });

        Schema::create('products', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('short_description')->nullable();
            $table->longText('description')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('hero_image')->nullable();
            $table->json('gallery')->nullable();
            $table->json('specifications')->nullable();
            $table->json('features')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('product_variants', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('colour_name');
            $table->string('colour_hex', 20)->nullable();
            $table->string('accent_hex', 20)->nullable();
            $table->string('image')->nullable();
            $table->decimal('price_delta', 10, 2)->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('orders', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('order_number')->unique();
            $table->string('email');
            $table->string('customer_name');
            $table->string('phone')->nullable();
            $table->json('shipping_address');
            $table->json('billing_address')->nullable();
            $table->decimal('subtotal', 10, 2);
            $table->decimal('shipping_total', 10, 2);
            $table->decimal('discount_total', 10, 2)->default(0);
            $table->decimal('gift_card_total', 10, 2)->default(0);
            $table->decimal('grand_total', 10, 2);
            $table->string('status')->default('pending')->index();
            $table->string('payment_status')->default('pending')->index();
            $table->string('stripe_payment_intent_id')->nullable();
            $table->string('refund_status')->nullable();
            $table->text('refund_details')->nullable();
            $table->unsignedInteger('trees_planted')->default(0);
            $table->string('shiptheory_reference')->nullable();
            $table->timestamps();
        });

        Schema::create('order_items', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('product_variant_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('variant_name')->nullable();
            $table->unsignedInteger('quantity');
            $table->decimal('unit_price', 10, 2);
            $table->decimal('line_total', 10, 2);
            $table->timestamps();
        });

        Schema::create('reviews', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('product_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->unsignedTinyInteger('rating');
            $table->string('title')->nullable();
            $table->text('body');
            $table->string('status')->default('pending')->index();
            $table->timestamps();
        });

        Schema::create('blog_posts', function (Blueprint $table): void {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category')->nullable();
            $table->text('excerpt')->nullable();
            $table->longText('body')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->boolean('is_published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });

        Schema::create('site_settings', function (Blueprint $table): void {
            $table->id();
            $table->string('key')->unique();
            $table->longText('value')->nullable();
            $table->boolean('is_encrypted')->default(false);
            $table->timestamps();
        });

        Schema::create('discount_codes', function (Blueprint $table): void {
            $table->id();
            $table->string('code')->unique();
            $table->string('type')->default('fixed');
            $table->decimal('value', 10, 2);
            $table->timestamp('starts_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('gift_cards', function (Blueprint $table): void {
            $table->id();
            $table->string('code')->unique();
            $table->decimal('initial_balance', 10, 2);
            $table->decimal('balance', 10, 2);
            $table->string('recipient_email')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gift_cards');
        Schema::dropIfExists('discount_codes');
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('blog_posts');
        Schema::dropIfExists('reviews');
        Schema::dropIfExists('order_items');
        Schema::dropIfExists('orders');
        Schema::dropIfExists('product_variants');
        Schema::dropIfExists('products');
        Schema::dropIfExists('categories');
    }
};
