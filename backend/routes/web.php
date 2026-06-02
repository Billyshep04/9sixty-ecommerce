<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    $indexPaths = [
        public_path('app/index.html'),
        base_path('../9sixty.com/app/index.html'),
    ];

    foreach ($indexPaths as $index) {
        if (file_exists($index)) {
            return response()->file($index);
        }
    }

    return response('Build the frontend with npm run build inside /frontend.', 200);
})->where('any', '.*');
