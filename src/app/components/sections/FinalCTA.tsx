"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="relative w-full bg-neutral-950 px-6 py-10 sm:py-20 overflow-hidden">

            
            <div className="relative mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-12 flex flex-col items-center gap-6"
                >
                    <button className="p-[1px] bg-gradient-to-tr from-amber-500 via-indigo-500 to-red-600 rounded-full">
                        <div className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-neutral-950 px-8 py-4 text-lg text-white transition-all">
                            <span>Iniciar proyecto</span>
                            <Sparkles className="h-5 w-5 fill-none text-white-500" strokeWidth={2} />
                        </div>
                    </button>

                    <p className="font-sans text-sm text-neutral-500">
                        Sin compromiso. Revisamos juntos qué solución encaja mejor.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}