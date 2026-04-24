'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Search as SearchIcon, AlertCircle } from "lucide-react";

export default function Search({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: '#b4c1d5',
        via: '#f8f8ff',
        to: '#f8f8ff'
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-12 px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-0">
            <div className='flex flex-col items-start'>
                <span className="bg-black/5 rounded-full px-3 py-1 text-neutral-900 text-xs mb-4 shadow-inner shadow-black/10">
                    Autoridad
                </span>
                <h1 className="text-black text-2xl md:text-5xl tracking-tight max-w-xl font-bold leading-[0.9] md:leading-[0.9]">
                    Tu reputación offline es real. Pero para el mundo digital, eres un fantasma. <span className='text-neutral-500'>Cada búsqueda que no termina en tu web es una venta que acaba en tu competencia.</span>
                </h1>
            </div>

            {/* Contenedor Optimizado */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                // Eliminamos el aspect fijo en móvil para que no se aplaste el contenido
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl border border-black/5"
            >
                {/* Imagen Abstracta de Fondo */}
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/011/592/403/large_2x/abstract-blue-papercut-wavy-pattern-design-decorative-artwork-overlapping-style-with-minimal-template-background-illustrator-vector.jpg" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Abstract background"
                />

                {/* Overlay de la Interfaz con Padding Adaptativo */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-5 md:gap-6 bg-black/10">
                    
                    {/* Input Glassmorphism - Un poco más bajo en móvil */}
                    <div className="w-full h-14 md:h-16 rounded-xl bg-white/5 backdrop-blur-md px-5 md:px-6 flex items-center gap-4 shadow-lg">
                        <SearchIcon size={18} className="text-white" />
                        <span className="text-xs md:text-sm font-medium text-white/80">Buscando tu negocio...</span>
                    </div>

                    {/* Card Central Glassmorphism - Ajuste de padding y escala */}
                    <div className="flex-1 rounded-xl bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500/20 backdrop-blur-md flex items-center justify-center text-red-400 mb-4 md:mb-6">
                            <AlertCircle size={32} className="md:w-10 md:h-10" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">0 coincidencias</h3>
                        <p className="text-white/60 text-[13px] md:text-sm leading-relaxed max-w-[180px] md:max-w-[200px]">
                            No hay huella digital que respalde tu autoridad actual.
                        </p>
                    </div>

                    {/* Skeletons inferiores - Más delgados en móvil */}
                    <div className="space-y-3 px-2 pb-2">
                        <div className="h-3 md:h-4 w-full bg-white/5 backdrop-blur-md rounded-full" />
                        <div className="h-3 md:h-4 w-2/3 bg-white/5 backdrop-blur-md rounded-full" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}