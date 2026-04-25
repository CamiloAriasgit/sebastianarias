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
        from: "#462d55",
        via: "#b18aa7",
        to: "#dca587"
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-7 px-6 md:px-12 max-w-7xl mx-auto">
            <div className='flex flex-col items-start'>
                <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
                    Service
                </span>
                <h1 className="text-white text-2xl md:text-6xl tracking-tight max-w-xl font-medium leading-[1]">
                    Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
                </h1>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-black"
            >

                <div className="absolute inset-0 pl-20 md:pl-45 flex flex-col gap-5 md:gap-6 bg-black/10">


                    <div className="flex-1 rounded-4xl bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-2xl">


                    </div>
                    <div className='absolute top-1/2 right-1/2 -translate-y-1/2 w-60 h-40 bg-white rounded-xl'></div>


                </div>
            </motion.div>
        </section>
    );
}