import { Activity, BrainCircuit, Dumbbell, Radar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { GridBackground } from "@/components/effects/grid-background";
import type { FeatureItem } from "@/types";

const features: FeatureItem[] = [
  {
    title: "Tech-driven training",
    description:
      "Video analytics, motion sensors and heat maps — every movement is calibrated to win.",
    icon: BrainCircuit,
  },
  {
    title: "Strength & conditioning",
    description:
      "Individual S&C programs tailored to age, role and the player's game profile.",
    icon: Dumbbell,
  },
  {
    title: "Tactical analytics",
    description:
      "Match, opponent and self-review breakdowns — we turn data into on-court decisions.",
    icon: Radar,
  },
  {
    title: "Recovery & health",
    description:
      "Physiotherapy, recovery and load monitoring: zero injuries, maximum progress.",
    icon: Activity,
  },
];

export function About() {
  return (
    <Section id="about" spacing="lg" className="relative overflow-hidden">
      <GridBackground />

      <Container size="wide" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="nebula">About the club</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Next-generation sport — <br className="hidden sm:block" />
            <span className="text-gradient">precise, fast, intelligent</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We combine the craft of high-level volleyball with modern training
            technology. From the first touch of the ball to the professional
            league — alongside a team, real analytics and genuine care.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
