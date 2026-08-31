"use client";

import { useEffect, useRef, useState } from "react";
import Header from '../components/layout/HeaderVersion'
import HeroSection, { heroGradient } from "../components/sections/desing/HeroSection";
import AboutSection, { aboutGradient } from "../components/sections/desing/AboutSection";
import GradientBackground from "../components/sections/desing/GradientBackground";

const gradients = [heroGradient, aboutGradient];

export default function VersionPage() {
  const [activeId, setActiveId] = useState(gradients[0].id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.6 } // umbral más alto = cambia justo cuando la sección "encaja"
    );

    const sections = containerRef.current?.querySelectorAll("section");
    sections?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GradientBackground layers={gradients} activeId={activeId} />
      <main
        ref={containerRef}
        className="relative h-[100dvh] snap-y snap-mandatory overflow-y-scroll scroll-smooth"
      >
        <Header />
        <HeroSection />
        <AboutSection />
      </main>
    </>
  );
}