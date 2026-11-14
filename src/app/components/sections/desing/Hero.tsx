import Image from "next/image";
import { Globe, Astroid, } from 'lucide-react';

export const heroGradient = {
  id: "inicio",
  colors: ["#5879b0", "#7790b1", "#97abb5",],
};

export default function HeroSection() {
  return (
    <section
      id={heroGradient.id}
      className="flex flex-col min-h-[100dvh] w-full snap-start items-center justify-center px-4 sm:px-6 py-12 text-center overflow-hidden"
    >
      {/* Encabezado */}
      <div className="bg-white/15 py-1 px-3 mb-4 rounded-full flex items-center justify-center gap-2 text-white/70">
        <Astroid className="inline-block w-3.5 h-3.5" />
        <span className="text-sm font-light">1 mes gratis</span>
      </div>
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-medium tracking-tight text-white max-w-4xl leading-tight">
        Obtén tu propio<br />portal inmobiliario
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-xl text-white/70 font-light max-w-2xl leading-relaxed">
        Con tu logo, tu dominio y un panel donde queda cada lead.
      </p>

      {/* Contenedor tipo navegador */}
      <div className="mt-8 sm:mt-12 w-full max-w-4xl px-2">
        <div 
          className="relative w-full rounded-t-lg sm:rounded-t-xl overflow-hidden bg-neutral-900 pt-2 px-2 flex flex-col items-center"
          style={{
            // Esto hace que la parte inferior del bloque se desvanezca hacia transparencia total de forma nativa
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
          }}
        >
          
          {/* Barra de navegación superior simulada */}
          <div className="mb-2 h-6 sm:h-7 bg-neutral-800/80 rounded-md flex items-center justify-center px-3 shadow-inner">
            <span className="text-xs sm:text-sm text-neutral-400 tracking-tight select-none">
              <Globe className="inline-block w-3 h-3 mr-1 -mt-[1px] text-neutral-400" />
              tudominio.com/admin
            </span>
          </div>

          {/* Imagen respetando su tamaño y proporción original */}
          <div className="relative w-full rounded-t-xs sm:rounded-t-md overflow-hidden bg-neutral-950">
            <Image
              src="/images/img1.webp"
              alt="Vista previa del portal inmobiliario"
              width={1200}
              height={800}
              unoptimized
              priority
              className="w-full h-auto object-contain block"
            />
          </div>

        </div>
      </div>
    </section>
  );
}