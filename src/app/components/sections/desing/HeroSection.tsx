export const heroGradient = {
  id: "inicio",
  colors: ["#2b426d", "#496bac", "#6283b9"],
};

export default function HeroSection() {
  return (
    <section
      id={heroGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold text-white">Inicio</h2>
    </section>
  );
}