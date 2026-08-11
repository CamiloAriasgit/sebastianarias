import Hero from "../components/sections/desing/Hero";
import WhatsAppFunnel from "../components/sections/desing/WhatsAppFunnel";

// Orquestador simple: sin lógica propia, solo orden de secciones.
export default function VersionPage() {
  return (
    <main>
      <Hero />
      <WhatsAppFunnel />
      {/* siguientes secciones del funnel */}
    </main>
  );
}