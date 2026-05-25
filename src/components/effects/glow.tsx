import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  color?: "primary" | "nebula" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
}

const colorMap: Record<NonNullable<GlowProps["color"]>, string> = {
  primary: "bg-primary/30",
  nebula: "bg-nebula/30",
  accent: "bg-accent/30",
};

const sizeMap: Record<NonNullable<GlowProps["size"]>, string> = {
  sm: "h-40 w-40 blur-2xl",
  md: "h-72 w-72 blur-3xl",
  lg: "h-[28rem] w-[28rem] blur-[120px]",
  xl: "h-[40rem] w-[40rem] blur-[140px]",
};

/**
 * Soft colored glow — used for atmospheric background highlights.
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
