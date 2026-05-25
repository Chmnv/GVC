import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
}

/**
 * Subtle decorative grid with a radial mask.
 * Place absolutely inside a section with `relative` positioning.
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
