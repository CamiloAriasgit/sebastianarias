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
        to: '#3d537b'
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
                <h1 className="text-black text-2xl md:text-5xl tracking-tight max-w-xl font-bold leading-[1.1]">
                    Tu reputación offline es real. <span className='text-black'>Pero para el mundo digital, eres un fantasma. Cada búsqueda que no termina en tu web es una venta que acaba en tu competencia.</span>
                </h1>
            </div>

            {/* Elemento de Interfaz de Búsqueda Fracasada */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-[450px] aspect-square relative flex items-center justify-center"
            >
                {/* Contenedor Principal (Vidrio) */}
                <div className="w-full p-8 rounded-[32px] bg-black/10 backdrop-blur-2xl shadow-inner shadow-[#3d537b]/0 flex flex-col gap-6">
                    
                    {/* Input Simulado */}
                    <div className="w-full h-14 rounded-xl bg-white/50 px-5 flex items-center gap-3 text-neutral-400">
                        <SearchIcon size={20} className="text-neutral-400" />
                        <span className="text-sm font-medium">Buscando..</span>
                    </div>

                    {/* Estado de "No Encontrado" */}
                    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                            <AlertCircle size={32} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-neutral-800 tracking-tight">0 resultados encontrados</h3>
                            <p className="text-sm text-neutral-500 max-w-[220px] mx-auto leading-relaxed">
                                No se encontraron registros digitales que conecten con tu negocio.
                            </p>
                        </div>
                    </div>

                    {/* Lista de sugerencias vacías (skeleton) */}
                    <div className="space-y-3 opacity-40">
                        <div className="h-4 w-3/4 bg-neutral-200 rounded-full animate-pulse" />
                        <div className="h-4 w-1/2 bg-neutral-200 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Decoración: Orbe de luz suave detrás del vidrio */}
                <div className="absolute -z-10 w-64 h-64 bg-blue-400/20 blur-[100px] rounded-full" />
            </motion.div>

        </section>
    );
}