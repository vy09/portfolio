"use client";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects-details";
import Footer from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div>
      <Navbar />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
