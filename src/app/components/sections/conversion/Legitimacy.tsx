"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Legitimacy({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const colors = { 
        from: "#162440", 
        via: "#3a5b94",
        to: "#6b82a8" 
    };

    const isInView = useInView(ref, { amount: 0.2 });

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex items-center justify-center py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                        Has construido algo sólido.  Ahora, hazlo oficial.<br />
                    </h2>
                    <p className="text-gray-200 text-lg font-light leading-[1.2]">
                        Tu negocio ha crecido gracias a tu ejecución y al boca a boca. Pero en el mundo digital, el éxito no se cuenta, se demuestra. Es momento de que tu presencia en internet refleje la calidad que ya ofreces en el mundo real.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}