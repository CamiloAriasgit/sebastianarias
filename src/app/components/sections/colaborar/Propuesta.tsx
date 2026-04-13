"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function Propuesta() {
  const puntos = [
    "Trabaja en una industria específica",
    "Conoce procesos reales (no teoría)",
    "Ha identificado problemas repetitivos o ineficiencias",
    "Está dispuesto a aportar su visión para diseñar una solución"
  ];

  return (
    <section className="w-full bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-sans text-2xl font-bold text-neutral-200 mb-10">
          ¿Qué significa ser colaborador?
        </h2>

        <div className="space-y-4 mb-10">
          <p className="text-neutral-400 text-lg">
            Un colaborador SaaS es alguien que:
          </p>
          
          <ul className="space-y-4">
            {puntos.map((punto, index) => (
              <li key={index} className="flex items-start gap-3 text-neutral-500">
                <CheckCircle2 className="h-6 w-6 text-cyan-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>{punto}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <p className="text-neutral-300 font-medium">
            No necesitas saber de tecnología. <br className="hidden sm:block" />
            <span className="text-neutral-500 font-normal">Solo necesitas entender bien lo que haces.</span>
          </p>
        </div>
      </div>
    </section>
  );
}