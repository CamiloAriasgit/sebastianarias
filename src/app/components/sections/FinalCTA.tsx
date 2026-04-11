"use client";

import React from "react";
import { motion } from "framer-motion"; // Volvemos a la importación segura
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
    return (
        /* Cambiamos a Neutral 950: un tono más profundo y elegante que el anterior */
        <section className="relative w-full bg-neutral-950 px-6 py-32 sm:py-48 overflow-hidden">

            {/* Eliminamos la rejilla. Solo dejamos un resplandor central 
          extremadamente sutil para dar profundidad al fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-transparent to-transparent" />

            <div className="relative mx-auto max-w-4xl text-center">

                {/* H2 - Tipografía limpia sobre fondo sólido */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-sans text-5xl font-bold tracking-tight text-white sm:text-7xl leading-[0.9]"
                >
                    Construyamos el sistema <br /> que tu negocio necesita.
                </motion.h2>

                {/* Subline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto mt-8 max-w-2xl font-sans text-lg font-medium leading-relaxed text-neutral-400 sm:text-xl"
                >
                    Ya sea una landing de alto impacto o una plataforma para operar y crecer, el siguiente paso es convertir tu idea en una solución real.
                </motion.p>

                {/* Botón CTA + Microcopy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 flex flex-col items-center gap-6"
                >
                    {/* Botón en Ghost White (#F6F8FB) sólido */}
                    <button className="p-[1px] bg-gradient-to-tr from-amber-500 via-indigo-500 to-red-600 rounded-full">
                        <div className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-8 py-4 text-lg text-white transition-all">
                            <span>Iniciar proyecto</span>
                            <Sparkles className="h-5 w-5 fill-none text-white-500" strokeWidth={2} />
                        </div>
                    </button>

                    <p className="font-sans text-sm font-semibold text-neutral-500">
                        Sin compromiso. Revisamos juntos qué solución encaja mejor.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}