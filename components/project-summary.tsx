"use client";

import { Star } from "lucide-react";

const featuredProjects = [
  {
    id: 1,
    title: "Aora",
    category: "Development",
    year: "2024",
    image: "https://picsum.photos/seed/aora-mobile/400/600",
    bgColor: "from-black/20 to-black/10",
  },
  {
    id: 2,
    title: "Code Screenshot",
    category: "Development & Design",
    year: "2024",
    image: "https://picsum.photos/seed/code-editor/600/400",
    bgColor: "from-black/20 to-black/10",
  },
];

export default function ProjectSummary() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10">
        <div className="rounded-full border border-border/40 bg-background/50 backdrop-blur-sm px-2.5 sm:px-3 py-0.5 sm:py-1 flex items-center gap-1.5 sm:gap-2">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
          <span className="text-[10px] sm:text-xs font-medium tracking-wide">
            MY WORK
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-6 sm:mb-8 md:mb-10">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group relative rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br ${project.bgColor} backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 hover:scale-[1.01] sm:hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] mb-3 sm:mb-3.5 md:mb-4 rounded-lg sm:rounded-xl overflow-hidden bg-black/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-1 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground/80 line-clamp-1">
                  {project.category} · {project.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full transition-all duration-300 font-medium text-xs sm:text-sm md:text-base group"
        >
          <span>View All Projects</span>
          <span className="text-sm sm:text-base md:text-lg transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
