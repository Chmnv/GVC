import { cn } from "@/lib/utils";

export type GlowColor =
  | "primary"
  | "nebula"
  | "accent"
  | "cyan"
  | "violet"
  | "magenta"
  | "lime";

export type GlowSize = "sm" | "md" | "lg" | "xl";

interface GlowProps {
  className?: string;
  color?: GlowColor;
  size?: GlowSize;
}

const colorMap: Record<GlowColor, string> = {
  primary: "bg-primary/30",
  nebula: "bg-nebula/30",
  accent: "bg-accent/30",
  cyan: "bg-neon-cyan/30",
  violet: "bg-neon-violet/30",
  magenta: "bg-neon-magenta/30",
  lime: "bg-neon-lime/25",
};

const sizeMap: Record<GlowSize, string> = {
  sm: "h-40 w-40 blur-2xl",
  md: "h-72 w-72 blur-3xl",
  lg: "h-[28rem] w-[28rem] blur-[120px]",
  xl: "h-[40rem] w-[40rem] blur-[140px]",
};

/**
 * Soft colored glow — used for atmospheric background highlights.
 * Place inside a positioned (relative/isolate) parent.
 */
export function Glow({
  className,
  color = "primary",
  size = "lg",
}: GlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full opacity-70",
        colorMap[color],
        sizeMap[size],
        className,
      )}
    />
  );
}
