export const heroGradient = {
  id: "inicio",
  colors: ["#0f172a", "#312e81", "#0f172a"],
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