"use client";
import Navbar from "@/components/Navbar/navbar";
import Contact from "@/components/Contact/contact";
import Footer from "@/components/Footer/footer";

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
