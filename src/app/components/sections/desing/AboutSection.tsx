export const aboutGradient = {
  id: "nosotros",
  colors: ["#312e81", "#581c87", "#0f172a"],
};

export default function AboutSection() {
  return (
    <section
      id={aboutGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold text-white">Nosotros</h2>
    </section>
  );
}