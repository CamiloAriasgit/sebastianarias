'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/ui/ConversionHeader";
import Hero from '../components/sections/conversion/Hero';
import Problem from '../components/sections/conversion/Problem';
import Introduction from "../components/sections/conversion/Introduction";
import Search from '../components/sections/conversion/Search';

export default function ConversionPage() {
    // Estado inicial: Negro profundo tipo Apple
    const [currentBg, setCurrentBg] = useState({
        from: '#f8f8ff',
        via: '#f8f8ff',
        to: '#f8f8ff'
    });

    return (
        <main className="relative w-full overflow-x-hidden">
            {/* Background Dinámico Fijo */}
            <motion.div
                className="fixed inset-0 -z-10 h-full w-full"
                animate={{
                    background: `linear-gradient(to bottom, ${currentBg.from}, ${currentBg.via}, ${currentBg.to})`
                }}
                transition={{
                    duration: 1.2, // Transición lenta para elegancia
                    ease: [0.22, 1, 0.36, 1] // Ease-out suave
                }}
            />
            <Header />

            {/* Capa de grano/ruido opcional para textura high-end */}
            <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Hero setBg={setCurrentBg} />
            <Introduction setBg={setCurrentBg} />
            <Search setBg={setCurrentBg} />

            <Problem setBg={setCurrentBg} />
        </main>
    );
}