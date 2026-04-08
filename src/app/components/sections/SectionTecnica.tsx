"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#F6F8FB] px-6 py-24 sm:py-32 overflow-hidden border-t border-neutral-100">
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

          {/* RECURSO: PURE DARK NEOMORPHISM (Sin Bordes, Full Volumen en Oscuro) */}
          <div className="relative flex justify-center items-center py-12 lg:py-0">
            <div className="relative w-full max-w-[450px] lg:max-w-none h-[450px] [perspective:1500px] flex items-center justify-center">
              
              {/* CAPA 3: Lógica / Datos (Fondo - Dark Neomorphism Hundido) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 25, y: 0, rotateY: -10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: -70 }}
                transition={{ duration: 0.8 }}
                className="absolute w-[85%] aspect-video rounded-[2.5rem] bg-neutral-900 shadow-[inset_10px_10px_20px_#111111,inset_-10px_-10px_20px_#333333] p-8 lg:translate-x-12"
              >
                <div className="flex flex-col gap-3 opacity-60">
                  <div className="h-2 w-1/4 rounded-full bg-neutral-700" />
                  <div className="grid grid-cols-5 gap-3 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 rounded-xl bg-neutral-900 shadow-[4px_4px_8px_#111111,-4px_-4px_8px_#333333]" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CAPA 2: Estructura (Medio - Dark Neomorphism Elevado y Suave) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 25, y: 0, rotateY: -10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-[85%] aspect-video rounded-[2.5rem] bg-neutral-900 shadow-[30px_30px_60px_#111111,-30px_-30px_60px_#333333] p-10 lg:translate-x-6"
              >
                <div className="w-full h-full rounded-3xl bg-neutral-900 shadow-[inset_6px_6px_12px_#111111,inset_-6px_-6px_12px_#333333] opacity-40" />
              </motion.div>

              {/* CAPA 1: UI Final (Frente - Dark Neomorphism Elevado y Definido) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 25, y: 0, rotateY: -10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 70 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute w-[85%] aspect-video rounded-[2.5rem] bg-neutral-900 shadow-[50px_50px_100px_#111111,-50px_-50px_100px_#333333] p-8 flex flex-col justify-between"
              >
                <div className="flex gap-4 items-center mb-6">
                   <div className="h-14 w-14 rounded-full bg-neutral-900 shadow-[6px_6px_12px_#111111,-6px_-6px_12px_#333333] flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-white" />
                   </div>
                   <div className="space-y-2">
                     <div className="h-3 w-32 rounded-full bg-neutral-700" />
                     <div className="h-2.5 w-20 rounded-full bg-neutral-800" />
                   </div>
                </div>
                
                {/* Botón Dark Neomórfico */}
                <div className="h-16 w-full rounded-2xl bg-neutral-900 shadow-[8px_8px_16px_#111111,-8px_-8px_16px_#333333] flex items-center justify-center p-4">
                   <div className="h-1.5 w-1/4 rounded-full bg-white/10" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}