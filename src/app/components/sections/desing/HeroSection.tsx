export const heroGradient = {
  id: "inicio",
  colors: ["#EDEFF3", "#EDEFF3", "#EDEFF3"],
};

export default function HeroSection() {
  return (
    <section
      id={heroGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-medium text-black font-mono">01</h2>
    </section>
  );
}