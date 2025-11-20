"use client";
import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
