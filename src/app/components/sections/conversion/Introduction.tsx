'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight } from "lucide-react";

export default function Introduction({ setBg }: { setBg: (colors: any) => void }) {
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
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-7 px-6 md:px-12 max-w-7xl mx-auto">
            <div className='flex flex-col items-start'>
                <span className=" bg-black/5 rounded-full px-3 py-1 text-neutral-900 text-sm mb-4 shadow-inner shadow-black/0">
                    Service
                </span>
                <h1 className="text-black text-2xl md:text-6xl tracking-tight max-w-xl font-bold leading-[0.9]">
                    Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
                </h1>
            </div>

            <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                    src="/images/conversion/Message.png" 
                    alt="Mensaje de cliente potencial" 
                    className="w-full h-full object-cover"
                />
            </div>

        </section>
    );
}