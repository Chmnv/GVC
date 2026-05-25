import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "tight" | "wide";
  as?: "div" | "section" | "header" | "footer" | "main";
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  tight: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", as: Tag = "div", ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          sizeMap[size],
          className,
        )}
        {...props}
      />
    );
  },
);
Container.displayName = "Container";
