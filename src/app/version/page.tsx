import Hero from "../components/sections/desing/Hero2";
import Problem from "../components/sections/desing/Problem";

// Orquestador simple: sin lógica propia, solo orden de secciones.
export default function VersionPage() {
  return (
    <main>
      <Hero />
      <Problem/>
    </main>
  );
}