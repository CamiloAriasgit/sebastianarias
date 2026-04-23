'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Search({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: '#f8f8ff',
        via: '#f8f8ff',
        to: '#1560db'
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-7 px-6 md:px-12 max-w-7xl mx-auto">
            <div className='flex flex-col items-start'>
                <span className=" bg-black/5 rounded-full px-3 py-1 text-neutral-900 text-sm mb-4 shadow-inner shadow-black/0">
                    Service
                </span>
                <h1 className="text-black text-2xl md:text-6xl tracking-tight max-w-xl font-bold leading-[0.9]">
                    Tu reputación offline es real. <span className='text-neutral-500'>Pero para el mundo digital, eres un fantasma. Cada búsqueda que no termina en tu web es una venta que acaba en tu competencia.</span>
                </h1>
            </div>

            <div className="">
                
            </div>

        </section>
    );
}