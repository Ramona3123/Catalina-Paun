import React from "react";

const categories = [
{
  id: "01",
  title: "Sprâncene & Gene",
  items: [
  { name: "Stilizare sprâncene (forma)", price: "50" },
  { name: "Stilizare sprâncene întreținere", price: "40" },
  { name: "Stilizare sprâncene + vopsit", price: "70" },
  { name: "Laminare sprâncene", price: "150" },
  { name: "Laminare gene", price: "120" },
  { name: "Pachet laminare gene + sprâncene", price: "250" }]

},
{
  id: "02",
  title: "Micropigmentare",
  items: [
  { name: "Micropigmentare sprâncene powder / fir cu fir", price: "900" },
  { name: "Micropigmentare buze", price: "900" },
  { name: "Micropigmentare eyeliner", price: "900" },
  { name: "Retuș / Îndepărtare tatuaj laser", price: "300" }]

},
{
  id: "03",
  title: "Tratamente Corporale",
  items: [
  { name: "Drenaj limfatic", price: "90" },
  { name: "Abonament 10 ședințe drenaj", price: "700" },
  { name: "Vibromasaj", price: "90" },
  { name: "Abonament 10 ședințe vibromasaj", price: "700" }]

},
{
  id: "04",
  title: "Tratamente Faciale",
  items: [
  { name: "Mască LED", price: "90" },
  { name: "Abonament 10 ședințe mască LED", price: "900" }]

}];


export default function Services() {
  return (
    <section id="services" className="relative bg-alabaster py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 md:mb-24 border-b border-hairline pb-8">
          <div>
            <p className="font-mono-label text-[11px] uppercase tracking-label text-bronze mb-4">
              Serviciile Noastre
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-obsidian">
              Proceduri &amp; <span className="italic">Prețuri</span>
            </h2>
          </div>
          

          
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
          {categories.map((cat) =>
          <div key={cat.id}>
              <div className="flex items-baseline gap-4 border-b border-hairline pb-5 mb-2">
                <span className="font-mono-label text-[11px] text-bronze">{cat.id}</span>
                <h3 className="font-heading text-3xl md:text-4xl text-obsidian">
                  {cat.title}
                </h3>
              </div>
              {cat.items.map((it, i) =>
            <div
              key={i}
              className="group flex items-baseline justify-between gap-4 border-b border-hairline py-5 transition-colors">
              
                  <p className="font-body text-base md:text-lg text-obsidian/85 group-hover:text-bronze transition-colors duration-500">
                    {it.name}
                  </p>
                  <div className="flex-1 mx-3 border-b border-dotted border-obsidian/20 translate-y-[-3px]" />
                  <span className="font-heading text-xl md:text-2xl text-obsidian whitespace-nowrap">
                    {it.price}
                    <span className="font-mono-label text-[10px] uppercase tracking-label text-obsidian/40 ml-1">lei</span>
                  </span>
                </div>
            )}
            </div>
          )}
        </div>

        

        
      </div>
    </section>);

}