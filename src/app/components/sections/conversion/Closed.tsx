"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Closed({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const colors = { 
        from: "#4160aa", 
        via: "#91a5b3",
        to: "#a78770" 
    };

    const isInView = useInView(ref, { amount: 0.2 });

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl space-y-6"
                >
                    <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
                        Cierra ventas
                    </span>
                    <h2 className="text-white text-2xl md:text-6xl tracking-tight max-w-xl font-medium leading-[1] pt-4">
                        Elimina la duda.<br />Acelera el cierre.
                    </h2>
                    <p className="text-neutral-200 text-lg font-light leading-[1.2]">
                        Convertimos el interés en conversación instantánea. Diseñamos puntos de contacto con mensajes predeterminados que eliminan la fricción del "primer saludo", permitiendo que tu cliente inicie la venta con un solo toque.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}