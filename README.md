# Web House — Site Institucional

Agência digital especializada em criação de sites, identidade visual e estratégias digitais.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilos:** Tailwind CSS v3 + Design System Webhouse
- **Fonte:** Figtree (Google Fonts)
- **Deploy:** Vercel

## Design System

O projeto segue o **Webhouse Design System v2.0.0**. A fonte da verdade está em:

- [`design-system.md`](./design-system.md) — Documentação completa
- [`tailwind.config.js`](./tailwind.config.js) — Tokens de design no Tailwind
- [`src/app/globals.css`](./src/app/globals.css) — Componentes e base styles

### Regras obrigatórias

- ❌ Nunca usar cores HEX hardcoded — use tokens Tailwind
- ❌ Nunca usar shadows
- ❌ Nunca usar border em botões ou cards
- ❌ Nunca criar estilos inline
- ✅ Toda section deve seguir o padrão:

```tsx
<section id="nome-da-section" className="full">
  <div className="container mx-auto">
    {/* conteúdo */}
  </div>
</section>
```

## Estrutura de Pastas

```
/src
  /app            → App Router (pages, layouts, api)
  /components
    /ui           → Componentes reutilizáveis base (Section, Button, etc.)
    /sections     → Sections específicas do site (Hero, Services, etc.)
  /lib            → Utilitários (cn, formatters, etc.)

/public
  /assets         → Imagens, ícones, OG images
```

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse em: http://localhost:3000

## SEO & Analytics

Estrutura preparada para integração futura:

- ✅ Sitemap: `/sitemap.xml` (gerado automaticamente)
- ✅ Robots: `/robots.txt` (gerado automaticamente)
- 🔲 Google Analytics (GA4) — adicionar `NEXT_PUBLIC_GA_MEASUREMENT_ID` no `.env.local`
- 🔲 Google Tag Manager — adicionar `NEXT_PUBLIC_GTM_ID` no `.env.local`
- 🔲 Facebook Pixel — adicionar `NEXT_PUBLIC_FB_PIXEL_ID` no `.env.local`
- 🔲 Google Search Console — verificação via `metadata.verification.google`

## Deploy

O projeto está configurado para deploy automático na Vercel via GitHub.

Arquivo: [`vercel.json`](./vercel.json)
