import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

interface NavLinkProps extends Omit<LinkProps, "children"> {
  label: string;
  external?: boolean;
  active?: boolean;
  className?: string;
}

/**
 * Lightweight navigation link with an animated gradient underline.
 * Use it inside footers, breadcrumbs or in-page nav lists.
 * The premium scroll-spy desktop nav lives directly inside `Header`.
 */
export function NavLink({
  label,
  external,
  active,
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
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative inline-flex items-center text-sm font-medium transition-colors duration-300",
        active
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground focus-visible:text-foreground",
        "focus-visible:outline-none",
        className,
      )}
      {...externalProps}
      {...rest}
    >
      {label}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-primary to-nebula transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}
