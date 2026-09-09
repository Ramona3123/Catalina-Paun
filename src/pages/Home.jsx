import React from "react";
import Nav from "@/components/beauty/Nav";
import Hero from "@/components/beauty/Hero";
import Services from "@/components/beauty/Services";
import Gallery from "@/components/beauty/Gallery";
import About from "@/components/beauty/About";
import Contact from "@/components/beauty/Contact";
import Footer from "@/components/beauty/Footer";

export default function Home() {
  return (
    <div className="bg-alabaster">
      <Nav />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}