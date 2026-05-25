import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { AchievementItem } from "@/types";

const achievements: AchievementItem[] = [
  {
    year: "2025",
    title: "Silver at the Regional Open Cup",
    description:
      "The GVC youth squad reached the final, losing only on points in the fifth set.",
  },
  {
    year: "2024",
    title: "Champions of the Junior League",
    description:
      "Our U-17 athletes took gold and earned a place at the national games.",
  },
  {
    year: "2023",
    title: "Launch of the Analytics+ program",
    description:
      "We rolled out video review and wearable telemetry for every team in the club.",
  },
  {
    year: "2022",
    title: "New training facility",
    description:
      "Three professional courts, a media zone and a dedicated athlete recovery center.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" spacing="lg" className="relative">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge variant="accent">Achievements</Badge>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A timeline <br />
              <span className="text-gradient">of our victories</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Every season we reach a new peak. Here are the milestones that
              shape the club and its teams.
            </p>
          </div>

          <ol className="relative space-y-8 border-l border-border/60 pl-8">
            {achievements.map((item) => (
              <li key={item.year} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[2.4rem] top-1.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-glow"
                >
                  <Trophy className="h-3.5 w-3.5" />
                </span>

                <div className="glass gradient-border p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                      {item.year}
                    </span>
                    <span className="h-px flex-1 bg-border/70" />
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
