import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

interface NavLinkProps extends Omit<LinkProps, "children"> {
  label: string;
  external?: boolean;
  className?: string;
}

export function NavLink({
  label,
  external,
  className,
  href,
  ...rest
}: NavLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : undefined;

  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center text-sm font-medium text-muted-foreground transition-colors duration-300",
        "hover:text-foreground focus-visible:text-foreground focus-visible:outline-none",
        className,
      )}
      {...externalProps}
      {...rest}
    >
      {label}
      <span
        aria-hidden
        className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-primary to-nebula transition-all duration-300 group-hover:w-full"
      />
    </Link>
  );
}
