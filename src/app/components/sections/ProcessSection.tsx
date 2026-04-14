"use client";

import React, { useState, useRef } from "react";
import { motion, Variants, AnimatePresence, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        title: "Entendemos tu negocio",
        description: "No empezamos a programar sin entender tus objetivos. Analizamos tu modelo de negocio, identificamos cuellos de botella y definimos los KPI que determinarán el éxito del proyecto.",
        icon: Search,
    },
    {
        title: "Definimos la estructura",
        description: "Creamos el mapa de arquitectura y los flujos de usuario. Aquí es donde la lógica se encuentra con la estrategia para asegurar que el sistema sea escalable y fácil de usar.",
        icon: PenTool,
    },
    {
        title: "Diseñamos y desarrollamos",
        description: "Transformamos la estrategia en interfaces de alta fidelidad y código limpio. Utilizamos un stack moderno para garantizar que cada píxel y cada línea de comando funcionen en armonía.",
        icon: Code2,
    },
    {
        title: "Lanzamos y optimizamos",
        description: "El proyecto no termina en el despliegue. Monitoreamos el rendimiento en tiempo real y realizamos ajustes basados en datos para asegurar que la solución siga creciendo contigo.",
        icon: Rocket,
    },
];

export default function ProcessSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        margin: "-50% 0px -50% 0px",
        amount: 0
    });

    return (
        <section ref={sectionRef} className="relative w-full bg-[#F6F8FB] px-4 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl">

                <div className="mb-16 sm:mb-24 text-center sm:text-left">
                    <span className='bg-gray-200/60 rounded-full px-4 py-1 font-sans font-semibold text-neutral-900'>Proceso</span>
                    <h2 className="font-sans text-3xl font-bold tracking-tight text-neutral-900 sm:text-6xl leading-[0.9] pt-5">
                        Un proceso claro, <br className="hidden sm:block" />
                        <span className="text-neutral-900 font-bold">sin complicaciones</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-6 sm:hidden">

                    <div className="overflow-hidden rounded-3xl bg-gray-200/60 p-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
                                        <span className="font-mono text-xl font-bold text-neutral-900">0{activeIndex + 1}</span>
                                    </div>
                                    <h3 className="font-sans text-xl font-bold tracking-tight text-neutral-900 leading-tight">
                                        {steps[activeIndex].title}
                                    </h3>
                                </div>

                                <div className="h-px w-full bg-gray-200" />

                                <p className="font-sans text-xl font-bold leading-[1] text-neutral-600">
                                    {steps[activeIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <AnimatePresence>
                        {isInView && (
                            <motion.div
                                initial={{ y: 100, x: "-50%", opacity: 0 }}
                                animate={{ y: 0, x: "-50%", opacity: 1 }}
                                exit={{ y: 100, x: "-50%", opacity: 0 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="fixed bottom-8 left-1/2 z-50 w-[90%] rounded-full bg-gray-200 backdrop-blur-lg p-2"
                            >
                                <div className="flex justify-between items-center gap-1">
                                    {steps.map((step, index) => {
                                        const isActive = activeIndex === index;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() => setActiveIndex(index)}
                                                className="relative flex h-14 flex-1 items-center justify-center active:scale-95" // Añadida respuesta táctil
                                            >
                                                <step.icon
                                                    className={`relative z-10 h-6 w-6 transition-all duration-300 ${isActive ? "text-neutral-900 scale-110" : "text-neutral-400 opacity-40"
                                                        }`}
                                                />
                                                {isActive && (
                                                    <motion.div
                                                        layoutId="activeProcessTab"
                                                        className="absolute inset-0 z-0 rounded-full bg-[#F6F8FB]"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="hidden sm:grid sm:grid-cols-4 sm:gap-12 lg:gap-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="font-mono text-xs font-bold text-neutral-400 border-b border-neutral-200 pb-1">0{index + 1}</span>
                                <step.icon className="h-5 w-5 text-neutral-900" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-base font-medium leading-relaxed text-neutral-500">
                                    {step.description}

                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}