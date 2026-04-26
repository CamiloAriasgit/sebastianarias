'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, } from "lucide-react";

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
        <section ref={ref} className="min-h-screen flex flex-col md:flex-row items-center md:justify-between gap-7 px-6 pt-20 md:pt-0 md:px-12 max-w-7xl mx-auto">
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
                /* Ajustamos el ancho en móvil (w-64) vs desktop (md:w-[400px]) */
                className="w-64 md:w-[400px] aspect-[9/16] relative rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-[6px] md:border-[8px] border-black bg-zinc-900 overflow-visible"
            >
                {/* Pantalla interna */}
                <div className="absolute inset-0 rounded-[2.2rem] md:rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-zinc-800 via-black to-[#3a5b94]/80">
                    {/*<div className="h-6 w-9 flex items-center justify-center bg-black/10 text-white w-full">
                        <h1>9:40</h1>
                        <h1></h1>
                    </div>*/}
                    <div className="absolute flex items-center justify-end top-2 left-1/2 -translate-x-1/2 w-16 md:w-20 h-3 md:h-4 bg-black rounded-full">
                        <div className="w-[4.5] h-[4.5] flex items-center justify-center bg-black rounded-full m-1 shadow-inner shadow-indigo-500/20">
                        </div>
                    </div>

                    <div className="p-4 md:p-6 pt-10 md:pt-12 flex flex-col gap-3">
                        <div className="h-3 md:h-4 w-3/4 bg-white/10 rounded-full"></div>
                        <div className="h-3 md:h-4 w-1/2 bg-white/10 rounded-full"></div>
                    </div>

                </div>


                {/* EL MENSAJE: Centrado absoluto sobre el mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 md:w-120 p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-black/5 z-10">
                    <div className="flex items-start gap-2 md:gap-3">
                        <img
                            src="images/conversion/HeadshotProfile.png"
                            className="w-10 h-10 rounded-full shadow ring-1 ring-black/10 mt-1"
                            alt="Headshot about asian young women happy"
                        />
                        <div className="flex flex-col gap-0.5 md:gap-1">
                            <p className="text-[7px] md:text-xs text-end text-gray-500 leading-tight">NOW</p>
                            <p className="text-[18px] md:text-xl font-bold text-neutral-900 leading-none">Sophia</p>
                            <p className="text-[14px] md:text-lg text-gray-500 leading-tight">
                                Impresionante la web. No necesito más info, pásame el link de pago para empezar hoy mismo.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}