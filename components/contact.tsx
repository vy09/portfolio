"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const messages = [
    {
      id: 1,
      author: "John Doe",
      text: "Wow quick Prompt Generation! Suprised during all team Particuliers happy message quote",
    },
    { id: 2, author: "Sarah Smith", text: "Excellent client work! Amazing and great output." },
    { id: 3, author: "Mike Johnson", text: "Very Impressive work for much being" },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">Lets collaborate and create something amazing together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chat Room Section */}
          <div
            className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="rounded-2xl bg-transparent backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <h3 className="text-xl font-semibold">Chat Room</h3>
              </div>

              {/* Messages */}
              <div className="space-y-6 mb-8 max-h-96 overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex-shrink-0 flex items-center justify-center text-sm font-medium text-primary">
                      {msg.author.charAt(0)}
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 border border-border/50">
                      <p className="text-sm font-medium text-foreground mb-1">{msg.author}</p>
                      <p className="text-sm text-muted-foreground">{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Login Button */}
              <button className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all-smooth flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Login with Google
              </button>
              <p className="text-xs text-muted-foreground text-center mt-3">Login order messenger-patron</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="rounded-2xl bg-transparent backdrop-blur-sm p-8 h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all-smooth text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all-smooth text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all-smooth text-foreground placeholder:text-muted-foreground resize-none"
                    required
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 text-primary-foreground rounded-lg font-medium transition-all-smooth flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
