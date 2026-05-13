'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "¿Por qué esto no es simplemente 'otra página web'?",
        answer: "Un sitio web informa; este sistema captura. Mientras una web convencional solo muestra renders, nuestra estructura está diseñada para rastrear el comportamiento del inversionista y eliminar cada punto de fricción que impide que el interés se convierta en una conversación real por WhatsApp."
    },
    {
        question: "Ya tengo una web institucional, ¿debo reemplazarla?",
        answer: "No es necesario. Operamos de forma independiente para no interferir con su sitio actual. Creamos un entorno de alta velocidad diseñado exclusivamente para recibir su pauta publicitaria, asegurando que cada dólar invertido en anuncios llegue a un sistema optimizado para el cierre, no a un folleto digital lento."
    },
    {
        question: "¿Por qué priorizar el contacto directo sobre los formularios?",
        answer: "En el sector inmobiliario, el tiempo destruye el interés. Un formulario es una barrera que posterga la venta. Al conectar al inversionista directamente con su equipo mediante flujos de mensaje pre-configurados, reducimos el tiempo de respuesta a segundos, ganando la atención del cliente antes que la competencia."
    },
    {
        question: "¿Qué recibo exactamente al finalizar la implementación?",
        answer: "Usted recibe un activo digital propietario. Esto incluye el despliegue de su infraestructura de captura de datos, la configuración de eventos de conversión y una interfaz de alta fidelidad que proyecta el estándar de lujo de sus proyectos. Todo entregado bajo un modelo de propiedad total, sin dependencias de terceros."
    }
];


export default function FAQ() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.4 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
        }
    };

    return (
        <section
            ref={ref}
            className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-4xl mx-auto py-24"
        >
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                    Consultas de Implementación
                </h2>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-4"
            >
                {faqs.map((faq, idx) => {
                    const isOpen = activeIdx === idx;
                    return (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="rounded-2xl bg-neutral-900 backdrop-blur-md overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setActiveIdx(isOpen ? null : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-light text-white/90 tracking-tight">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <ChevronDown className="text-white/50 w-5 h-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-300 font-light leading-relaxed text-base md:text-lg border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>

            <motion.p 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 text-center text-white/40 text-sm"
            >
                ¿Tienes una duda específica?<br />La resolvemos en la auditoría inicial.
            </motion.p>
        </section>
    );
}