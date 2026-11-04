import Image from "next/image";

export const heroGradient = {
  id: "inicio",
  colors: ["#EDEFF3", "#EDEFF3", "#EDEFF3"],
};

export default function HeroSection() {
  return (
    <section
      id={heroGradient.id}
      className="flex flex-col min-h-[100dvh] w-full snap-start items-center justify-center px-4 sm:px-6 py-12 text-center overflow-hidden"
    >
      {/* Encabezado */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black max-w-4xl leading-tight">
        Obtén tu propio<br />portal inmobiliario
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
        Con tu logo, tu dominio y un panel donde queda cada contacto.
      </p>

      {/* Contenedor tipo navegador */}
      <div className="mt-8 sm:mt-12 w-full max-w-4xl px-2">
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl border border-neutral-800 pt-2 px-2 pb-2 flex flex-col items-center">
          
          {/* Barra de navegación superior simulada */}
          <div className="mb-2 w-full max-w-xs sm:max-w-sm h-7 sm:h-8 bg-neutral-800 rounded-md flex items-center justify-center px-3 shadow-inner">
            <span className="text-xs sm:text-sm text-neutral-400 tracking-tight select-none">
              tudominio.com/admin
            </span>
          </div>

          {/* Imagen respetando su tamaño y proporción original */}
          <div className="relative w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
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