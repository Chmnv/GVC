import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    tone: {
      current: "text-current",
      muted: "text-muted-foreground",
      primary: "text-primary",
      neon: "text-neon-cyan",
    },
  },
  defaultVariants: { size: "sm", tone: "current" },
});

interface SpinnerProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

export function Spinner({
  className,
  size,
  tone,
  label = "Loading",
  ...props
}: SpinnerProps) {
  return (
    <Loader2
      role="status"
      aria-label={label}
      className={cn(spinnerVariants({ size, tone }), className)}
      {...props}
    />
  );
}
