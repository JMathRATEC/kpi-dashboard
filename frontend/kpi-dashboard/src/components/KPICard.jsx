import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

export default function KPICard({ titulo, valor, variacao }) {
    const isPositive = variacao >= 0;

    // Formata em real com separador de milhar
    const formattedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    }).format(valor);

    // Cores dinâmicas
    const accentColor = isPositive ? "green" : "red";
    const bgGradient = isPositive
        ? "from-green-50 to-green-100"
        : "from-red-50 to-red-100";

    return (
        <div
            className={`
        group relative bg-white dark:bg-gray-800 overflow-hidden rounded-2xl shadow-lg
        hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105
        ring-1 ring-transparent hover:ring-${accentColor}-200
      `}
        >
            {/* Barra superior de destaque */}
            <div
                className={`
          absolute top-0 left-0 h-1 w-16 bg-gradient-to-r ${bgGradient}
          group-hover:opacity-80 transition-opacity duration-300
        `}
            />

            <div className="p-6 flex flex-col justify-between h-full">
                {/* Título */}
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">
                    {titulo}
                </h3>

                {/* Valor principal */}
                <p className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                    {formattedValue}
                </p>

                {/* Box de variação */}
                <div className="flex items-center self-end space-x-2">
                    <div
                        className={`
              flex-shrink-0 p-1 rounded-full bg-${accentColor}-100
              dark:bg-${accentColor}-900/20
            `}
                    >
                        {isPositive ? (
                            <ArrowUpIcon
                                className={`h-5 w-5 text-${accentColor}-600`}
                            />
                        ) : (
                            <ArrowDownIcon
                                className={`h-5 w-5 text-${accentColor}-600`}
                            />
                        )}
                    </div>
                    <span
                        className={`
              text-lg font-semibold ${
                  isPositive ? "text-green-600" : "text-red-600"
              }
            `}
                    >
                        {variacao.toFixed(1)}%
                    </span>
                </div>
            </div>
        </div>
    );
}
