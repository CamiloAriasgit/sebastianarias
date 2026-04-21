"use client";

import { motion } from "framer-motion";

export default function AuditCTA() {
  return (
    <section className="relative py-24">
      {/* Marco de enfoque industrial */}
      <div className="absolute inset-0 border border-[#2D3748] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#121417] px-4 py-1 border border-[#2D3748]">
        <span className="text-[10px] font-mono text-[#718096] uppercase tracking-[0.4em]">
          Final Protocol: DECISION
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-3xl md:text-6xl font-bold tracking-tighter"
          >
            ¿Sería una mala idea <br />
            <span className="text-white">detener la fuga hoy mismo?</span>
          </motion.h2>
          
          <p className="text-[#718096] text-sm md:text-lg max-w-2xl mx-auto leading-relaxed italic">
            "No vendemos sitios web. Construimos activos financieros digitales. Si su sistema actual no genera flujo de caja, no es un activo; es un gasto."
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
            <button className="group relative overflow-hidden bg-[#E2E8F0] text-[#0B0D12] py-5 px-8 rounded-sm font-bold text-xs uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95">
              <span className="relative z-10">Solicitar Auditoría de Conversión</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="border border-[#2D3748] text-[#E2E8F0] py-5 px-8 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-[#1A202C] transition-all">
              Prefiero seguir perdiendo clics
            </button>
          </div>

          <div className="flex items-center space-x-4 pt-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-[#121417] bg-[#2D3748]" />
              ))}
            </div>
            <p className="text-[10px] text-[#4A5568] uppercase tracking-widest">
              Limitado a 3 auditorías de sistema por mes.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decoración de coordenadas técnica */}
      <div className="absolute bottom-4 right-4 hidden md:block">
        <span className="text-[10px] font-mono text-[#2D3748] uppercase tracking-tighter">
          Lat: 6.4497° N | Lon: 75.8306° W (S.J. Region)
        </span>
      </div>
    </section>
  );
}