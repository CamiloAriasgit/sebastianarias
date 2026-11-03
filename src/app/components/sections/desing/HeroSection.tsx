import Image from "next/image";

export const heroGradient = {
  id: "inicio",
  colors: ["#EDEFF3", "#EDEFF3", "#EDEFF3"],
};

const cardsData = [
  {
    title: "Tu Marca",
    description: "Personaliza tu logo y colores corporativos.",
    image: "/images/hero-project-1.jpg",
    rotation: "-rotate-12 translate-y-10 sm:translate-y-16 z-10 scale-75 origin-bottom",
  },
  {
    title: "Tu Dominio",
    description: "Conecta tu propio dominio personalizado fácilmente.",
    image: "/images/hero-project-2.jpg",
    rotation: "-rotate-6 translate-y-6 sm:translate-y-10 z-20 scale-90 origin-bottom",
  },
  {
    title: "Panel de Leads",
    description: "Gestiona y recibe cada contacto centralizado en un lugar.",
    image: "/images/hero-project-3.jpg",
    rotation: "rotate-0 translate-y-5 sm:translate-y-7 z-30 scale-100 origin-bottom",
  },
  {
    title: "Catálogo HD",
    description: "Muestra tus propiedades con galerías rápidas e interactivas.",
    image: "/images/hero-project-2.jpg",
    rotation: "rotate-6 translate-y-6 sm:translate-y-10 z-20 scale-90 origin-bottom",
  },
  {
    title: "Analíticas",
    description: "Mide las visitas e interés de tus clientes en tiempo real.",
    image: "/images/hero-project-1.jpg",
    rotation: "rotate-12 translate-y-10 sm:translate-y-16 z-10 scale-75 origin-bottom",
  },
];

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

      {/* Tarjetas estilo abanico */}
      <div className="mt-10 sm:mt-14 w-full max-w-5xl flex justify-center items-end py-6 px-2">
        <div className="flex items-end justify-center -space-x-8 sm:-space-x-12 md:-space-x-16 hover:space-x-1 transition-all duration-500 ease-out">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-end p-4 sm:p-6 w-36 h-[180px] sm:w-48 sm:h-[240px] md:w-56 md:h-[280px] rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-200 shadow-2xl border border-neutral-300/60 transition-transform duration-300 hover:scale-105 hover:z-40 cursor-pointer ${card.rotation}`}
            >
              {/* Imagen local */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                unoptimized
                sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 224px"
                className="object-cover"
                priority={index === 2}
              />

              {/* Gradiente blanco desde la mitad */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent top-1/2 pointer-events-none" />

              {/* Texto */}
              <div className="relative z-10 text-left space-y-1 sm:space-y-2">
                <h3 className="text-xs sm:text-base md:text-lg font-bold tracking-tight text-neutral-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[9px] sm:text-xs md:text-sm text-neutral-700 font-normal line-clamp-3 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}