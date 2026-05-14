"use client";

import React from "react";

export default function AnalyticsSection() {
    return (
        <section className="bg-black py-20 overflow-hidden">
            <div className="px-6 mb-12 md:px-30">
                <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
                    Visibilidad total sobre el origen de sus leads.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-30">

                <div className="relative overflow-hidden rounded-[2rem] bg-black group">
                    <img
                        src="/images/realestate/UsersMap.png"
                        alt="Mapa de actividad de usuarios desde diferentes ubicaciones geográficas"
                        className="w-full h-auto block"
                    />

                    <div className="absolute inset-0 p-8 flex flex-col justify-start">
                        <p className="text-white text-sm md:text-2xl font-medium max-w-[540px]">
                            Entienda el comportamiento de sus visitas de forma inmediata.{" "}
                            <span className="text-neutral-400">
                                Nuestro sistema rastrea clics y niveles de lectura para identificar qué secciones generan mayor retención y el momento exacto en que deciden iniciar el contacto.
                            </span>
                        </p>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-[2rem] bg-black group">
                    <img
                        src="/images/realestate/MetricsCard.png"
                        alt="Panel de metricas simplificado mostrando cliks, tráfico y scroll dentro de la página"
                        className="w-full h-auto block"
                    />

                    <div className="absolute inset-0 p-8 flex flex-col justify-start">
                        <p className="text-white text-sm md:text-2xl font-medium max-w-[540px]">
                            Mantenga un registro independiente y objetivo de su tráfico.{" "}
                            <span className="text-neutral-400">
                                La infraestructura operativa que implementamos le garantiza total claridad sobre el volumen, origen y calidad de las visitas que recibe su activo digital en tiempo real.
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}