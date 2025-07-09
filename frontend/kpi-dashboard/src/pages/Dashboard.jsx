import React, { useState, useEffect } from "react";
import KPICard from "../components/KPICard";

export default function Dashboard() {
    const [kpis, setKpis] = useState([]);

    const fetchKpis = async () => {
        try {
            const res = await fetch("http://localhost/api/kpis");
            const data = await res.json();
            setKpis(data);
        } catch (err) {
            console.error("Erro ao carregar KPIs:", err);
        }
    };

    useEffect(() => {
        fetchKpis();
        const interval = setInterval(fetchKpis, 30000); // atualiza a cada 30s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Dashboard de KPIs
                </h1>
                <button
                    onClick={() => {
                        localStorage.removeItem("loggedIn");
                        window.location.href = "/login";
                    }}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Sair
                </button>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.length > 0 ? (
                    kpis.map((kpi) => (
                        <KPICard
                            key={kpi.id}
                            titulo={kpi.titulo}
                            valor={kpi.valor}
                            variacao={kpi.variacao_percentual}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        Carregando KPIs...
                    </p>
                )}
            </div>
        </div>
    );
}
