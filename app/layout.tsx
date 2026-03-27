import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dupla Pro - Jogue com atletas profissionais de futevôlei",
  description: "Encontre, agende e jogue com os melhores atletas de futevôlei. Rápido, seguro e simples.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0B1F3A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
