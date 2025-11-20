"use client";
import Navbar from "@/components/Navbar/navbar";
import About from "@/components/DetailAbout/about";
import Footer from "@/components/Footer/footer";

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <About />
      </main>
      <Footer />
    </div>
  );
}
