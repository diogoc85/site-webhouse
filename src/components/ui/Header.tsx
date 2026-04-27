"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CaretDown, List, X } from "@phosphor-icons/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [lang, setLang] = useState({ code: "PT-BR", flag: "/assets/brasil.svg", label: "Brasil" });
  const pathname = usePathname();

  const languageOptions = [
    { code: "PT-BR", flag: "/assets/brasil.svg", label: "Brasil" },
    { code: "PT-PT", flag: "/assets/portugal.svg", label: "Portugal" },
    { code: "EN", flag: "/assets/usa.svg", label: "Inglês" },
  ];

  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/#servicos" },
    { label: "Software", href: "/software" },
    { label: "Portefólio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contactos", href: "/contactos" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false; // Links de âncora na home não são considerados 'active' de rota
    return pathname.startsWith(href);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-[100] py-4">
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logotipo-webhouse.svg"
              alt="WEBhouse Logo"
              width={142}
              height={20}
              className="w-auto h-3"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors ${active
                    ? "text-secondary-900"
                    : "text-primary-50 hover:text-secondary-900"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {/* Lang Dropdown */}
          <div className="relative flex items-center">
            <div
              className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Image src={lang.flag} alt={lang.label} width={12} height={9} className="w-4 h-auto drop-shadow-sm rounded-[2px]" />
              <CaretDown weight="bold" className={`w-[var(--icon-xs)] h-[var(--icon-xs)] text-white transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
            </div>

            {isLangOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setIsLangOpen(false)} />
                <div className="absolute top-full right-0 mt-3 w-52 bg-white rounded-md shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  {languageOptions.map((l) => (
                    <button
                      key={l.code}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-secondary-800 hover:bg-neutral-100 transition-colors text-left"
                      onClick={() => {
                        setLang(l);
                        setIsLangOpen(false);
                      }}
                    >
                      <Image src={l.flag} alt={l.label} width={14} height={11} className="w-4 h-auto drop-shadow-sm rounded-[2px]" />
                      <span className="font-medium">{l.label}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            <List weight="bold" className="w-[var(--icon-md)] h-[var(--icon-md)]" />
          </button>
        </div>

        {/* Mobile Nav Slider */}
        <div
          className={`fixed inset-0 z-[100] bg-secondary-900 flex flex-col md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between p-4 mb-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/assets/logotipo-webhouse.svg"
                alt="WEBhouse Logo"
                width={142}
                height={20}
                className="w-auto h-3"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Close Menu"
            >
              <X weight="bold" className="w-[var(--icon-md)] h-[var(--icon-md)]" />
            </button>
          </div>

          <div className="flex flex-col px-6 gap-6">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-2xl font-light transition-colors ${active
                      ? "text-secondary-300"
                      : "text-white hover:text-secondary-300"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
