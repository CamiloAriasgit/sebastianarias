"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function IconCountingScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5 });
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!isInView) return;

    setCount(1); // reinicia cada vez que vuelve a entrar en vista

    const maxCount = 9;
    const stepDuration = 130;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= maxCount) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isInView]);

  const displayCount = count >= 9 ? "9+" : count;

  return (
    <div ref={containerRef} className="relative flex items-center justify-center">
      <div className="w-24 h-24 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl">
        <svg viewBox="0 0 32 32" className="w-12 h-12 fill-white">
          <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.8-2c2.3 1.3 4.9 2 7.6 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.2c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2.1-2-4.5-2-7 0-7.2 5.9-13.1 13.1-13.1S29 8.8 29 16 22.2 28.7 16 28.7z" />
          <path d="M23.4 19.3c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.5-.6.2-.2.2-.4.3-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.9 5.1.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.4-.2-.8-.4z" />
        </svg>
      </div>

      {/* Círculo fijo — nunca se remonta, así que no parpadea */}
      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center overflow-hidden">
        {/* Solo el número entra/sale con efecto tipo "odómetro" */}
        <AnimatePresence mode="wait">
          <motion.span
            key={displayCount}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {displayCount}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}