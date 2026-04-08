"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#F6F8FB] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* COLUMNA IZQUIERDA: COPY LITERAL */}
          <div className="flex flex-col">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[0.9]">
              Diseñado para funcionar, no solo para verse bien
            </h2>
            <p className="mt-8 max-w-lg font-sans text-lg leading-[1.0] text-neutral-500 sm:text-xl">
              Cada decisión responde a rendimiento, claridad y escalabilidad.
            </p>

            {/* Los Principios sugeridos */}
            <div className="mt-12 space-y-8">
              {[
                "Menos fricción, más conversión",
                "Estructura que soporta crecimiento",
                "Velocidad como estándar, no como extra",
                "Cada elemento tiene un propósito"
              ].map((principio, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span className="font-sans text-lg font-semibold tracking-tight text-neutral-800">
                    {principio}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA DERECHA: BLUEPRINT (Visible en todo dispositivo) */}
          <div className="relative w-full">
            <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem] border border-neutral-200/60 bg-white/50 p-6 sm:p-10 shadow-sm">
              
              {/* Grid de fondo (Blueprint style) */}
              <div 
                className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
                  backgroundSize: '40px 40px' 
                }} 
              />

              {/* Wireframe Simplificado */}
              <div className="relative h-full w-full flex flex-col gap-4 sm:gap-6">
                 {/* Barra Superior */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="h-10 w-full rounded-lg border border-dashed border-neutral-300 bg-neutral-100/50" 
                 />
                 
                 {/* Contenido Principal */}
                 <div className="grid grid-cols-4 gap-4 h-full">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="col-span-3 rounded-2xl border border-dashed border-neutral-400 bg-blue-50/20 flex items-center justify-center"
                    >
                         <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Structure_v1</span>
                    </motion.div>
                    <div className="flex flex-col gap-4">
                        <div className="h-full rounded-xl border border-neutral-200 bg-white" />
                        <div className="h-12 sm:h-20 rounded-xl bg-neutral-900" />
                    </div>
                 </div>
              </div>

              {/* Etiquetas Técnicas - Solo en Desktop para no saturar */}
              <div className="hidden sm:block absolute top-6 right-6 font-mono text-[10px] text-neutral-400">
                VER: 4.0.2
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}