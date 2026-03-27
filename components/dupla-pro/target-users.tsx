"use client"

import { Users, Trophy, TrendingUp, DollarSign, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const playerBenefits = [
  {
    icon: Trophy,
    title: "Jogue com experientes",
    description: "Aprenda com atletas que competem em alto nível",
  },
  {
    icon: TrendingUp,
    title: "Evolua mais rápido",
    description: "Melhore suas habilidades com dicas profissionais",
  },
  {
    icon: Star,
    title: "Partidas de qualidade",
    description: "Desfrute de jogos em outro nível de intensidade",
  },
]

const athleteBenefits = [
  {
    icon: DollarSign,
    title: "Ganhe dinheiro jogando",
    description: "Monetize seu talento e experiência no esporte",
  },
  {
    icon: Calendar,
    title: "Gerencie sua agenda",
    description: "Você define seus horários e disponibilidade",
  },
  {
    icon: Users,
    title: "Seja descoberto",
    description: "Aumente sua visibilidade na sua cidade e região",
  },
]

export default function TargetUsers() {
  return (
    <section className="py-20 md:py-32 bg-dupla-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dupla-blue/10 text-dupla-blue rounded-full text-sm font-semibold mb-4">
            Para todos os perfis
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-blue mb-4 text-balance">
            Conectamos jogadores e atletas
          </h2>
          <p className="text-dupla-gray-dark text-lg max-w-2xl mx-auto">
            Seja você um jogador amador ou um atleta profissional, a Dupla Pro tem algo para você
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Players Card */}
          <div className="bg-gradient-to-br from-dupla-blue to-dupla-blue-light rounded-3xl p-8 md:p-10 text-dupla-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dupla-white/20 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-dupla-white" />
              </div>
              <h3 className="text-2xl font-bold">Para Jogadores</h3>
            </div>
            
            <p className="text-dupla-white/80 mb-8 text-lg">
              Eleve seu jogo ao próximo nível jogando com profissionais
            </p>

            <div className="space-y-6 mb-8">
              {playerBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-dupla-orange/20 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-dupla-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-dupla-white/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-dupla-orange hover:bg-dupla-orange-light text-dupla-white font-semibold py-6 rounded-xl">
              Quero Jogar
            </Button>
          </div>

          {/* Athletes Card */}
          <div className="bg-gradient-to-br from-dupla-orange to-dupla-orange-light rounded-3xl p-8 md:p-10 text-dupla-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-dupla-white/20 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-dupla-white" />
              </div>
              <h3 className="text-2xl font-bold">Para Atletas</h3>
            </div>
            
            <p className="text-dupla-white/90 mb-8 text-lg">
              Transforme sua paixão em uma fonte de renda extra
            </p>

            <div className="space-y-6 mb-8">
              {athleteBenefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-dupla-white/20 rounded-lg flex items-center justify-center shrink-0">
                    <benefit.icon className="w-5 h-5 text-dupla-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-dupla-white/80 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="w-full bg-dupla-blue hover:bg-dupla-blue-light text-dupla-white font-semibold py-6 rounded-xl">
              Sou Atleta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
