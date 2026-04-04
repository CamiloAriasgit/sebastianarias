"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
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
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05
        },
    },
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

export default function ProcessSection() {
    return (
        <section className="w-full bg-[#F6F8FB] px-6 py-10">
            <div className="mx-auto max-w-4xl">
                <div className="flex flex-col gap-20 lg:gap-32">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-col gap-4"
                        >
                            {/* Título e Icono integrados */}
                            <motion.div 
                                variants={childVariants}
                                className="flex items-start gap-4 sm:gap-6"
                            >
                                <feature.icon className={`mt-1.5 h-7 w-7 shrink-0 opacity-80 sm:h-9 sm:w-9 ${feature.color}`} strokeWidth={1.5} />
                                <h3 className="font-sans text-3xl font-semibold tracking-tight text-neutral-900 leading-[1.1] sm:text-5xl lg:text-6xl">
                                    {feature.title}
                                </h3>
                            </motion.div>
                            
                            {/* Descripción con indentación alineada al texto del título */}
                            <motion.div 
                                variants={childVariants}
                                className="pl-[44px] sm:pl-[60px]"
                            >
                                <p className="max-w-2xl font-sans text-base font-medium leading-tight text-neutral-500 sm:text-xl">
                                    {feature.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}