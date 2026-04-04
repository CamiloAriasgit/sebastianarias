"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Activity, Zap, Target } from "lucide-react";

const features = [
    {
        title: "Control real sobre tu operación",
        description: "Centraliza información y procesos en un solo lugar, sin errores ni fricción.",
        icon: Activity,
        color: "text-blue-500",
    },
    {
        title: "Velocidad que retiene",
        description: "Experiencias rápidas que mantienen al usuario dentro, no esperando.",
        icon: Zap,
        color: "text-emerald-500",
    },
    {
        title: "Presencia que convierte",
        description: "Desde landings hasta plataformas, cada interfaz está diseñada para generar resultados.",
        icon: Target,
        color: "text-indigo-500",
    },
];

// Tipamos las variantes para evitar errores de TS
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function ProcessSection() {
    return (
        <section className="relative w-full bg-[#F6F8FB] px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative flex flex-col gap-20 sm:gap-32"
                >
                    {/* Línea Conectora Mejorada: Ajustada para móvil y desktop */}
                    <div className="absolute left-6 top-0 h-full w-[1.5px] bg-neutral-200 sm:left-1/2 sm:-translate-x-1/2" />

                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative flex w-full items-start gap-10 sm:items-center ${index % 2 !== 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                                }`}
                        >
                            {/* Punto / Icono con Ring para "cortar" la línea visualmente */}
                            <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F6F8FB] shadow-sm ring-[12px] ring-[#F6F8FB] sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                            </div>

                            {/* Contenido con ajuste de texto para móvil */}
                            <div
                                className={`flex flex-col gap-3 pt-1 sm:w-[42%] sm:pt-0 ${index % 2 !== 0 ? "sm:text-left" : "sm:text-right"
                                    }`}
                            >
                                <h3 className="font-sans text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                                    {feature.title}
                                </h3>
                                <p className="font-sans text-base leading-relaxed text-neutral-500 sm:text-lg">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Espaciador Desktop */}
                            <div className="hidden w-[42%] sm:block" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}