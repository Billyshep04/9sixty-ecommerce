<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use App\Models\SiteSetting;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::query()->updateOrCreate(
            ['email' => 'admin@9sixty.test'],
            ['name' => '9SIXTY Admin', 'password' => Hash::make('Password123!'), 'role' => 'admin'],
        );

        $customer = User::query()->updateOrCreate(
            ['email' => 'customer@9sixty.test'],
            ['name' => 'Demo Customer', 'password' => Hash::make('Password123!'), 'role' => 'customer'],
        );

        $helmet = Category::query()->updateOrCreate(['slug' => 'helmet-stands'], ['name' => 'Helmet Stands']);
        Category::query()->updateOrCreate(['slug' => 'kit-hangers'], ['name' => 'Kit Hangers']);
        Category::query()->updateOrCreate(['slug' => 'accessories'], ['name' => 'Accessories']);

        $productImages = [
            '/assets/products/frame-desert-tan-1.jpg',
            '/assets/products/frame-barlow-1.jpg',
            '/assets/products/frame-barlow-kit-1.jpg',
            '/assets/products/frame-desert-kit-1.jpg',
        ];

        $products = [
            ['FRAME III - Desert Tan', 'frame-iii-desert-tan', 69.99, 'Desert Tan', '#A6936F', $productImages[0]],
            ['FRAME III - Barlow', 'frame-iii-barlow', 69.99, 'Barlow', '#B9A678', $productImages[1]],
            ['FRAME III - Barlow Kit', 'frame-iii-barlow-kit', 79.99, 'Black/Gold', '#A6936F', $productImages[2]],
            ['FRAME III - Desert Kit', 'frame-iii-desert-kit', 79.99, 'Desert Tan', '#A6936F', $productImages[3]],
        ];

        foreach ($products as [$name, $slug, $price, $colour, $accent, $image]) {
            $product = Product::query()->updateOrCreate(
                ['slug' => $slug],
                [
                    'category_id' => $helmet->id,
                    'name' => $name,
                    'short_description' => 'Premium modular wall-mounted helmet stand engineered for protection and precision.',
                    'description' => 'Carbon fibre infused construction, precision-cut mounting holes and a compact wall-mounted profile for garage, workshop and display use.',
                    'price' => $price,
                    'hero_image' => $image,
                    'gallery' => array_values(array_unique([$image, ...$productImages])),
                    'features' => ['Carbon fibre infused construction', 'Holds all helmet sizes and types', 'Precision-cut mounting holes', 'Included mounting hardware', 'Weather-resistant materials'],
                    'specifications' => ['Material' => 'Carbon Fibre Infused Plastic', 'Dimensions' => '8 x 6 x 4 inches', 'Weight' => '0.5kg', 'Mounting' => 'Wall-mounted with included hardware', 'Finish' => 'Matte with accent details'],
                    'meta_title' => $name . ' | 9SIXTY',
                    'meta_description' => 'Premium 9SIXTY wall-mounted helmet stand in ' . $colour . '.',
                    'is_featured' => true,
                    'is_active' => true,
                ],
            );

            foreach (['Black/Gold' => '#A6936F', $colour => $accent, 'Black/Silver' => '#C5C5C5'] as $variant => $hex) {
                $product->variants()->updateOrCreate(
                    ['colour_name' => $variant],
                    ['name' => $variant, 'colour_hex' => '#050505', 'accent_hex' => $hex, 'image' => $image, 'price_delta' => 0, 'is_active' => true],
                );
            }

            Review::query()->updateOrCreate(
                ['product_id' => $product->id, 'user_id' => $customer->id],
                ['rating' => 5, 'title' => 'Excellent build quality', 'body' => 'The stand looks premium on my garage wall and the install was straightforward.', 'status' => 'approved'],
            );
        }

        foreach (['Designing the perfect garage wall', 'Why helmet storage matters', '9SIXTY material notes'] as $title) {
            BlogPost::query()->updateOrCreate(
                ['slug' => Str::slug($title)],
                [
                    'title' => $title,
                    'category' => 'Product',
                    'excerpt' => 'A short 9SIXTY journal entry covering premium storage, materials and display details.',
                    'body' => 'Use this placeholder post as a starting point for launch content. The admin supports editable slugs, meta titles, meta descriptions and featured images.',
                    'featured_image' => $productImages[0],
                    'meta_title' => $title . ' | 9SIXTY',
                    'meta_description' => '9SIXTY journal article about premium helmet stand design.',
                    'is_published' => true,
                    'published_at' => now(),
                ],
            );
        }

        foreach ([
            'shipping_fee' => '5.99',
            'free_shipping_threshold' => '70',
            'stripe_publishable_key' => '',
        ] as $key => $value) {
            SiteSetting::putValue($key, $value);
        }

        foreach (['stripe_secret_key', 'smtp2go_api_key', 'smtp2go_password', 'mailchimp_api_key', 'mailchimp_list_id', 'tree_nation_api_key', 'shiptheory_api_key'] as $key) {
            SiteSetting::putValue($key, '', true);
        }

        $this->command->info('Admin login: admin@9sixty.test / Password123!');
    }
}
