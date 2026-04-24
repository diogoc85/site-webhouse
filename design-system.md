# Webhouse — Design System
**Versão:** 2.0.0 · Tailwind CSS v3  
**Tipografia:** Figtree · [Google Fonts](https://fonts.google.com/specimen/Figtree)  
**Grid base:** 8px  

> Todos os tokens seguem a convenção nativa do Tailwind (`bg-primary-500`, `text-secondary-700`, etc.).  
> Arquivos: `tailwind.config.js` + `globals.css`

---

## Sumário

1. [Setup](#1-setup)
2. [Paleta de cores](#2-paleta-de-cores)
3. [Tokens semânticos](#3-tokens-semânticos)
4. [Tipografia](#4-tipografia)
5. [Espaçamentos](#5-espaçamentos)
6. [Bordas](#6-bordas)
7. [Botões](#7-botões)
8. [Links](#8-links)
9. [Breakpoints](#9-breakpoints)
10. [Referência rápida de classes](#10-referência-rápida-de-classes)

---

## Regras de Implementação (OBRIGATÓRIO)

Nunca usar valores arbitrários
Nunca usar cores HEX diretamente
Sempre usar tokens definidos
Reutilizar componentes antes de criar novos
Garantir consistência entre sections

---

## 1. Setup


### 1.1 Importar `globals.css`

```css
/* No topo do seu CSS principal */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ou importar o arquivo `globals.css` diretamente:

```js
// Next.js: em _app.js ou layout.js
import './globals.css'

// Vite / Vue: em main.js
import './globals.css'
```

### 1.4 Adicionar fonte Figtree

```html
<!-- No <head> do HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## 2. Paleta de cores

### 2.1 Primary Red — `primary`

Cor principal da marca. Escala 50→900, ancoragem no **500**.

| Classe Tailwind | Hex | Uso |
|---|---|---|
| `bg-primary-50` / `text-primary-50` | `#FFF0F2` | Fundos levíssimos, hover states sutis |
| `bg-primary-100` | `#FFD6DB` | Fills de badges, highlights |
| `bg-primary-200` | `#FFB3BB` | Estados desabilitados com tom de marca |
| `bg-primary-300` | `#FF8A96` | Ícones secundários, bordas suaves |
| `bg-primary-400` | `#FF5468` | Hover de botão primário |
| **`bg-primary-500`** | **`#FF2840`** | **COR PRINCIPAL — botões, links, destaques** |
| `bg-primary-600` | `#E0001B` | Active/pressed de botão primário |
| `bg-primary-700` | `#B8001A` | Texto de erro em fundos claros |
| `bg-primary-800` | `#8C0014` | Texto sobre fundo primary-100/200 |
| `bg-primary-900` | `#5C000D` | Texto de alta ênfase em contexto de marca |

---

### 2.2 Secondary Grey — `secondary`

Cor estrutural. Usada para backgrounds escuros, textos e superfícies. Escala 50→900, ancoragem no **500**.

| Classe Tailwind | Hex | Uso |
|---|---|---|

| `bg-secondary-50` | `#ebebeb` | Fundo de página padrão |
| `bg-secondary-100` | `#c0c0c0` | Superfícies de cards em contexto claro |
| `bg-secondary-200` | `#a1a1a1` | Bordas e divisores em fundo claro |
| `bg-secondary-300` | `#767676` | Texto desabilitado, placeholders |
| `bg-secondary-400` | `#5c5c5c` | Texto terciário, captions |
| `bg-secondary-500` | `#333333` | COR BASE — texto primário, backgrounds escuros |
| `bg-secondary-600` | `#2e2e2e` | Texto de corpo / bg elevado escuro |
| `bg-secondary-700` | `#242424` | Texto secundário em fundo claro
| `bg-secondary-800` | `#1c1c1c` | Fundos de seções escuras, footer |
| `bg-secondary-900` | `#151515` | Fundo máximo |

---

### 2.3 Neutral — `neutral`

Cor neutra para divisores, fundos de input e superfícies. Escala 50→900, ancoragem no **200**.

| Classe Tailwind | Hex | Uso |
|---|---|---|
| `bg-neutral-50` | `#FAFAFA` | Fundo de página, zebra de tabela |
| `bg-neutral-100` | `#F4F4F4` | Superfícies de cards neutros |
| **`bg-neutral-200`** | **`#E9E9E9`** | **BASE NEUTRA — bordas e fundos de input** |
| `bg-neutral-300` | `#D4D4D4` | Bordas de ênfase em contexto neutro |
| `bg-neutral-400` | `#ABABAB` | Placeholders, ícones inativos |
| `bg-neutral-500` | `#888888` | Texto de hint, labels |
| `bg-neutral-600` | `#666666` | Texto de apoio |
| `bg-neutral-700` | `#444444` | Texto de média hierarquia |
| `bg-neutral-800` | `#2A2A2A` | Texto de alta hierarquia alternativo |
| `bg-neutral-900` | `#1A1A1A` | Texto quase preto |

---

### 2.4 Estados semânticos

| Classe Tailwind | Hex | Uso |
|---|---|---|
| `bg-success` / `text-success` | `#1A7F5A` | Cor base de sucesso |
| `bg-success-bg` | `#E6F5EF` | Fundo de alerta de sucesso |
| `text-success-text` | `#0F5C3E` | Texto em fundo success-bg |
| `bg-warning` / `text-warning` | `#B45309` | Cor base de atenção |
| `bg-warning-bg` | `#FEF3C7` | Fundo de alerta de atenção |
| `text-warning-text` | `#92400E` | Texto em fundo warning-bg |
| `bg-error` / `text-error` | `#FF2840` | Cor base de erro (= primary-500) |
| `bg-error-bg` | `#FFF0F2` | Fundo de alerta de erro |
| `text-error-text` | `#B8001A` | Texto em fundo error-bg |
| `bg-info` / `text-info` | `#1D62A8` | Cor base de informação |
| `bg-info-bg` | `#EBF4FF` | Fundo de alerta de informação |
| `text-info-text` | `#134F8A` | Texto em fundo info-bg |

---

## 3. Tokens semânticos

Mapa de uso por intenção → classe Tailwind correspondente.

### 3.1 Texto

| Intenção | Classe Tailwind | Hex |
|---|---|---|
| Texto primário (padrão) | `text-secondary-700` | `#333333` |
| Texto secundário | `text-secondary-500` | `#616161` |
| Texto terciário | `text-secondary-400` | `#757575` |
| Texto desabilitado | `text-neutral-400` | `#ABABAB` |
| Placeholder | `text-secondary-300` | `#9E9E9E` |
| Texto sobre fundo escuro | `text-white` | `#FFFFFF` |
| Texto muted sobre fundo escuro | `text-neutral-300` | `#D4D4D4` |
| Texto sobre fundo brand | `text-white` | `#FFFFFF` |
| Texto de link / destaque de marca | `text-primary-500` | `#FF2840` |
| Texto de marca com ênfase | `text-primary-700` | `#B8001A` |

### 3.2 Background

| Intenção | Classe Tailwind | Hex |
|---|---|---|
| Fundo de página | `bg-white` | `#FFFFFF` |
| Superfície padrão | `bg-neutral-50` ou `.bg-surface` | `#FAFAFA` |
| Superfície sutil | `bg-neutral-100` ou `.bg-surface-subtle` | `#F4F4F4` |
| Superfície muted (cards) | `bg-neutral-200` ou `.bg-surface-muted` | `#E9E9E9` |
| Seção escura | `bg-secondary-700` ou `.bg-section-dark` | `#333333` |
| Seção mais escura | `bg-secondary-800` ou `.bg-section-darker` | `#222222` |
| Seção preta | `bg-secondary-900` ou `.bg-section-black` | `#111111` |
| Seção de marca (full) | `bg-primary-500` ou `.bg-brand-full` | `#FF2840` |
| Seção de marca (sutil) | `bg-primary-50` ou `.bg-brand-subtle` | `#FFF0F2` |

---

## 4. Tipografia

**Classe base:** `font-sans` → Figtree

### 4.1 Pesos

| Classe Tailwind | Valor | Uso |
|---|---|---|
| `font-light` | 300 | Textos decorativos, display de grande escala |
| `font-normal` | 400 | Corpo de texto padrão |
| `font-medium` | 500 | Labels, navegação, destaque leve |
| `font-semibold` | 600 | Subtítulos, campos de formulário, H6 |
| `font-bold` | 700 | H1 canônico, headings intermediários, botões |
| `font-extrabold` | 800 | H2, H3 canônicos, seções de impacto |
| `font-black` | 900 | Display máximo |

### 4.2 Tamanhos

| Classe Tailwind | px | rem | Uso |
|---|---|---|---|
| `text-2xs` | 12px | 0.75rem | Caption, copyright, metadados |
| `text-xs` | 14px | 0.875rem | Body sm, labels pequenos, badges |
| `text-sm` | 16px | 1rem | Body padrão, H6, botões |
| `text-md` | 18px | 1.125rem | Body lg, subtítulos |
| `text-lg` | 20px | 1.25rem | Body xl, H5 |
| `text-xl` | 24px | 1.5rem | Subheadlines |
| `text-2xl` | 28px | 1.75rem | H4 |
| `text-3xl` | 32px | 2rem | H2 mobile |
| `text-4xl` | 36px | 2.25rem | Tamanho intermediário |
| `text-5xl` | 40px | 2.5rem | H3, H1 mobile |
| `text-6xl` | 48px | 3rem | Tamanho display intermediário |
| `text-7xl` | 56px | 3.5rem | H2 |
| `text-8xl` | 64px | 4rem | Display grande |
| `text-9xl` | 72px | 4.5rem | H1 |
| `text-10xl` | 80px | 5rem | Display XL |
| `text-11xl` | 96px | 6rem | Display XXL |
| `text-12xl` | 112px | 7rem | Display XXXL |
| `text-display` | 128px | 8rem | Display máximo |

### 4.3 Headings canônicos (definidos no `@layer base`)

Os elementos `h1`–`h6` já têm estilos aplicados automaticamente.  
Para usar como classe utilitária, use os componentes definidos no `@layer components`:

```html
<!-- Usando elemento HTML (aplica estilo automaticamente) -->
<h1>Título da página</h1>
<h2>Título de seção</h2>

<!-- Usando classes utilitárias de peso (override) -->
<h1 class="h1-bold">Título com peso diferente</h1>
<h2 class="h2-black">Seção em fundo escuro</h2>
<h3 class="h3-light">Subtítulo editorial</h3>
```

| Componente | Tamanho | Peso | Uso canônico |
|---|---|---|---|
| `h1-bold` ★ | `text-9xl` (72px) | `font-bold` (700) | H1 canônico, hero, capa |
| `h1-extrabold` | `text-9xl` (72px) | `font-extrabold` (800) | Hero alternativo |
| `h1-black` | `text-9xl` (72px) | `font-black` (900) | Peso extremo |
| `h2-extrabold` ★ | `text-7xl` (56px) | `font-extrabold` (800) | Títulos de seção |
| `h2-black` | `text-7xl` | `font-black` (900) | Seção dark/brand |
| `h3-extrabold` ★ | `text-5xl` (40px) | `font-extrabold` (800) | Subtítulos de seção |
| `h4-bold` ★ | `text-2xl` (28px) | `font-bold` (700) | Títulos de cards |
| `h5-bold` ★ | `text-lg` (20px) | `font-bold` (700) | Títulos de cards menores |
| `h6-semibold` ★ | `text-sm` (16px) | `font-semibold` (600) | Rótulos, micro-headings |

★ = peso canônico recomendado

### 4.4 Estilos de corpo e UI

```html
<p class="text-body-xl">Subtítulo de hero — 20px / regular</p>
<p class="text-body-lg">Corpo principal — 18px / regular</p>
<p class="text-body-md">Texto padrão — 16px / regular</p>
<p class="text-body-sm">Apoio e disclaimers — 14px / regular</p>
<span class="text-caption">Copyright, legenda — 12px / medium</span>

<label class="text-label-md">Campo de formulário</label>
<span class="text-overline">CATEGORIA / RÓTULO ACIMA</span>
```

---

## 5. Espaçamentos

Grid de **8px**. A escala do Tailwind foi substituída para alinhar com o design system.

| Classe Tailwind | Valor | Uso |
|---|---|---|
| `p-0` / `m-0` | 0px | Reset |
| `p-0.5` / `gap-0.5` | 4px | Espaço mínimo, gap de ícone inline |
| `p-1` / `gap-1` | **8px** | Padding interno mínimo, gap ícone–texto |
| `p-2` / `gap-2` | **16px** | Gap entre elementos, padding de badges |
| `p-3` / `gap-3` | **24px** | Padding de cards, gap entre campos |
| `p-4` / `gap-4` | **32px** | Gap entre cards, padding mobile |
| `p-5` / `gap-5` | **40px** | Espaço entre grupos de elementos |
| `p-6` / `gap-6` | **48px** | Altura mínima de CTAs, padding navbar |
| `p-7` / `gap-7` | **56px** | Espaço entre blocos distintos |
| `p-8` / `gap-8` | **64px** | Padding vertical de seções mobile |
| `p-9` / `gap-9` | **72px** | Padding de seções tablet |
| `p-10` / `gap-10` | **80px** | Padding vertical de seções desktop |
| `p-11` / `gap-11` | **88px** | Espaço entre seções grandes |
| `p-12` / `gap-12` | **96px** | Padding de seções de alto impacto |
| `p-13` / `gap-13` | **104px** | Padding de hero sections |

> As classes `p-*`, `m-*`, `px-*`, `py-*`, `gap-*`, `space-x-*`, `space-y-*` — todas usam essa escala.

---

## 6. Bordas

### 6.1 Espessuras

| Classe Tailwind | Valor | Uso |
|---|---|---|
| `border` | 1px | Padrão — inputs, divisores |
| `border-medium` | 1.5px | Ênfase — card selecionado, input em foco |
| `border-thick` | 2px | Destaque máximo — card featured |
| `border-0` | 0px | Sem borda |

### 6.2 Border radius

| Classe Tailwind | Valor | Uso |
|---|---|---|
| `rounded-none` | 0px | Sem arredondamento |
| `rounded-sm` | 4px | Tags, chips |
| `rounded-md` | 8px | **Padrão obrigatório de botões e inputs** |
| `rounded-lg` | 12px | Cards, modais, dropdowns |
| `rounded-xl` | 16px | Cards grandes |
| `rounded-2xl` | 24px | Hero images, containers |
| `rounded-full` | 9999px | Pills, badges, avatares |

### 6.3 Cores de borda — Primary

| Classe Tailwind | Hex | Uso |
|---|---|---|
| `border-primary-500` | `#FF2840` | Padrão — input em foco, card ativo |
| `border-primary-400` | `#FF5468` | Hover state de borda brand |
| `border-primary-600` | `#E0001B` | Active state de borda brand |
| `border-primary-100` | `#FFD6DB` | Borda sutil em contexto de marca |
| `border-primary-200` | `#FFB3BB` | Borda muted, estado desabilitado |

**Helpers de componente (definidos no `globals.css`):**

```html
<div class="border-brand">          <!-- border 1px solid #FF2840 --></div>
<div class="border-brand-emphasis"> <!-- border 1.5px solid #FF2840 --></div>
<div class="border-brand-thick">    <!-- border 2px solid #FF2840 --></div>
<div class="border-brand-subtle">   <!-- border 1px solid #FFD6DB --></div>
```

### 6.4 Cores de borda — Secondary

| Classe Tailwind | Hex | Uso |
|---|---|---|
| `border-secondary-700` | `#333333` | Padrão dark — cards em seção escura |
| `border-secondary-600` | `#4A4A4A` | Hover de borda dark |
| `border-secondary-300` | `#9E9E9E` | Borda sutil em contexto secondary |
| `border-secondary-200` | `#BDBDBD` | Borda muted |

**Helpers:**

```html
<div class="border-dark">           <!-- border 1px solid #333333 --></div>
<div class="border-dark-emphasis">  <!-- border 1.5px solid #333333 --></div>
<div class="border-on-dark">        <!-- border 1px solid #4A4A4A --></div>
```

### 6.5 Cores de borda — Neutral

| Classe Tailwind | Hex | Uso |
|---|---|---|
| `border-neutral-200` | `#E9E9E9` | Padrão neutro — inputs, cards |
| `border-neutral-300` | `#D4D4D4` | Ênfase neutra |
| `border-neutral-100` | `#F4F4F4` | Borda sutil |

```html
<div class="border-base">           <!-- border 1px solid #E9E9E9 --></div>
<div class="border-base-strong">    <!-- border 1px solid #D4D4D4 --></div>
```

---

## 7. Botões

> **Regra obrigatória:** todos os botões usam `rounded-md` (8px).

### 7.1 Classes de componente

```html
<!-- Primário -->
<button class="btn-primary">Quero um orçamento grátis</button>

<!-- Secundário (outline brand) -->
<button class="btn-secondary">Ver projetos</button>

<!-- Ghost (outline neutro) -->
<button class="btn-ghost">Saiba mais</button>

<!-- Dark -->
<button class="btn-dark">Falar pelo WhatsApp</button>

<!-- Light (sobre fundo escuro) -->
<button class="btn-light">Ver portfólio</button>
```

### 7.2 Modificadores de tamanho

```html
<button class="btn-primary btn-sm">Pequeno — 32px</button>
<button class="btn-primary btn-md">Médio — 40px (padrão)</button>
<button class="btn-primary btn-lg">Grande — 48px</button>
<button class="btn-primary btn-xl">Extra grande — 56px</button>
```

### 7.3 Estados

| Estado | Classe Tailwind | Comportamento |
|---|---|---|
| Default | — | Estilo base do componente |
| Hover | `hover:bg-primary-400` | Automático no componente |
| Active | `active:bg-primary-600` | Automático no componente |
| Disabled | `disabled:cursor-not-allowed` | Automático no componente |
| Loading | Adicionar `opacity-70 pointer-events-none` | Manual |

### 7.4 Usando classes utilitárias diretamente

```html
<!-- Sem usar o componente .btn-primary -->
<button class="
  inline-flex items-center justify-center
  font-bold text-xs text-white
  bg-primary-500 hover:bg-primary-400 active:bg-primary-600
  rounded-md px-3 py-2 min-h-[40px]
  transition-colors duration-150
  disabled:bg-primary-200 disabled:cursor-not-allowed
">
  Orçamento grátis
</button>
```

---

# 🔘 Button & Icon Sizing (Tokens)

## 📏 Base

Todos os tamanhos seguem a escala de 8px e são definidos como tokens no `globals.css`.

---

## 🔘 Button Sizes

### Tokens

* --btn-sm-height → 32px

* --btn-md-height → 40px

* --btn-lg-height → 48px

* --btn-sm-px → 12px

* --btn-md-px → 16px

* --btn-lg-px → 24px

* --btn-sm-py → 6px

* --btn-md-py → 8px

* --btn-lg-py → 12px

---

## Uso com Tailwind

* sm → h-[var(--btn-sm-height)] px-3 py-1.5 text-sm
* md → h-[var(--btn-md-height)] px-4 py-2 text-base
* lg → h-[var(--btn-lg-height)] px-6 py-3 text-lg

---

## 🎯 Icon Sizes

### Tokens

* --icon-xs → 16px
* --icon-sm → 20px
* --icon-md → 24px
* --icon-lg → 32px

---

## Uso com Tailwind

* xs → w-4 h-4
* sm → w-5 h-5
* md → w-6 h-6
* lg → w-8 h-8

---

## 📐 Spacing Tokens

* --icon-gap-sm → 8px
* --icon-gap-md → 12px

---

## Uso

* botões → gap-2
* listas/cards → gap-2 ou gap-3

---

## 🧠 Regras

* Sempre usar tokens definidos
* Nunca usar valores arbitrários
* Seguir escala de 8px
* Manter consistência entre componentes

---

## 8. Links

### 8.1 Default (inline, dentro de texto)

Aplicado automaticamente no `@layer base` para todos os `<a>`.

```html
<a href="#">Link padrão — vermelho com underline</a>
```

### 8.2 Variantes de componente

```html
<!-- Navegação (navbar, footer) -->
<a href="#" class="link-nav">Serviços</a>
<a href="#" class="link-nav link-nav-active">Projetos</a>

<!-- CTA textual standalone -->
<a href="#" class="link-cta">Ver todos os projetos →</a>

<!-- Sobre fundo escuro -->
<a href="#" class="link-on-dark">Política de Privacidade</a>
```

### 8.3 Usando classes utilitárias

```html
<!-- Link de navegação manual -->
<a href="#" class="text-secondary-700 no-underline font-medium hover:text-primary-500 transition-colors">
  Serviços
</a>

<!-- Link sobre dark manual -->
<a href="#" class="text-primary-300 hover:text-primary-200 hover:underline underline-offset-[3px]">
  Ver projetos
</a>
```

---

## 9. Breakpoints

### 9.1 Escala

O sistema é **mobile-first**. Estilos sem prefixo se aplicam a partir de 0px. Cada prefixo ativa o estilo a partir do tamanho declarado.

| Prefixo | Min-width | Dispositivo alvo |
|---|---|---|
| *(sem prefixo)* | `0px` | Mobile portrait — padrão base |
| `sm:` | `480px` | Mobile landscape, smartphones maiores |
| `md:` | `768px` | Tablet portrait |
| `lg:` | `1024px` | Tablet landscape, laptops |
| `xl:` | `1280px` | Desktop |
| `2xl:` | `1440px` | Desktop wide |
| `3xl:` | `1920px` | Full HD, telas grandes |

### 9.2 Uso básico

```html
<!-- Texto cresce conforme a tela aumenta -->
<h1 class="text-5xl md:text-7xl lg:text-9xl font-bold">
  Título da página
</h1>

<!-- Grid responsivo -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  ...
</div>

<!-- Padding de seção responsivo -->
<section class="py-8 md:py-10 lg:py-13">
  ...
</section>

<!-- Visibilidade por breakpoint -->
<div class="block md:hidden">Só no mobile</div>
<div class="hidden md:block">Tablet em diante</div>
```

### 9.3 Breakpoints de max-width (mobile-last)

O Tailwind v3 suporta `max-*` nativamente como prefixo de breakpoint máximo.

| Prefixo | Max-width | Uso |
|---|---|---|
| `max-sm:` | `< 480px` | Apenas mobile portrait |
| `max-md:` | `< 768px` | Apenas mobile (portrait + landscape) |
| `max-lg:` | `< 1024px` | Mobile e tablet |
| `max-xl:` | `< 1280px` | Até laptop |
| `max-2xl:` | `< 1440px` | Até desktop comum |
| `max-3xl:` | `< 1920px` | Até desktop wide |

```html
<!-- Ocultar apenas no mobile -->
<nav class="max-md:hidden">Navbar desktop</nav>

<!-- Menu hamburguer apenas no mobile -->
<button class="max-md:block hidden">Menu</button>
```

### 9.4 Padrões de layout responsivo

Padrões recomendados para uso consistente no projeto:

```html
<!-- Container padrão do site -->
<div class="container-site">
  <!-- max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 -->
</div>

<!-- Padding vertical de seção -->
<section class="py-8 md:py-10 lg:py-13"> ... </section>

<!-- Padding hero -->
<section class="py-10 md:py-12 lg:py-13"> ... </section>

<!-- Headline responsiva H1 -->
<h1 class="text-5xl md:text-7xl lg:text-9xl font-bold leading-tightest tracking-tightest">
  Título da página
</h1>

<!-- Headline responsiva H2 -->
<h2 class="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
  Título de seção
</h2>

<!-- Headline responsiva H3 -->
<h3 class="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-snug tracking-tight">
  Subtítulo
</h3>

<!-- Grid de cards 1 → 2 → 3 colunas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
  ...
</div>

<!-- Split layout 1 → 2 colunas -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
  ...
</div>

<!-- Navbar responsiva -->
<ul class="hidden md:flex items-center gap-3"> ... </ul>
<button class="md:hidden">Menu</button>

<!-- Corpo de texto responsivo -->
<p class="text-xs md:text-sm lg:text-md leading-spacious text-secondary-700">
  ...
</p>
```

### 9.5 Tipografia responsiva por heading

| Heading | Base (mobile) | `md:` 768px | `2xl:` 1440px |
|---|---|---|---|
| H1 | `text-5xl` — 40px | `text-7xl` — 56px | `text-9xl` — 72px |
| H2 | `text-3xl` — 32px | `text-5xl` — 40px | `text-7xl` — 56px |
| H3 | `text-2xl` — 28px | `text-4xl` — 36px | `text-5xl` — 40px |
| H4 | `text-xl` — 24px | `text-2xl` — 28px | `text-2xl` — 28px |
| H5 | `text-md` — 18px | `text-lg` — 20px | `text-lg` — 20px |
| H6 | `text-sm` — 16px | `text-sm` — 16px | `text-sm` — 16px |

### 9.6 Espaçamentos responsivos por contexto

| Contexto | Mobile | `md:` | `lg:` |
|---|---|---|---|
| Padding hero | `py-10` (80px) | `py-12` (96px) | `py-13` (104px) |
| Padding de seção | `py-8` (64px) | `py-10` (80px) | `py-13` (104px) |
| Padding de card | `p-3` (24px) | `p-4` (32px) | `p-4` (32px) |
| Gap entre cards | `gap-3` (24px) | `gap-4` (32px) | `gap-4` (32px) |
| Padding horizontal container | `px-4` (32px) | `px-6` (48px) | `px-8` (64px) |

---

## 10. Referência rápida de classes

### Cores mais usadas

```
bg-primary-500        → #FF2840 (brand)
bg-primary-50         → #FFF0F2 (brand sutil)
bg-secondary-700      → #333333 (dark padrão)
bg-secondary-800      → #222222 (dark mais escuro)
bg-neutral-200        → #E9E9E9 (superfície neutra)
bg-white              → #FFFFFF
text-secondary-700    → #333333 (texto primário)
text-secondary-500    → #616161 (texto secundário)
text-primary-500      → #FF2840 (texto brand / links)
text-white            → #FFFFFF (sobre fundos escuros)
border-primary-500    → #FF2840
border-neutral-200    → #E9E9E9
```

### Headings mais usados

```
text-9xl font-bold     → H1 canônico (72px / 700)
text-7xl font-extrabold → H2 canônico (56px / 800)
text-5xl font-extrabold → H3 canônico (40px / 800)
text-2xl font-bold      → H4 canônico (28px / 700)
text-lg  font-bold      → H5 canônico (20px / 700)
text-sm  font-semibold  → H6 canônico (16px / 600)
```

### Espaçamentos mais usados

```
p-1 / gap-1   →  8px   (mínimo interno)
p-2 / gap-2   → 16px   (gap padrão)
p-3 / gap-3   → 24px   (padding de card)
p-4 / gap-4   → 32px   (gap entre cards)
p-6           → 48px   (altura de CTA / navbar)
p-8           → 64px   (padding seção mobile)
p-10          → 80px   (padding seção desktop)
p-13          → 104px  (padding hero)
```

### Container padrão

```html
<!-- SECTION -->
<section className="nome-da-section full section">
  <div className="container-site">
    {/* conteúdo */}
  </div>
</section>
```


