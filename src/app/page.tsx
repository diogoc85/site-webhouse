import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { Problemas } from "@/components/sections/Problemas";
import { Services } from "@/components/sections/Services";
import { ComoFazemos } from "@/components/sections/ComoFazemos";
import { Portfolio } from "@/components/sections/Portfolio";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/ui/Header";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="relative z-10 bg-secondary-900">
        <Header />
        <Hero />
        <LogoTicker />
        <Problemas />
        <Services />
        <ComoFazemos />
        <Portfolio />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
