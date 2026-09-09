import React from "react";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian text-alabaster overflow-hidden">
      <div className="px-6 md:px-12 pt-24 pb-10">
        <h2 className="font-heading text-[15vw] md:text-[12vw] leading-[0.9] tracking-tight text-alabaster/95 select-none">
          Cătălina <span className="text-bronze italic">Păun</span>
        </h2>
        <p className="mt-6 max-w-xl text-alabaster/60 leading-relaxed text-base">
          PMU &amp; Brows Specialist — armonie naturală și precizie pentru sprâncenele tale.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10 border-t border-alabaster/15 pt-10">
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-label text-bronze mb-3">Adresă</p>
            <p className="text-alabaster/70">Bulevardul Cosminului, bloc T3<br />Slobozia, Ialomița</p>
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-label text-bronze mb-3">Program</p>
            <p className="text-alabaster/70">Luni–Vineri</p>
          </div>
          <div>
            <p className="font-mono-label text-[10px] uppercase tracking-label text-bronze mb-3">Conectează-te cu noi</p>
            <div className="flex gap-4 px-12">
              <a href="https://www.instagram.com/paunionelacatalina" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-alabaster/70 hover:text-bronze transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/share/14i5UJA7vEH/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-alabaster/70 hover:text-bronze transition-colors"><Facebook size={20} /></a>
              

              
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between gap-4 font-mono-label text-[10px] uppercase tracking-label text-alabaster/40">
          <span>© {new Date().getFullYear()} Cătălina Păun</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bronze transition-colors">Privacy</a>
            <a href="#" className="hover:text-bronze transition-colors">Terms</a>
            <span>Crafted with light</span>
          </div>
        </div>
      </div>
    </footer>);

}