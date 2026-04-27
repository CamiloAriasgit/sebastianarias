'use client';
import { useEffect, useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { ArrowLeft, EllipsisVertical, ChevronDown, Phone } from "lucide-react";

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
                className="w-full md:w-[500px] min-h-[500px] md:aspect-[4/5] relative rounded-2xl overflow-hidden shadow-2xl p-2 bg-black/90"
            >
                <div className="absolute top-2 bottom-2 left-2 right-2 mx-10 rounded-xl flex flex-col bg-white">
                    <div className="bg-amber-600 h-4 w-full rounded-t-xl">

                    </div>
                    <div className='bg-[#273443] h-11 w-full flex items-center justify-between p-1'>
                        <div className='flex items-center'>
                            <ArrowLeft className="h-3 w-3 text-white" />
                            <img
                                src="https://cdnhomecare.ca/wp-content/uploads/2023/01/Alex-Mihailidis_headshot-1-1.jpg"
                                alt="Profile"
                                className="h-5 w-5 rounded-full ml-2"
                            />
                            <h1 className='text-neutral-200 pl-2 text-xs'>Alex</h1>
                        </div>
                        <div className="h-8 w-30 flex items-center justify-end gap-1">
                            <Phone className="h-3 w-3 text-white" />
                            <ChevronDown className="h-2 w-2 text-white" />
                            <EllipsisVertical className="h-3 w-3 text-white" />
                        </div>

                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-40 p-6 md:p-8 rounded-lg flex flex-col gap-5 md:gap-6 m-2 bg-gradient-to-b from-[#3a5b94] to-[#6b82a8]">


                </div>
            </motion.div>
        </section>
    );
}