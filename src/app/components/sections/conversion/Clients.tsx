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
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-12 px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-0">
            <div className='flex flex-col items-start'>
                <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs  shadow-inner shadow-white/20">
                    Cierra ventas
                </span>
                <h1 className="text-2xl md:text-6xl font-medium tracking-tight text-white py-4 leading-[1] max-w-xl">
                    Elimina la duda.<br />
                    Acelera el cierre.
                </h1>
                <p className="text-neutral-200 text-lg md:text-4xl tracking-tight max-w-xl font-light leading-[1.2] md:leading-[0.9]">
                    Convertimos el interés en conversación instantánea. Diseñamos puntos de contacto con mensajes predeterminados que eliminan la fricción del "primer saludo", permitiendo que tu cliente inicie la venta con un solo toque.
                </p>
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
                {/* Imagen Abstracta de Fondo 
                <img
                    src="https://static.vecteezy.com/system/resources/previews/011/592/403/large_2x/abstract-blue-papercut-wavy-pattern-design-decorative-artwork-overlapping-style-with-minimal-template-background-illustrator-vector.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Abstract background"
                />*/}

                {/* Overlay de la Interfaz con Padding Adaptativo */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col gap-5 md:gap-6 bg-black/10">


                    {/* Card Central Glassmorphism - Ajuste de padding y escala */}
                    <div className="flex-1 rounded-xl bg-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-2xl">
                        
                        <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-2">Recurso Gráfico Faltante</h3>
                        
                    </div>

                </div>
            </motion.div>
        </section>
    );
}