"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 pt-12 md:pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block px-3 py-1 border border-[#2D3748] rounded-full"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#A0AEC0]">
          Protocolo de Conversión v1.0
        </span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
      >
        Tu web no está vendiendo. <br />
        <span className="text-[#4A5568]">Solo está existiendo.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-[#718096] text-lg md:text-xl max-w-2xl leading-relaxed"
      >
        Enviar tráfico a una landing page genérica es la forma más rápida de quemar capital. 
        Construimos <span className="text-[#E2E8F0]">Sistemas de Conversión</span> diseñados para eliminar la fricción y forzar la decisión de compra.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-4 pt-4"
      >
        <button className="bg-[#E2E8F0] text-[#0B0D12] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white transition-all">
          Diagnosticar mi fuga
        </button>
        <button className="border border-[#2D3748] text-[#E2E8F0] px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#1A202C] transition-all">
          Ver la arquitectura
        </button>
      </motion.div>

      {/* Indicador de scroll industrial */}
      <div className="pt-20 opacity-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#E2E8F0] to-transparent mx-auto" />
      </div>
    </section>
  );
}