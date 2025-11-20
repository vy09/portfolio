"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

interface Cert {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
}

const SAMPLE_CERTS: Cert[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "Jun 2024",
    link: "#",
    image: "/assets/cert-fcc.png",
  },
  {
    id: 2,
    title: "React - The Complete Guide",
    issuer: "Udemy",
    date: "Jan 2023",
    link: "#",
    image: "/assets/cert-react.png",
  },
  {
    id: 3,
    title: "Cloud Fundamentals",
    issuer: "Coursera",
    date: "Sep 2022",
    link: "#",
  },
];

export default function Certificated() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Certificates</h2>

          <p className="text-muted-foreground mb-8">
            Selected certificates and trainings — click View to open the
            original certificate or verification page.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_CERTS.map((c) => (
              <article
                key={c.id}
                className="group bg-card rounded-lg border border-border p-4 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-12 flex-shrink-0 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                    {c.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-sm text-muted-foreground px-2">
                        Cert
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {c.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mt-1">
                      {c.issuer} • {c.date}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Verification
                  </div>
                  {c.link ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-foreground"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      No link
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
