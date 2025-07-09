import React, { useState, useEffect } from "react";
import KPICard from "./components/KPICard";

export default function App() {
    const [kpis, setKpis] = useState([]);

    const fetchKpis = async () => {
        const res = await fetch("http://localhost/api/kpis");
        const data = await res.json();
        setKpis(data);
    };

    useEffect(() => {
        fetchKpis();
        const interval = setInterval(fetchKpis, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Dashboard de KPIs
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpis.map((kpi) => (
                    <KPICard
                        key={kpi.id}
                        titulo={kpi.titulo}
                        valor={kpi.valor}
                        variacao={kpi.variacao_percentual}
                    />
                ))}
            </div>
        </div>
    );
}
