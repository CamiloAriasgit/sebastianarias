'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion, Variants } from 'framer-motion';
import { Search as SearchIcon } from "lucide-react";

export default function Search({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: "#4160aa",
        via: "#91a5b3",
        to: "#a78770"
    };

    // Variantes para coordinar la aparición de los elementos
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
            
            {/* Contenedor del texto con animación en cascada */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='flex flex-col items-start'
            >
                <motion.span 
                    variants={itemVariants}
                    className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20"
                >
                    Autoridad
                </motion.span>
                
                <motion.h1 
                    variants={itemVariants}
                    className="text-white text-2xl md:text-5xl tracking-tight max-w-xl font-medium leading-[1]"
                >
                    Tu reputación offline es real. Pero para el mundo digital, eres un fantasma. <br />
                    <span className='text-white'>Cada búsqueda que no termina en tu web es una venta que acaba en tu competencia.</span>
                </motion.h1>
            </motion.div>

            {/* El Navegador / Mockup con entrada suave */}
            <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-black/90"
            >
                {/* Iconos de Navegador */}
                <div className='flex items-center -space-x-3 mb-2 px-2'>
                    <div className='rounded-full h-7 w-7 bg-neutral-800 border border-neutral-900 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://pngfile.net/files/preview/960x960/4381749752382exsishlqhhpbmcuqbanyle2fuazmrd1ckgbtx5pdseaomb46bazvbfwv6ccmmmotyostjuabc5mgnjtlg4jrvkj6etjfu9bxcrpm.png?type=free" alt="Edge" className="h-5 w-5" />
                    </div>
                    <div className='rounded-full h-7 w-7 bg-neutral-800 border border-neutral-900 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://pngimg.com/uploads/safari/safari_PNG25.png" alt="Safari" className="h-5 w-5" />
                    </div>
                    <div className='rounded-full h-7 w-7 bg-neutral-800 border border-neutral-900 overflow-hidden flex items-center justify-center shadow-sm'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" alt="Chrome" className="h-5 w-5" />
                    </div>
                </div>

                <div className="absolute inset-0 p-6 md:p-8 rounded-lg flex flex-col gap-5 md:gap-6 mt-11 m-2 bg-gradient-to-b from-[#3a5b94] to-[#6b82a8]">
                    
                    {/* Barra de búsqueda animada individualmente */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="w-full h-14 md:h-16 rounded-full bg-gradient-to-t from-white/10 via-white/2 to-white/0 backdrop-blur-md px-5 md:px-6 flex items-center gap-4"
                    >
                        <SearchIcon size={18} className="text-white" />
                        <span className="text-xs md:text-sm font-medium text-white/90">Buscando tu negocio...</span>
                    </motion.div>

                    {/* El Error 404 con efecto de escala orgánica */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
                        className="flex-1 rounded-xl bg-black/0 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center"
                    >
                        <h1 className="text-9xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white/50 to-transparent">404</h1>
                        <h3 className="text-xl md:text-2xl font-mono text-white tracking-tight mb-2">Not Found</h3>
                        <p className="text-white/60 text-[13px] md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px]">
                            No hay huella web que respalde tu autoridad actual.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}