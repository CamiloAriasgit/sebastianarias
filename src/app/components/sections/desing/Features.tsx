import Image from "next/image";

export const aboutGradient = {
  id: "nosotro",
  colors: ["#202020", "#202020", "#202020"],
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
    description: "Una ficha por propiedad con fotos, información, y un botón para compartir el enlace.",
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
      className="flex flex-col min-h-[100dvh] w-full snap-start items-start md:items-center justify-center sm:px-6 py-12 text-center overflow-hidden"
    >
      <h2 className="text-2xl px-4 sm:text-4xl text-white tracking-tight max-w-4xl">
        Lo que ve quien busca
      </h2>

      {/* Contenedor del carrusel con snap-x obligatorio */}
      <div className="mt-4 w-full overflow-x-auto snap-x snap-mandatory py-4 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-start gap-6 sm:gap-8 justify-start sm:justify-center min-w-max px-4">
          {carouselCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col w-64 sm:w-72 md:w-80 flex-shrink-0 text-left group cursor-pointer snap-center"
            >
              {/* Imagen formato 4:5 */}
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

              {/* Texto debajo de la card */}
              <div className="mt-4 space-y-1.5 px-1">
                <h3 className="text-base sm:text-lg tracking-tight text-neutral-100 leading-snug">
                  {card.title}
                </h3>
                <p className="text-md sm:text-sm text-neutral-300 font-semibold leading-tight">
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