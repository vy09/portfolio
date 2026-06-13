import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"


const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luvy Muhammad Riski - Portfolio",
  description: "Modern portfolio showcasing projects and expertise",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        

        {/* content should sit above the background */}
        <div className="relative z-10">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
