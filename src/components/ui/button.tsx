import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium",
    "transition-[transform,box-shadow,background,color,border-color] duration-300 ease-smooth",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50 select-none",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "bg-gradient-to-r from-primary via-primary to-nebula text-primary-foreground",
          "shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5",
        ),
        secondary: cn(
          "bg-surface-elevated text-foreground border border-border/80",
          "hover:bg-surface hover:border-primary/40 hover:text-foreground",
        ),
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/5",
        outline: cn(
          "border border-border/80 bg-transparent text-foreground",
          "hover:border-primary/50 hover:bg-primary/5",
        ),
        link: "text-primary underline-offset-4 hover:underline px-0 h-auto rounded-none",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
