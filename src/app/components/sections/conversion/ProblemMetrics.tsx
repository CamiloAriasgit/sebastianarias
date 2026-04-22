"use client";

import { motion } from "framer-motion";

const metrics = [
    {
        value: "53%",
        label: "Abandono por Latencia",
        description: "Usuarios que cierran la pestaña antes de que el sitio cargue por completo.",
    },
    {
        value: "2.6s",
        label: "Tiempo de Atención",
        description: "El umbral máximo antes de que un visitante pierda el interés en tu propuesta.",
    },
    {
        value: "64%",
        label: "Fuga de Pauta",
        description: "Presupuesto publicitario desperdiciado en interfaces que no retienen al usuario.",
    },
];

export default function ProblemMetrics() {
    return (
        <div className="space-y-16">
            {/* Sección de Copy Adicional */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-3xl space-y-6"
            >
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                    El costo de la invisibilidad<br />
                </h2>
                <p className="text-[#888888] text-lg font-light leading-relaxed">
                    Tener un sitio lento no es un error técnico; es un impuesto al crecimiento. Si no retienes la atención en milisegundos, estás financiando a tu competencia.
                </p>
                <p className="text-xs uppercase  text-white/30 font-medium">
                    Los números hablan por si solos:
                </p>
            </motion.div>

            {/* Grid de Cards (Sin modificaciones internas) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="relative group p-10 rounded-3xl border border-white/0 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
                    >
                        {/* Gradiente interno sutil para profundidad al hacer hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 space-y-4">
                            <h3 className="text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-violet-500/30">
                                {metric.value}
                            </h3>

                            <div className="space-y-2">
                                <p className="text-sm font-medium text-white/90 tracking-wide">
                                    {metric.label}
                                </p>
                                <p className="text-sm text-[#888888] font-light leading-relaxed">
                                    {metric.description}
                                </p>
                            </div>
                        </div>

                        {/* Acento de luz en la esquina */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-3xl rounded-full -mr-10 -mt-10" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}