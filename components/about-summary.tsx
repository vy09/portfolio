"use client";

import { Star } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
            <Star className="w-4 h-4" />
            ABOUT ME
          </span>
        </div>

        <p className="mx-auto text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl text-white">
          I'm Devraj Chatrin, with over 5+ years of experience in design &
          development
        </p>

        <p className="mt-6 mx-auto text-lg sm:text-xl max-w-3xl text-muted-foreground leading-relaxed">
          with strong focus on producing high quality & impactful digital
          experiences. I have worked with some of the most innovative industry
          leaders to help build their top-notch products.
        </p>
      </div>
    </section>
  );
}
