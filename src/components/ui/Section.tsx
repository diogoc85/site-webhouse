import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * Componente base para todas as sections do site.
 *
 * Padrão obrigatório (design system):
 * <section className="full">
 *   <div className="container mx-auto">
 *     {conteúdo}
 *   </div>
 * </section>
 */
export function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={cn("full", className)}>
      <div className={cn("container mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
