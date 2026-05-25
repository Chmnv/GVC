import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg";
}

const spacingMap: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-16 sm:py-20",
  md: "py-20 sm:py-28",
  lg: "py-28 sm:py-36",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", ...props }, ref) => (
    <section
      ref={ref}
      className={cn("relative w-full", spacingMap[spacing], className)}
      {...props}
    />
  ),
);
Section.displayName = "Section";
