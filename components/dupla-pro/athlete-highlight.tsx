"use client"

import Image from "next/image"
import { Star, MapPin, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AthleteHighlight() {
  return (
    <section id="atletas" className="py-20 md:py-32 bg-dupla-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dupla-orange/10 text-dupla-orange rounded-full text-sm font-semibold mb-4">
            Atleta em Destaque
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-blue mb-4 text-balance">
            Conheça nossos atletas
          </h2>
          <p className="text-dupla-gray-dark text-lg max-w-2xl mx-auto">
            Profissionais verificados e prontos para elevar seu jogo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-dupla-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-80 md:h-auto">
                <Image
                  src="/images/rafael-longo-profile.png"
                  alt="Rafael Longo - Caveirão"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dupla-blue/80 via-transparent to-transparent md:bg-gradient-to-r" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-dupla-orange text-dupla-white text-xs font-bold rounded-full flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  PRO
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dupla-blue">Rafael Longo</h3>
                    <p className="text-dupla-orange font-semibold">{'"Caveirão"'}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-dupla-orange/10 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 text-dupla-orange fill-dupla-orange" />
                    <span className="font-bold text-dupla-blue">4.9</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-dupla-gray-dark mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP</span>
                </div>

                <p className="text-dupla-gray-dark mb-6 leading-relaxed">
                  Atleta profissional com mais de 10 anos de experiência em competições nacionais e internacionais. 
                  Especialista em técnicas avançadas e preparação física para futevôlei.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-dupla-blue/10 text-dupla-blue text-sm rounded-full">Partidas</span>
                  <span className="px-3 py-1 bg-dupla-blue/10 text-dupla-blue text-sm rounded-full">Treinos</span>
                  <span className="px-3 py-1 bg-dupla-blue/10 text-dupla-blue text-sm rounded-full">Torneios</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-y border-dupla-gray">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-dupla-orange">150+</p>
                    <p className="text-xs text-dupla-gray-dark">Partidas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-dupla-orange">98%</p>
                    <p className="text-xs text-dupla-gray-dark">Satisfação</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-dupla-orange">5</p>
                    <p className="text-xs text-dupla-gray-dark">Anos na plataforma</p>
                  </div>
                </div>

                <Button className="w-full bg-dupla-orange hover:bg-dupla-orange-light text-dupla-white font-semibold py-6 rounded-xl group">
                  Ver Perfil Completo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
