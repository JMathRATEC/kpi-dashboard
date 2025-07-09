<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KPIController;

Route::get('/kpis', [KPIController::class, 'index']);
