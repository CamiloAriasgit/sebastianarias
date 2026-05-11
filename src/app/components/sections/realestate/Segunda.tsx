'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion, useScroll, useTransform, } from 'framer-motion';
import { Variants } from 'framer-motion';
import Image from 'next/image'; // Importación necesaria

export default function Introduction() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.65], [1, 1, 0]);



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
                className="w-60 md:w-[350px] aspect-[8/16] relative rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-[6px] md:border-[8px] border-black bg-zinc-900 overflow-visible"
            >
                <div className="absolute inset-0 rounded-[2.2rem] md:rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-neutral-950 via-black to-neutral-950 shadow-inner shadow-white/30">
                    <div className="absolute flex items-center justify-end top-2 left-1/2 -translate-x-1/2 w-16 md:w-20 h-3 md:h-4 bg-black rounded-full">
                        <div className="w-[4.5] h-[4.5] flex items-center justify-center bg-black rounded-full m-1 shadow-inner shadow-indigo-500/20">
                        </div>
                    </div>

                    <div className="p-4 md:p-6 pt-10 md:pt-12 flex flex-col gap-3">
                        <div className="h-3 md:h-4 w-3/4 bg-white/10 rounded-full"></div>
                        <div className="h-3 md:h-4 w-1/2 bg-white/10 rounded-full"></div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -50, x: "-50%", scale: 0.9, filter: "blur(4px)" }}
                    animate={isInView
                        ? { opacity: 1, y: "-50%", x: "-50%", scale: 1, filter: "blur(0px)" }
                        : { opacity: 0, y: -50, x: "-50%", scale: 0.9, filter: "blur(4px)" }
                    }
                    transition={{
                        delay: 1.2,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                    className="absolute top-1/2 left-1/2 w-80 md:w-120 p-3 md:p-4 bg-neutral-900 backdrop-blur-md rounded-xl md:rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-black/5 z-10"
                >
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                            <div className="flex items-center gap-1">
                                <Image
                                    src="/images/conversion/WhatsAppIcon.webp"
                                    alt="WhatsApp Icon"
                                    width={12}
                                    height={12}
                                    className="h-3 w-3"
                                />
                                <h1 className="text-[8px] text-neutral-200">WhatsApp</h1>
                                <span className="h-[2.5px] w-[2.5px] rounded-full bg-neutral-200"></span>
                                <h1 className="text-[8px] text-neutral-200">ahora</h1>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/images/conversion/HeadshotWp.png"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full shadow ring-1 ring-black/10 object-cover"
                                    alt="Sophia Profile"
                                />
                                <div className="flex flex-col gap-0.5 md:gap-1">
                                    <p className="text-[18px] md:text-xl font-medium text-neutral-100 leading-none">Javier</p>
                                    <p className="text-[15px] md:text-lg text-neutral-400 leading-tight">
                                        Hola, vi el proyecto en la web. Me interesa la unidad de 3 habitaciones. ¿Podemos agendar una visita mañana?
                                    </p>
                                </div>
                            </div>
                        </div>
                </motion.div>
            </motion.div>
        </section>
    );
}