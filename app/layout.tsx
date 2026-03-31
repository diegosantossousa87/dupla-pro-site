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
  title: "Dupla Pro - Jogue com atletas avançados de futevôlei",
  description:
    "Encontre, agende e jogue com os melhores atletas de futevôlei. Rápido, seguro e simples.",

  icons: {
    icon: "images/dupla-pro-logo.png",        // padrão
    shortcut: "images/dupla-pro-logo.png",    // fallback
    apple: "images/dupla-pro-logo.png",       // iPhone/iPad
  },

  // 🚀 OPEN GRAPH (WhatsApp, Facebook, etc)
  openGraph: {
    title: "Dupla Pro",
    description: "Jogue com atletas avançados de futevôlei",
    url: "https://duplapro.com", 
    siteName: "Dupla Pro",
    images: [
      {
        url: "images/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Dupla Pro - Futevôlei",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dupla Pro",
    description: "Jogue com atletas avançados de futevôlei",
    images: ["images/og-image.png"],
  },

  metadataBase: new URL("https://duplapro.com"), 
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