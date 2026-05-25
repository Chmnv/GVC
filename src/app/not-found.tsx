import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Glow } from "@/components/effects/glow";
import { GridBackground } from "@/components/effects/grid-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <GridBackground />
      <Glow color="primary" size="xl" className="-left-40 top-1/3" />
      <Glow color="nebula" size="lg" className="-right-32 bottom-10" />

      <Container size="tight" className="relative z-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
          404 · Off-orbit
        </p>
        <h1 className="mt-4 font-display text-6xl font-bold tracking-tight sm:text-8xl">
          <span className="text-gradient">Signal lost</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          This page has drifted into deep space. Head back home and we&rsquo;ll
          point you to the nearest flight.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
