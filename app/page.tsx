import Header from "@/components/dupla-pro/header"
import HeroSection from "@/components/dupla-pro/hero-section"
import HowItWorks from "@/components/dupla-pro/how-it-works"
import TargetUsers from "@/components/dupla-pro/target-users"
import FeaturesSection from "@/components/dupla-pro/features-section"
import AthleteHighlight from "@/components/dupla-pro/athlete-highlight"
import ServicesSection from "@/components/dupla-pro/services-section"
import TrustSection from "@/components/dupla-pro/trust-section"
import FinalCTA from "@/components/dupla-pro/final-cta"
import Footer from "@/components/dupla-pro/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWorks />
      <TargetUsers />
      <FeaturesSection />
      <AthleteHighlight />
      <ServicesSection />
      <TrustSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
