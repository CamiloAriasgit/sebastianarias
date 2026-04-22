'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight, Rocket } from "lucide-react";

const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

export default function Hero({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: '#f8f8ff',
        via: '#f8f8ff', // Azul medianoche muy sutil
        to: '#f8f8ff'
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col items-center justify-center text-center px-4">
            <span className=" bg-black/5 rounded-full px-2 py-1 text-neutral-900 text-sm mb-4 shadow-inner shadow-black/10">
                Conversion
            </span>
            <h1 className="text-black text-4xl md:text-7xl tracking-tight max-w-4xl font-bold leading-[0.9]">
                Tu negocio es real. Tu infraestructura digital no.
            </h1>
            <p className="text-neutral-500 mt-6 max-w-xl text-sm md:text-lg leading-[1.2]">
                Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
            </p>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-10"
            >
                <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-black px-6 py-3 text-lg text-white transition-all active:scale-95">
                    <span>Empezar</span>
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </div>
            </a>
        </section>
    );
}