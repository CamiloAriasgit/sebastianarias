export const problemGradient = {
  id: "nosotros",
  colors: ["#EDEFF3", "#EDEFF3", "#6283b9"],
};

export default function SectionProblem() {
  return (
    <section
      id={problemGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-semibold text-black font-mono">03</h2>
    </section>
  );
}