"use client";

import { Sparkle, ArrowUpRight, Eye, Star, CaretDown } from "@phosphor-icons/react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";


export function Hero() {
  return (
    <Section id="hero" className="bg-primary-500 text-white min-h-screen flex flex-col relative overflow-hidden">

      {/* Central Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-primary-500/70 rounded-full filter blur-[160px] z-5 pointer-events-none" />

      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-primary-400 rounded-full mix-blend-soft-light filter blur-[160px] opacity-40 animate-blob-1" />
        <div className="absolute top-1/4 -right-48 w-[600px] h-[600px] bg-primary-300 rounded-full mix-blend-soft-light filter blur-[160px] opacity-40 animate-blob-2" />
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-primary-600 rounded-full mix-blend-soft-light filter blur-[160px] opacity-40 animate-blob-3" />
        <div className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-primary-600 rounded-full mix-blend-soft-light filter blur-[220px] opacity-90 animate-blob-4" />
      </div>

      {/* Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "url('/assets/servicos/line-bg.webp')",
          backgroundRepeat: 'repeat',
          backgroundSize: '' // Ajuste opcional para o tamanho do padrão
        }}
      />


      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 pt-28 md:pt-48">

        {/* Headline */}
        <Reveal delay={0}>
          <h1 className="h1-bold text-white max-w-5xl mx-auto tracking-tight">
            Agência de marketing digital <br />especialista em performance <br />
            <span className="text-primary-100 font-light">e em escalar negócios.</span>
          </h1>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={150}>
          <p className="text-body-lg text-primary-50 mt-6 max-w-4xl mx-auto font-light">
            Somos uma agência digital. Criamos sites, e-commerces, apps mobile e sistemas sob
            medida que aparecem no Google, atraem clientes, convertem leads e geram resultados.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link href="/contactos" className="bg-secondary-900 hover:bg-secondary-600 text-sm lg:text-lg w-full lg:w-fit btn-lg flex items-center gap-2 text-white rounded-md py-4 px-6 transition-colors">
              Quero marcar uma conversa
              <ArrowUpRight weight="regular" className="w-3 h-3" />
            </Link>

            <Link href="/projetos" className="text-sm lg:text-lg w-full lg:w-fit btn-lg flex items-center justify-center gap-2 bg-primary-400/50 hover:bg-primary-400 text-white rounded-md py-4 px-6 transition-colors">
              Ver nossos projetos
              <Eye weight="regular" className="w-3 h-3" />
            </Link>
          </div>
        </Reveal>

      </div>

      {/* Stats Divider */}
      <hr className="w-full border-t border-primary-400 mt-20 mb-10 relative z-10" />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 divide-x-0 md:divide-x md:divide-primary-400 w-full mb-8 mt-2 relative z-10">

        {/* Stat 1 */}
        <Reveal delay={600} className="flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl font-light text-white">+120</span>
          <span className="text-sm font-medium text-primary-100 mt-1">projetos entregues</span>
        </Reveal>

        {/* Stat 2 */}
        <Reveal delay={750} className="flex flex-col items-center justify-center text-center px-4">
          <div className="flex items-center gap-1 text-5xl md:text-7xl font-light text-white">
            <Image
              src="/assets/google.svg"
              alt="Google Logo"
              width={35}
              height={35}
              className="w-5 h-5 md:w-7 md:h-7 object-contain"
            />
            4.9
          </div>
          <span className="text-sm font-medium text-primary-100 mt-1">avaliação no Google</span>
        </Reveal>

        {/* Stat 3 */}
        <Reveal delay={900} className="flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl font-light text-white">+15</span>
          <span className="text-sm font-medium text-primary-100 mt-1">anos de mercado</span>
        </Reveal>

        {/* Stat 4 */}
        <Reveal delay={1050} className="flex flex-col items-center justify-center text-center px-4">
          <span className="text-5xl md:text-7xl font-light text-white">99%</span>
          <span className="text-sm font-medium text-primary-100 mt-1">de satisfação</span>
        </Reveal>

      </div>

      {/* Gradient Top Shadow - Using token standards */}
      <div className="absolute inset-x-0 top-0 h-68 bg-gradient-to-b from-primary-700 to-transparent pointer-events-none mix-blend-multiply opacity-30" />
      {/* Gradient Bottom Shadow - Using token standards */}
      <div className="absolute inset-x-0 bottom-0 h-68 bg-gradient-to-t from-primary-700 to-transparent pointer-events-none mix-blend-multiply opacity-60" />
    </Section>
  );
}
