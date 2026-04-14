"use client";

import React from "react";

export default function Tesis() {
  return (
    <section className="w-full bg-neutral-950 px-4 py-24 sm:py-32 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        
        <h2 className="font-sans text-3xl font-bold tracking-tight leading-[0.9] text-neutral-200 sm:text-4xl mb-12">
          La mayoría de SaaS fallan por una razón
        </h2>

        <div className="space-y-1 font-sans text-2xl font-bold leading-[0.9] text-neutral-500">
          <p className="text-neutral-200 font-semibold">
            No fallan por falta de código.
          </p>
          
          <p className="text-neutral-500">
            Fallan porque nadie validó si realmente eran necesarios.
          </p>

          <p className="pt-10 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
            Este proceso es diferente.
          </p>

          <p className="text-neutral-500">
            En lugar de construir desde suposiciones, se construye desde la experiencia directa de <span className="text-neutral-200">personas que viven los problemas todos los días.</span>
          </p>
        </div>

      </div>
    </section>
  );
}