"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroColab() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-6 pt-20">
      
      {/* Sutil resplandor de fondo para no dejar el negro totalmente plano */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* Badge - El concepto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">
            Programa de Validación
          </span>
        </motion.div>

        {/* H1 - El Manifiesto */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.05]"
        >
          No construyo software <br className="hidden sm:block" /> 
          basado en suposiciones.
        </motion.h1>

        {/* Subline - La tesis de SCAB Systems */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-10 max-w-2xl font-sans text-lg font-medium leading-relaxed text-neutral-400 sm:text-xl"
        >
          Busco profesionales que enfrentan problemas reales en su industria para 
          co-diseñar soluciones digitales que realmente funcionen. Tú pones el 
          dolor del mercado, yo pongo la arquitectura.
        </motion.p>

      </div>
    </section>
  );
}