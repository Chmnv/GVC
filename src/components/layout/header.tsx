"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { mainNav } from "@/config/nav";
import { cn } from "@/lib/utils";

const NAV_OFFSET = 96; // header height (64px) + a bit of breathing room

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // GPU-accelerated, spring-smoothed scroll progress — silky regardless
  // of scroll wheel / trackpad cadence.
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
    restDelta: 0.001,
  });

  // Scroll handler — only updates non-progress state (header tint + scroll-spy).
  useEffect(() => {
    const ids = mainNav
      .map((item) => item.href.replace(/^#/, ""))
      .filter(Boolean);

    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      // Active section = the one whose top is closest to (but above)
      // the bottom of the navbar.
      let bestId: string | null = null;
      let bestTop = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top - NAV_OFFSET;
        if (top <= 0 && top > bestTop) {
          bestTop = top;
          bestId = id;
        }
      }
      setActiveId(bestId);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // The pill follows hover; falls back to the active section when nothing
  // is hovered. This is the classic "Apple navbar" pattern.
  const indicatorId = hoveredId ?? activeId;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color,box-shadow] duration-500 ease-smooth",
        scrolled
          ? "border-b border-border/60 bg-background/65 shadow-[0_8px_32px_-16px_hsl(var(--background)/0.6)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* ── Desktop nav with animated sliding pill ──────────── */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setHoveredId(null)}
        >
          {mainNav.map((item) => {
            const id = item.href.replace(/^#/, "");
            const isActive = id === activeId;
            const showIndicator = id === indicatorId;
            return (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredId(id)}
                onFocus={() => setHoveredId(id)}
                onBlur={() => setHoveredId(null)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  "focus-visible:outline-none focus-visible:text-foreground",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {showIndicator && (
                  <motion.span
                    layoutId="nav-pill"
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-inset ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    aria-hidden
                    className="absolute -bottom-0.5 left-1/2 z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-primary shadow-glow"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* ── Desktop CTAs ────────────────────────────────────── */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <a href="#contact">Sign in</a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Join now</a>
          </Button>
        </div>

        {/* ── Mobile trigger ──────────────────────────────────── */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors lg:hidden",
            "border border-border/80 hover:text-foreground",
            open && "border-primary/40 bg-primary/5 text-foreground",
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Scroll progress bar (GPU-smoothed via spring) ─────── */}
      <motion.div
        aria-hidden
        style={{ scaleX: smoothProgress, transformOrigin: "0% 50%" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary via-nebula to-neon-cyan"
      />

      {/* ── Mobile menu (animated, staggered) ─────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {
                  transition: {
                    staggerChildren: 0.025,
                    staggerDirection: -1,
                  },
                },
                show: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.08,
                  },
                },
              }}
              className="mx-auto flex w-full max-w-7xl flex-col gap-1.5 px-4 pb-6 pt-4 sm:px-6"
            >
              {mainNav.map((item, i) => {
                const id = item.href.replace(/^#/, "");
                const isActive = id === activeId;
                return (
                  <motion.a
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      show: { opacity: 1, x: 0 },
                    }}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "group flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-base transition-colors",
                      isActive
                        ? "bg-white/[0.04] text-foreground ring-1 ring-inset ring-primary/30"
                        : "text-foreground/85 hover:bg-white/5 hover:text-foreground",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className={cn(
                          "h-1.5 w-1.5 rounded-full transition-all duration-300",
                          isActive
                            ? "bg-primary shadow-glow"
                            : "bg-border group-hover:bg-foreground/40",
                        )}
                      />
                      {item.label}
                    </span>
                    <span className="font-mono text-2xs uppercase tracking-[0.2em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.a>
                );
              })}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-4 grid gap-2"
              >
                <Button asChild variant="outline" size="md">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Sign in
                  </a>
                </Button>
                <Button asChild size="md">
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Join the club
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
