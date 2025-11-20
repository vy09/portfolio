"use client";
import Navbar from "@/components/Navbar/navbar";
import Projects from "@/components/DetailProject/projects";
import Footer from "@/components/Footer/footer";

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
