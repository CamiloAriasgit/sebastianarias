"use client";

import { motion } from "framer-motion";

const leaks = [
  {
    title: "El costo de la espera",
    description: "Cada segundo de carga adicional reduce la intención de compra. La velocidad no es un lujo, es la base de la confianza.",
  },
  {
    title: "La parálisis por análisis",
    description: "Interfaces saturadas que confunden al usuario. Si el camino no es evidente, el visitante elige abandonar.",
  },
  {
    title: "Puntos de salida innecesarios",
    description: "Elementos que distraen del objetivo principal. Un sistema de conversión debe guiar, no dispersar.",
  },
];

export default function TheLeak() {
  return (
    <section className="relative">
      {/* Gradiente de fondo desenfocado (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-gradient-to-br from-violet-500/10 via-indigo-500/10 to-pink-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 space-y-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Dónde se detiene <br /> el crecimiento.
          </h2>
          <p className="text-[#888888] text-lg font-light leading-relaxed">
            Identificamos las fricciones invisibles que impiden que tu tráfico actual se transforme en resultados medibles.
          </p>
        </div>

        <div className="space-y-4">
          {leaks.map((leak, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-white/0 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.03] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <h3 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">
                    {leak.title}
                  </h3>
                  <p className="text-sm text-[#888888] font-light leading-relaxed">
                    {leak.description}
                  </p>
                </div>
                
                {/* Flecha minimalista sutil */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}