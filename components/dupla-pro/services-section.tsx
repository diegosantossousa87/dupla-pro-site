"use client"

import { Users, GraduationCap, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Users,
    title: "Partidas",
    description: "Jogue ao lado de atletas profissionais em partidas emocionantes. Ideal para quem quer se divertir e melhorar jogando.",
    price: "A partir de R$ 80",
    features: ["Duração de 1-2 horas", "Nível adaptável", "Local combinado"],
    color: "bg-dupla-blue",
  },
  {
    icon: GraduationCap,
    title: "Treinos",
    description: "Sessões focadas em técnica e preparação física com acompanhamento personalizado do atleta.",
    price: "A partir de R$ 120",
    features: ["Feedback em tempo real", "Exercícios específicos", "Plano de evolução"],
    color: "bg-dupla-orange",
    featured: true,
  },
  {
    icon: Trophy,
    title: "Torneios",
    description: "Forme dupla com um profissional e participe de competições. Sinta a adrenalina de jogar para vencer.",
    price: "A partir de R$ 200",
    features: ["Preparação prévia", "Estratégia de jogo", "Experiência competitiva"],
    color: "bg-dupla-blue",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-dupla-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dupla-orange/10 text-dupla-orange rounded-full text-sm font-semibold mb-4">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-blue mb-4 text-balance">
            Escolha sua experiência
          </h2>
          <p className="text-dupla-gray-dark text-lg max-w-2xl mx-auto">
            Diferentes formas de jogar com atletas profissionais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-3xl p-8 transition-all hover:-translate-y-2 ${
                service.featured 
                  ? "bg-dupla-orange text-dupla-white shadow-2xl shadow-dupla-orange/30 scale-105 z-10" 
                  : "bg-dupla-gray text-dupla-text"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-dupla-blue text-dupla-white text-xs font-bold rounded-full">
                  MAIS POPULAR
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                service.featured ? "bg-dupla-white/20" : "bg-dupla-orange/10"
              }`}>
                <service.icon className={`w-7 h-7 ${
                  service.featured ? "text-dupla-white" : "text-dupla-orange"
                }`} />
              </div>

              <h3 className={`text-2xl font-bold mb-3 ${
                service.featured ? "text-dupla-white" : "text-dupla-blue"
              }`}>
                {service.title}
              </h3>

              <p className={`mb-6 leading-relaxed ${
                service.featured ? "text-dupla-white/90" : "text-dupla-gray-dark"
              }`}>
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${
                    service.featured ? "text-dupla-white/80" : "text-dupla-gray-dark"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.featured ? "bg-dupla-white" : "bg-dupla-orange"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`text-2xl font-bold mb-6 ${
                service.featured ? "text-dupla-white" : "text-dupla-blue"
              }`}>
                {service.price}
              </div>

              <Button 
                className={`w-full font-semibold py-6 rounded-xl group ${
                  service.featured 
                    ? "bg-dupla-white text-dupla-orange hover:bg-dupla-white/90" 
                    : "bg-dupla-orange text-dupla-white hover:bg-dupla-orange-light"
                }`}
              >
                Agendar
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
