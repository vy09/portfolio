"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Carousel from "./Carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  images?: string[];
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced search capabilities.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
      images: [
        "https://picsum.photos/seed/p1-1/800/450",
        "https://picsum.photos/seed/p1-2/800/450",
        "https://picsum.photos/seed/p1-3/800/450",
        "https://picsum.photos/seed/p1-1/800/450",
      ],
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features.",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      link: "#",
      github: "#",
      images: [
        "https://picsum.photos/seed/p2-1/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p1-1/800/450",
      ],
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      tags: ["Next.js", "Firebase", "React", "Tailwind CSS"],
      link: "#",
      github: "#",
      images: [
        "https://picsum.photos/seed/p3-1/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p1-1/800/450",
      ],
    },
    {
      id: 4,
      title: "Modern E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced search capabilities.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      link: "#",
      github: "#",
      images: [
        "https://picsum.photos/seed/p1-1/800/450",
        "https://picsum.photos/seed/p1-2/800/450",
        "https://picsum.photos/seed/p1-3/800/450",
        "https://picsum.photos/seed/p1-1/800/450",
      ],
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with interactive charts, data visualization, and custom reporting features.",
      tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      link: "#",
      github: "#",
      images: [
        "https://picsum.photos/seed/p2-1/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p1-1/800/450",
      ],
    },
    {
      id: 6,
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      tags: ["Next.js", "Firebase", "React", "Tailwind CSS"],
      link: "#",
      github: "#",
      images: [
        "https://picsum.photos/seed/p3-1/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p2-2/800/450",
        "https://picsum.photos/seed/p1-1/800/450",
      ],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group p-6 bg-card rounded-lg border border-border hover:border-accent transition-all-smooth hover:shadow-lg hover:shadow-accent/10"
              >
                <Carousel
                  items={project.images?.map((img, idx) => ({
                    id: idx,
                    title: project.title,
                    description: project.description,
                    image: img,
                  }))}
                  baseWidth={320}
                />

                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-foreground hover:bg-accent rounded px-3 py-2 transition-all-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-foreground hover:bg-accent rounded px-3 py-2 transition-all-smooth"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
