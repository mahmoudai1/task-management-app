<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TaskController;

Route::get('/tasks/{status}', [TaskController::class, 'index']);
Route::post('/add-new-task', [TaskController::class, 'store']);
