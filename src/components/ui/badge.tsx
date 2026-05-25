import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-2xs font-medium uppercase tracking-[0.15em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/10 text-primary/90 shadow-inner-border",
        outline: "border-border/80 bg-transparent text-muted-foreground",
        accent:
          "border-accent/30 bg-accent/10 text-accent/90 shadow-inner-border",
        nebula:
          "border-nebula/30 bg-nebula/10 text-nebula/90 shadow-inner-border",
        neon:
          "border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan shadow-glow-cyan",
        success: "border-success/30 bg-success/10 text-success",
        warning: "border-warning/30 bg-warning/10 text-warning",
        destructive:
          "border-destructive/30 bg-destructive/10 text-destructive",
        live: cn(
          "border-neon-magenta/40 bg-neon-magenta/10 text-neon-magenta",
          "before:mr-1.5 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-neon-magenta before:animate-pulse-soft",
        ),
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-2xs",
        lg: "px-3.5 py-1.5 text-xs",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
