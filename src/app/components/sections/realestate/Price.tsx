'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20web.%20Me%20interesa%20implementar%20tu%20infraestructura%20de%20conversi%C3%B3n.%20%C2%BFPodemos%20agendar%20una%20auditor%C3%ADa%20inicial%3F";
interface PricingProps {
    setBg: (colors: { from: string; via: string; to: string }) => void;
}

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4 });


    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 1, 
                ease: [0.21, 0.47, 0.32, 0.98] 
            }
        }
    };

    return (
        <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-3xl"
            >
                <motion.span 
                    variants={itemVariants}
                    className="text-white/60 text-xs uppercase tracking-[0.3em] mb-8 block"
                >
                    Inversión desde
                </motion.span>
                
                <motion.h2 
                    variants={itemVariants}
                    className="text-5xl md:text-[8rem] bg-gradient-to-b from-white via-white/70 to-white/0 bg-clip-text text-transparent font-medium tracking-tighter leading-none mb-4"
                >
                    $1.199<span className="text-2xl md:text-4xl text-white/20 ml-2">USD</span>
                </motion.h2>

                <motion.p 
                    variants={itemVariants}
                    className="text-neutral-300 text-lg md:text-2xl font-light tracking-tight mb-16 max-w-xl mx-auto"
                >
                    Tu infraestructura de conversión. <br className="hidden md:block" />
                    Sin cuotas mensuales. Propiedad absoluta.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col items-center gap-6"
                >
                    <a href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white/0 shadow-inner shadow-white/20 text-white px-12 py-5 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="flex items-center gap-3">
                            Empezar proyecto
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="text-white/50 text-[10px] uppercase tracking-[0.2em]"
                    >
                        Solo 1 cupo disponible para {new Date().toLocaleString('es-ES', { month: 'long' })}
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}