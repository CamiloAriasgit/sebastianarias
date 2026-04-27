"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/573235619283?text=Hola%20Sebastian%2C%20vengo%20de%20tu%20sitio%20web.%20Tengo%20una%20idea%20de%20proyecto%20y%20me%20gustar%C3%ADa%20discutir%20c%C3%B3mo%20podemos%20construir%20un%20sistema%20que%20escale%20mi%20negocio.";

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sebastian-arias-14646831a", icon: "/social/linkedin.png" },
    { name: "Instagram", href: "https://www.instagram.com/sebastianariasbe?igsh=aHhwaWF4cnRnNjBm", icon: "/social/instagram.webp" },
    { name: "Facebook", href: "https://www.facebook.com/share/1KnkhR9p9R/", icon: "/social/facebook.png" },
  ];

  return (
    <footer className="w-full bg-black px-6 pb-12 pt-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          {/* Identidad Minimalista */}
          <div className="flex flex-col gap-1">
            <h2 className="text-white font-medium tracking-tight text-lg">
              Sebastian Arias
            </h2>
            <a href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400">Contactar</a>
            
          </div>

          {/* Redes Sociales Reducidas */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-xs font-medium text-white/40 transition-all hover:text-white"
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="h-4 w-4 opacity-50  group-hover:opacity-100 transition-all"
                />
                <span>{social.name}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-20 pt-8 border-t border-white/5 flex md:flex-row justify-between">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            Sebastian Arias
          </p>
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © {currentYear} 
          </p>
        </div>
      </div>
    </footer>
  );
}