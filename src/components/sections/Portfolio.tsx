"use client";

import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceMobile, ArrowUpRight } from "@phosphor-icons/react";

const portfolioItems = [
  {
    id: 1,
    title: "Elite",
    subtitle: "Consultoria em gerenciamento",
    image: "/assets/portefolio/image 1.webp?v=1",
    link: "#",
  },
  {
    id: 2,
    title: "J Dias",
    subtitle: "Cozinhas planejadas",
    image: "/assets/portefolio/image 2.webp?v=1",
    link: "#",
  },
  {
    id: 3,
    title: "Watch Magazine",
    subtitle: "E-commerce de luxo",
    image: "/assets/portefolio/image 3.webp?v=1",
    link: "#",
  },
  {
    id: 4,
    title: "XNParts",
    subtitle: "Peças automotivas",
    image: "/assets/portefolio/image 4.webp?v=1",
    link: "#",
  },
];

export function Portfolio() {
  return (
    <Section id="portfolio" className="portfolio full bg-secondary-900 py-16 md:py-24 overflow-hidden">
      <div className="container-site flex flex-col items-center gap-4">
        {/* Badge */}
        {/* <Reveal className="flex w-fit items-center gap-1 border border-secondary-600 rounded-full px-2 py-1.5">
          <DeviceMobile weight="regular" className="w-2 h-2 text-primary-500 animate-pulse" />
          <span className="text-secondary-400 text-xs md:text-sm tracking-wide">Nossos Portefólio</span>
        </Reveal> */}

        {/* Heading */}
        <h2 className="text-center text-primary-50 text-lg md:text-3xl font-light">
          Portefólio
        </h2>

        {/* Subtitle */}
        <p className="text-center text-secondary-300 md:text-lg max-w-2xl text-pretty">
          Estamos com vagas abertas em nosso portefólio para o seu projeto, entre em contato e vamos conversar!
        </p>

        {/* Slider Marquee */}
        <div className="w-screen relative left-1 right-1 -ml-[50vw] -mr-[50vw] overflow-hidden mb-12 md:mb-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {/* Set 1 */}
            <div className="flex shrink-0 items-start">
              {portfolioItems.map((item) => (
                <PortfolioCard key={`set1-${item.id}`} item={item} />
              ))}
            </div>
            {/* Set 2 (Duplicate for infinite effect) */}
            <div className="flex shrink-0 items-start">
              {portfolioItems.map((item) => (
                <PortfolioCard key={`set2-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <Reveal delay={300}>
          <Link
            href="/portefolio"
            className="w-fit bg-primary-500 hover:bg-primary-400 btn-lg text-md lg:text-lg flex items-center gap-2 text-white rounded-md py-4 px-2 lg:px-4 transition-colors"
          >
            Todos os projetos
            <ArrowUpRight weight="regular" className="w-3 h-3" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

function PortfolioCard({ item }: { item: typeof portfolioItems[0] }) {
  return (
    <div className="relative group overflow-hidden w-[300px] md:w-[480px] aspect-[4/5] flex-shrink-0">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover object-[left_top] transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 300px, 480px"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <h4 className="text-white text-xl md:text-2xl font-light mb-1">{item.title}</h4>
          <p className="text-white text-sm md:text-md mb-6">{item.subtitle}</p>

          <div className="overflow-hidden">
            <span className="inline-flex items-center gap-2 text-white font-regular text-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-150">
              Ver projeto <ArrowUpRight weight="regular" className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
