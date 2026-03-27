"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  platform: [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Para Jogadores", href: "#jogadores" },
    { label: "Para Atletas", href: "#atletas" },
    { label: "Serviços", href: "#servicos" },
  ],
  company: [
    { label: "Sobre Nós", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  support: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Contato", href: "#contato" },
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export default function Footer() {
  return (
    <footer id="contato" className="bg-dupla-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-dupla-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/dupla-pro-logo.png"
              alt="Dupla Pro"
              width={140}
              height={56}
              className="h-14 w-auto mb-6"
            />
            <p className="text-dupla-white/70 mb-6 max-w-sm leading-relaxed">
              A plataforma que conecta jogadores amadores com atletas profissionais de futevôlei em todo o Brasil.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-dupla-white/10 rounded-lg flex items-center justify-center hover:bg-dupla-orange transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-dupla-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-dupla-white mb-4">Plataforma</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-dupla-white/60 hover:text-dupla-orange transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dupla-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-dupla-white/60 hover:text-dupla-orange transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dupla-white mb-4">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-dupla-white/60 hover:text-dupla-orange transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dupla-white/50 text-sm">
            © 2026 Dupla Pro. Todos os direitos reservados.
          </p>
          <p className="text-dupla-white/50 text-sm">
            Feito com dedicação para o futevôlei brasileiro
          </p>
        </div>
      </div>
    </footer>
  )
}
