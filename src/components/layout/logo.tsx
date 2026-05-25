import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-90",
        className,
      )}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-nebula text-primary-foreground shadow-glow">
        <span className="font-display text-base font-bold tracking-tight">
          G
        </span>
        <span
          aria-hidden
          className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-foreground">
            GALAXY
          </span>
          <span className="font-display text-[10px] font-medium tracking-[0.35em] text-muted-foreground">
            VOLLEYBALL · CLUB
          </span>
        </span>
      )}
    </Link>
  );
}
