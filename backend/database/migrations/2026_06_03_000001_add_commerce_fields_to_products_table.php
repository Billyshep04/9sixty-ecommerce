<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table): void {
            $table->string('sku')->nullable()->unique()->after('description');
            $table->decimal('sale_price', 10, 2)->nullable()->after('price');
            $table->boolean('manage_stock')->default(false)->after('meta_description');
            $table->integer('stock_quantity')->nullable()->after('manage_stock');
            $table->string('stock_status')->default('in_stock')->after('stock_quantity');
            $table->integer('low_stock_threshold')->nullable()->after('stock_status');
            $table->decimal('weight', 8, 2)->nullable()->after('low_stock_threshold');
            $table->string('dimensions')->nullable()->after('weight');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table): void {
            $table->dropUnique(['sku']);
            $table->dropColumn([
                'sku',
                'sale_price',
                'manage_stock',
                'stock_quantity',
                'stock_status',
                'low_stock_threshold',
                'weight',
                'dimensions',
            ]);
        });
    }
};
