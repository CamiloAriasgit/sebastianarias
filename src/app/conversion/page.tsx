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

    // Punto 1 y 3: Control dinámico y sincronización del "suelo" de la web
    useEffect(() => {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');

        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }

        // Actualizamos el meta tag
        metaThemeColor.setAttribute('content', currentBg.to);

        // FORZADO DE BODY Y HTML: Esto elimina el recuadro que aparece al ocultarse las barras
        // Lo aplicamos directamente al DOM para que sea instantáneo
        document.body.style.backgroundColor = currentBg.to;
        document.documentElement.style.backgroundColor = currentBg.to;
        
    }, [currentBg.to]);

    return (
        <main className="relative w-full overflow-x-hidden">
            {/* Background Dinámico con "Sangrado" para evitar saltos de layout */}
            <motion.div
            className="fixed -top-[10vh] left-0 -z-10 h-[120vh] w-full"
            initial={false}
            animate={{
                // Usamos backgroundImage explícitamente para el gradiente
                backgroundImage: `linear-gradient(to bottom, ${currentBg.from}, ${currentBg.via}, ${currentBg.to})`,
                // El backgroundColor se mantiene para que el navegador lo detecte, 
                // pero el gradiente vivirá "encima"
                backgroundColor: currentBg.to 
            }}
            transition={{
                duration: 0.5,
                ease: "circOut"
            }}
        />

            <Header />

            {/* Capa de grano/ruido */}
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