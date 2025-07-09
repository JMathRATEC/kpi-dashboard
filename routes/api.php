<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KPIController;
use Illuminate\Http\Request;

Route::get('/kpis', [KPIController::class, 'index']);

Route::post('/login', function(Request $req) {
    $email = $req->input('email');
    $password = $req->input('password');
    // Usuário fixo: admin@exemplo.com / senha123
    if ($email === 'admin@exemplo.com' && $password === 'senha123') {
        return response()->json(['status' => 'success'], 200);
    }
    return response()->json(['status' => 'error'], 401);
});