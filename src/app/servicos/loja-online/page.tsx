"use client";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/sections/Footer";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/sections/CTA";
import { ArrowUpRight, CheckCircle, NetworkIcon, CrosshairIcon, Storefront, ShoppingBagOpen, Gear, ChartLineUp } from "@phosphor-icons/react";

export default function EcommerceServicePage() {
  return (
    <main className="relative min-h-screen">
      <Header />

      <div className="relative z-10 ">
        {/* Hero Section with Diagonal Gradient and Centered Background Image */}
        <section className="relative w-full h-[93vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden bg-[linear-gradient(135deg,#C71131_0%,#EF3B1F_100%)]">

          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
            <Reveal animation="fade-right" className="flex items-end justify-center ">
              {/* Desktop Background */}
              <Image
                src="/assets/servicos/bg-ecommerce-marketplace.png?v=2"
                alt="Background ecommerce marketplace"
                width={1580}
                height={862}
                className="hidden md:block "
                priority
              />
              {/* Mobile Background */}
              <Image
                src="/assets/servicos/bg-ecommerce-marketplace-mobile.png?v=3"
                alt="Background ecommerce marketplace"
                width={1000}
                height={1500}
                className="block md:hidden w-full h-full object-cover"
                priority
              />
            </Reveal>
          </div>

          <div className="container-site relative z-10 flex flex-col items-center text-center pt-64 lg:pt-0 lg:text-left lg:items-start">
            <Reveal className="flex w-fit items-center gap-1 border border-white/30 rounded-full px-2 py-1.5 mb-3 lg:mb-6">
              <CrosshairIcon weight="regular" className="w-2 h-2 text-white animate-pulse" />
              <span className="text-white/80 text-xs md:text-sm tracking-wide">Serviços</span>
            </Reveal>

            <Reveal delay={150} className="mb-3 lg:mb-4">
              <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white leading-tightest tracking-tightest">
                E-commerce e <br />
                marketplace
              </h1>
            </Reveal>

            <Reveal delay={300} className="mb-4">
              <p className="text-white/90 text-lg md:text-3xl font-light leading-snug max-w-4xl text-pretty">
                Sua loja vendendo 24 horas por dia, <br /> de forma automática e escalável.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <Link href="/contactos" className="bg-secondary-900 hover:bg-secondary-600 btn-lg flex items-center gap-2 text-white rounded-md py-4 px-6 transition-colors">
                Tenho interesse
                <ArrowUpRight weight="regular" className="w-3 h-3" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Content Section */}
        <Section className="bg-secondary-800 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal animation="fade-right" className="flex items-center justify-center">
              <Image
                src="/assets/servicos/marketplace.jpg?v=1"
                alt="E-commerce e marketplace"
                width={400}
                height={400}
                className="w-68 flex justify-center items-center h-auto"
              />
            </Reveal>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
                <span className="text-primary-500">Venda online do jeito certo,</span> com o seu e-commerce próprio ou nos maiores marketplaces de Portugal, ou por que não, em ambos?
              </h2>
              <p className="text-secondary-200 text-base md:text-lg leading-relaxed max-w-xl">
                <span className="text-primary-500 font-medium">A estratégia mais inteligente é usar os dois canais ao mesmo tempo. </span>
                Marketplace traz volume e caixa rápido. Loja própria constrói marca e margem no longo prazo.
              </p>
            </Reveal>
          </div>
        </Section>

        <Section className="bg-secondary-900 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal className="flex w-fit items-center gap-1 border border-secondary-600 rounded-full px-2 py-1.5 mb-6">
                <CrosshairIcon weight="regular" className="w-2 h-2 text-primary-500 animate-pulse" />
                <span className="text-secondary-400 text-xs md:text-sm tracking-wide">O que entregamos</span>
              </Reveal>
              <Reveal delay={300}>
                <h2 className="text-4xl md:text-6xl font-light text-white mb-4 leading-tight">
                  Uma operação de <span className="text-primary-500">vendas completa</span>, não só um site
                </h2>
                <p className="text-secondary-200 text-base md:text-lg leading-relaxed max-w-xl">
                  Muito mais do que uma loja virtual, entregamos uma operação de vendas pronta para rodar no automático. Criamos o seu e-commerce do zero ou integramos os seus produtos nos maiores marketplaces do mercado.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <Reveal delay={400} className="p-4 transition-colors group border-b border-r border-white/5">
                <div className="w-12 h-8 flex transition-colors">
                  <Storefront weight="light" className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-light text-white mb-3">Loja própria</h3>
                <p className="text-secondary-400 leading-relaxed">Desenvolvimento completo com a identity única da sua marca.</p>
              </Reveal>

              <Reveal delay={500} className="p-4 transition-colors group border-b border-white/5">
                <div className="w-12 h-8 flex transition-colors">
                  <ShoppingBagOpen weight="light" className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-light text-white mb-3">Integração Marketplace</h3>
                <p className="text-secondary-400 leading-relaxed">Seus produtos em Mercado Livre, Amazon, Shopee e muito mais.</p>
              </Reveal>

              <Reveal delay={600} className="p-4 transition-colors group border-r border-white/5">
                <div className="w-12 h-8 flex transition-colors">
                  <Gear weight="light" className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-light text-white mb-3">Automação de pedidos</h3>
                <p className="text-secondary-400 leading-relaxed">Estoque, notas e envios sem necessidade de intervenção manual.</p>
              </Reveal>

              <Reveal delay={700} className="p-4 transition-colors group ">
                <div className="w-12 h-8 flex transition-colors">
                  <ChartLineUp weight="light" className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-light text-white mb-3">Performance e SEO</h3>
                <p className="text-secondary-400 leading-relaxed">Páginas ultrarrápidas e seu produto sempre encontrável no Google.</p>
              </Reveal>
            </div>
          </div>
        </Section>

        {/* Final CTA Section */}
        <CTA
          badge="Pronto para o próximo nível?"
          title="Pronto para colocar sua marca no mapa do e-commerce mundial?"
          subtitle="Se você quer mais do que apenas um site, mas uma máquina de vendas automática, você está no lugar certo."
          buttonText="Quero começar meu projeto"
        />
      </div>

      <Footer />
    </main >
  );
}
