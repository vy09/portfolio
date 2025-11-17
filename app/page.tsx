"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Tools from "@/components/tools"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="bg-background text-foreground transition-colors duration-300">
        <Hero />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
