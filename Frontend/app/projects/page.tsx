"use client";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects-details";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  // Force dark mode on this page
  useEffect(() => {
    try {
      document.documentElement.classList.add("dark");
    } catch (e) {
      // noop in non-browser environments
    }
  }, []);

  return (
    <div className="dark">
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
