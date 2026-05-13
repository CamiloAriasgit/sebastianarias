"use client";

import React from "react";

const FINAL_CARDS = [
  {
    id: 5,
    title: "Fricción cero en la navegación.",
    description: "Eliminamos cualquier obstáculo técnico que interrumpa el flujo del usuario. Una **experiencia fluida** garantiza que el interés del inversionista se mantenga intacto desde el primer clic hasta el **inicio del chat**.",
    imageUrl: "/images/realestate/friccion-cero.png",
  },
  {
    id: 6,
    title: "Experiencia de usuario inmersiva.",
    description: "No diseñamos interfaces, creamos **entornos de alta gama**. Una estética limpia y fluida que proyecta la misma **exclusividad y detalle** que los acabados de sus proyectos inmobiliarios.",
    imageUrl: "/images/realestate/ux-inmersiva.png",
  },
  {
    id: 7,
    title: "Arquitectura de crecimiento.",
    description: "Su sistema está listo para evolucionar. Ya sea que necesite integrar nuevos proyectos o escalar su operación, la **estructura modular** le permite crecer sin necesidad de **reconstruir desde cero**.",
    imageUrl: "/images/realestate/arquitectura-crecimiento.png",
  },
  {
    id: 8,
    title: "Claridad en la toma de decisiones.",
    description: "Diseñamos la interfaz para resaltar lo que realmente importa. Guiamos visualmente al cliente hacia los **datos clave** de su proyecto, facilitando una **decisión de compra** más rápida y fundamentada.",
    imageUrl: "/images/realestate/claridad-decisiones.png",
  },
];

export default function FinalHorizontalScroll() {
  return (
    <section className="bg-black flex flex-col justify-center min-h-screen overflow-hidden">
      {/* Contenedor con Negative Margin para ocultar la scrollbar física */}
      <div className="relative">
        <div className="flex w-full overflow-x-auto pb-20 -mb-20 snap-x snap-mandatory px-6 md:px-30 gap-6 hide-scrollbar">
          {FINAL_CARDS.map((card) => (
            <div
              key={card.id}
              className="flex-none w-[80vw] md:w-[320px] snap-center flex flex-col"
            >
              {/* Contenedor de Imagen */}
              <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 aspect-[4/5] mb-6">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bloque de Texto debajo */}
              <div className="px-1">
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {card.description.split("**").map((part, index) => (
                    <span
                      key={index}
                      className={index % 2 !== 0 ? "text-white font-medium" : ""}
                    >
                      {part}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
          {/* Espaciador final para que la última card no quede pegada al borde */}
          <div className="flex-none w-6 md:w-30" />
        </div>
      </div>
    </section>
  );
}