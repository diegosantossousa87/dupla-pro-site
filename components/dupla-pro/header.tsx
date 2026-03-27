"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dupla-blue/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/dupla-pro-logo.png"
              alt="Dupla Pro"
              width={200}
              height={76}
              className="w-logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#como-funciona" className="text-dupla-white/80 hover:text-dupla-orange transition-colors text-sm font-medium">
              Como Funciona
            </Link>
            <Link href="#atletas" className="text-dupla-white/80 hover:text-dupla-orange transition-colors text-sm font-medium">
              Atletas
            </Link>
            <Link href="#servicos" className="text-dupla-white/80 hover:text-dupla-orange transition-colors text-sm font-medium">
              Serviços
            </Link>
            <Link href="#contato" className="text-dupla-white/80 hover:text-dupla-orange transition-colors text-sm font-medium">
              Contato
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-dupla-white hover:text-dupla-orange hover:bg-dupla-white/10">
              Entrar
            </Button>
            <Button className="bg-dupla-orange hover:bg-dupla-orange-light text-dupla-white font-semibold">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-dupla-white p-2"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-dupla-white/10">
            <nav className="flex flex-col gap-4">
              <Link href="#como-funciona" className="text-dupla-white/80 hover:text-dupla-orange transition-colors py-2">
                Como Funciona
              </Link>
              <Link href="#atletas" className="text-dupla-white/80 hover:text-dupla-orange transition-colors py-2">
                Atletas
              </Link>
              <Link href="#servicos" className="text-dupla-white/80 hover:text-dupla-orange transition-colors py-2">
                Serviços
              </Link>
              <Link href="#contato" className="text-dupla-white/80 hover:text-dupla-orange transition-colors py-2">
                Contato
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="text-dupla-white hover:text-dupla-orange hover:bg-dupla-white/10 w-full justify-center">
                  Entrar
                </Button>
                <Button className="bg-dupla-orange hover:bg-dupla-orange-light text-dupla-white font-semibold w-full">
                  Começar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
