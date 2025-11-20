"use client";
import Navbar from "@/components/Navbar/navbar";
import Hero from "@/components/Hero/hero";
import Tools from "@/components/Tools/tools";
import Certificated from "@/components/Certificated/certificated";
import Footer from "@/components/Footer/footer";
import About from "@/components/About/aboutme";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Hero />
        <About/>
        <Tools />
        <Certificated />
      </main>
      <Footer />
    </div>
  );
}
