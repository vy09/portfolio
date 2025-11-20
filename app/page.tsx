"use client";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Tools from "@/components/tools";
import Certificated from "@/components/certificated";
import Footer from "@/components/footer";
import About from "@/components/about-summary";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Hero />
        <About />
        <Tools />
        <Certificated />
      </main>
      <Footer />
    </div>
  );
}
