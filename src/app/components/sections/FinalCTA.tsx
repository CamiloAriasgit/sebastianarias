"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full bg-[#F6F8FB] px-6 py-32 sm:py-48 overflow-hidden">
      
      {/* RECURSO VISUAL: Technical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FB] via-transparent to-[#F6F8FB]" />

      <div className="relative mx-auto max-w-4xl text-center">
        
        {/* H2 - Opción 1 */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-5xl font-bold tracking-tight text-neutral-900 sm:text-7xl leading-[0.9]"
        >
          Construyamos el sistema <br /> que tu negocio necesita.
        </motion.h2>

        {/* Subline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 max-w-2xl font-sans text-lg font-medium leading-relaxed text-neutral-500 sm:text-xl"
        >
          Ya sea una landing de alto impacto o una plataforma para operar y crecer, el siguiente paso es convertir tu idea en una solución real.
        </motion.p>

        {/* Botón CTA + Microcopy */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <button className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-neutral-900 px-10 py-5 text-lg font-bold text-white transition-all hover:pr-12 active:scale-95">
            <span>Iniciar proyecto</span>
            <ArrowRight className="h-5 w-5 transition-all group-hover:translate-x-1" />
          </button>
          
          <p className="font-sans text-sm font-semibold text-neutral-400">
            Sin compromiso. Revisamos juntos qué solución encaja mejor.
          </p>
        </motion.div>

      </div>
    </section>
  );
}