"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          Tu sitio web debe <br /> ser un activo.
        </h1>
        
        <p className="text-[#888888] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          La mayoría de las empresas pierden el 60% de su tráfico por fricción técnica. 
          Creamos sistemas diseñados para convertir extraños en clientes.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col md:flex-row gap-5"
      >
        <button className="px-10 py-4 bg-white text-black rounded-full font-medium text-sm transition-transform hover:scale-105 active:scale-95">
          Diagnosticar mi sistema
        </button>
        
        <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-full font-medium text-sm backdrop-blur-md hover:bg-white/10 transition-all">
          Cómo funciona
        </button>
      </motion.div>

      {/* Un indicador visual minimalista */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="pt-16 opacity-20"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}