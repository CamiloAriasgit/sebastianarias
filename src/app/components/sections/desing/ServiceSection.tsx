export const serviceGradient = {
  id: "servicios",
  colors: ["#6283b9", "#6283b9", "#6283b9"],
};

export default function ServiceSection() {
  return (
    <section
      id={serviceGradient.id}
      className="flex h-[100dvh] w-full snap-start items-center justify-center px-6"
    >
      <h2 className="text-4xl font-semibold text-black font-mono">04</h2>
    </section>
  );
}