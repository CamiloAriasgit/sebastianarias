"use client";

import { motion } from "framer-motion";

export default function AuditCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Gradiente radial de fondo para centrar la atención */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
            Hablemos de su <br /> 
            <span className="text-white/40 italic font-light">próximo nivel.</span>
          </h2>
          
          <p className="text-[#888888] text-lg font-light leading-relaxed max-w-xl mx-auto">
            Analizamos su sistema actual sin compromiso. El objetivo es simple: 
            identificar dónde está perdiendo oportunidades y cómo podemos solucionarlo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <button className="group relative px-12 py-5 bg-white text-black rounded-full font-medium text-sm transition-all hover:scale-105 active:scale-95 overflow-hidden">
            <span className="relative z-10">Solicitar diagnóstico gratuito</span>
          </button>
          
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#4A5568] font-medium">
            Disponibilidad limitada por mes
          </p>
        </motion.div>
      </div>

      {/* Decoración minimalista de cierre */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
}