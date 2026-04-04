"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Activity, Zap, Target } from "lucide-react";

const features = [
    {
        title: "Control real sobre tu operación",
        description: "Centraliza información y procesos en un solo lugar, sin errores ni fricción.",
        icon: Activity,
        color: "text-blue-600",
    },
    {
        title: "Velocidad que retiene",
        description: "Experiencias rápidas que mantienen al usuario dentro, no esperando.",
        icon: Zap,
        color: "text-emerald-600",
    },
    {
        title: "Presencia que convierte",
        description: "Desde landings hasta plataformas, cada interfaz está diseñada para generar resultados.",
        icon: Target,
        color: "text-indigo-600",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ProcessSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-[#F6F8FB] px-6 pb-24 sm:pb-32">
            <div className="mx-auto max-w-5xl">

                {/* VERSION MÓVIL: Menú de Iconos + Contenido Activo */}
                <div className="flex flex-col items-center gap-8 sm:hidden">
                    {/* Selector de Iconos */}
                    <div className="relative flex justify-center gap-4 rounded-full bg-gray-200/60 p-2">
                        {features.map((feature, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className="relative z-10 flex h-14 w-14 items-center justify-center transition-colors duration-300"
                                >
                                    {/* Icono */}
                                    <feature.icon
                                        className={`h-7 w-7 transition-all duration-300 ${isActive ? `${feature.color} scale-110` : "text-neutral-500 opacity-50 grayscale"
                                            }`}
                                        strokeWidth={1.5}
                                    />

                                    {/* Contenedor Blanco Deslizable (Pill) */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabBackground"
                                            className="absolute inset-0 z-[-1] rounded-full bg-[#F6F8FB] shadow-xl"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30
                                            }}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Contenido Dinámico Móvil */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <h3 className="font-sans text-2xl font-bold tracking-tight text-neutral-900 leading-tight">
                                {features[activeIndex].title}
                            </h3>
                            <p className="mt-1 font-sans text-xl font-medium text-neutral-500 leading-tight">
                                {features[activeIndex].description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* VERSION DESKTOP: 3 Columnas Horizontales */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden sm:grid sm:grid-cols-3 sm:gap-12"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={childVariants}
                            className="flex flex-col items-center text-center gap-5"
                        >
                            <feature.icon className={`h-10 w-10 ${feature.color} opacity-90`} strokeWidth={1.5} />

                            <div className="flex flex-col gap-3">
                                <h3 className="font-sans text-xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                                    {feature.title}
                                </h3>
                                <p className="font-sans text-base font-medium leading-tight text-neutral-500">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}