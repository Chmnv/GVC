"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { NavLink } from "@/components/layout/nav-link";
import { mainNav } from "@/config/nav";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {mainNav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              external={item.external}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href="#contact">Sign in</a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Join now</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-t border-border/60 bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open
            ? "max-h-[80vh] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-6 sm:px-6">
          {mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-display text-base text-foreground/90 transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild variant="outline" size="md">
              <a href="#contact" onClick={() => setOpen(false)}>
                Sign in
              </a>
            </Button>
            <Button asChild size="md">
              <a href="#contact" onClick={() => setOpen(false)}>
                Book a trial training
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
