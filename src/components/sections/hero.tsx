import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Glow } from "@/components/effects/glow";
import { GridBackground } from "@/components/effects/grid-background";
import { Noise } from "@/components/effects/noise";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      <GridBackground />
      <Noise opacity={0.05} />

      <Glow color="primary" size="xl" className="-left-40 top-10" />
      <Glow color="nebula" size="lg" className="right-[-10rem] top-40" />
      <Glow color="accent" size="md" className="bottom-10 left-1/3" />

      <Container size="wide" className="relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-8">
            <Badge variant="default" className="animate-fade-in">
              <Sparkles className="h-3.5 w-3.5" />
              Season 2026 · Registration open
            </Badge>

            <h1 className="animate-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-foreground">Gravity of strength.</span>
              <br />
              <span className="text-gradient">Orbit of the team.</span>
            </h1>

            <p className="max-w-xl animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:120ms]">
              Galaxy Volleyball Club is a next-generation premium volleyball
              club. High-tech training, performance analytics and the
              atmosphere of big-time sports in every match.
            </p>

            <div className="flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:240ms]">
              <Button asChild size="lg">
                <a href="#contact">
                  Book a trial training
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#about">
                  <Play className="h-4 w-4" />
                  Watch the club film
                </a>
              </Button>
            </div>

            <dl className="grid max-w-md animate-fade-up grid-cols-3 gap-6 pt-6 [animation-delay:360ms]">
              {[
                { value: "12", label: "years in sport" },
                { value: "8", label: "teams" },
                { value: "320+", label: "athletes" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <dt className="font-display text-3xl font-semibold text-foreground">
                    {stat.value}
                  </dt>
                  <dd className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Decorative orbit visual */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
            <div className="absolute inset-0 animate-spin-slow rounded-full bg-nebula-glow opacity-40 blur-2xl" />
            <div className="absolute inset-6 rounded-full border border-border/70" />
            <div className="absolute inset-16 rounded-full border border-border/50" />
            <div className="absolute inset-28 rounded-full border border-border/30" />

            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 via-nebula/20 to-transparent shadow-glow-strong backdrop-blur-xl">
              <span className="font-display text-5xl font-bold text-foreground">
                GVC
              </span>
            </div>

            <span
              aria-hidden
              className="absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 animate-pulse-soft rounded-full bg-primary shadow-glow"
            />
            <span
              aria-hidden
              className="absolute right-10 top-1/2 h-2.5 w-2.5 -translate-y-1/2 animate-pulse-soft rounded-full bg-nebula shadow-glow [animation-delay:600ms]"
            />
            <span
              aria-hidden
              className="absolute bottom-10 left-1/3 h-2 w-2 animate-pulse-soft rounded-full bg-star shadow-glow [animation-delay:1200ms]"
            />
          </div>
        </div>
      </Container>

      {/* Bottom fade for a smooth section transition */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background"
      />
    </section>
  );
}
