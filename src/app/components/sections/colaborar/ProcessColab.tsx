"use client";

export default function Proceso() {
  const steps = [
    { num: "01", title: "Conversación", desc: "Entendemos tu contexto y dolores reales." },
    { num: "02", title: "Validación", desc: "Analizamos si el problema es escalable." },
    { num: "03", title: "Diseño", desc: "Estructuramos un sistema viable." },
    { num: "04", title: "MVP", desc: "Construimos la primera versión funcional." },
  ];

  return (
    <section className="w-full bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex-1">
              <span className="block font-mono text-6xl font-black text-white/5 absolute -top-10 left-0">
                {step.num}
              </span>
              <div className="relative z-10 pt-4 border-t border-cyan-500/30">
                <h3 className="text-xl font-bold text-neutral-200 mb-3">{step.title}</h3>
                <p className="text-neutral-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}