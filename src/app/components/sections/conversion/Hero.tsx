"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";

const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center space-y-10 pt-20 md:pt-10">
            <span className="bg-white/10 rounded-full px-3 py-[1px] font-base font-sans text-neutral-400 mb-4">Conversion</span>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-6"
            >

                <h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[0.9]">
                    Tu negocio es real. Tu infraestructura digital no.
                </h1>

                <p className="text-[#888888] text-base md:text-xl max-w-2xl mx-auto font-light leading-[1.1]">
                    Desplegamos sistemas de conversión de alta velocidad para empresas que no pueden permitirse perder clientes.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col md:flex-row gap-5"
            >
                <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <div className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#F6F8FB] px-8 py-4 text-lg font-bold text-neutral-900 transition-all active:scale-95">
                          <span>Empezar</span>
                          <ArrowRight strokeWidth={2} />
                        </div>
                      </a>

            </motion.div>


        </section>
    );
}