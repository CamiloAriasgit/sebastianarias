"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "Arquitectura Instantánea",
    description: "Eliminamos los tiempos de carga que matan la conversión. Cada interacción es inmediata, manteniendo la atención donde debe estar: en tu oferta.",
  },
  {
    title: "Diseño por Intención",
    description: "Cada elemento visual tiene un propósito. No diseñamos para decorar, sino para guiar al usuario hacia la decisión de compra sin distracciones.",
  },
  {
    title: "Medición Quirúrgica",
    description: "Implementamos sistemas de seguimiento que nos dicen exactamente qué funciona. Menos suposiciones, más decisiones basadas en resultados.",
  },
];

export default function SolutionSystem() {
  return (
    <section className="relative py-20">
      {/* Luz lateral orgánica */}
      <div className="absolute right-0 top-0 w-[40%] h-[100%] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight">
            Un sistema diseñado <br /> 
            <span className="text-white/40 text-3xl md:text-5xl italic font-light">para el rendimiento.</span>
          </h2>
          <p className="text-[#888888] text-lg font-light leading-relaxed max-w-md">
            Sustituimos las páginas web convencionales por sistemas optimizados para capturar valor y escalar resultados.
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-2xl"
            >
              <h3 className="text-lg font-medium text-white mb-2">
                {sol.title}
              </h3>
              <p className="text-sm text-[#888888] font-light leading-relaxed">
                {sol.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}