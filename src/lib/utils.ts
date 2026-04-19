import { type ClassValue, clsx } from "clsx";

/**
 * Utilitário para mesclar classes condicionalmente.
 * Usa clsx para composição de classes Tailwind.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
