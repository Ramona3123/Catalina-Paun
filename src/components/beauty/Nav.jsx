import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicii", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Despre", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-[#FBFBF9]/70 border-b border-hairline" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 h-20">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-heading text-2xl tracking-wide text-obsidian cursor-pointer"
          >
            Cătălina <span className="text-bronze italic">Păun</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-label text-[11px] uppercase tracking-label text-obsidian/70 hover:text-bronze transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-obsidian"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Slide-in veil menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-obsidian/30 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-[#FBFBF9]/95 backdrop-blur-2xl border-l border-hairline transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-8 h-20 border-b border-hairline">
            <span className="font-heading text-2xl">Cătălina <span className="text-bronze italic">Păun</span></span>
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-obsidian">
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-col px-8 py-10 gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-heading text-4xl text-obsidian hover:text-bronze transition-colors"
              >
                {l.label}
              </a>
            ))}

          </div>
        </aside>
      </div>
    </>
  );
}