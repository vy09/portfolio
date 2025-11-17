"use client"

import { useEffect, useRef, useState } from "react"

interface Tool {
  name: string
  category: string
  icon: string
  color: string
}

const tools: Tool[] = [
  { name: "Visual Studio Code", category: "Code Editor", icon: "💻", color: "from-blue-500 to-cyan-500" },
  { name: "React.js", category: "Framework", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", category: "Framework", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨", color: "from-cyan-500 to-teal-500" },
  { name: "JavaScript", category: "Language", icon: "✨", color: "from-yellow-500 to-amber-500" },
  { name: "Accessibility", category: "Best Practice", icon: "♿", color: "from-purple-500 to-pink-500" },
  { name: "Adobe Illustrator", category: "Design Tool", icon: "🎭", color: "from-orange-500 to-red-500" },
  { name: "Canva", category: "Design Tool", icon: "🖼️", color: "from-cyan-400 to-teal-600" },
  { name: "Node.js", category: "Runtime", icon: "🟢", color: "from-green-500 to-emerald-500" },
  { name: "Figma", category: "Design Tool", icon: "🎨", color: "from-pink-500 to-purple-500" },
  { name: "GitHub", category: "Version Control", icon: "🐙", color: "from-gray-600 to-gray-900" },
  { name: "Kotlin", category: "Language", icon: "📱", color: "from-purple-600 to-pink-600" },
]

export default function Tools() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Tools & Technologies</h2>
          <p className="text-muted-foreground text-base md:text-lg">My Professional Skills</p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`group relative p-4 rounded-lg bg-transparent border border-border hover:border-accent transition-all-smooth cursor-pointer transform hover:scale-105 ${
                isVisible ? "animate-in fade-in-0 slide-in-from-bottom-4" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 50}ms` : "0ms",
                animationFillMode: "forwards",
              }}
            >
              {/* Icon Container with Gradient Background */}
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3 text-xl group-hover:scale-110 transition-all-smooth`}
              >
                {tool.icon}
              </div>

              {/* Tool Name */}
              <h3 className="font-semibold text-foreground text-sm md:text-base truncate">{tool.name}</h3>

              {/* Category */}
              <p className="text-xs md:text-sm text-muted-foreground">{tool.category}</p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity-smooth rounded-b-lg w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
