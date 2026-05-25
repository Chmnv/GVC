import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Объединяет classNames с учётом конфликтов Tailwind.
 * Используется как `cn("base", condition && "extra", props.className)`.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Форматирует число с разделителями тысяч в локали ru-RU.
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("ru-RU").format(value);
}

/**
 * Безопасное получение публичного URL сайта (для метаданных, OG, sitemap).
 */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000"
  );
}
