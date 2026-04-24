'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function Introduction({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    // Lógica de Scroll para el desvanecimiento
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"] 
    });

    // La opacidad será 1 al inicio y llegará a 0 justo a la mitad (0.5) del scroll de la sección
    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.65], [1, 1, 0]);

    const colors = {
        from: '#d8dee9',
        via: '#e5e9f0',
        to: '#b4c1d5'
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-7 px-6 md:px-12 max-w-7xl mx-auto">
            <div className='flex flex-col items-start'>
                <span className=" bg-black/5 rounded-full px-3 py-1 text-neutral-900 text-xs mb-4 shadow-inner shadow-black/10">
                    Service
                </span>
                <h1 className="text-black text-2xl md:text-6xl tracking-tight max-w-xl font-bold leading-[0.9]">
                    Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
                </h1>
            </div>

            {/* Convertimos el div en motion.div y le pasamos la opacidad dinámica */}
            <motion.div 
                style={{ opacity }}
                className="w-full md:w-1/2 overflow-hidden"
            >
                <img 
                    src="/images/conversion/Message.png" 
                    alt="Mensaje de cliente potencial" 
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
}