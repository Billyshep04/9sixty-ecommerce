<?php

use App\Models\BlogPost;
use App\Models\Product;

require __DIR__ . '/../vendor/autoload.php';

$app = require __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

Product::query()
    ->whereIn('slug', ['frame-iii-orange', 'frame-iii-green', 'frame-iii-blue', 'frame-iii-black-gold'])
    ->delete();

$images = [
    '/assets/products/frame-desert-tan-1.jpg',
    '/assets/products/frame-barlow-1.jpg',
    '/assets/products/frame-barlow-kit-1.jpg',
    '/assets/products/frame-desert-kit-1.jpg',
];

foreach (Product::query()->orderBy('id')->get()->values() as $index => $product) {
    $image = $images[$index % count($images)];
    $product->update([
        'hero_image' => $image,
        'gallery' => array_values(array_unique([$image, ...$images])),
    ]);

    $product->variants()->update(['image' => $image]);
}

BlogPost::query()->update(['featured_image' => $images[0]]);

echo "Product images refreshed.\n";
