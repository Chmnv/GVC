import type { Metadata } from "next";
import { ArrowRight, Download, Sparkles, Trophy, Zap } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input, Label, Textarea } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Spinner } from "@/components/ui/spinner";

import { Glow } from "@/components/effects/glow";
import { GridBackground } from "@/components/effects/grid-background";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Galaxy Volleyball Club design system — palette, typography, primitives, effects.",
};

// ── Local helpers (showcase only) ─────────────────────────────────────────
function Swatch({
  name,
  className,
  hint,
}: {
  name: string;
  className: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-20 w-full rounded-2xl border border-white/5 ${className}`}
      />
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-xs text-foreground/90">{name}</span>
        {hint && (
          <span className="font-mono text-[10px] text-muted-foreground">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}

function SubSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="font-mono text-2xs uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function DesignSystemPage() {
  return (
    <>
      <Header />
      <main className="relative pt-28">
        {/* Page hero */}
        <Section spacing="sm" className="relative overflow-hidden">
          <GridBackground />
          <Glow color="primary" size="xl" className="-left-40 top-0" />
          <Glow color="violet" size="lg" className="-right-32 top-20" />

          <Container size="wide" className="relative">
            <Badge variant="neon">v1 · Design system</Badge>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The <span className="text-gradient-neon">GVC</span> design system
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A premium futuristic toolkit for a volleyball brand. Tokens,
              typography, primitives and effects — built on Tailwind, tuned for
              dark mode by default and engineered to scale to motion-rich UI.
            </p>
          </Container>
        </Section>

        {/* ── Color palette ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="01 — Color"
              title="Dark palette & neon accents"
              description="HSL tokens via CSS variables. Surfaces stack from deep space to overlay; brand & neon hues drive accents and glows."
            />

            <div className="space-y-10">
              <div>
                <Label>Surfaces</Label>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                  <Swatch
                    name="background"
                    className="bg-background"
                    hint="230 35% 4%"
                  />
                  <Swatch
                    name="surface"
                    className="bg-surface"
                    hint="230 30% 7%"
                  />
                  <Swatch
                    name="surface.elevated"
                    className="bg-surface-elevated"
                    hint="230 30% 10%"
                  />
                  <Swatch
                    name="surface.overlay"
                    className="bg-surface-overlay"
                    hint="230 28% 14%"
                  />
                  <Swatch
                    name="muted"
                    className="bg-muted"
                    hint="230 20% 14%"
                  />
                </div>
              </div>

              <div>
                <Label>Brand</Label>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                  <Swatch
                    name="primary"
                    className="bg-primary"
                    hint="226 100% 66%"
                  />
                  <Swatch
                    name="accent"
                    className="bg-accent"
                    hint="188 95% 60%"
                  />
                  <Swatch
                    name="nebula"
                    className="bg-nebula"
                    hint="280 90% 65%"
                  />
                  <Swatch
                    name="star"
                    className="bg-star"
                    hint="196 100% 72%"
                  />
                </div>
              </div>

              <div>
                <Label>Neon accents</Label>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  <Swatch
                    name="neon.blue"
                    className="bg-neon-blue shadow-glow"
                  />
                  <Swatch
                    name="neon.cyan"
                    className="bg-neon-cyan shadow-glow-cyan"
                  />
                  <Swatch
                    name="neon.violet"
                    className="bg-neon-violet shadow-glow-violet"
                  />
                  <Swatch
                    name="neon.magenta"
                    className="bg-neon-magenta shadow-glow-magenta"
                  />
                  <Swatch name="neon.pink" className="bg-neon-pink" />
                  <Swatch
                    name="neon.lime"
                    className="bg-neon-lime shadow-glow-lime"
                  />
                </div>
              </div>

              <div>
                <Label>Semantic</Label>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <Swatch name="success" className="bg-success" />
                  <Swatch name="warning" className="bg-warning" />
                  <Swatch name="info" className="bg-info" />
                  <Swatch name="destructive" className="bg-destructive" />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Typography ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="02 — Typography"
              title="Display, sans & mono"
              description="Space Grotesk for headlines, Inter for UI, JetBrains Mono for code & metadata. Scales pair sizes with line-heights and letter-spacing automatically."
            />

            <Card variant="elevated" className="space-y-6">
              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.3em] text-muted-foreground">
                  Display · Space Grotesk
                </p>
                <p className="mt-3 font-display text-7xl font-bold leading-[1] tracking-tight">
                  Spike. Set. <span className="text-gradient">Galaxy.</span>
                </p>
                <p className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground/90">
                  Heading 4xl — section title
                </p>
                <p className="mt-2 font-display text-2xl font-medium tracking-tight text-foreground/80">
                  Heading 2xl — subhead
                </p>
              </div>

              <div className="hairline" />

              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.3em] text-muted-foreground">
                  Body · Inter
                </p>
                <p className="mt-3 text-lg leading-relaxed text-foreground/90">
                  Body lg — used for hero lead paragraphs and supporting copy.
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Body base — the workhorse of long-form content. Balanced
                  rhythm, comfortable scan length.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Body sm — captions, descriptions, card bodies.
                </p>
              </div>

              <div className="hairline" />

              <div>
                <p className="font-mono text-2xs uppercase tracking-[0.3em] text-muted-foreground">
                  Mono · JetBrains Mono
                </p>
                <p className="mt-3 font-mono text-sm text-neon-cyan">
                  --primary: 226 100% 66%
                </p>
                <p className="font-mono text-2xs uppercase tracking-[0.3em] text-muted-foreground">
                  STATUS · LIVE · 03:42
                </p>
              </div>
            </Card>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Spacing ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="03 — Spacing"
              title="Rhythm & density"
              description="A 4 px base scale with semantic tokens (section, gutter) that fluidly adapt to viewport via clamp()."
            />

            <div className="grid gap-3">
              {[
                { name: "space-2", v: "8 px", w: "w-2" },
                { name: "space-4", v: "16 px", w: "w-4" },
                { name: "space-6", v: "24 px", w: "w-6" },
                { name: "space-10", v: "40 px", w: "w-10" },
                { name: "space-18", v: "72 px", w: "w-18" },
                { name: "space-30", v: "120 px", w: "w-30" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <code className="w-28 font-mono text-xs text-muted-foreground">
                    {s.name}
                  </code>
                  <div
                    className={`h-3 ${s.w} rounded-full bg-gradient-to-r from-primary to-nebula`}
                  />
                  <span className="font-mono text-2xs text-muted-foreground">
                    {s.v}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-4">
                <code className="w-28 font-mono text-xs text-muted-foreground">
                  space-section
                </code>
                <span className="text-sm text-foreground/80">
                  clamp(4rem, 8vw, 7.5rem) — fluid vertical section padding
                </span>
              </div>
              <div className="flex items-center gap-4">
                <code className="w-28 font-mono text-xs text-muted-foreground">
                  space-gutter
                </code>
                <span className="text-sm text-foreground/80">
                  clamp(1rem, 4vw, 2.5rem) — fluid horizontal gutter
                </span>
              </div>
            </div>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Buttons ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="04 — Buttons"
              title="Action primitives"
              description="Seven variants × seven sizes with built-in loading state, icon slots and asChild composition."
            />

            <Card variant="elevated" className="space-y-8">
              <div className="space-y-3">
                <Label>Variants</Label>
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="neon">Neon</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label>Sizes</Label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="xs">XS</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra large</Button>
                  <Button size="icon" aria-label="Sparkles">
                    <Sparkles />
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label>With icons & states</Label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button leftIcon={<Download />}>Download kit</Button>
                  <Button variant="neon" rightIcon={<ArrowRight />}>
                    Enter orbit
                  </Button>
                  <Button loading>Saving</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </Card>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Badges ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="05 — Badges & tags"
              title="Status pills"
              description="Compact metadata, status chips and live indicators."
            />

            <Card variant="elevated" className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="nebula">Nebula</Badge>
              <Badge variant="neon">
                <Sparkles className="h-3 w-3" />
                Neon
              </Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="live">Live · Match</Badge>
            </Card>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Cards (glassmorphism) ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="06 — Cards"
              title="Glassmorphism & beyond"
              description="Five card variants — composed via class-variance-authority. All inherit the same paddings, header/footer slots and hover behaviour."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Badge variant="default">Default</Badge>
                  <CardTitle>Glass · gradient border</CardTitle>
                  <CardDescription>
                    Backdrop-blur surface with an animated gradient hairline.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  The workhorse card — use it for content blocks, stats,
                  features, and lists.
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <Badge variant="accent">Elevated</Badge>
                  <CardTitle>Stronger blur · shadow</CardTitle>
                  <CardDescription>
                    Higher opacity surface with depth shadow — feels closer to
                    the viewer.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Best for hero cards or callouts where hierarchy matters.
                </CardContent>
              </Card>

              <Card variant="neon">
                <CardHeader>
                  <Badge variant="neon">Neon</Badge>
                  <CardTitle>Holographic border</CardTitle>
                  <CardDescription>
                    Animated cyan → violet → magenta hairline. Premium accent.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Use sparingly — feature spotlights, special offers, hero
                  cards.
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <Badge variant="outline">Bordered</Badge>
                  <CardTitle>Solid bordered</CardTitle>
                  <CardDescription>
                    No glass. A calmer surface for dense or technical content.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Ideal for tables, schedule grids and forms.
                </CardContent>
              </Card>

              <Card variant="ghost">
                <CardHeader>
                  <Badge variant="outline">Ghost</Badge>
                  <CardTitle>Transparent</CardTitle>
                  <CardDescription>
                    Borderless container — for grouping without visual weight.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Useful inside other cards or for grids of icons.
                </CardContent>
              </Card>

              <Card interactive>
                <CardHeader>
                  <Badge variant="default">Interactive</Badge>
                  <CardTitle>
                    <Trophy className="-mt-0.5 mr-1 inline h-5 w-5 text-primary" />
                    Hover lift
                  </CardTitle>
                  <CardDescription>
                    Adds translate + glow on hover; pair with anchors or
                    navigation tiles.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button size="sm" variant="ghost" rightIcon={<ArrowRight />}>
                    Open
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Glow & effects ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="07 — Glow & effects"
              title="Light, depth & motion"
              description="Composable glows for atmosphere; utility classes for holographic gradients, scan-lines and hover lifts."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="relative overflow-hidden">
                <Glow color="primary" size="md" className="-left-10 top-4" />
                <CardHeader>
                  <CardTitle>Primary glow</CardTitle>
                  <CardDescription>
                    `&lt;Glow color=&quot;primary&quot; /&gt;` — soft brand light
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <Glow color="cyan" size="md" className="-left-10 top-4" />
                <CardHeader>
                  <CardTitle>Neon cyan</CardTitle>
                  <CardDescription>
                    `color=&quot;cyan&quot;` — pairs with `.shadow-glow-cyan`
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="relative overflow-hidden">
                <Glow color="violet" size="md" className="-left-10 top-4" />
                <Glow color="magenta" size="sm" className="right-0 bottom-0" />
                <CardHeader>
                  <CardTitle>Violet + magenta</CardTitle>
                  <CardDescription>
                    Stack glows for richer atmospheres.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="scan-line-overlay min-h-[140px]">
                <CardHeader>
                  <CardTitle>Scan-line overlay</CardTitle>
                  <CardDescription>
                    Adds a slow vertical sweep — perfect for hero CTAs.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-holographic">
                <CardHeader>
                  <CardTitle>Holographic surface</CardTitle>
                  <CardDescription>
                    `bg-holographic` — animated brand gradient.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Hover lift</CardTitle>
                  <CardDescription>
                    `.hover-lift` — universal premium hover micro-animation.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Zap className="h-4 w-4 text-neon-cyan" />
                  <span className="text-xs text-muted-foreground">
                    Try hovering this card
                  </span>
                </CardFooter>
              </Card>
            </div>
          </Container>
        </Section>

        <div className="hairline mx-auto max-w-6xl" />

        {/* ── Forms ── */}
        <Section spacing="md">
          <Container size="wide">
            <SubSectionHeader
              eyebrow="08 — Forms"
              title="Inputs, textareas, labels"
              description="Rounded forms tuned for the dark surface; primary focus ring + brand glow on focus-visible."
            />

            <Card variant="elevated" className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="ds-name">Full name</Label>
                <Input id="ds-name" placeholder="Maria Volkova" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ds-email">Email</Label>
                <Input id="ds-email" type="email" placeholder="you@galaxy.club" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="ds-msg">Message</Label>
                <Textarea
                  id="ds-msg"
                  placeholder="Tell us about your volleyball experience…"
                />
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <Spinner size="sm" tone="muted" label="Saving" />
                <Button rightIcon={<ArrowRight />}>Submit</Button>
              </div>
            </Card>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
