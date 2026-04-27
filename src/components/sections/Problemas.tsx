"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import {
  WarningDiamondIcon,
  WarningCircle,
  ArrowUpRight,
  GoogleLogo,
  Globe,
  ShoppingBag,
  Monitor
} from "@phosphor-icons/react";

const problems = [
  {
    icon: GoogleLogo,
    title: "Meu site não aparece no Google, preciso de ajuda",
    description: "Seus concorrentes aparecem na busca e você não. Você perde clientes antes mesmo de ter a chance de falar com eles."
  },
  {
    icon: Globe,
    title: "Tenho site, mas não gero clientes por ele",
    description: "As visitas existem, mas não viram contatos nem vendas. O site não comunica valor e as pessoas saem sem agir."
  },
  {
    icon: ShoppingBag,
    title: "Vendo pelos marketplaces mas quero minha própria loja",
    description: "Depender de marketplace ou redes sociais limita sua margem, seu controle e sua capacidade de escalar."
  },
  {
    icon: Monitor,
    title: "Meu processo depende de planilha ou processo manual",
    description: "Você sabe que precisa de um sistema, mas não sabe por onde começar, podemos te ajudar, vamos conversar."
  }
];

export function Problemas() {
  return (
    <Section id="problemas" className="problemas full bg-secondary-800 py-20 md:py-32">
      <div className=" flex flex-col items-center gap-16 md:gap-24">

        {/* Header da Section */}
        <Reveal className="flex flex-col items-center gap-4 text-center">
          {/* Badge Sinal de alerta */}
          <Reveal className="flex w-fit items-center gap-1 border border-secondary-500 rounded-full px-2 py-1.5">
            <WarningDiamondIcon weight="regular" className="w-2 h-2 text-primary-500 animate-pulse" />
            <span className="text-secondary-400 text-xs md:text-sm tracking-wide">Sinal de alerta</span>
          </Reveal>

          <h2 className="text-center text-primary-50 text-lg md:text-3xl font-light">
            Você se identifica com algum desses problemas?
          </h2>
        </Reveal>

        {/* Grid de Problemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-4 md:gap-y-4 w-full">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            // Delay sequencial para cada item na grid
            const delay = (index + 1) * 150;

            return (
              <Reveal key={index} delay={delay}>
                <div
                  className="relative pl-6 md:pl-6 flex flex-col gap-2 group hover:opacity-100 opacity-90 transition-opacity duration-300 h-full"
                >
                  {/* Divisor gradiente à esquerda imitindo a imagem */}
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-secondary-600" />

                  <Icon weight="regular" className="w-[var(--icon-lg)] h-[var(--icon-lg)] md:w-4 md:h-4 text-primary-500" />

                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg md:text-lg font-medium leading-1.1 text-primary-50 text-pretty">
                      {problem.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary-300 font-light leading-relaxed text-pretty">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Rodapé da Section */}
        <Reveal delay={800} className="flex flex-col lg:flex-row items-center justify-center gap-1 text-center text-sm md:text-base text-secondary-300">

          <WarningDiamondIcon weight="regular" className="w-2 h-2 text-primary-500 shrink-0" />
          <span>Se você disse sim para algum desses problemas, temos a solução certa para você.</span>

          <Link href="/contactos" className="flex items-center gap-1 text-primary-500 hover:text-primary-400 transition-colors ml-1 font-medium group">
            Entre em contato
            <ArrowUpRight weight="regular" className="w-2 h-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Reveal>

      </div>
    </Section>
  );
}
