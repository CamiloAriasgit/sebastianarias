"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import { Scene, SceneId } from "../components/sections/desing/whatsapp-flow.types";

import { useTransform } from "framer-motion";

interface UseSectionScrollResult {
containerRef: React.RefObject<HTMLDivElement | null>;  scrollYProgress: MotionValue<number>;
  getActiveScene: (progress: number) => SceneId;
}

export function useSceneProgress(scrollYProgress: MotionValue<number>, scene: Scene) {
  return useTransform(scrollYProgress, [scene.from, scene.to], [0, 1], { clamp: true });
}

// Hook genérico y reutilizable: cualquier sección inmersiva futura
// (no solo el funnel de WhatsApp) puede usar esto.
export function useSectionScroll(scenes: Scene[]): UseSectionScrollResult {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // progreso mientras la sección está pineada
  });

  const getActiveScene = (progress: number): SceneId => {
    const active = scenes.find((s) => progress >= s.from && progress < s.to);
    return active?.id ?? scenes[scenes.length - 1].id;
  };

  return { containerRef, scrollYProgress, getActiveScene };
}

// Hook auxiliar para suscribirse a la escena activa como estado de React
// (útil cuando el componente necesita re-renderizar clases condicionales de Tailwind)
export function useActiveScene(
  scrollYProgress: MotionValue<number>,
  scenes: Scene[],
  onChange: (scene: SceneId) => void
) {
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const active = scenes.find((s) => latest >= s.from && latest < s.to);
    onChange(active?.id ?? scenes[scenes.length - 1].id);
  });
}