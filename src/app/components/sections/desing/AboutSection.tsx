export const aboutGradient = {
  id: "nosotros",
  colors: ["#EDEFF3", "#EDEFF3", "#6283b9"],
};

export default function AboutSection() {
  return (
    <section
      id={aboutGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-semibold text-black font-mono">02</h2>
    </section>
  );
}