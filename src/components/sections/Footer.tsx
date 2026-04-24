"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";

const pagesLinks = [
  { label: "Home", href: "/" },
  { label: "Portefólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contacto", href: "/contactos" },
];

const softwareLinks = [
  { label: "mystand.pt", href: "#" },
  { label: "mypart.pt", href: "#" },
  { label: "mytelecom.pt", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/webhouse.pt?utm_source=qr" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/webhouse-pt/posts/?feedView=all" },
  { label: "Youtube", href: "https://www.youtube.com/watch?v=s-qf4XG4K3k&t=110s" },
];

const contactLinks = [
  { label: "fale@webhouse.pt", href: "mailto:fale@webhouse.pt" },
  { label: "PT +351 900 000 000", href: "tel:+351900000000" },
  { label: "BR +55 11 0000 0000", href: "tel:+551100000000" },
];

export function Footer() {
  return (
    <Section className="footer full bg-secondary-900 md:sticky lg:sticky lg:bottom-0 z-0 overflow-hidden lg:text-start text-center">

      {/* Background Watermark */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-[-1] flex justify-center opacity-30 mix-blend-overlay">
        <Image
          src="/assets/webhouse-bg-footer.svg"
          alt=""
          width={1920}
          height={600}
          className="w-full h-auto object-cover object-bottom"
          priority
        />
      </div>

      <div className="container-site flex flex-col relative z-10">

        {/* Main Grid Superior */}
        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 py-6 md:py-12">

          {/* Logo Column */}
          <div className="lg:col-span-3 flex flex-col lg:items-start items-center lg:border-r lg:border-secondary-700/90 lg:pr-8">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo-webhouse-footer.svg"
                alt="Webhouse Agência Digital"
                width={220}
                height={80}
                className="w-[180px] md:w-[220px] h-auto"
              />
            </Link>
          </div>

          {/* Páginas Column */}
          <div className="lg:col-span-3 flex flex-col lg:border-r lg:border-secondary-700/90 lg:px-12">
            <h4 className="text-secondary-100 text-sm md:text-base font-normal tracking-wide uppercase mb-3">
              Páginas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-auto justify-between h-full">
              {pagesLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="block text-secondary-200 hover:text-white transition-colors text-sm font-light py-2 lg:py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Software Column */}
          <div className="lg:col-span-2 flex flex-col lg:border-r lg:border-secondary-700/90 lg:px-8">
            <h4 className="text-secondary-100 text-sm md:text-base font-normal tracking-wide uppercase mb-3">
              Software
            </h4>
            <div className="flex flex-col justify-between h-full">
              {softwareLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-secondary-200 hover:text-white transition-colors text-sm font-light  py-2 lg:py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-2 flex flex-col lg:border-r lg:border-secondary-700/90 lg:px-8">
            <h4 className="text-secondary-100 text-sm md:text-base font-normal tracking-wide uppercase mb-3">
              Social
            </h4>
            <div className="flex flex-col justify-between h-full">
              {socialLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-secondary-200 hover:text-white transition-colors text-sm font-light py-2 lg:py-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacto Column */}
          <div className="lg:col-span-2 flex flex-col lg:pl-8">
            <h4 className="text-secondary-100 text-sm md:text-base font-normal tracking-wide uppercase mb-3">
              Contacto
            </h4>
            <div className="flex flex-col justify-between h-full">
              {contactLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-secondary-200 hover:text-white transition-colors text-sm font-light py-2 lg:py-0"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </Reveal>

        {/* Linha Fina Separadora */}
        <div className="w-full h-px bg-secondary-700/90" />

        {/* Rodapé Menor (Copyright & Leis) */}
        <Reveal delay={150} className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left py-3 flex-col-reverse">
          <p className="text-secondary-300 text-xs md:text-sm font-light">
            2026 Webhouse.Pt - Todos Os Direitos Reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-secondary-400 text-xs md:text-sm font-light">
            <Link href="/privacidade" className="text-secondary-300 hover:text-secondary-200 transition-colors">
              Política Privacidade
            </Link>
            <span className="text-secondary-300">|</span>
            <Link href="/conflitos" className="text-secondary-300 hover:text-secondary-200 transition-colors">
              Resolução De Conflitos
            </Link>
            <span className="text-secondary-300">|</span>
            <Link href="/cookies" className="text-secondary-300 hover:text-secondary-200 transition-colors">
              Uso De Cookies
            </Link>
            <span className="text-secondary-300">|</span>
            <Link href="/reclamacoes" className="text-secondary-300 hover:text-secondary-200 transition-colors">
              Livro Reclamações
            </Link>
          </div>
        </Reveal>

      </div>
    </Section>
  );
}
