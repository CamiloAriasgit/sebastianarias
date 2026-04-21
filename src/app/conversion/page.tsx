import Hero from "../components/sections/conversion/Hero";
import ProblemMetrics from "../components/sections/conversion/ProblemMetrics";
import TheLeak from "../components/sections/conversion/TheLeak";
import SolutionSystem from "../components/sections/conversion/SolutionSystem";
import AuditCTA from "../components/sections/conversion/AuditCTA";

export default function ConversionPage() {
  return (
    /* Fondo: Negro profundo para resaltar efectos de luz.
       Acento de luz: Un degradado radial sutil que vive en el fondo.
    */
    <main className="relative min-h-screen bg-[#050505] text-[#E2E8F0] selection:bg-white selection:text-black overflow-hidden">
      
      {/* Elementos de Iluminación Ambiental (Blur) */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-32 space-y-40 md:space-y-64">
        
        <Hero />

        <section id="metrics" className="relative">
          {/* Eliminamos el título pequeño de adorno */}
          <ProblemMetrics />
        </section>

        <TheLeak />

        <SolutionSystem />

        <AuditCTA />
      </div>

      <footer className="relative z-10 py-20 border-t border-white/5 text-center">
        <p className="text-[11px] tracking-widest uppercase opacity-30">
          SCAB Systems
        </p>
      </footer>
    </main>
  );
}