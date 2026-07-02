"use client";

import dynamic from 'next/dynamic';

// Aquí sí está permitido usar ssr: false porque este archivo es un Client Component
export const HeaderClient = dynamic(
  () => import('./HeaderL').then((mod) => mod.Header),
  { ssr: false }
);