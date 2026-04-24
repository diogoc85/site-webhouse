"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CrosshairIcon, HourglassIcon, ArrowUpRight, ChatsIcon, EyeIcon, BagIcon, GearSixIcon, NetworkIcon } from "@phosphor-icons/react";
import Link from "next/link";

const features = [
  {
    icon: CrosshairIcon,
    title: "FOCO EM RESULTADO",
    description: "Desde o início procuramos entender seu mercado, seu cliente e seu objetivo. Resultado tem que ser pensado do início ao fim. E pós entrega o trabalho continua...",
  },
  {
    icon: HourglassIcon,
    title: "PARCEIRO DE LONGO PRAZO",
    description: "Não sumimos após a entrega. Estamos aqui para corrigir, evoluir e acompanhar cada fase do seu crescimento.",
  },
  {
    icon: ChatsIcon,
    title: "Comunicação direta",
    description: "Nosso atendimento acompanha todas as fases do projeto, eliminando ruídos e agilizando decisões.",
  },
  {
    icon: EyeIcon,
    title: "Transparência total",
    description: "Você sabe o que está pagando e por quê, você acompanha todas as etapas do projeto, de ponta a ponta. Sem surpresas negativas.",
  }
];

const workflowSteps = [
  {
    title: "DISCOVERY",
    subtitle: "Descobrindo as necessidades",
    bgImage: "/assets/bg-01.svg",
    items: ["Mergulhamos profundamente no seu negócio para entender contexto, objetivos e oportunidades. A partir de uma análise estratégica, transformamos informações em direcionamento claro, garantindo que cada decisão futura seja guiada por propósito, não por suposições."]
  },
  {
    title: "DELIVERY",
    subtitle: "Entregando as soluções",
    bgImage: "/assets/bg-02.svg",
    items: [
      "Materializamos a estratégia em experiências digitais de alto nível. Unimos design, tecnologia e performance para construir soluções que não apenas funcionam, mas elevam a percepção da sua marca e entregam resultados concretos."
    ]
  },
  {
    title: "GROWTH",
    subtitle: "Evoluindo continuamente",
    bgImage: "/assets/bg-03.svg",
    items: [
      "Evoluímos continuamente com base em dados e comportamento real do usuário. Otimizamos, testamos e aprimoramos cada detalhe para garantir que o produto acompanhe o crescimento do seu negócio e gere valor no longo prazo."
    ]
  }
];

export function ComoFazemos() {
  return (
    <Section className="como-fazemos full bg-secondary-800 py-20 md:py-32">
      <div className="">

        {/* Superior: Conteúdo sticky na esquerda, scroll focus na direita */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12">

          {/* Esquerda: Conteúdo Fixo */}
          <div className="lg:col-span-8 lg:sticky lg:top-32 h-fit flex flex-col gap-8 ">
            <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
              <Reveal className="flex w-fit items-center gap-1 border border-secondary-600 rounded-full px-2 py-1.5">
                <NetworkIcon weight="regular" className="w-2 h-2 text-primary-500 animate-pulse" />
                <span className="text-secondary-400 text-xs md:text-sm tracking-wide">Como fazemos</span>
              </Reveal>
              <Reveal delay={150}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-50 leading-tight border-b border-secondary-600 pb-8 pr-0 lg:pr-8 text-pretty">
                  Construímos produtos digitais com <span className="text-primary-500 font-semibold">estratégia para performar</span> e escalar negócios de verdade.
                </h2>
              </Reveal>
            </div>

            <Reveal delay={300} className="flex flex-col items-center lg:items-start gap-2 mt-2 md:mt-2 pb-8">
              <Link href="/contactos" className="w-fit bg-primary-500 hover:bg-primary-400 btn-lg text-md lg:text-lg flex items-center gap-2 text-white rounded-md py-4 px-2 lg:px-4 transition-colors">
                Fale conosco sobre o seu projeto
                <ArrowUpRight weight="regular" className="w-3 h-3 md:w-3 md:h-3" />
              </Link>
            </Reveal>
          </div>

          {/* Direita: Conteúdo com Scroll Animado */}
          <div className="lg:col-span-4 flex flex-col gap-16 lg:gap-16 lg:pt-16 lg:border-l lg:border-secondary-600">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="scroll-focus flex flex-col gap-2 border-b border-secondary-600 last:border-b-0 lg:pl-8 pb-8">
                  <Icon weight="regular" className="w-4 h-4 md:w-6 md:h-6 text-primary-500" />
                  <h3 className="text-xl md:text-2xl font-light text-primary-50 uppercase tracking-wider text-pretty">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary-300 font-light leading-relaxed tracking-wide text-pretty">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inferior: Nosso Processo (Workflow) */}
        <div className="flex flex-col gap-12 border-t border-secondary-600 pt-8 md:pt-16">
          <Reveal className="flex flex-col gap-4 text-center lg:text-left lg:justify-start lg:items-start">
            <Reveal className="flex lg:justify-center lg:items-center mx-auto lg:mx-0 w-fit items-center gap-1 border border-secondary-600 rounded-full px-2 py-1.5">
              <GearSixIcon weight="regular" className="w-2,5 h-2,5 text-primary-500 animate-pulse" />
              <span className="text-secondary-400 text-xs md:text-sm tracking-wide">Nosso processo</span>
            </Reveal>
            <h3 className="text-xl md:text-2xl font-light text-primary-50 tracking-wide">
              Conheça nosso workflow
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 relative border border-secondary-600 ">
            {workflowSteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 150} className="group flex flex-col gap-2 relative py-4 px-4 lg:py-8 lg:px-8 border-r border-secondary-600 last:border-r-0 overflow-hidden hover:bg-primary-500 transition-colors cursor-default">

                {/* Background Decorativo */}
                <div
                  className="absolute inset-0 z-0 bg-left bg-no-repeat pointer-events-none mix-blend-screen"
                  style={{ backgroundImage: `url(${step.bgImage})`, backgroundSize: 'auto 80%', backgroundPosition: '0% 100% center', }}
                />

                <div className="relative z-10 flex flex-col gap-1">
                  <h4 className="text-2xl md:text-3xl font-light text-primary-50 uppercase tracking-widest group-hover:text-white transition-colors">
                    {step.title}
                  </h4>
                  <h5 className="text-base md:text-lg font-light text-secondary-100 mb-2 group-hover:text-white transition-colors">
                    {step.subtitle}
                  </h5>
                </div>
                <p className="relative z-10 flex text-sm md:text-base text-secondary-200 font-light leading-relaxed text-pretty tracking-wide gap-1 group-hover:text-white transition-colors">
                  {step.items.map((item, idxi) => (
                    <span key={idxi} className="">
                      {item}
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
