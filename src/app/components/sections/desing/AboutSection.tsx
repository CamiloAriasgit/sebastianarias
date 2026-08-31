export const aboutGradient = {
  id: "nosotros",
  colors: ["#6283b9", "#EDEFF3", "#EDEFF3"],
};

export default function AboutSection() {
  return (
    <section
      id={aboutGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-bold text-black">Nosotros</h2>
    </section>
  );
}