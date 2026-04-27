"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "Gestão de Redes Sociais",
    description: "Presença estratégica nas redes e engajamento qualificado.",
    image: "/assets/servicos/social-media.webp?v=1",
    link: "/servicos/gestoes-de-redes-sociais"
  },
  {
    title: "Tráfego Pago",
    description: "Presença estratégica nas redes e engajamento qualificado.",
    image: "/assets/servicos/ads.webp?v=1",
    link: "/servicos/trafego-pago"
  },
  {
    title: "Métricas e SEO",
    description: "Presença estratégica nas redes e engajamento qualificado.",
    image: "/assets/servicos/metrics.webp?v=1",
    link: "/servicos/seo"
  },
  {
    title: "E-commerce e marketplace",
    description: "Sua loja vendendo on-line 24H por dia de forma automática.",
    image: "/assets/servicos/ecommerce-mkt.webp?v=1",
    link: "/servicos/loja-online"
  },
  {
    title: "Sites institucionais e landing pages",
    description: "Sites focados em conversão, rápidos e com design exclusivo.",
    image: "/assets/servicos/sites-landignpages.webp?v=1",
    link: "/servicos/criacao-de-sites"
  },
  {
    title: "SMS Marketing",
    description: "Alcance seus clientes onde eles estiverem com mensagens rápidas e diretas.",
    image: "/assets/servicos/sms-mkt.webp?v=1",
    link: "/servicos/sms-marketing"
  }
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll contínuo
  useEffect(() => {
    if (isHovered) return;

    let animationFrameId: number;
    let lastTime = 0;

    const autoScroll = (time: number) => {
      if (scrollRef.current) {
        if (time - lastTime > 15) {
          const container = scrollRef.current;
          container.scrollLeft += 1;

          const listWidth = container.firstElementChild?.clientWidth || container.scrollWidth / 2;

          if (container.scrollLeft >= listWidth) {
            container.scrollLeft -= listWidth;
          }
          lastTime = time;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const listWidth = container.firstElementChild?.clientWidth || container.scrollWidth / 2;

      // Se rolar pra esquerda com pouco scroll restante, pula para a Lista 2 instântaneamente
      if (offset < 0 && container.scrollLeft <= Math.abs(offset)) {
        container.scrollLeft += listWidth;
      }
      // Se rolar pra direita e estiver perto do final, recua para a Lista 1 instântaneamente
      else if (offset > 0 && container.scrollLeft >= listWidth - offset) {
        container.scrollLeft -= listWidth;
      }

      // Aplica a rolagem suave após o reposicionamento do frame
      requestAnimationFrame(() => {
        container.scrollBy({ left: offset, behavior: "smooth" });
      });
    }
  };

  return (
    <Section id="servicos" className="servicos full bg-secondary-900 py-20 md:py-32 overflow-hidden">
      <div className="container-site mb-12 md:mb-16">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          {/* Badge */}
          <Reveal className="flex w-fit items-center gap-1 border border-secondary-600 rounded-full px-2 py-1.5">
            <Star weight="regular" className="w-2 h-2 text-primary-500 animate-pulse" />
            <span className="text-secondary-400 text-xs md:text-sm tracking-wide">Nossas soluções</span>
          </Reveal>

          {/* Heading */}
          <h2 className="text-center text-primary-50 text-lg md:text-3xl font-light">
            <span className="text-primary-500 font-extrabold">O que fazemos</span> e como cada solução pode crescer o seu negócio.
          </h2>

          {/* Subtitle */}
          <p className="text-center text-secondary-300 md:text-lg max-w-2xl text-pretty">
            Você pode contratar qualquer serviço separadamente ou combinar soluções para uma estratégia completa.
          </p>
        </Reveal>
      </div>

      <div
        className="w-full relative group/slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Slider Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto w-full pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            .servicos .overflow-x-auto::-webkit-scrollbar { display: none; }
          `}} />

          {/* Lista 1 */}
          <div className="flex gap-4 pr-4 px-4 shrink-0">
            {services.map((service, idx) => (
              <Link
                href={service.link}
                key={`l1-${idx}`}
                className="block w-[280px] md:w-[320px] lg:w-[350px] shrink-0 group relative overflow-hidden bg-secondary-800 aspect-[8/10] outline-none"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-8">
                    <h3 className="text-lg md:text-xl font-light text-white mb-2 leading-tight text-pretty">
                      {service.title}
                    </h3>
                    <p className="text-secondary-200 text-sm leading-relaxed text-pretty">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0 text-primary-500 font-bold text-sm flex items-center gap-2">
                    VER MAIS <ArrowRight weight="regular" className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Lista 2 (Clone) */}
          <div className="flex gap-4 pr-4 shrink-0" aria-hidden="true">
            {services.map((service, idx) => (
              <Link
                href={service.link}
                key={`l2-${idx}`}
                className="block w-[280px] md:w-[320px] lg:w-[350px] shrink-0 group relative overflow-hidden bg-secondary-800 aspect-[8/10] outline-none"
                tabIndex={-1}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/60 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-8">
                    <h3 className="text-lg md:text-xl font-light text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-secondary-200 text-sm leading-relaxed text-pretty">
                      {service.description}
                    </p>
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0 text-primary-500 font-bold text-sm flex items-center gap-2">
                    VER MAIS <ArrowRight weight="regular" className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Setas Desktop */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 justify-between hidden lg:flex pointer-events-none z-10 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => scroll(-350)}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-500 pointer-events-auto shadow-xl transition-colors cursor-pointer hover:bg-primary-500 hover:text-white"
            aria-label="Anterior"
          >
            <ArrowLeft weight="bold" className="w-3 h-3" />
          </button>

          <button
            onClick={() => scroll(350)}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-500 pointer-events-auto shadow-xl transition-colors cursor-pointer hover:bg-primary-500 hover:text-white"
            aria-label="Próximo"
          >
            <ArrowRight weight="bold" className="w-3 h-3" />
          </button>
        </div>
      </div>

    </Section>
  );
}
