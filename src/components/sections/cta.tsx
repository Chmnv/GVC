import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Glow } from "@/components/effects/glow";

export function CTA() {
  return (
    <Section id="contact" spacing="lg" className="relative">
      <Container size="wide">
        <div className="glass gradient-border relative overflow-hidden p-10 sm:p-16">
          <Glow color="primary" size="lg" className="-left-32 -top-20" />
          <Glow color="nebula" size="md" className="-right-20 bottom-0" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-6">
              <Badge variant="default">Присоединяйтесь к клубу</Badge>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Готовы войти на орбиту{" "}
                <span className="text-gradient">Galaxy?</span>
              </h2>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Оставьте заявку — наш тренер свяжется в течение дня, подберёт
                группу и пригласит на бесплатную пробную тренировку.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <Button asChild size="lg" className="w-full lg:w-auto">
                <a href="mailto:hello@galaxyvolleyball.club">
                  Записаться сейчас
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full lg:w-auto"
              >
                <a href="#schedule">Посмотреть расписание</a>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">
                Первая тренировка — бесплатно. Возраст: 7–45 лет.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
