"use client";
import Navbar from "@/components/navbar";
import About from "@/components/about-detail";
import Footer from "@/components/footer";

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
