"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-dupla-orange to-dupla-orange-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-dupla-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dupla-blue/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dupla-white/20 rounded-full text-dupla-white text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            Comece hoje mesmo
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dupla-white mb-6 text-balance">
            Pronto para elevar seu jogo?
          </h2>
          
          <p className="text-xl text-dupla-white/90 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de jogadores e atletas que já estão transformando a forma de jogar futevôlei no Brasil
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-dupla-white text-dupla-orange hover:bg-dupla-white/90 font-semibold text-lg px-10 py-7 rounded-xl shadow-lg transition-all hover:scale-105 group"
            >
              Agendar Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-dupla-white text-dupla-blue hover:bg-dupla-white/10 font-semibold text-lg px-10 py-7 rounded-xl transition-all"
            >
              Seja um Atleta
            </Button>
          </div>

          <p className="mt-8 text-dupla-white/70 text-sm">
            Cadastro gratuito. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  )
}
