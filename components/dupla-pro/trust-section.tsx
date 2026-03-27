"use client"

import { Shield, Lock, CheckCircle } from "lucide-react"

const trustItems = [
  {
    icon: Lock,
    title: "Pagamentos Seguros",
    description: "Todas as transações são protegidas com criptografia de ponta a ponta",
  },
  {
    icon: Shield,
    title: "Dinheiro Liberado Após Partida",
    description: "O atleta só recebe depois que você confirmar a realização do serviço",
  },
  {
    icon: CheckCircle,
    title: "Plataforma Confiável",
    description: "Milhares de jogadores e atletas confiam na Dupla Pro todos os dias",
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 md:py-32 bg-dupla-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dupla-orange/20 text-dupla-orange rounded-full text-sm font-semibold mb-4">
            Segurança
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-white mb-4 text-balance">
            Jogue com tranquilidade
          </h2>
          <p className="text-dupla-white/70 text-lg max-w-2xl mx-auto">
            Sua segurança é nossa prioridade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="w-20 h-20 bg-dupla-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-10 h-10 text-dupla-orange" />
              </div>
              <h3 className="text-xl font-bold text-dupla-white mb-3">
                {item.title}
              </h3>
              <p className="text-dupla-white/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
