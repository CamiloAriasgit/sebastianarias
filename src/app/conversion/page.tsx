'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/ui/ConversionHeader";
import Hero from '../components/sections/conversion/Hero';
import Problem from '../components/sections/conversion/ProblemMetrics';
import Introduction from "../components/sections/conversion/Introduction";
import Service from "../components/sections/conversion/Service"
import Search from '../components/sections/conversion/Search';
import Legitimacy from '../components/sections/conversion/Legitimacy';
import Clients from '../components/sections/conversion/Clients';

// ... (imports iguales)

export default function ConversionPage() {
    const [currentBg, setCurrentBg] = useState({
        from: '#f8f8ff',
        via: '#f8f8ff',
        to: '#f8f8ff'
    });

    return (
        <main className="relative w-full overflow-x-hidden">
            {/* Background Dinámico Fijo con Sangrado (Over-scan) */}
            <motion.div
                // -top-[10vh] y h-[120vh] crean un colchón de seguridad de 10% arriba y abajo
                className="fixed -top-[10vh] left-0 -z-10 h-[120vh] w-full"
                animate={{
                    background: `linear-gradient(to bottom, ${currentBg.from}, ${currentBg.via}, ${currentBg.to})`
                }}
                transition={{
                    duration: 0.5,
                    ease: "circOut" 
                }}
            />
            
            <Header />

            <div className="fixed inset-0 -z-10 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <Hero setBg={setCurrentBg} />
            <Introduction setBg={setCurrentBg} />
            <Service setBg={setCurrentBg} />
            <Search setBg={setCurrentBg} />
            <Legitimacy setBg={setCurrentBg} />
            <Problem setBg={setCurrentBg} />
            <Clients setBg={setCurrentBg}/>
        </main>
    );
}