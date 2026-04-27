'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿En qué se diferencia esto de una landing tradicional?",
    answer: "Las landings tradicionales son folletos estáticos. Nuestro sistema es una infraestructura de conversión optimizada en el T3 Stack, diseñada para cargar en milisegundos y guiar al usuario psicológicamente hacia el cierre. No construimos sitios, construimos terminales de venta."
  },
  {
    question: "Ya tengo un sitio web, ¿puedo usar esto?",
    answer: "Totalmente. No necesitas borrar lo que ya tienes. Instalamos una 'Vía de Alta Velocidad' paralela mediante un subdominio o reverse proxy. Tu sitio institucional sigue intacto, mientras tus anuncios fluyen por una ruta diseñada exclusivamente para convertir."
  },
  {
    question: "¿Por qué el enfoque en WhatsApp y no en un formulario?",
    answer: "La fricción mata la venta. Un formulario es una tarea; un chat es una relación. En mercados de ticket alto, la velocidad de respuesta es el factor decisivo para ganar la confianza del cliente antes que la competencia."
  },
  {
    question: "¿Qué incluye el protocolo de implementación?",
    answer: "Incluye el diseño de alta fidelidad, desarrollo en Next.js con arquitectura de alto rendimiento, configuración de mensajes de conversión directa y el despliegue en una infraestructura global (Edge Computing) para garantizar velocidad máxima."
  }
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-4xl mx-auto py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs mb-4 shadow-inner shadow-white/20">
          Resolviendo dudas
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
          Consultas de Implementación
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIdx === idx;
          return (
            <div 
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
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

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-neutral-100 font-light leading-relaxed text-base md:text-lg border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <p className="mt-12 text-center text-white/40 text-sm italic">
        ¿Tienes una duda específica? La resolvemos en la auditoría inicial.
      </p>
    </section>
  );
}