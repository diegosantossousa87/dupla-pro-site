"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dupla-blue pt-16 md:pt-20">

      {/* VIDEO LATERAL DIREITA 🔥 */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute right-0 top-0 h-full w-[80%] "
      >
        <div className="relative w-full h-full overflow-hidden">

          <video
            autoPlay
            loop
            muted
            playsInline
           className="absolute top-0 right-0 h-full w-full object-cover object-[center_30%] scale-105"
          >
            <source src="/images/rafael.mp4" type="video/mp4" />
          </video>

          {/* GRADIENTE PRA DAR LEITURA NO TEXTO */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-dupla-blue/40 to-dupla-blue" />

          {/* SOMBRA ESCURA EXTRA */}
          <div className="absolute inset-0 bg-dupla-blue/30" />

        </div>
      </motion.div>

      {/* CONTEÚDO ESQUERDA */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-20">
        <div className="max-w-xl">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-dupla-orange/20 text-dupla-orange rounded-full text-sm font-semibold mb-6 border border-dupla-orange/30"
          >
            A plataforma do futevôlei brasileiro
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-dupla-white leading-snug mb-2"
          >
            Jogue com atletas{" "}
            <span className="text-dupla-orange">
              avançados e profissionais
            </span>{" "}
            de futevôlei na sua cidade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-xl text-dupla-white/80 mb-10 leading-relaxed"
          >
            Encontre, agende e jogue com os melhores atletas. Rápido, seguro e simples.
          </motion.p>

          {/* DOWNLOAD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-dupla-white/60 mb-4 font-medium">
              Baixe agora:
            </p>

            <div className="flex flex-wrap gap-4">

              {/* App Store */}
              <div className="bg-black/80 hover:bg-black transition-all px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:scale-110 hover:shadow-2xl">
                <img src="/images/apple.svg" className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-white font-semibold">App Store</p>
                </div>
              </div>

              {/* Google Play */}
              <div className="bg-black/80 hover:bg-black transition-all px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:scale-110 hover:shadow-2xl">
                <img src="/images/google-play.svg" className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-white font-semibold">Google Play</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* STATS */}
          <div className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-dupla-white/10">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-dupla-orange">500+</p>
              <p className="text-dupla-white/60 text-sm">Atletas cadastrados</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-dupla-orange">2.000+</p>
              <p className="text-dupla-white/60 text-sm">Partidas realizadas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-dupla-orange">50+</p>
              <p className="text-dupla-white/60 text-sm">Cidades atendidas</p>
            </div>
          </div>

        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dupla-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-dupla-orange rounded-full animate-pulse" />
        </div>
      </div>

    </section>
  )
}