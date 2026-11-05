import Image from "next/image";

export const aboutGradient = {
  id: "nosotro",
  colors: ["#EDEFF3", "#EDEFF3", "#EDEFF3"],
};

const carouselCards = [
  {
    title: "Búsqueda Avanzada",
    description: "Búsqueda por palabras y filtros por precio, área, ciudad, tipo de propiedad, y venta o renta.",
    image: "/images/img1.webp",
  },
  {
    title: "Lista o Mapa",
    description: "Lista o mapa. En el mapa, cada propiedad aparece con su precio.",
    image: "/images/img2.webp",
  },
  {
    title: "Ficha de Propiedad",
    description: "Una ficha por propiedad con fotos, descripción, características, condiciones y ubicación, y un botón para compartir el enlace.",
    image: "/images/img3.webp",
  },
  {
    title: "Contacto Directo",
    description: "Un botón de WhatsApp en cada propiedad. El formulario pide solo nombre y teléfono.",
    image: "/images/img4.webp",
  },
];

export default function Features() {
  return (
    <section
      id={aboutGradient.id}
      className="flex flex-col min-h-[100dvh] w-full snap-start items-center justify-center sm:px-6 py-12 text-center overflow-hidden"
    >
      <h2 className="text-3xl sm:text-4xl font-medium text-black tracking-tight max-w-4xl">
        Lo que ve quien busca
      </h2>

      {/* Carrusel de tarjetas con scrollbar oculto nativamente */}
      <div className="mt-10 sm:mt-12 w-full overflow-x-auto py-4 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-start gap-6 sm:gap-8 justify-start sm:justify-center min-w-max px-4">
          {carouselCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-64 sm:w-72 md:w-80 flex-shrink-0 text-left group cursor-pointer"
            >
              {/* Imagen formato 4:5 sin sombras, sin bordes, rounded-3xl */}
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-200">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Texto debajo de cada card, alineado a la izquierda */}
              <div className="mt-4 space-y-1.5 px-1">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-base sm:text-sm text-neutral-600 font-normal leading-relaxed">
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