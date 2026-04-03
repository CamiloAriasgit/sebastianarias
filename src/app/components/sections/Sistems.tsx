"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, ReactNode, useState } from "react";
// Importamos solo lo necesario para mantener el código limpio
import Elements from '../../../../public/images/UiComponents.png';
import Panel from '../../../../public/images/PanelCliente.png';

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
                    obs.disconnect(); // Deja de observar una vez que es visible
                }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, visible };
}

// --- Componentes de Apoyo ---
function AppleCard({
    children,
    className = "",
    visible,
    delay
}: {
    children: ReactNode;
    className?: string;
    visible: boolean;
    delay: number;
}) {
    return (
        <div
            className={`group relative flex flex-col overflow-hidden rounded-4xl bg-white transition-all duration-1000 ${className}`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${delay}s`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
        >
            {children}
        </div>
    );
}

function Card1() {
    return (
        <div className="relative w-full max-w-4xl">
            <div className="relative mx-auto transition-transform duration-700 hover:scale-[1.02]">
                <img src={Elements.src} alt="Dashboard" className="h-auto w-full object-cover" />
            </div>
        </div>
    );
}

function Card2() {
    return (
        <div className="relative w-full max-w-4xl">
            <div className="relative mx-auto transition-transform duration-700 hover:scale-[1.02]">
                <img src={Panel.src} alt="Panel" className="h-auto w-full object-cover" />
            </div>
        </div>
    );
}

// --- Cards Individuales con su propio sensor ---

const ControlCard = () => {
    const { ref, visible } = useReveal(0.1);
    return (
        <div ref={ref} className="lg:col-span-2">
            <AppleCard visible={visible} delay={0.1} className="bg-[#F5F5F7]">
                <div className="flex flex-col pt-7 md:pt-14 lg:flex-row lg:items-center justify-between gap-2 max-w-full">
                    <div className="max-w-3xl px-7 md:px-14">
                        <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80 mb-6">
                            Control operativo
                        </h1>
                        <p className="text-sm lg:text-lg md:text-lg font-medium text-foreground/60">
                            Digitalización de procesos críticos mediante dashboards robustos y flujos libres de error.
                        </p>
                    </div>
                    <Card1 />
                </div>
            </AppleCard>
        </div>
    );
};

const FrictionCard = () => {
    const { ref, visible } = useReveal(0.2);
    return (
        <div ref={ref}>
            <AppleCard visible={visible} delay={0.1} className="bg-white overflow-hidden">
                <div className="flex items-center gap-3 mb-4 pt-12 px-10 md:px-14">
                    <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80">
                        Velocidad que retiene
                    </h1>
                </div>
                <p className="text-sm lg:text-lg md:text-lg font-medium text-foreground/60 px-10 md:px-14">
                    Interfaces de carga instantánea diseñadas para eliminar la fricción y evitar el abandono.
                </p>
                <div className="relative h-48 w-full flex justify-center pt-15">
                    <div className="relative w-64 h-64">
                        <svg className="w-full h-full transform -rotate-[190deg]">
                            <circle cx="128" cy="128" r="110" stroke="#f3f4f6" strokeWidth="28" fill="transparent" />
                            <motion.circle
                                cx="128" cy="128" r="110"
                                stroke="url(#gradient)"
                                strokeWidth="28" fill="transparent"
                                strokeDasharray="690"
                                initial={{ strokeDashoffset: 690 }}
                                animate={visible ? { strokeDashoffset: 400 } : { strokeDashoffset: 690 }}
                                transition={{ duration: 2, ease: "circOut", delay: 2 }}
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#86efac" />
                                    <stop offset="100%" stopColor="#22c55e" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <motion.div
                            className="absolute top-0 left-1/2 w-8 h-8 bg-emerald-600 rounded-full border-4 border-white shadow-sm"
                            initial={{ rotate: -120, x: "-50%" }}
                            animate={visible ? { rotate: 30 } : { rotate: -120 }}
                            style={{ originY: "128px" }}
                            transition={{ duration: 1.5, ease: "circOut", delay: 3 }}
                        />
                    </div>
                </div>
            </AppleCard>
        </div>
    );
};

const GrowthCard = () => {
    const { ref, visible } = useReveal(0.2);
    return (
        <div ref={ref}>
            <AppleCard visible={visible} delay={0.1} className="bg-white">
                <div className="flex items-center gap-3 mb-6 pt-7 md:pt-14 px-10 md:px-14">
                    <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold leading-[1.05] tracking-tight text-foreground/80">
                        Landings de alto impacto
                    </h1>
                </div>
                <p className="text-sm lg:text-lg md:text-lg font-medium text-foreground/60 px-10 md:px-14 mb-10">
                    Sitios de alta fidelidad que proyectan autoridad y transforman visitas en clientes.
                </p>
                <Card2 />
            </AppleCard>
        </div>
    );
};

// --- Componente Exportado ---
export default function Sistem() {
    const { ref: sectionRef, visible: sectionVisible } = useReveal(0.05);

    return (
        <section ref={sectionRef} id="sistema" className="w-full bg-gray-200/50 py-5 font-sans">
            <div className="mx-auto max-w-[1200px] px-4 flex flex-col items-center">

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <ControlCard />
                    <FrictionCard />
                    <GrowthCard />
                </div>

            </div>
        </section>
    );
}