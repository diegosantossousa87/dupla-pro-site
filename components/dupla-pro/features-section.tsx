"use client"

import { MapPin, Star, CalendarCheck, CreditCard, Bell, Shield } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Busca por localização",
    description: "Encontre atletas próximos usando GPS para facilitar sua vida",
  },
  {
    icon: Star,
    title: "Perfis com avaliações",
    description: "Veja reviews e notas de outros jogadores antes de agendar",
  },
  {
    icon: CalendarCheck,
    title: "Agendamento fácil",
    description: "Sistema intuitivo para marcar partidas em poucos cliques",
  },
  {
    icon: CreditCard,
    title: "Pagamentos seguros",
    description: "Pague com Pix ou cartão de crédito com total segurança",
  },
  {
    icon: Bell,
    title: "Notificações inteligentes",
    description: "Receba lembretes e atualizações sobre seus agendamentos",
  },
  {
    icon: Shield,
    title: "Plataforma confiável",
    description: "Atletas verificados e sistema de proteção ao usuário",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-dupla-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dupla-orange/20 text-dupla-orange rounded-full text-sm font-semibold mb-4">
            Recursos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-white mb-4 text-balance">
            Tudo que você precisa
          </h2>
          <p className="text-dupla-white/70 text-lg max-w-2xl mx-auto">
            Funcionalidades pensadas para tornar sua experiência simples e segura
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-dupla-white/5 backdrop-blur-sm border border-dupla-white/10 rounded-2xl p-6 hover:bg-dupla-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-dupla-orange/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-dupla-orange group-hover:scale-110 transition-all">
                <feature.icon className="w-6 h-6 text-dupla-orange group-hover:text-dupla-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-dupla-white mb-2">
                {feature.title}
              </h3>
              <p className="text-dupla-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
