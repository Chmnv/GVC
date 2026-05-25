import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import type { StatItem } from "@/types";

const stats: StatItem[] = [
  {
    value: "320+",
    label: "Athletes",
    hint: "From youth groups to the senior league",
  },
  { value: "24", label: "Coaches", hint: "With international experience" },
  { value: "47", label: "Trophies", hint: "Regional and national titles" },
  { value: "98%", label: "Return rate", hint: "Athletes who stay next season" },
];

export function Stats() {
  return (
    <Section id="stats" spacing="sm" className="relative">
      <Container size="wide">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-7">
              <div className="font-display text-4xl font-bold text-foreground sm:text-5xl">
                <span className="text-gradient">{stat.value}</span>
              </div>
              <div className="mt-3 text-sm font-medium text-foreground/90">
                {stat.label}
              </div>
              {stat.hint && (
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.hint}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
