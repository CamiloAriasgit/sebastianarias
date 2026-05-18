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
                            Entornos digitales con estándares de alta costura.{" "}
                            <span className="text-neutral-400">
                                No adaptamos plantillas genéricas ni constructores lentos. Diseñamos interfaces a medida que proyectan la misma exclusividad, detalle y estatus que los acabados arquitectónicos de sus proyectos físicos.
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
                            Sistemas independientes y arquitectura escalable.{" "}
                            <span className="text-neutral-400">
                                Desplegamos infraestructura corporativa libre de las limitaciones y comisiones de plataformas genéricas. Su sistema es un activo propio de su empresa, diseñado para evolucionar de forma modular a medida que su operación crece.
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}