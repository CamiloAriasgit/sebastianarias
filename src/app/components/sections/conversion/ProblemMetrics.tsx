"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function ProblemMetrics({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    // Cambiamos a un tono violeta-carbón muy profundo para enfatizar las métricas
    const colors = { 
        from: "#462d55",
        via: "#b18aa7",
        to: "#dca587"
    };

    const isInView = useInView(ref, { amount: 0.2 });

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="space-y-16">
                {/* Sección de Copy Adicional */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl"
                >
                    <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
                        Velocidad
                    </span>
                    <h2 className="text-2xl md:text-6xl font-medium tracking-tight text-white py-4 leading-[1] max-w-xl">
                        El diseño importa.<br />Pero la velocidad decide
                    </h2>
                    <p className="text-neutral-200 text-lg font-light leading-[1.2]">
                        Tener una presencia digital estéticamente perfecta no sirve de nada si tu infraestructura no es instantánea. La paciencia de tu cliente es limitada, y cada milisegundo de carga extra es un cliente que se diluye antes de ver tu oferta.
                    </p>
                </motion.div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative group p-10 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl overflow-hidden"
                        >
                            {/* Gradiente interno sutil para profundidad al hacer hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 space-y-4">
                                <h3 className="text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10">
                                    {metric.value}
                                </h3>

                                <div className="space-y-2">
                                    <p className="text-xl font-semibold text-white/90 tracking-wide">
                                        {metric.label}
                                    </p>
                                    <p className="text-sm text-neutral-200 font-light leading-relaxed">
                                        {metric.description}
                                    </p>
                                </div>
                            </div>

                            {/* Acento de luz en la esquina */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 blur-3xl rounded-full -mr-10 -mt-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}