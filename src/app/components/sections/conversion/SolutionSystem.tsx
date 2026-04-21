"use client";

import { motion } from "framer-motion";

const features = [
  {
    tag: "01 / INFRAESTRUCTURA",
    title: "Next.js 15 + Edge Runtime",
    benefit: "Carga instantánea global.",
    detail: "Renderizado en el borde (Edge) para que el sitio cargue antes de que el usuario termine de parpadear. Cero latencia, cero pérdida de interés."
  },
  {
    tag: "02 / INTERFAZ",
    title: "Atomic Design (Apple Style)",
    benefit: "Fricción cognitiva cero.",
    detail: "Minimalismo funcional. Eliminamos el ruido visual para que el único camino posible del usuario sea el botón de conversión."
  },
  {
    tag: "03 / DATA",
    title: "Real-time Analytics con Supabase",
    benefit: "Decisiones basadas en cruda realidad.",
    detail: "Tracking de eventos en tiempo real. No adivinamos qué funciona; medimos cada interacción para optimizar el ROI quirúrgicamente."
  }
];

export default function SolutionSystem() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Fondo decorativo de rejilla de ingeniería */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d37481a_1px,transparent_1px),linear-gradient(to_bottom,#2d37481a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 space-y-24">
        <div className="text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-[#4A5568] font-mono"
          >
            Core Architecture
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E2E8F0]">
            El Sistema de <span className="text-white">Alto Rendimiento</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative group"
            >
              {/* Conector visual tipo blueprint */}
              <div className="absolute -top-6 left-0 w-full h-[1px] bg-gradient-to-r from-[#2D3748] via-transparent to-transparent" />
              
              <div className="space-y-6">
                <span className="text-[10px] font-mono text-[#718096] bg-[#1A202C] px-2 py-1 border border-[#2D3748]">
                  {f.tag}
                </span>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#E2E8F0] group-hover:text-white transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#4A5568] uppercase tracking-wider">
                    {f.benefit}
                  </p>
                </div>

                <p className="text-sm text-[#718096] leading-relaxed border-l-2 border-[#2D3748] pl-4 group-hover:border-[#E2E8F0] transition-all">
                  {f.detail}
                </p>
              </div>

              {/* Elemento decorativo técnico en la esquina */}
              <div className="absolute -bottom-4 -right-2 opacity-0 group-hover:opacity-20 transition-opacity">
                <span className="text-[40px] font-mono text-[#E2E8F0]">+</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bloque Central de Autoridad Técnica */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-1 bg-gradient-to-r from-transparent via-[#2D3748] to-transparent"
        >
          <div className="bg-[#0B0D12] py-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#718096]">
              Stack: Next.js 15 (App Router) • TypeScript • Tailwind • Supabase • Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}