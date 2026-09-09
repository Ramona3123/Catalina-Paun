import React from "react";
import { Image } from "@/components/ui/image";

const stats = [
{ value: "15+", label: "Ani de experiență" },
{ value: "3", label: "Domenii de beauty" },
{ value: "100%", label: "Atenție pentru fiecare\u00A0clientă" }];


export default function About() {
  return (
    <section id="about" className="relative bg-alabaster py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative h-80 md:h-[34rem] overflow-hidden rounded-sm order-2 md:order-1">
          <Image src="https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/c033a3203_1.jpeg"

          alt="The atelier studio"
          fittingType="fill"
          className="lume-img w-full h-full object-cover" />
          
        </div>
        <div className="order-1 md:order-2">
          <p className="font-mono-label text-[11px] uppercase tracking-label text-bronze mb-4">
            Despre Noi
          </p>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-obsidian leading-[1.08] tracking-tight">
            Frumusețea ta<br />
            <span className="italic text-bronze">în fiecare detaliu</span>
          </h2>
          <p className="mt-8 text-obsidian/70 text-lg leading-relaxed">
            Salonul nostru este dedicat frumuseții și îngrijirii, unde punem accent
            pe naturalețe, eleganță și rezultate care te fac să te simți bine în
            propria piele.
          </p>
          <p className="mt-5 text-obsidian/65 leading-relaxed">
            Suntem specializați în servicii pentru gene, sprâncene și îngrijirea
            corpului, oferind o experiență atentă și personalizată pentru fiecare
            clientă.
          </p>
          <p className="mt-5 text-obsidian/65 leading-relaxed">
            Credem că frumusețea stă în detalii. De aceea, fiecare serviciu este
            realizat cu grijă, profesionalism și atenție la nevoile tale.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-8 rounded">
            {stats.map((s) =>
            <div key={s.label}>
                <p className="font-heading text-4xl md:text-5xl text-bronze text-center">{s.value}</p>
                <p className="font-mono-label text-[10px] uppercase tracking-label text-obsidian/50 text-center mt-2">
                  {s.label}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}