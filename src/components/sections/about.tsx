import { Activity, BrainCircuit, Dumbbell, Radar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { GridBackground } from "@/components/effects/grid-background";
import type { FeatureItem } from "@/types";

const features: FeatureItem[] = [
  {
    title: "Технологичные тренировки",
    description:
      "Видео-аналитика, датчики ускорения и тепловые карты — каждое движение работает на результат.",
    icon: BrainCircuit,
  },
  {
    title: "Силовая подготовка",
    description:
      "Индивидуальные программы ОФП и СФП под возраст, амплуа и игровой профиль спортсмена.",
    icon: Dumbbell,
  },
  {
    title: "Тактическая аналитика",
    description:
      "Разборы игр, противников и собственных ошибок — превращаем данные в спортивные решения.",
    icon: Radar,
  },
  {
    title: "Реабилитация и здоровье",
    description:
      "Физиотерапия, восстановление и мониторинг нагрузок: ноль травм, максимум прогресса.",
    icon: Activity,
  },
];

export function About() {
  return (
    <Section id="about" spacing="lg" className="relative overflow-hidden">
      <GridBackground />

      <Container size="wide" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="nebula">О клубе</Badge>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Спорт нового поколения — <br className="hidden sm:block" />
            <span className="text-gradient">точный, быстрый, умный</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Мы соединяем классику большого волейбола с современными
            технологиями подготовки. От первого касания мяча до выхода в
            профессиональную лигу — рядом с командой, аналитикой и заботой.
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
