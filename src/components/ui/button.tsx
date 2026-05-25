import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

export const buttonVariants = cva(
  cn(
    "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium",
    "transition-[transform,box-shadow,background,color,border-color,opacity] duration-300 ease-smooth",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50 select-none",
    "[&>svg]:shrink-0",
  ),
  {
    variants: {
      variant: {
        primary: cn(
          "bg-gradient-to-r from-primary via-primary to-nebula text-primary-foreground",
          "shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5 active:translate-y-0",
        ),
        secondary: cn(
          "bg-surface-elevated text-foreground border border-border/80",
          "hover:bg-surface hover:border-primary/40 hover:-translate-y-0.5",
        ),
        outline: cn(
          "border border-border/80 bg-transparent text-foreground",
          "hover:border-primary/60 hover:bg-primary/5 hover:-translate-y-0.5",
        ),
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/5",
        neon: cn(
          "bg-background text-neon-cyan border border-neon-cyan/40",
          "shadow-glow-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan hover:text-foreground hover:-translate-y-0.5",
          "active:translate-y-0",
        ),
        destructive: cn(
          "bg-destructive/15 text-destructive border border-destructive/40",
          "hover:bg-destructive/25 hover:border-destructive/70 hover:-translate-y-0.5",
        ),
        link: "text-primary underline-offset-4 hover:underline px-0 h-auto rounded-none",
      },
      size: {
        xs: "h-8 px-3 text-xs [&>svg]:h-3.5 [&>svg]:w-3.5",
        sm: "h-9 px-4 text-sm [&>svg]:h-4 [&>svg]:w-4",
        md: "h-11 px-6 text-sm [&>svg]:h-4 [&>svg]:w-4",
        lg: "h-12 px-7 text-base [&>svg]:h-4 [&>svg]:w-4",
        xl: "h-14 px-9 text-base [&>svg]:h-5 [&>svg]:w-5",
        icon: "h-11 w-11 [&>svg]:h-5 [&>svg]:w-5",
        "icon-sm": "h-9 w-9 [&>svg]:h-4 [&>svg]:w-4",
        "icon-lg": "h-12 w-12 [&>svg]:h-5 [&>svg]:w-5",
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
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    // When used with `asChild`, Radix's Slot requires exactly one child.
    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? <Spinner size="sm" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";
