"use client";

import { useEffect, useRef, useState } from "react";
import ProfileCard from "./ui/ReactBits/ProfileCard";
import { Sparkles } from "lucide-react";
// Global background moved to layout; About uses the global background

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const skills = [
    { name: "TypeScript", icon: "TS" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "N" },
    { name: "Angular", icon: "A" },
    { name: "Redux", icon: "🔄" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "ex" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Laravel", icon: "🔺" },
    { name: "PHP", icon: "🐘" },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "MSIB Batch 7",
      period: "Aug 2024 — Present",
      icon: "🚀",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      period: "Jan 2023 — Present",
      icon: "💼",
    },
    {
      title: "Web Developer Intern",
      company: "University Projects",
      period: "Feb 2022 — Dec 2023",
      icon: "🎓",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Right side - ProfileCard */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="w-full max-w-[min(100%,360px)]">
                <ProfileCard
                  name="Luvy M Riski"
                  title="Software Engineer"
                  handle="LuvyMuhammadRiski"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/assets/About/aboutprofile.png"
                  miniAvatarUrl="/assets/About/profile2.jpeg"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </div>

            {/* Left side - Content */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  About Me
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  seorang Software Engineer dengan keahlian dalam pengembangan
                  aplikasi web modern, khususnya menggunakan Laravel,
                  JavaScript, dan React.js. Berbekal pengalaman dalam proyek
                  akademik dan program MSIB, saya terbiasa membangun sistem yang
                  responsif, terstruktur, dan berorientasi pada kebutuhan
                  pengguna.Selama perjalanan studi dan pengembangan karier, saya
                  berperan dalam berbagai proyek mulai dari sistem informasi
                  keuangan, aplikasi berbasis peta tematik, hingga aplikasi
                  mobile menggunakan Kotlin. Saya juga memiliki kemampuan
                  analitis yang kuat, pemahaman UI/UX, serta pengalaman bekerja
                  dalam tim dengan metode agile dan SCRUM.Bagi saya, teknologi
                  bukan sekadar menulis kode, tetapi bagaimana menciptakan
                  solusi digital yang efektif, mudah digunakan, dan memberikan
                  dampak nyata bagi pengguna. Dengan lebih dari 20 proyek yang
                  telah saya kerjakan, saya terus mengembangkan kemampuan untuk
                  menghadirkan aplikasi yang modern, berkualitas, dan sesuai
                  kebutuhan industri.
                </p>
              </div>

              {/* Statistics and Resume Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="grid grid-cols-2 gap-10 sm:gap-8">
                  <div className="space-y-2">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      20+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Project Finished
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      3+
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Years of Experience
                    </p>
                  </div>
                </div>

                {/* Resume Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full transition-all duration-300 font-medium text-sm whitespace-nowrap"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>

          {/* Skills Scrolling Section */}
          <div className="mt-16 relative overflow-hidden py-8">
            <div className="flex animate-scroll gap-4">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full whitespace-nowrap"
                >
                  <span className="text-sm">{skill.icon}</span>
                  <span className="text-sm text-white/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Title */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-400">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wider uppercase">
                  Work History
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold">Experience</h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                I have worked with some of the most innovative industry leaders
                to help build their top-notch products.
              </p>
            </div>

            {/* Right side - Experience list */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-800/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-xl">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      @{exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
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
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
