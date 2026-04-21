"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    label: "Tasa de Abandono",
    value: "53%",
    description: "De los usuarios abandonan si la carga supera los 3 segundos.",
    impact: "Pérdida de Adquisición",
  },
  {
    label: "Fricción de Interfaz",
    value: "26%",
    description: "Menor conversión por cada campo innecesario en un formulario.",
    impact: "Derrame de Leads",
  },
  {
    label: "Costo de Latencia",
    value: "$2.6B",
    description: "Pérdidas anuales globales por sitios web de bajo rendimiento.",
    impact: "Impacto en ROI",
  },
];

export default function ProblemMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2D3748] border border-[#2D3748]">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-[#121417] p-8 space-y-6 group hover:bg-[#1A202C] transition-colors"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-mono text-[#4A5568] tracking-tighter">
              ERR_METRIC_0{index + 1}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-red-500/50 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h3 className="text-5xl font-light tracking-tighter text-[#E2E8F0]">
              {metric.value}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#718096] font-bold">
              {metric.label}
            </p>
          </div>

          <div className="pt-4 border-t border-[#1A202C] space-y-4">
            <p className="text-sm text-[#4A5568] leading-relaxed">
              {metric.description}
            </p>
            <div className="inline-flex items-center space-x-2">
              <span className="text-[9px] uppercase tracking-widest text-red-400/80">
                Status: {metric.impact}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}