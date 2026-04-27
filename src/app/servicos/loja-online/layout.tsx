import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce e Marketplace",
  description: "Criação de lojas virtuais e integração com marketplaces para escalar suas vendas online 24h por dia.",
  openGraph: {
    title: "E-commerce e Marketplace | Web House",
    description: "Criação de lojas virtuais e integração com marketplaces para escalar suas vendas online 24h por dia.",
  },
};

export default function EcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
