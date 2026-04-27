'use client';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight } from "lucide-react";

const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20web.%20Me%20interesa%20implementar%20tu%20infraestructura%20de%20conversi%C3%B3n.%20%C2%BFPodemos%20agendar%20una%20auditor%C3%ADa%20inicial%3F";
export default function Hero({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: "#162440",
        via: "#3a5b94",
        to: "#6b82a8"
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
            <span className=" bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
                Conversion
            </span>
            <h1 className="text-white text-4xl md:text-7xl tracking-tight max-w-4xl font-medium leading-[0.9]">
                Tu negocio es real. Tu conversion web no.
            </h1>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-10"
            >
                <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white/90 px-5 py-2 text-lg text-black transition-all active:scale-95 shadow-inner shadow-white">
                    <span>Empezar</span>
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </div>
            </a>
        </section>
    );
}