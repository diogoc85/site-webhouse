import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center gap-2 text-2xs md:text-xs ${className}`}>
      <Link href="/" className="text-white/60 hover:text-white transition-colors">
        Home
      </Link>

      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-2">
          <CaretRight weight="bold" className="w-2 h-2 text-white/40" />
          {index === items.length - 1 ? (
            <span className="text-white font-regular" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link href={item.href} className="text-white/60 hover:text-white transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
