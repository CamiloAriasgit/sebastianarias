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
                className="w-full md:w-[500px] min-h-[350px] md:aspect-[1/1] relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-black/90"
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
                        <div className='flex items-center'>
                            <ArrowLeft className="h-3 w-3" />
                            <img
                                src="https://cdnhomecare.ca/wp-content/uploads/2023/01/Alex-Mihailidis_headshot-1-1.jpg"
                                alt="Profile"
                                className="h-5 w-5 rounded-full ml-2"
                            />
                            <h1 className='pl-2 text-xs'>Alex</h1>
                        </div>
                        <div className="h-8 w-30 flex items-center justify-end gap-1">
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

                <div className="absolute bottom-0 left-0 right-0 h-40 p-2  rounded-2xl flex items-end justify-center gap-1 md:gap-6 m-2 bg-blue-600">
                    <div className='bg-white h-full rounded-3xl p-4 md:p-8 w-80 flex '>
                        <h1>Lorem ipsum dolor sit amet, consectetur elit. Voluptate optio? Eos molestias optio eum ea ab corrupti ipsam?</h1>

                    </div>
                    <div className='bg-emerald-400 rounded-full flex items-center justify-center h-10 w-10'>
                        <Send className="h-5 w-5 text-white" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}