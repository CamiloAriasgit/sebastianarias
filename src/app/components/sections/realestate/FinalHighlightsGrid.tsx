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
  },
];

export default function FinalHighlightsGrid() {
  return (
    <section className="bg-black py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-30">
        {FINAL_CARDS.map((card) => (
          <div key={card.id} className="flex flex-col">
            {/* Contenedor de Imagen (Card) */}
            <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 aspect-square md:aspect-[4/5] mb-6">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bloque de Texto debajo de la Card */}
            <div className="px-2">
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                {/* 
                  Aquí procesamos el texto para que las partes importantes 
                  estén en blanco. He usado negritas en el objeto para simularlo.
                */}
                {card.description.split("**").map((part, index) => (
                  <span key={index} className={index % 2 !== 0 ? "text-white" : ""}>
                    {part}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}