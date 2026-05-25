import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Container } from "@/components/ui/container";
import { footerNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/60 bg-background/40 backdrop-blur-md">
      <Container size="wide" as="div" className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {footerNav.map((column) => (
            <div key={column.title} className="space-y-4">
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground/80">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
            Powered by Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}
