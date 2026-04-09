"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#F6F8FB] px-6 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          
          {/* TEXTO (Tu copy exacto) */}
          <div className="flex flex-col z-10">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl leading-[0.9]">
              Diseñado para funcionar, no solo para verse bien
            </h2>
            <p className="mt-8 max-w-lg font-sans text-lg leading-[1.0] text-neutral-500 sm:text-xl">
              Cada decisión responde a rendimiento, claridad y escalabilidad.
            </p>

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

          {/* RECURSO MEJORADO: SISTEMA EN CAPAS */}
          <div className="relative flex justify-center items-center py-12 lg:py-0">
            {/* Contenedor con perspectiva para desktop */}
            <div className="relative w-full max-w-[400px] lg:max-w-none h-[400px] [perspective:1000px] flex items-center justify-center">
              
              {/* CAPA 3: Lógica / Datos (Fondo) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 0, y: 0 }}
                whileInView={{ opacity: 1, rotateX: 25, y: -40, rotateY: -10 }}
                transition={{ duration: 0.8 }}
                className="absolute w-[80%] aspect-video rounded-2xl border border-neutral-200 bg-white/40 backdrop-blur-sm p-4 shadow-xl shadow-black/20 lg:translate-x-12"
              >
                <div className="flex flex-col gap-2">
                  <div className="h-2 w-1/2 rounded-full bg-neutral-200" />
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div key={i} className="h-8 rounded-md bg-neutral-100 border border-neutral-200/50" />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-neutral-400">LOGIC_LAYER</div>
              </motion.div>

              {/* CAPA 2: Estructura / Skeleton (Medio) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 0, y: 0 }}
                whileInView={{ opacity: 1, rotateX: 25, y: 0, rotateY: -10 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-[80%] aspect-video rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/10 shadow-2xl shadow-black backdrop-blur-md p-6 lg:translate-x-6"
              >
                <div className="flex justify-between items-center mb-6">
                   <div className="h-6 w-6 rounded-full border border-blue-200" />
                   <div className="h-2 w-20 rounded-full bg-blue-100" />
                </div>
                <div className="w-full h-24 rounded-xl border border-dashed border-blue-300 bg-blue-50/30" />
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-blue-400">STRUCT_V04</div>
              </motion.div>

              {/* CAPA 1: UI Final (Frente) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 0, y: 0 }}
                whileInView={{ opacity: 1, rotateX: 25, y: 40, rotateY: -10 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute w-[80%] aspect-video rounded-2xl bg-neutral-800 p-6 shadow-2xl shadow-black"
              >
                <div className="flex gap-4 items-center mb-4">
                   <div className="h-10 w-10 rounded-full bg-neutral-800 shadow-lg shadow-black" />
                   <div className="space-y-2">
                     <div className="h-3 w-24 rounded-full bg-neutral-800 shadow-inner shadow-black" />
                     <div className="h-2 w-16 rounded-full bg-neutral-800 shadow-inner shadow-black" />
                   </div>
                </div>
                <div className="h-20 w-full rounded-xl bg-neutral-800 flex items-end p-4 shadow-lg shadow-black">
                   <div className="h-8 w-full rounded-lg bg-neutral-800 shadow-inner shadow-black" />
                </div>
                <div className="absolute flex items-center top-4 right-6 font-mono text-[8px] text-neutral-400 uppercase tracking-widest"><span className="bg-indigo-600 h-1 w-1 rounded-full mr-1"></span> Final_Interface</div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}