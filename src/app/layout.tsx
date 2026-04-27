import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webhouse.com.br"),
  title: {
    default: "Web House — Agência Digital",
    template: "%s | Web House",
  },
  description:
    "A Web House é uma agência digital especializada em criação de sites, identidade visual, tráfego pago e estratégias digitais que geram resultados reais.",
  keywords: [
    "agência digital",
    "criação de sites",
    "tráfego pago",
    "marketing digital",
    "identidade visual",
    "Web House",
  ],
  authors: [{ name: "Web House" }],
  creator: "Web House",
  icons: {
    icon: "/favicon.svg",
  },
  publisher: "Web House",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://webhouse.com.br",
    siteName: "Web House",
    title: "Web House — Agência Digital",
    description:
      "Agência digital especializada em criação de sites, identidade visual e estratégias digitais.",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web House — Agência Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web House — Agência Digital",
    description:
      "Agência digital especializada em criação de sites, identidade visual e estratégias digitais.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "SEU_CÓDIGO_AQUI",  // Google Search Console — adicionar futuramente
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${figtree.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager — adicionar GTM_ID futuramente */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})` }} /> */}

        {/* Facebook Pixel — adicionar PIXEL_ID futuramente */}
        {/* <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){...}` }} /> */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Web House",
              "url": "https://webhouse.com.br",
              "logo": "https://webhouse.com.br/favicon.svg",
              "description": "A Web House é uma agência digital especializada em criação de sites, identidade visual, tráfego pago e estratégias digitais.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "sameAs": [
                "https://www.instagram.com/webhouse",
                "https://www.linkedin.com/company/webhouse"
              ]
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-secondary-900 text-white">
        <SmoothScroll>
          {/* Google Tag Manager (noscript) — adicionar futuramente */}
          {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM_ID" /></noscript> */}

          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
