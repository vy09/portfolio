"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Instagram, Star } from "lucide-react";
import DarkVeil from "./ui/ReactBits/DarkVeil";
import TiltedCard from "./ui/ReactBits/TiltedCard";
import RotatingText from "./ui/ReactBits/RotatingText";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Ensure the site starts in dark mode
  useEffect(() => {
    try {
      document.documentElement.classList.add("dark");
    } catch (e) {
      // noop in non-browser environments
    }
  }, []);

  const skills = [
    "Full-Stack Development",
    "✦",
    "UI/UX Design",
    "✦",
    "React & Next.js",
    "✦",
    "Laravel & PHP",
    "✦",
    "Mobile Development",
    "✦",
    "API Integration",
    "✦",
    "Database Design",
    "✦",
    "Cloud Solutions",
  ];

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

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <DarkVeil
          hueShift={6}
          noiseIntensity={0.01}
          scanlineIntensity={0.0}
          speed={0.45}
          scanlineFrequency={0.0}
          warpAmount={0.02}
          resolutionScale={1}
        />
      </div>

      <div
        className={`relative z-10 w-full max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left column - text content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Greeting */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium tracking-wide text-white">
                Hey! I'm Luvy Muhammad Riski
              </span>
            </div>
            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Welcome My Portfolio
            </h1>

            {/* Rotating status text */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-medium">
              <span className="text-muted-foreground">I am ready for</span>
              <RotatingText
                texts={[
                  "Web Development",
                  "Mobile Development",
                  "Full-Stack Projects",
                ]}
                mainClassName="inline-flex px-3 sm:px-4 md:px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg shadow-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I collaborate with teams globally to create pixel-perfect,
              engaging, and scalable digital experiences that drive results and
              achieve business goals through modern technologies and
              user-centered design.
            </p>
            {/* Social links and CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/luvymuhammadriski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="hidden sm:inline">LINKEDIN</span>
                </a>
                <a
                  href="https://github.com/vy09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                  <span className="hidden sm:inline">GITHUB</span>
                </a>
                <a
                  href="https://www.instagram.com/vxy.co_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="hidden sm:inline">INSTAGRAM</span>
                </a>
                <a
                  href="mailto:your@email.com"
                  className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">EMAIL</span>
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="/about"
                className="px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full transition-all duration-300 font-medium text-sm"
              >
                Know me better
              </a>
            </div>
          </div>

          {/* Right column - TiltedCard */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px]">
              <TiltedCard
                imageSrc="/assets/About/profile2.jpeg"
                altText="Luvy Muhammad Riski"
                captionText="Luvy Muhammad Riski"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="350px"
                rotateAmplitude={12}
                scaleOnHover={1.08}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
          </div>
        </div>

        {/* Scrolling skills/tags at bottom */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-muted-foreground text-lg font-medium px-4"
              >
                {skill}
              </span>
            ))}
            {skills.map((skill, index) => (
              <span
                key={`duplicate-${index}`}
                className="text-muted-foreground text-lg font-medium px-4"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
