<?php

// ajout de Route
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\CategoryController;

Route::apiResource('books', BookController::class);
Route::apiResource('author', AuthorController::class);
Route::apiResource('category', CategoryController::class);