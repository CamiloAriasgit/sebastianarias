'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { ArrowLeft, EllipsisVertical, ChevronDown, Phone, SignalHigh, BatteryLow, Send } from "lucide-react";

export default function Search({ setBg }: { setBg: (colors: any) => void }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    const colors = {
        from: "#4160aa",
        via: "#91a5b3",
        to: "#a78770"
    };

    useEffect(() => {
        if (isInView) setBg(colors);
    }, [isInView, setBg]);

    return (
        <section ref={ref} className="min-h-[100svh] flex flex-col md:flex-row items-center md:justify-between gap-12 px-6 md:px-12 max-w-7xl mx-auto py-20 md:py-0">
            <div className='flex flex-col items-start'>
                <span className="bg-white/5 rounded-full px-3 py-1 text-white/80 text-xs  shadow-inner shadow-white/20">
                    Cierra ventas
                </span>
                <h1 className="text-2xl md:text-6xl font-medium tracking-tight text-white py-4 leading-[1] max-w-xl">
                    Elimina la duda.<br />
                    Acelera el cierre.
                </h1>
                <p className="text-neutral-200 text-lg md:text-4xl tracking-tight max-w-xl font-light leading-[1.2] md:leading-[0.9]">
                    Convertimos el interés en conversación instantánea. Diseñamos puntos de contacto con mensajes predeterminados que eliminan la fricción del "primer saludo", permitiendo que tu cliente inicie la venta con un solo toque.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[500px] min-h-[350px] md:aspect-[1/1] relative overflow-hidden p-2"
            >
                <div
                    className="absolute top-2 bottom-2 left-2 right-2 mx-5 rounded-xl flex flex-col bg-white bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://static.tildacdn.pro/tild3739-3166-4235-b761-636238303962/background-whatsapp.jpg')" }}
                >
                    <div className="bg-white h-3 w-full text-gray-400 rounded-t-3xl flex justify-between px-2 pt-1">
                        <div className=" h-full flex items-center justify-start">
                            <h1 className='pl-2 text-[9px]'>9:41</h1>
                        </div>
                        <div className="flex items-center justify-end h-full  gap-1 pr-2">
                            <SignalHigh className="h-3 w-3" />
                            <BatteryLow className="h-3 w-3" />
                        </div>
                    </div>
                    <div className='bg-white w-full flex items-center justify-between text-neutral-700 px-1'>
                        {/* 1. Añadimos flex-1 y min-w-0 para que este div pueda encogerse si es necesario */}
                        <div className='flex items-center flex-1 min-w-0'>
                            <ArrowLeft className="h-3 w-3 shrink-0" />
                            <img
                                src="/images/conversion/HeadshotWp.png"
                                alt="Profile"
                                className="h-6 w-6 rounded-full ml-2 shrink-0"
                            />
                            {/* 2. whitespace-nowrap evita los dos renglones y truncate pone "..." si no cabe */}
                            <h1 className='pl-2 text-xs font-medium truncate whitespace-nowrap'>
                                Miguel Real Estate
                            </h1>
                        </div>

                        {/* 3. Nos aseguramos de que los iconos no se encojan nunca */}
                        <div className="h-8 flex items-center justify-end gap-1 shrink-0 ml-2">
                            <Phone className="h-3 w-3" />
                            <ChevronDown className="h-2 w-2" />
                            <EllipsisVertical className="h-3 w-3" />
                        </div>
                    </div>
                    <div className="h-7 w-full flex items-center justify-center">
                        <div className="bg-white rounded-full py-[0.5px] px-[5px]">
                            <h1 className="text-[11px] text-neutral-600">Hoy</h1>

                        </div>

                    </div>
                </div>

                <div className="absolute bg-white/10 backdrop-blur-md bottom-0 left-0 right-0 h-40 p-2 rounded-4xl flex items-end justify-center gap-1 md:gap-2 m-2">
                    <div className='bg-white h-full rounded-3xl p-4 md:p-5 flex flex-1'>
                        <h1 className='text-neutral-700 leading-[1.3]'>Hola, vengo de su web. Me interesó la propiedad en El Poblado y me gustaría agendar una visita. ¿Tienen disponibilidad hoy?</h1>

                    </div>
                    <div className='bg-emerald-400 rounded-full flex items-center shrink-0 justify-center h-10 w-10'>
                        <Send className="h-5 w-5 text-white" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}