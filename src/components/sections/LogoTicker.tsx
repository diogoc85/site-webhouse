import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const logos = [
  { name: "ONVICTA", src: "/assets/clientes/onvicta.svg" },
  { name: "GTS AUTO", src: "/assets/clientes/gts-auto.svg" },
  { name: "AQUARAMA", src: "/assets/clientes/aquarama.svg" },
  { name: "Fórmula House", src: "/assets/clientes/formula.svg" },
  { name: "Lagos", src: "/assets/clientes/lagos.svg" },
  { name: "J'DIAS", src: "/assets/clientes/j-dias.svg" },
  { name: "Ocean Sesimbra", src: "/assets/clientes/ocean-sesimbra.svg" },
];

export function LogoTicker() {
  return (
    <Section className="logo-ticker full bg-secondary-700 py-16 md:py-20 overflow-hidden">
      <div className="container-site flex flex-col items-center">
        <Reveal>
          <h2 className="text-center text-primary-50 text-lg md:text-xl font-light">
            Empresas que já aparecem no Google com a nossa ajuda.
          </h2>
        </Reveal>

        <Reveal delay={150} className="w-full relative mt-6 md:mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pb-4">
            <div className="flex shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20">
              {logos.map((logo, idx) => (
                <div
                  key={`set1-${logo.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 min-w-[120px] md:min-w-[160px] opacity-60 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 cursor-default"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={50}
                    className="w-auto h-auto max-h-8 md:max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20">
              {logos.map((logo, idx) => (
                <div
                  key={`set2-${logo.name}-${idx}`}
                  className="flex items-center justify-center shrink-0 min-w-[120px] md:min-w-[160px] opacity-60 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 cursor-default"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={50}
                    className="w-auto h-auto max-h-8 md:max-h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
