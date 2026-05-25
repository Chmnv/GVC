import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
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
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  ),
);
Badge.displayName = "Badge";
