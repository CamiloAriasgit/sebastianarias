'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Search as SearchIcon, AlertCircle } from "lucide-react";

export default function Search({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: "#4160aa",
        via: "#91a5b3",
        to: "#a78770"
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-screen flex flex-col md:flex-row items-center md:justify-between gap-12 px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-0">
            <div className='flex flex-col items-start'>
                <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
                    Autoridad
                </span>
                <h1 className="text-white text-2xl md:text-5xl tracking-tight max-w-xl font-medium leading-[1]">
                    Tu reputación offline es real. Pero para el mundo digital, eres un fantasma. <span className='text-white'>Cada búsqueda que no termina en tu web es una venta que acaba en tu competencia.</span>
                </h1>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                // Eliminamos el aspect fijo en móvil para que no se aplaste el contenido
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-black/90"
            >
                <div className='flex items-center -space-x-4'>
                    <div className='rounded-full h-7 w-7 bg-white border-2 border-neutral-200'></div>
                    <div className='rounded-full h-7 w-7 bg-white border-2 border-neutral-200'></div>
                    <div className='rounded-full h-7 w-7 bg-white border-2 border-neutral-200'></div>

                </div>

                <div className="absolute inset-0 p-6 md:p-8 rounded-lg flex flex-col gap-5 md:gap-6 mt-11 m-2 bg-gradient-to-b from-[#3a5b94] to-[#6b82a8]">


                    <div className="w-full h-14 md:h-16 rounded-xl bg-white/20 backdrop-blur-md px-5 md:px-6 flex items-center gap-4">
                        <SearchIcon size={18} className="text-white" />
                        <span className="text-xs md:text-sm font-medium text-black/80">Buscando tu negocio...</span>
                    </div>

                    <div className="flex-1 rounded-xl bg-black/0 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/1">404</h1>
                        <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">0 coincidencias</h3>
                        <p className="text-white/60 text-[13px] md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px]">
                            No hay huella digital que respalde tu autoridad actual.
                        </p>
                    </div>

                </div>
            </motion.div>

            {/* Contenedor Optimizado 
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                // Eliminamos el aspect fijo en móvil para que no se aplaste el contenido
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-black/5"
            >
                <img 
                    src="https://wallpaperaccess.com/full/1129093.jpg" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Abstract background"
                />

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-5 md:gap-6 bg-black/10">
                    
                    <div className="w-full h-14 md:h-16 rounded-xl bg-white/5 backdrop-blur-md px-5 md:px-6 flex items-center gap-4 shadow-lg">
                        <SearchIcon size={18} className="text-white" />
                        <span className="text-xs md:text-sm font-medium text-white/80">Buscando tu negocio...</span>
                    </div>

                    <div className="flex-1 rounded-xl bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 backdrop-blur-md flex items-center justify-center text-red-400 mb-4 md:mb-6">
                            <AlertCircle size={32} className="md:w-10 md:h-10" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">0 coincidencias</h3>
                        <p className="text-white/60 text-[13px] md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px]">
                            No hay huella digital que respalde tu autoridad actual.
                        </p>
                    </div>

                    <div className="space-y-3 px-2 pb-2">
                        <div className="h-3 md:h-4 w-full bg-white/5 backdrop-blur-md rounded-full" />
                        <div className="h-3 md:h-4 w-2/3 bg-white/5 backdrop-blur-md rounded-full" />
                    </div>
                </div>
            </motion.div>*/}
        </section>
    );
}