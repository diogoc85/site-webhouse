"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceMobile, ArrowUpRight, DeviceMobileCameraIcon } from "@phosphor-icons/react";
import Link from "next/link";

interface CTAProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function CTA({
  badge = "Estamos esperando seu contato",
  title = "Seu site está ajudando ou travando seu crescimento?",
  subtitle = "Se você quer mais do que presença digital, está no lugar certo.",
  buttonText = "Quero escalar meu negócio",
}: CTAProps) {
  return (
    <Section id="contato" className="cta full bg-primary-500 py-24 md:py-32">

      <div className="container-site flex flex-col items-center justify-center text-center gap-6 md:gap-8">

        <div className="flex flex-col items-center gap-4">
          {/* Badge */}
          <Reveal className="flex w-fit items-center gap-2 border border-primary-400 rounded-full px-2 py-1.5">
            <DeviceMobileCameraIcon weight="regular" className="w-2 h-2 text-primary-50 animate-pulse" />
            <span className="text-primary-300 text-xs md:text-sm tracking-wide">{badge}</span>
          </Reveal>

          {/* Textos */}
          <Reveal delay={150} className="flex flex-col items-center gap-2 max-w-4xl mx-auto">
            <h2 className="text-center text-primary-50 text-lg md:text-3xl font-light">
              {title}
            </h2>
            <p className="text-center text-primary-50 text-sm md:text-base font-light">
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* Botão */}
        <Reveal delay={300} className="">
          <Link href="/contactos" className="bg-secondary-700 hover:bg-secondary-800 text-sm lg:text-lg btn-lg flex items-center gap-2 text-white rounded-md lg:py-4 lg:px-6">
            {buttonText}
            <ArrowUpRight weight="regular" className="w-3 h-3" />
          </Link>
        </Reveal>

      </div>
    </Section>
  );
}
