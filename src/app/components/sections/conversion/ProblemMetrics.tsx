"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants, animate } from "framer-motion";

// Componente para el conteo animado
function Counter({ value, duration = 0.8 }: { value: string, duration?: number }) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    // Cambiamos a { amount: 0.1 } para que dispare apenas asome la card
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    const isFloat = value.includes(".");

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, numericValue, {
                duration: duration,
                ease: [0.21, 0.47, 0.32, 0.98] as const,
                onUpdate: (latest) => {
                    // Si es decimal (como 2.6), mantenemos un decimal
                    setDisplayValue(isFloat ? Number(latest.toFixed(1)) : Math.floor(latest));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, numericValue, duration, isFloat]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
}

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
    const isInView = useInView(ref, { amount: 0.3 });

    const colors = {
        from: "#462d55",
        via: "#b18aa7",
        to: "#dca587"
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const }
        }
    };

    return (
        <section ref={ref} className="min-h-[100svh] py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-16"
            >
                <motion.div variants={itemVariants} className="max-w-3xl">
                    <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
                        Velocidad
                    </span>
                    <h2 className="text-2xl md:text-6xl font-medium tracking-tight text-white py-4 leading-[1] max-w-xl">
                        El diseño importa.<br />Pero la velocidad decide
                    </h2>
                    <p className="text-neutral-200 text-lg font-light leading-[1.2]">
                        La paciencia de tu cliente es limitada, y cada milisegundo de carga extra es un cliente que se diluye antes de ver tu oferta.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="relative group p-10 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-xl overflow-hidden shadow-inner shadow-white/10"
                        >
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/5">
                                    {/* Duración fija para todos: 1 segundo. El efecto secuencial lo da el stagger de la card */}
                                    <Counter value={metric.value} duration={1} />
                                </h3>

                                <div className="space-y-2">
                                    <p className="text-xl font-semibold text-white/90 tracking-wide">
                                        {metric.label}
                                    </p>
                                    <p className="text-sm text-white font-light leading-relaxed">
                                        {metric.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}