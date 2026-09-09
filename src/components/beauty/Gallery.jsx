import React, { useState } from "react";
import { Image } from "@/components/ui/image";
import { X } from "lucide-react";

const items = [
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/740c89c95_Image.png",
    quote: "Sprâncene powder proaspăt realizate, cu textură densă și contur definit.",
    name: "Sprâncene powder",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/71c63f314_FAE893E2-A10F-420C-B9FE-1FB4FEB305DC.jpeg",
    quote: "Buze cu un colorit natural și o strălucire care durează. Un tratament delicat și precis.",
    name: "Micropigmentare buze",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/1af88d93c_Image.png",
    quote: "Microblading cu fire de păr naturale, pentru sprâncene pline și armonioase.",
    name: "Microblading sprâncene",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/9c3ffb38e_6.jpeg",
    quote: "Contur bine definit și o nuanță care se potrivește natural cu tenul tău.",
    name: "Contur & pigmentare buze",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/753f4c663_7.jpeg",
    quote: "Înainte și după: sprâncene mai definite și gene mai ridicate, într-o singură sesiune.",
    name: "Sprâncene & Gene",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/8c8de8282_5.jpeg",
    quote: "Trăsături fine și precise, create prin tehnica microblading cu fire de păr naturale.",
    name: "Microblading",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/06fb984c6_4.jpeg",
    quote: "Eyeliner permanent cu un gradient moale, perfect definit pe linia genelor.",
    name: "Eyeliner permanent",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/d5d28ead7_3.jpeg",
    quote: "Înainte și după: laminarea sprâncenelor și lash lift pentru un look ridicat și definit.",
    name: "Laminare & Lash lift",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/f348534ec_8.jpeg",
    quote: "Sprâncene armonioase și gene ridicate, rezultat al atenției la fiecare detaliu.",
    name: "Finalizare look",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/c5587b4c8_12.jpeg",
    quote: "Terapie facială cu lumină LED pentru regenerare, strălucire și revitalizarea tenului.",
    name: "Terapie cu lumină LED",
  },
  {
    img: "https://media.base44.com/images/public/6a7cb5cc0ef68a7cbe6eed6f/d4649beae_drenaj-limfatic-prin-preso-1.jpg",
    quote: "Drenaj limfatic prin presoterapie pentru detoxifiere, relaxare și tonifiere corporală.",
    name: "Drenaj limfatic",
  },
];

export default function Gallery() {
  const [active, setActive] = useState(null);
  const loop = [...items, ...items];

  return (
    <section id="gallery" className="relative bg-obsidian py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-16">
        <p className="font-mono-label text-[11px] uppercase tracking-label text-bronze mb-4">
          Galeria Noastră
        </p>
        <h2 className="font-heading text-5xl md:text-6xl text-alabaster">
          Frumusețe creată cu <span className="italic">pasiune</span>.
        </h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee w-max">
          {loop.map((it, i) => (
            <button
              key={i}
              onClick={() => setActive(it)}
              className="relative w-72 h-96 shrink-0 overflow-hidden rounded-sm group"
            >
              <Image
                src={it.img}
                alt={it.name}
                fittingType="fill"
                className="lume-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-5 left-5 font-mono-label text-[10px] uppercase tracking-label text-alabaster opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Vezi fotografia
              </span>
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-obsidian to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-obsidian to-transparent" />
      </div>

      {/* Expanded testimonial overlay */}
      {active && (
        <div
          className="fixed inset-0 z-[70] bg-obsidian/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-8 right-8 text-alabaster/70 hover:text-alabaster"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={26} />
          </button>
          <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
            <div className="relative h-80 md:h-[28rem] overflow-hidden rounded-sm">
              <Image
                src={active.img}
                alt={active.name}
                fittingType="fill"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl italic text-alabaster leading-snug">
                “{active.quote}”
              </p>
              <p className="mt-8 font-mono-label text-[11px] uppercase tracking-label text-bronze">
                — {active.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}