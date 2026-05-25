import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

/**
 * Лёгкая декоративная сетка с radial-маской.
 * Размещайте абсолютно внутри секции с `relative`.
 */
export function GridBackground({ className }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.55]",
        className,
      )}
    />
  );
}
