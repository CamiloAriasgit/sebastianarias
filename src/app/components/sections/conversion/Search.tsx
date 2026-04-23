'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { Search as SearchIcon, AlertCircle } from "lucide-react";

export default function Search({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: '#f8f8ff',
        via: '#f8f8ff',
        to: '#f8f8ff'
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-12 px-6 md:px-12 max-w-7xl mx-auto">
            <div className='flex flex-col items-start'>
                <span className="bg-black/5 rounded-full px-3 py-1 text-neutral-900 text-sm mb-4 shadow-inner">
                    Service
                </span>
                <h1 className="text-black text-2xl md:text-5xl tracking-tight max-w-xl font-bold leading-[0.9]">
                    Tu reputación offline es real. <span className='text-black/40'>Pero para el mundo digital, eres un fantasma. Cada búsqueda que no termina en tu web es una venta que acaba en tu competencia.</span>
                </h1>
            </div>

            {/* Contenedor con Imagen de Fondo Abstracta */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[500px] aspect-[4/5] relative rounded-[40px] overflow-hidden shadow-2xl border border-black/5"
            >
                {/* Imagen Abstracta de Fondo (El "Wallpaper") */}
                <img 
                    src="https://static.vecteezy.com/system/resources/previews/011/592/403/large_2x/abstract-blue-papercut-wavy-pattern-design-decorative-artwork-overlapping-style-with-minimal-template-background-illustrator-vector.jpg" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Abstract background"
                />

                {/* Overlay de la Interfaz (Aquí sucede el Glassmorphism) */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center gap-6 bg-black/10">
                    
                    {/* Input Glassmorphism */}
                    <div className="w-full h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-6 flex items-center gap-4 shadow-lg">
                        <SearchIcon size={20} className="text-white" />
                        <span className="text-sm font-medium text-white/80">Buscando tu negocio...</span>
                    </div>

                    {/* Card Central Glassmorphism */}
                    <div className="flex-1 rounded-[32px] bg-white/10 backdrop-blur-xl border border-white/20 p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                        <div className="w-20 h-20 rounded-full bg-red-500/20 backdrop-blur-md flex items-center justify-center text-red-400 border border-red-500/30 mb-6">
                            <AlertCircle size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight mb-2">0 coincidencias</h3>
                        <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">
                            No hay huella digital que respalde tu autoridad actual.
                        </p>
                    </div>

                    {/* Skeletons inferiores */}
                    <div className="space-y-3 px-2">
                        <div className="h-4 w-full bg-white/10 backdrop-blur-sm rounded-full border border-white/10" />
                        <div className="h-4 w-2/3 bg-white/10 backdrop-blur-sm rounded-full border border-white/10" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}