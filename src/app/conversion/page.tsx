'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/ui/ConversionHeader";
import Hero from '../components/sections/conversion/Hero';
import Problem from '../components/sections/conversion/ProblemMetrics';
import Service from "../components/sections/conversion/Service"
import Search from '../components/sections/conversion/Search';
import Legitimacy from '../components/sections/conversion/Legitimacy';
import Clients from '../components/sections/conversion/Clients';
import FAQ from '../components/sections/conversion/FAQ';
import Pricing from '../components/sections/conversion/Pricing';
import ConversionFooter from '../components/ui/ConversionFooter';

export default function ConversionPage() {
    const [currentBg, setCurrentBg] = useState({
        from: '#f8f8ff',
        via: '#f8f8ff',
        to: '#f8f8ff'
    });

    return (
        <main className="relative w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            
            <motion.div
                className="fixed -top-[10vh] left-0 -z-10 h-[120vh] w-full pointer-events-none"
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
            <div className="snap-start w-full"><Hero setBg={setCurrentBg} /></div>
            <div className="snap-start w-full"><Service setBg={setCurrentBg} /></div>
            <div className="snap-start w-full"><Search setBg={setCurrentBg} /></div>
            <div className="snap-start w-full"><Legitimacy setBg={setCurrentBg} /></div>
            <div className="snap-start w-full"><Problem setBg={setCurrentBg} /></div>
            <div className="snap-start w-full"><Clients setBg={setCurrentBg}/></div>
            <div className="snap-start w-full"><FAQ setBg={setCurrentBg}/></div>
            <div className="snap-start w-full"><Pricing setBg={setCurrentBg}/></div>
            <div className="snap-start w-full"><ConversionFooter /></div>
            
        </main>
    );
}