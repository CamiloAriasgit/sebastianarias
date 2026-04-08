"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="w-full bg-[#F6F8FB] px-6 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          
          {/* TEXTO */}
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

          {/* RECURSO CON NEOMORPHISM */}
          <div className="relative flex justify-center items-center lg:py-0">
            <div className="relative w-full max-w-[400px] lg:max-w-none h-[400px] [perspective:1200px] flex items-center justify-center">
              
              {/* CAPA 3: Lógica / Datos (Neomorphism Hundido) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 25, y: 0, rotateY: -10 }}
                whileInView={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.8 }}
                className="absolute w-[85%] aspect-video rounded-[2rem] bg-[#F6F8FB] shadow-[inset_8px_8px_16px_#e2e4e7,inset_-8px_-8px_16px_#ffffff] p-6 lg:translate-x-12"
              >
                <div className="flex flex-col gap-3">
                  <div className="h-2 w-1/3 rounded-full bg-gray-200" />
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 rounded-xl bg-[#F6F8FB] shadow-[4px_4px_8px_#e2e4e7,-4px_-4px_8px_#ffffff]" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CAPA 2: Estructura (Dashed Blueprint) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 25, y: 0, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute w-[85%] aspect-video rounded-[2rem] border-2 border-dashed border-blue-200/50 bg-blue-50/5 backdrop-blur-[2px] p-8 lg:translate-x-6"
              >
                <div className="w-full h-full rounded-2xl border border-dashed border-blue-300/30 bg-blue-100/10" />
              </motion.div>

              {/* CAPA 1: UI Final (Neomorphism Elevado) */}
              <motion.div 
                initial={{ opacity: 0, rotateX: 25, y: 0, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute w-[85%] aspect-video rounded-[2rem] bg-[#F6F8FB] shadow-[20px_20px_40px_#d9dbde,-20px_-20px_40px_#ffffff] p-8 flex flex-col justify-between"
              >
                <div className="flex gap-4 items-center">
                   <div className="h-12 w-12 rounded-2xl bg-[#F6F8FB] shadow-[4px_4px_8px_#d9dbde,-4px_-4px_8px_#ffffff] flex items-center justify-center">
                      <div className="h-5 w-5 rounded-full bg-neutral-900" />
                   </div>
                   <div className="space-y-2">
                     <div className="h-3 w-28 rounded-full bg-gray-200" />
                     <div className="h-2 w-16 rounded-full bg-gray-100" />
                   </div>
                </div>
                
                {/* Botón Neomórfico */}
                <div className="h-14 w-full rounded-2xl bg-[#F6F8FB] shadow-[6px_6px_12px_#d9dbde,-6px_-6px_12px_#ffffff] flex items-center px-4">
                   <div className="h-2 w-full rounded-full bg-neutral-900/10" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}