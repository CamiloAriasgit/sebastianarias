export const heroGradient = {
  id: "inicio",
  colors: ["#EDEFF3", "#EDEFF3", "#EDEFF3"],
};

export default function HeroSection() {
  return (
    <section
      id={heroGradient.id}
      className="flex flex-col h-[100dvh] w-full snap-start items-center justify-center px-4 sm:px-6 text-center"
    >
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-black max-w-4xl leading-tight">
        Obtén tu propio<br />portal inmobiliario
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-xl md:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
        Con tu logo, tu dominio y un panel donde queda cada contacto.
      </p>
    </section>
  );
}