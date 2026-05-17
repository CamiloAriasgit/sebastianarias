"use client";

import React from "react";

export default function AnalyticsSection() {
    return (
        <section className="bg-black py-20 overflow-hidden">
            <div className="px-6 mb-12 md:px-30">
                <h2 className="text-2xl md:text-5xl font-medium text-white tracking-tight">
                    Trazabilidad absoluta sobre el comportamiento de su activo.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-30">

                <div className="relative overflow-hidden rounded-[2rem] bg-black group">
                    <img
                        src="/images/realestate/MetricsCard.png"
                        alt="Mapa de actividad de usuarios desde diferentes ubicaciones geográficas"
                        className="w-full h-auto md:h-[750px] object-cover object-bottom block"
                    />

                    <div className="absolute inset-0 p-8 flex flex-col justify-start">
                        <p className="text-white text-sm md:text-2xl font-medium max-w-[540px]">
                            Audite la intención real de compra de sus visitas.{" "}
                            <span className="text-neutral-400">
                                Nuestro sistema no solo cuenta visitas; procesa la profundidad de scroll, el interés por tipología de apartamento y el comportamiento exacto antes del contacto, permitiéndole predecir la calidad de cada lead de forma objetiva.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] bg-black group">
                    <img
                        src="/images/realestate/MetricsCard.png"
                        alt="Panel de metricas simplificado mostrando cliks, tráfico y scroll dentro de la página"
                        className="w-full h-auto md:h-[750px] object-cover object-bottom block"
                    />

                    <div className="absolute inset-0 p-8 flex flex-col justify-start">
                        <p className="text-white text-sm md:text-2xl font-medium max-w-[540px]">
                            Monitoree la salud y disponibilidad de su plataforma.{" "}
                            <span className="text-neutral-400">
                                La infraestructura operativa registra en tiempo real la velocidad de respuesta global, la seguridad de las peticiones y la estabilidad del sistema. Un canal de ventas de alto ticket que opera al 100% de su capacidad, 24/7.
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}