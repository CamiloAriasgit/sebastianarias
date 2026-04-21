import Hero from "../components/sections/conversion/Hero";
import ProblemMetrics from "../components/sections/conversion/ProblemMetrics";


export default function ConversionPage() {
  return (
    /* TEMA: Industrial Titanium
       Background: #121417 | Text: #E2E8F0
    */
    <main className="min-h-screen bg-[#121417] text-[#E2E8F0] selection:bg-white selection:text-black font-sans">
      {/* Luz ambiental sutil en el top para profundidad */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a1f26] to-transparent opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-32">
        <Hero />
        <section id="metrics">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#4A5568] mb-16 text-center font-bold">
            Data-Driven Reality
          </h2>
          <ProblemMetrics />
        </section>
        
        
      </div>

      <footer className="py-12 border-t border-[#1A202C] text-center opacity-40">
        <p className="text-[10px] tracking-[0.3em] uppercase">
          SCAB Systems — High Performance Conversion
        </p>
      </footer>
    </main>
  );
}