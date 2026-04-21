"use client";

import { motion } from "framer-motion";

const leaks = [
  {
    code: "LEAK_01",
    title: "Latencia de Carga",
    impact: "Impacto Crítico",
    description: "Cada milisegundo de espera es un filtro que elimina usuarios con alta intención de compra. Si no es instantáneo, es irrelevante.",
    value: "+3s delay"
  },
  {
    code: "LEAK_02",
    title: "Ambigüedad Visual",
    impact: "Fricción Cognitiva",
    description: "Demasiados elementos compitiendo por atención. El cerebro del usuario elige la opción más fácil: cerrar la pestaña.",
    value: "High Noise"
  },
  {
    code: "LEAK_03",
    title: "Puntos de Fuga",
    impact: "Erosión de Conversión",
    description: "Links externos, menús complejos y CTAs secundarios que funcionan como salidas de emergencia en medio de tu proceso de venta.",
    value: "Exit Paths"
  }
];

export default function TheLeak() {
  return (
    <section className="relative py-20 border-y border-[#2D3748]/30">
      <div className="flex flex-col space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Anatomía de una <span className="text-red-500/80 underline decoration-1 underline-offset-8">fuga de capital</span>
          </h2>
          <p className="text-[#718096] max-w-xl text-sm md:text-base leading-relaxed">
            Un sitio web convencional está diseñado para informar. Un Sistema de Conversión está diseñado para capturar. 
            Identificamos los puntos donde su infraestructura actual está trabajando en su contra.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {leaks.map((leak, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-[#1A202C]/30 border border-[#2D3748]/50 hover:border-[#E2E8F0]/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-6 md:w-1/2">
                <span className="font-mono text-xs text-[#4A5568] rotate-90 md:rotate-0">
                  {leak.code}
                </span>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight text-[#E2E8F0]">
                    {leak.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-red-400/60 font-semibold">
                    {leak.impact}
                  </p>
                </div>
              </div>

              <div className="mt-4 md:mt-0 md:w-1/3">
                <p className="text-sm text-[#718096] leading-relaxed group-hover:text-[#A0AEC0] transition-colors">
                  {leak.description}
                </p>
              </div>

              <div className="hidden md:block text-right">
                <span className="font-mono text-sm text-[#2D3748] group-hover:text-[#E2E8F0] transition-colors">
                  [{leak.value}]
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decoración técnica - Scanline */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,20,23,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
      </div>
    </section>
  );
}