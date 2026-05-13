"use client";

import React from "react";

export default function AnalyticsSection() {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="px-6 mb-12 md:px-30">
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
          Visibilidad total sobre el origen de sus leads.
        </h2>
      </div>

      {/* Grid: 1 columna en móvil, 2 columnas en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-30">
        
        {/* Card 1: Diagnóstico de Interés Real */}
        <div className="relative overflow-hidden rounded-[2rem] bg-black group">
          {/* Aquí va tu imagen: Asegúrate que mantenga la proporción de las cards anteriores */}
          <img 
            src="/images/realestate/UsersMap.png" 
            alt="Diagnóstico de Interés Real"
            className="w-full h-auto block"
          />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-start">
            <p className="text-white text-sm md:text-2xl font-medium mb-4">
              Entienda el comportamiento de sus visitas de forma inmediata. Nuestro sistema rastrea cada clic y nivel de lectura, permitiéndole identificar qué secciones de su proyecto generan mayor retención y en qué momento exacto el usuario decide iniciar el contacto.
            </p>
          </div>
        </div>

        {/* Card 2: Auditoría Técnica de Tráfico */}
        <div className="relative overflow-hidden rounded-[2rem] bg-black group">
          {/* Aquí va tu imagen: Misma dimensión que la anterior */}
          <img 
            src="/images/realestate/UsersMap.png" 
            alt="Auditoría Técnica de Tráfico"
            className="w-full h-auto block"
          />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-start">
            <p className="text-white text-sm md:text-2xl font-medium mb-4">
              Mantenga un registro independiente y objetivo de su tráfico. Aunque no cuente con herramientas de rastreo externas, la infraestructura de datos que implementamos le garantiza claridad sobre el volumen y la calidad de las visitas que recibe su activo digital en tiempo real.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}