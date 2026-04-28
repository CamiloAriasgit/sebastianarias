"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

export default function Legitimacy({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const colors = {
        from: "#162440",
        via: "#3a5b94",
        to: "#6b82a8"
    };

    // Ajustamos a 0.4 para que la animación dispare justo cuando el usuario se centra
    const isInView = useInView(ref, { amount: 0.4 });

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    // Variantes para el efecto de acoplamiento vertical (Stagger)
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25, // Un poco más lento para enfatizar la lectura
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.9, 
                ease: [0.21, 0.47, 0.32, 0.98] as const 
            }
        }
    };

    return (
        <section ref={ref} className="min-h-[100svh] flex items-center justify-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
                {/* Contenedor principal con variants */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-4xl space-y-8"
                >
                    <motion.span 
                        variants={itemVariants}
                        className="inline-block bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20"
                    >
                        Comienza ahora
                    </motion.span>

                    <motion.h2 
                        variants={itemVariants}
                        className="text-2xl md:text-6xl font-medium tracking-tight text-white pt-4 leading-[1.1]"
                    >
                        Has construido algo sólido. <br />
                        Ahora, hazlo oficial.
                    </motion.h2>

                    <motion.p 
                        variants={itemVariants}
                        className="text-gray-200/80 text-lg md:text-2xl font-light leading-[1.4] max-w-3xl mx-auto"
                    >
                        Tu negocio ha crecido gracias a tu ejecución y a tu presencia en redes sociales. Pero en el mundo digital, la autoridad no se mide en seguidores, se demuestra con infraestructura. Es momento de que tu presencia en la web refleje la verdadera escala de lo que ya ofreces en el mundo real.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}