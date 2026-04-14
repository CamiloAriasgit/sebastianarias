"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "¿Qué tipo de proyectos desarrollas?",
    answer: "Desde landing pages de alto impacto hasta sistemas web personalizados para operar procesos internos, vender servicios o gestionar información."
  },
  {
    question: "¿Necesito saber exactamente qué solución quiero?",
    answer: "No. Si aún no tienes claro si necesitas una landing, una web escalable o un sistema a medida, definimos juntos la mejor opción según tu etapa."
  },
  {
    question: "¿También trabajas proyectos sin panel administrativo?",
    answer: "Sí. No todos los negocios necesitan gestión dinámica. También desarrollo sitios estáticos de alta calidad enfocados en conversión, velocidad y diseño profesional."
  },
  {
    question: "¿Cuánto tarda un proyecto?",
    answer: "Depende del alcance. Una landing puede estar lista en pocos días; sistemas más complejos requieren planificación según módulos y necesidades."
  },
  {
    question: "¿Qué pasa si necesito cambios después de entregado?",
    answer: "Siempre existe una fase de ajustes posteriores para asegurar que el resultado final quede alineado con lo que necesitas."
  },
  {
    question: "¿El sitio queda preparado para crecer?",
    answer: "Sí. Cada proyecto se construye pensando en escalabilidad, para que puedas ampliar funcionalidades sin rehacer todo desde cero."
  },
  {
    question: "¿Incluyes hosting y dominio?",
    answer: "Puedo asesorarte o encargarme de la configuración completa según el proyecto."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gray-100 px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">

        <div className="mb-7">
          <h2 className="font-sans text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl leading-[0.9]">
            Preguntas antes <br /> de empezar
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`overflow-hidden rounded-3xl transition-all duration-300 ${isOpen ? "bg-white" : "bg-white"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-6 text-left sm:p-8"
                >
                  <span className={`font-sans text-lg font-bold tracking-tight leading-[1.2] transition-colors duration-300 ${isOpen ? "text-neutral-900" : "text-neutral-600"
                    }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${isOpen ? " text-neutral-900" : "text-neutral-400"
                      }`}
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-8 pt-0 sm:px-8">
                        <p className="font-sans text-lg leading-[1.2] text-neutral-500 max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}