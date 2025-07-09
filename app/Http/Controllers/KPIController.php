<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class KPIController extends Controller
{
    public function index(): JsonResponse
    {
        $kpis = [
            ['id' => 1, 'titulo' => 'Vendas do Dia', 'valor' => 1280.50, 'variacao_percentual' => 5.2],
            ['id' => 2, 'titulo' => 'Visitas do Site', 'valor' => 30500, 'variacao_percentual' => -2.4],
            ['id' => 3, 'titulo' => 'Novos Usuários', 'valor' => 45, 'variacao_percentual' => 8.1],
            ['id' => 4, 'titulo' => 'Pedidos Finalizados', 'valor' => 120, 'variacao_percentual' => 3.4],
        ];

        return response()->json($kpis);
    }
}
