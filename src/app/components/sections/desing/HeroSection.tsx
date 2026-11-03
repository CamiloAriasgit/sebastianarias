export const heroGradient = {
  id: "inicio",
  colors: ["#EDEFF3", "#EDEFF3", "#EDEFF3"],
};

const cardsData = [
  {
    title: "Tu Marca",
    description: "Personaliza tu logo y colores corporativos.",
    rotation: "-rotate-12 translate-y-6 sm:translate-y-8 z-10",
    bg: "bg-neutral-800",
  },
  {
    title: "Tu Dominio",
    description: "Conecta tu propio dominio personalizado fácilmente.",
    rotation: "-rotate-6 translate-y-2 sm:translate-y-3 z-20",
    bg: "bg-neutral-850",
  },
  {
    title: "Panel de Leads",
    description: "Gestiona y recibe cada contacto centralizado en un lugar.",
    rotation: "rotate-0 z-30 scale-105",
    bg: "bg-neutral-900",
  },
  {
    title: "Catálogo HD",
    description: "Muestra tus propiedades con galerías rápidas e interactivas.",
    rotation: "rotate-6 translate-y-2 sm:translate-y-3 z-20",
    bg: "bg-neutral-850",
  },
  {
    title: "Analíticas",
    description: "Mide las visitas e interés de tus clientes en tiempo real.",
    rotation: "rotate-12 translate-y-6 sm:translate-y-8 z-10",
    bg: "bg-neutral-800",
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
      <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
        Con tu logo, tu dominio y un panel donde queda cada contacto.
      </p>

      {/* Tarjetas estilo abanico */}
      <div className="mt-10 sm:mt-14 w-full max-w-5xl flex justify-center items-center py-6 px-2">
        <div className="flex items-center justify-center -space-x-8 sm:-space-x-12 md:-space-x-16 hover:space-x-1 transition-all duration-500 ease-out">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-end p-5 sm:p-6 w-36 h-52 sm:w-48 sm:h-68 md:w-56 md:h-80 rounded-2xl sm:rounded-3xl ${card.bg} text-white shadow-2xl border border-neutral-700/40 transition-transform duration-300 hover:scale-110 hover:z-40 cursor-pointer ${card.rotation}`}
            >
              {/* Contenido de la tarjeta */}
              <div className="text-left space-y-1 sm:space-y-2">
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-neutral-400 font-normal line-clamp-3 leading-relaxed">
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