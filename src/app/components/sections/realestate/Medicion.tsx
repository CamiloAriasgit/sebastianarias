'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion, useScroll, useTransform, } from 'framer-motion';
import { Variants } from 'framer-motion';
import Image from 'next/image'; // Importación necesaria

export default function Introduction() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Controla el tiempo entre cada barra
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
                ease: [0.21, 0.47, 0.32, 0.98]
            }
        }
    };

    // Nueva variante específica para el crecimiento de las barras
    const barVariants = (targetWidth: string): Variants => ({
        hidden: { width: "0%" },
        visible: { 
            width: targetWidth,
            transition: {
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1] // Efecto sutil de rebote (backOut)
            }
        }
    });



    return (
        <section ref={ref} className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-7 px-6 pt-10 md:pt-0 md:px-12 max-w-7xl mx-auto">

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='flex flex-col items-start'
            >

                <motion.h1
                    variants={itemVariants}
                    className="text-neutral-400 text-2xl md:text-6xl tracking-tight max-w-xl font-medium leading-[1.1]"
                >
                    Recibe a tus inversionistas directamente en <span className='text-white'>WhatsApp</span>.
                </motion.h1>
            </motion.div>


            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-neutral-900"
            >
                <div className='flex items-center -space-x-3 mb-2 px-2'>
                    <div className='rounded-full h-7 w-7 bg-neutral-800 border border-neutral-700 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://iconape.com/wp-content/png_logo_vector/google-tag-manager.png" alt="GTM" className="h-5 w-5" />
                    </div>
                    <div className='rounded-full h-7 w-7 bg-neutral-800 border border-neutral-700 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://web-odyssey.com/wp-content/uploads/2024/09/google-analytics-icon.png" alt="GA4" className="h-5 w-5" />
                    </div>
                </div>

                <motion.div
                    variants={containerVariants} // Usamos el mismo stagger para las barras
                    className="absolute inset-0 p-6 md:p-8 rounded-lg flex flex-col gap-5 md:gap-6 mt-11 m-2 bg-neutral-900"
                >
                    <div>
                        <h1 className='text-neutral-200'>page_view</h1>
                        <div className='w-full h-3 bg-neutral-700 rounded-full overflow-hidden'>
                            <motion.div variants={barVariants("50%")} className='h-full bg-blue-500 rounded-full'></motion.div>
                        </div>
                        <h1 className='pt-5 text-neutral-200'>user_engagement</h1>
                        <div className='w-full h-3 bg-neutral-700 rounded-full overflow-hidden'>
                            <motion.div variants={barVariants("35%")} className='h-full bg-blue-500 rounded-full'></motion.div>
                        </div>
                        <h1 className='pt-5 text-neutral-200'>scroll</h1>
                        <div className='w-full h-3 bg-neutral-700 rounded-full overflow-hidden'>
                            <motion.div variants={barVariants("45%")} className='h-full bg-blue-500 rounded-full'></motion.div>
                        </div>
                        <h1 className='pt-5 text-neutral-200'>clic_whatsapp</h1>
                        <div className='w-full h-3 bg-neutral-700 rounded-full overflow-hidden'>
                            <motion.div variants={barVariants("43%")} className='h-full bg-blue-500 rounded-full'></motion.div>
                        </div>
                        <h1 className='pt-5 text-neutral-200/70'>sesion_start</h1>
                        <div className='w-full h-3 bg-neutral-700/70 rounded-full overflow-hidden'>
                            <motion.div variants={barVariants("30%")} className='h-full bg-blue-500/70 rounded-full'></motion.div>
                        </div>
                        <h1 className='pt-5 text-neutral-200/50'>clic_store</h1>
                        <div className='w-full h-3 bg-neutral-700/50 rounded-full overflow-hidden'>
                            <motion.div variants={barVariants("17%")} className='h-full bg-blue-500/50 rounded-full'></motion.div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}