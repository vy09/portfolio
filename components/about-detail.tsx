"use client";

import { useEffect, useRef, useState } from "react";
import ProfileCard from "../ui/ReactBits/ProfileCard";
// Global background moved to layout; About uses the global background

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
          <div className="group relative p-8 sm:p-12 rounded-2xl bg-transparent border border-border hover:border-accent transition-all duration-200 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left side - Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    About Me
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    seorang Software Engineer dengan keahlian dalam pengembangan
                    aplikasi web modern, khususnya menggunakan Laravel,
                    JavaScript, dan React.js. Berbekal pengalaman dalam proyek
                    akademik dan program MSIB, saya terbiasa membangun sistem
                    yang responsif, terstruktur, dan berorientasi pada kebutuhan
                    pengguna.Selama perjalanan studi dan pengembangan karier,
                    saya berperan dalam berbagai proyek mulai dari sistem
                    informasi keuangan, aplikasi berbasis peta tematik, hingga
                    aplikasi mobile menggunakan Kotlin. Saya juga memiliki
                    kemampuan analitis yang kuat, pemahaman UI/UX, serta
                    pengalaman bekerja dalam tim dengan metode agile dan
                    SCRUM.Bagi saya, teknologi bukan sekadar menulis kode,
                    tetapi bagaimana menciptakan solusi digital yang efektif,
                    mudah digunakan, dan memberikan dampak nyata bagi pengguna.
                    Dengan lebih dari 20 proyek yang telah saya kerjakan, saya
                    terus mengembangkan kemampuan untuk menghadirkan aplikasi
                    yang modern, berkualitas, dan sesuai kebutuhan industri.
                  </p>
                </div>

                {/* Statistics */}
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
              </div>

              <div className="flex justify-center lg:justify-end">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
