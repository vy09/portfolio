"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  bgColor: string;
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);
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
      title: "Aora",
      description:
        "A mobile-first application for discovering endless possibilities.",
      category: "Development",
      year: "2024",
      tags: ["React Native", "Expo", "Mobile"],
      link: "#",
      github: "#",
      image: "https://picsum.photos/seed/aora/600/800",
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
    },
    {
      id: 2,
      title: "Code Screenshot",
      description:
        "Beautiful code screenshot generator with syntax highlighting.",
      category: "Development & Design",
      year: "2024",
      tags: ["TypeScript", "Design Tools", "Web"],
      link: "#",
      github: "#",
      image: "https://picsum.photos/seed/code-ss/900/600",
      bgColor: "bg-gradient-to-br from-pink-200 to-pink-300",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Modern portfolio showcasing projects and expertise with elegant design.",
      category: "Design & Development",
      year: "2024",
      tags: ["Next.js", "React", "Tailwind CSS"],
      link: "#",
      github: "#",
      image: "https://picsum.photos/seed/portfolio/900/600",
      bgColor: "bg-gradient-to-br from-gray-200 to-gray-300",
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration and admin dashboard.",
      category: "Development",
      year: "2023",
      tags: ["Next.js", "PostgreSQL", "Stripe"],
      link: "#",
      github: "#",
      image: "https://picsum.photos/seed/ecommerce/900/600",
      bgColor: "bg-gradient-to-br from-emerald-200 to-emerald-300",
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Real-time weather tracking with beautiful UI and detailed forecasts.",
      category: "Development",
      year: "2023",
      tags: ["React", "API Integration", "PWA"],
      link: "#",
      github: "#",
      image: "https://picsum.photos/seed/weather/900/600",
      bgColor: "bg-gradient-to-br from-blue-200 to-blue-300",
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description:
        "Manage all your social accounts from one beautiful interface.",
      category: "Development",
      year: "2023",
      tags: ["Vue.js", "API", "Dashboard"],
      link: "#",
      github: "#",
      image: "https://picsum.photos/seed/social/900/600",
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-accent mb-6">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">
                MY WORK
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Selected Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Here's a curated selection showcasing my expertise and the
              achieved results.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  index === 0 || index === 3 ? "lg:row-span-2" : ""
                } ${project.bgColor}`}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full p-8 lg:p-12 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative z-10 w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between text-white/80 text-sm mb-4">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Hover Details */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full transition-all text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
