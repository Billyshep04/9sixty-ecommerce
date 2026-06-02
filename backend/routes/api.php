<?php

use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\CheckoutController;
use App\Http\Controllers\Api\StorefrontController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/auth/register', [AuthController::class, 'register']);
Route::post('/auth/login', [AuthController::class, 'login']);

Route::get('/home', [StorefrontController::class, 'home']);
Route::get('/products', [StorefrontController::class, 'products']);
Route::get('/products/{product:slug}', [StorefrontController::class, 'product']);
Route::get('/blog', [StorefrontController::class, 'blog']);
Route::get('/blog/{post:slug}', [StorefrontController::class, 'blogPost']);
Route::post('/newsletter', [StorefrontController::class, 'newsletter']);
Route::post('/checkout/quote', [CheckoutController::class, 'quote']);
Route::post('/checkout/guest-orders', [CheckoutController::class, 'store']);
Route::post('/orders/{order}/paid', [CheckoutController::class, 'paid']);

Route::middleware('auth:sanctum')->group(function (): void {
    Route::get('/auth/me', [AuthController::class, 'me']);
    Route::post('/auth/logout', [AuthController::class, 'logout']);
    Route::post('/checkout/orders', [CheckoutController::class, 'store']);
    Route::post('/products/{product:slug}/reviews', [StorefrontController::class, 'review'])->middleware('role:customer,admin');
    Route::get('/account/orders', fn (Request $request) => ['orders' => $request->user()->orders()->with('items')->latest()->get()]);

    Route::prefix('admin')->middleware('role:admin')->group(function (): void {
        Route::get('/dashboard', [AdminController::class, 'dashboard']);
        Route::get('/products', [AdminController::class, 'products']);
        Route::post('/products', [AdminController::class, 'saveProduct']);
        Route::put('/products/{product}', [AdminController::class, 'saveProduct']);
        Route::delete('/products/{product}', [AdminController::class, 'destroyProduct']);
        Route::match(['get', 'post'], '/categories', [AdminController::class, 'categories']);
        Route::get('/orders', [AdminController::class, 'orders']);
        Route::patch('/orders/{order}', [AdminController::class, 'updateOrder']);
        Route::get('/customers', [AdminController::class, 'customers']);
        Route::get('/reviews', [AdminController::class, 'reviews']);
        Route::patch('/reviews/{review}', [AdminController::class, 'updateReview']);
        Route::match(['get', 'post'], '/blog-posts', [AdminController::class, 'blogPosts']);
        Route::put('/blog-posts/{post}', [AdminController::class, 'blogPosts']);
        Route::match(['get', 'put'], '/settings', [AdminController::class, 'settings']);
        Route::match(['get', 'post'], '/discount-codes', [AdminController::class, 'discountCodes']);
        Route::match(['get', 'post'], '/gift-cards', [AdminController::class, 'giftCards']);
        Route::match(['get', 'post'], '/media', [AdminController::class, 'media']);
    });
});
