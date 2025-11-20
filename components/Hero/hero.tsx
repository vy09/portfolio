"use client";

import { useEffect, useState } from "react";
import DarkVeil from "../ui/ReactBits/DarkVeil";
import TiltedCard from "../ui/ReactBits/TiltedCard";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  // Ensure the site starts in dark mode and only switches to light when user clicks the scroll indicator
  useEffect(() => {
    try {
      document.documentElement.classList.add("dark");
    } catch (e) {
      // noop in non-browser environments
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 z-0">
        {/* DarkVeil background for hero section (positioned behind content) */}
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
        className={`relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Two-column layout: left = text/buttons, right = TiltedCard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left column - text and buttons */}
          <div className="order-2 lg:order-1 text-center lg:text-left px-4 lg:px-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Fullstack Developer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Full-stack developer crafting beautiful, performant digital
              experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all-smooth font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all-smooth font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right column - TiltedCard */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end px-4 lg:px-0">
            <div className="w-full max-w-[420px]">
              <TiltedCard
                imageSrc="/assets/About/profile2.jpeg"
                altText="Luvy Muhammad Riski"
                captionText="Luvy Muhammad Riski"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.3}
                showMobileWarning={false}
                showTooltip={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
