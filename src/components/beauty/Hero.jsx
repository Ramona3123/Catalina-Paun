import React from "react";
import { Image } from "@/components/ui/image";

export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* Left: macro portrait */}
      <div className="relative w-full md:w-1/2 h-[55vh] md:h-screen overflow-hidden">
        <Image
          src="https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/2d251f92a_cataprofil.jpeg"
          alt="Cătălina Păun - specialist sprâncene și gene"
          fittingType="fill"
          className="lume-img absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent" />
      </div>

      {/* Right: value proposition */}
      <div className="relative w-full md:w-1/2 flex items-center px-8 md:px-16 lg:px-24 py-20 md:py-0">
        <div className="max-w-xl">
          <p className="font-mono-label text-[11px] uppercase tracking-label text-bronze mb-6 hidden">
            Beauty Atelier — Est. 2019
          </p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-obsidian text-center">
            Ritualul<br />
            <span className="italic text-bronze">frumuseții</span> tale.
          </h1>
          <p className="mt-8 text-obsidian/70 text-lg leading-relaxed max-w-md text-center">
            Un spațiu dedicat frumuseții, răsfățului și transformării. Fiecare serviciu
            este creat cu atenție la detalii, pentru ca tu să te simți încrezătoare,
            elegantă și specială.
          </p>
          <div className="mt-10 flex flex-row flex-nowrap items-center gap-5">
            <a
              href="#services"
              className="font-mono-label text-[11px] uppercase tracking-label text-alabaster bg-obsidian px-8 py-4 rounded-full hover:bg-bronze transition-colors">
              
              Descoperă serviciile
            </a>
            <a
              href="#gallery"
              className="font-mono-label text-[11px] uppercase tracking-label text-obsidian border-b border-obsidian/40 pb-1 hover:text-bronze hover:border-bronze transition-colors">
              
              Vezi transformările
            </a>
          </div>
        </div>

      </div>
    </section>);

}