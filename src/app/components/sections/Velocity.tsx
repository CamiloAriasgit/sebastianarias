"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// --- Hook de Visibilidad ---
function useReveal(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

export default function SpeedSection() {
    const { ref, visible } = useReveal(0.2);
    
    // Estado para manejar el radio de rotación responsivo de la bolita
    const [originY, setOriginY] = useState("127px");

    useEffect(() => {
        const handleResize = () => {
            // Si es mayor a 768px (breakpoint md de Tailwind), ajustamos el radio
            if (window.innerWidth >= 768) {
                setOriginY("170px");
            } else {
                setOriginY("127px");
            }
        };

        handleResize(); // Ejecución inicial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            ref={ref}
            className="w-full bg-[#F6F8FB] py-10 md:py-20 px-6 overflow-hidden"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Lado Izquierdo: Copy de Autoridad */}
                    <div
                        className="flex flex-col items-start gap-6 transition-all duration-1000"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(-40px)",
                            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    >
                        <span className='bg-gray-200/60 rounded-full px-4 py-1 font-sans font-semibold text-neutral-900'>Velocidad</span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tight text-neutral-900 leading-[0.9]">
                            La velocidad es <br />una ventaja competitiva.
                        </h2>

                        <p className="text-lg md:text-xl font-bold font-sans text-neutral-500 leading-[0.9] max-w-md">
                            En la web, cada milisegundo cuenta. Construyo sistemas que cargan al instante, asegurando que tus clientes nunca tengan que esperar por tu solución.
                        </p>
                    </div>

                    {/* Lado Derecho: Recurso Gráfico (Velocímetro) */}
                    <div
                        className="relative flex justify-center items-center transition-all duration-1000"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "scale(1)" : "scale(0.8)",
                            transitionDelay: "0.5s",
                            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* SVG Rotado para empezar a las 12:00 (-90deg) */}
                            <svg className="w-full h-full transform -rotate-90 drop-shadow-xl">
                                {/* Fondo del arco */}
                                <circle
                                    cx="50%" cy="50%" r="40%"
                                    stroke="#e5e7eb" strokeWidth="8%" fill="transparent"
                                />
                                {/* Arco de progreso (99.9% = casi vuelta completa) */}
                                <motion.circle
                                    cx="50%" cy="50%" r="40%"
                                    stroke="url(#speedGradient)"
                                    strokeWidth="8%" fill="transparent"
                                    strokeDasharray="1005" 
                                    initial={{ strokeDashoffset: 1005 }}
                                    animate={visible ? { strokeDashoffset: 10 } : { strokeDashoffset: 1005 }}
                                    transition={{ duration: 2.5, ease: "circOut", delay: 0.5 }}
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* La Bolita (Dot) siguiendo el arco */}
                            <motion.div
                                className="absolute top-0 left-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full border-[4px] border-white shadow-lg bg-indigo-600"
                                initial={{ rotate: 0, x: "-50%" }}
                                animate={visible ? { rotate: 355 } : { rotate: 0 }}
                                style={{
                                    originY: originY, // Valor dinámico
                                    top: "6%" // Ajustado para que descanse sobre el trazo
                                }}
                                transition={{ duration: 2.3, ease: "circOut", delay: 0.6 }}
                            />

                            {/* Indicador Central */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ delay: 1.8 }}
                                className="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <span className="text-4xl md:text-6xl font-bold tracking-tighter text-neutral-800">
                                    99.9
                                </span>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
                                    Score
                                </span>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}