"use client"

import { MapPin, Calendar, CreditCard } from "lucide-react"

const steps = [
  {
    icon: MapPin,
    number: "01",
    title: "Encontre um atleta",
    description: "Busque atletas profissionais perto de você com base na sua localização.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Escolha data e serviço",
    description: "Selecione o horário ideal e o tipo de serviço: partida, treino ou torneio.",
  },
  {
    icon: CreditCard,
    number: "03",
    title: "Agende e jogue",
    description: "Pagamento seguro e confirmação instantânea. É só jogar!",
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-dupla-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dupla-orange/10 text-dupla-orange rounded-full text-sm font-semibold mb-4">
            Simples e rápido
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-blue mb-4 text-balance">
            Como funciona
          </h2>
          <p className="text-dupla-gray-dark text-lg max-w-2xl mx-auto">
            Em apenas 3 passos você está jogando com os melhores atletas do Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-dupla-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-dupla-orange/30" />
              )}
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-dupla-orange/10 rounded-xl flex items-center justify-center group-hover:bg-dupla-orange group-hover:scale-110 transition-all">
                  <step.icon className="w-7 h-7 text-dupla-orange group-hover:text-dupla-white transition-colors" />
                </div>
                <span className="text-5xl font-bold text-dupla-blue/10 group-hover:text-dupla-orange/20 transition-colors">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-dupla-blue mb-3">
                {step.title}
              </h3>
              <p className="text-dupla-gray-dark leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
