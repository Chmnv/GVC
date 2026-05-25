import { cn } from "@/lib/utils";

interface NoiseProps {
  className?: string;
  opacity?: number;
}

/**
 * Тонкий шум поверх фона — добавляет «киношную» фактуру.
 * Использует SVG turbulence, без внешних ассетов.
 */
export function Noise({ className, opacity = 0.04 }: NoiseProps) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
    <filter id='n'>
      <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
      <feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.85 0'/>
    </filter>
    <rect width='100%' height='100%' filter='url(#n)' opacity='1'/>
  </svg>`;
  const url = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 mix-blend-overlay",
        className,
      )}
      style={{
        backgroundImage: url,
        backgroundSize: "200px 200px",
        opacity,
      }}
    />
  );
}
