<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    $index = public_path('app/index.html');

    if (file_exists($index)) {
        return response()->file($index);
    }

    return response('Build the frontend with npm run build inside /frontend.', 200);
})->where('any', '.*');
