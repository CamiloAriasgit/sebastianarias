"use client";
import { User, Search, Settings, Lightbulb } from "lucide-react";

export default function Propuesta() {
  const cards = [
    { icon: <User className="text-cyan-400" />, title: "Insider", desc: "Trabaja activamente en una industria específica." },
    { icon: <Search className="text-indigo-400" />, title: "Experto", desc: "Conoce procesos reales, no solo la teoría." },
    { icon: <Settings className="text-pink-400" />, title: "Observador", desc: "Identifica problemas repetitivos o ineficiencias." },
    { icon: <Lightbulb className="text-amber-400" />, title: "Visionario", desc: "Aporta su visión para diseñar una solución real." },
  ];

  return (
    <section className="w-full bg-neutral-950 px-4 py-20 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-neutral-200 mb-16 text-center">¿Qué significa ser colaborador?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
              <div className="mb-4 p-3 w-fit rounded-2xl bg-neutral-900 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{card.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}