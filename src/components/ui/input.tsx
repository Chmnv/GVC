import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-full border border-border/80 bg-surface/50 px-5 py-2 text-sm text-foreground",
        "placeholder:text-muted-foreground/70 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "transition-all duration-300 ease-smooth",
        "hover:border-border-strong",
        "focus-visible:outline-none focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:shadow-glow",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl border border-border/80 bg-surface/50 px-5 py-3 text-sm text-foreground",
        "placeholder:text-muted-foreground/70 resize-y",
        "transition-all duration-300 ease-smooth",
        "hover:border-border-strong",
        "focus-visible:outline-none focus-visible:border-primary/60 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:shadow-glow",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "text-2xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";
