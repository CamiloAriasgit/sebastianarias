'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion, Variants } from 'framer-motion';
import { Search as SearchIcon } from "lucide-react";

export default function Metrics({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: "#4160aa",
        via: "#91a5b3",
        to: "#a78770"
    };

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
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98] as const
            }
        }
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-screen flex flex-col md:flex-row items-center md:justify-between gap-12 px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-0">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='flex flex-col items-start'
            >
                <motion.span variants={itemVariants} className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs shadow-inner shadow-white/20">
                    Mide tu impacto
                </motion.span>
                <motion.h1 variants={itemVariants} className="text-2xl md:text-6xl font-medium tracking-tight text-white py-4 leading-[1] max-w-xl">
                    Si no lo mides, no existe.<br />
                </motion.h1>
                <motion.p variants={itemVariants} className="text-neutral-50 text-lg md:text-4xl tracking-tight max-w-xl font-light leading-[1.2] md:leading-[0.9]">
                    Integramos una infraestructura de datos mediante Google Tag Manager y GA4 para trackear cada clic, cada scroll y cada intención de compra.
                </motion.p>
            </motion.div>

            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-gray-200"
            >
                {/* Iconos de herramientas */}
                <div className='flex items-center -space-x-3 mb-2 px-2'>
                    <div className='rounded-full h-7 w-7 bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://iconape.com/wp-content/png_logo_vector/google-tag-manager.png" alt="Edge" className="h-5 w-5" />
                    </div>
                    <div className='rounded-full h-7 w-7 bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://web-odyssey.com/wp-content/uploads/2024/09/google-analytics-icon.png" alt="Safari" className="h-5 w-5" />
                    </div>
                </div>

                <div className="absolute inset-0 p-6 md:p-8 rounded-lg flex flex-col gap-5 md:gap-6 mt-11 m-2 bg-gradient-to-b from-gray-200 to-blue-200">
                    <div>
                        <h1>page_view</h1>
                        <div className='w-full h-3 bg-gray-100 rounded-full'>
                            <div className='w-50 h-full bg-blue-500 rounded-full'></div>
                        </div>
                        <h1 className='pt-5'>user_engagement</h1>
                        <div className='w-full h-3 bg-gray-100 rounded-full'>
                            <div className='w-35 h-full bg-blue-500 rounded-full'></div>
                        </div>
                        <h1 className='pt-5'>scroll</h1>
                        <div className='w-full h-3 bg-gray-100 rounded-full'>
                            <div className='w-45 h-full bg-blue-500 rounded-full'></div>
                        </div>
                        <h1 className='pt-5'>clic_whatsapp</h1>
                        <div className='w-full h-3 bg-gray-100 rounded-full'>
                            <div className='w-43 h-full bg-blue-500 rounded-full'></div>
                        </div>
                        <h1 className='pt-5 text-black/70'>user_engagement</h1>
                        <div className='w-full h-3 bg-gray-100/70 rounded-full'>
                            <div className='w-30 h-full bg-blue-500/70 rounded-full'></div>
                        </div>
                        <h1 className='pt-5 text-black/50'>scroll</h1>
                        <div className='w-full h-3 bg-gray-100/50 rounded-full'>
                            <div className='w-27 h-full bg-blue-500/50 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}