import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Componente base para todas as sections do site.
 *
 * Padrão obrigatório (design system):
 * <section id="nome-da-section" className="full">
 *   <div className="container mx-auto">
 *     {conteúdo}
 *   </div>
 * </section>
 */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("full", className)}>
      <div className={cn("container mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
