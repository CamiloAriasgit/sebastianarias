'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

interface PricingProps {
    setBg: (colors: { from: string; via: string; to: string }) => void;
}

export default function Pricing({ setBg }: PricingProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4 });

    const colors = {
        from: "#000000",
        via: "#0a0a0a",
        to: "#121212"
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
            >
                <span className="text-white/40 text-xs uppercase tracking-[0.3em] mb-8 block">
                    Inversión desde
                </span>
                
                <h2 className="text-5xl md:text-[8rem] bg-gradient-to-b from-white via-white/70 to-white/0 bg-clip-text text-transparent font-medium tracking-tighter leading-none mb-4">
                    $1.199<span className="text-2xl md:text-4xl text-white/20 ml-2">USD</span>
                </h2>

                <p className="text-neutral-500 text-lg md:text-2xl font-light tracking-tight mb-16 max-w-xl mx-auto">
                    Tu infraestructura de conversión. <br className="hidden md:block" />
                    Sin cuotas mensuales. Propiedad absoluta.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative bg-white/0 shadow-inner shadow-white/20 text-white px-12 py-5 rounded-full font-medium text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
                    >
                        <span className="flex items-center gap-3">
                            Empezar proyecto
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                    <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
                        Solo 1 cupo disponible para {new Date().toLocaleString('es-ES', { month: 'long' })}
                    </p>
                </div>
            </motion.div>
        </section>
    );
}