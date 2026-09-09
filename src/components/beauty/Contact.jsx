import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#F4F1EA] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono-label text-[11px] uppercase tracking-label text-bronze mb-4 hidden">
          The Atelier
        </p>
        <h2 className="font-heading text-5xl md:text-6xl text-obsidian">
          Hai să ne <span className="italic">cunoaștem</span>
        </h2>
        <p className="mt-5 text-obsidian/60 max-w-md mx-auto">
          Suntem aici pentru tine. Pentru programări, întrebări sau orice informație despre serviciile noastre, ne poți contacta cu drag.
        </p>

        <div className="mt-14 grid sm:grid-cols-3 gap-8">
          <a href="tel:+40761565222" className="group flex flex-col items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-alabaster border border-hairline flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-alabaster transition-colors">
              <Phone size={18} />
            </span>
            <p className="font-mono-label text-[10px] uppercase tracking-label text-obsidian/40">Telefon</p>
            <p className="font-heading text-xl text-obsidian group-hover:text-bronze transition-colors">0761 565 222</p>
          </a>
          <a href="mailto:paunionelacatalina@yahoo.com" className="group flex flex-col items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-alabaster border border-hairline flex items-center justify-center text-bronze group-hover:bg-bronze group-hover:text-alabaster transition-colors">
              <Mail size={18} />
            </span>
            <p className="font-mono-label text-[10px] uppercase tracking-label text-obsidian/40">Email</p>
            <p className="font-heading text-xl text-obsidian group-hover:text-bronze transition-colors">paunionelacatalina@yahoo.com</p>
          </a>
          <div className="group flex flex-col items-center gap-3">
            <span className="w-12 h-12 rounded-full bg-alabaster border border-hairline flex items-center justify-center text-bronze">
              <MapPin size={18} />
            </span>
            <p className="font-mono-label text-[10px] uppercase tracking-label text-obsidian/40">Adresă</p>
            <p className="font-heading text-xl text-obsidian">Slobozia, Ialomița</p>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/paunionelacatalina"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full bg-alabaster border border-hairline flex items-center justify-center text-bronze hover:bg-bronze hover:text-alabaster transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.facebook.com/share/14i5UJA7vEH/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-12 h-12 rounded-full bg-alabaster border border-hairline flex items-center justify-center text-bronze hover:bg-bronze hover:text-alabaster transition-colors"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </section>);

}