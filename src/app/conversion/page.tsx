'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/ui/ConversionHeader";
import Hero from '../components/sections/conversion/Hero';
import Problem from '../components/sections/conversion/ProblemMetrics';
import Introduction from "../components/sections/conversion/Introduction";
import Service from "../components/sections/conversion/Service"
import Search from '../components/sections/conversion/Search';
import Legitimacy from '../components/sections/conversion/Legitimacy';
import Clients from '../components/sections/conversion/Clients';

export default function ConversionPage() {
    const [currentBg, setCurrentBg] = useState({
        from: '#f8f8ff',
        via: '#f8f8ff',
        to: '#f8f8ff'
    });

    // Punto 1: Control dinámico del Theme Color para la barra del móvil
    useEffect(() => {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
            document.body.style.backgroundColor = currentBg.to;
            document.documentElement.style.backgroundColor = currentBg.to;
        }

        // Actualiza el color de la barra del sistema con el color "to" del gradiente
        metaThemeColor.setAttribute('content', currentBg.to);
    }, [currentBg.to]);

    return (
        <main className="relative w-full overflow-x-hidden">
            {/* Background Dinámico Fijo */}
            <motion.div
                className="fixed inset-0 -z-10 h-full w-full"
                // Punto 2: backgroundColor sólido detrás para forzar la detección del navegador
                style={{ backgroundColor: currentBg.to }}
                animate={{
                    background: `linear-gradient(to bottom, ${currentBg.from}, ${currentBg.via}, ${currentBg.to})`
                }}
                transition={{
                    duration: 0.5,
                    ease: "circOut"
                }}
            />

            <Header />

            {/* Capa de grano/ruido opcional */}
            <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Hero setBg={setCurrentBg} />
            <Introduction setBg={setCurrentBg} />
            <Service setBg={setCurrentBg} />
            <Search setBg={setCurrentBg} />
            <Legitimacy setBg={setCurrentBg} />
            <Problem setBg={setCurrentBg} />
            <Clients setBg={setCurrentBg} />
        </main>
    );
}