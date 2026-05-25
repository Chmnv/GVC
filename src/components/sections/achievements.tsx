import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { AchievementItem } from "@/types";

const achievements: AchievementItem[] = [
  {
    year: "2025",
    title: "Серебро Открытого Кубка региона",
    description:
      "Молодёжная команда GVC дошла до финала, уступив лишь по очкам в пятой партии.",
  },
  {
    year: "2024",
    title: "Чемпионы Юношеской Лиги",
    description:
      "Воспитанники клуба U-17 взяли золото и завоевали путёвку на Всероссийские игры.",
  },
  {
    year: "2023",
    title: "Запуск программы Analytics+",
    description:
      "Внедрили систему видео-разборов и носимой телеметрии для всех команд клуба.",
  },
  {
    year: "2022",
    title: "Открытие нового зала",
    description:
      "Три профессиональных площадки, медиа-зона и центр восстановления спортсменов.",
  },
];

export function Achievements() {
  return (
    <Section id="achievements" spacing="lg" className="relative">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Badge variant="accent">Достижения</Badge>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Хронология <br />
              <span className="text-gradient">наших побед</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Каждый сезон — это новая высота. Мы делимся ключевыми моментами
              жизни клуба и его команд.
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
