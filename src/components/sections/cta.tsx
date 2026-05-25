import { ArrowRight, CalendarDays } from "lucide-react";
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
              <Badge variant="default">Join the club</Badge>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Ready to enter the{" "}
                <span className="text-gradient">Galaxy orbit?</span>
              </h2>
              <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                Drop us a line — a coach will get back to you within a day,
                match you with the right group and invite you to a free trial
                session.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 lg:ml-auto lg:max-w-xs">
              <Button asChild size="lg" className="w-full">
                <a href="mailto:hello@galaxyvolleyball.club">
                  Book now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full"
              >
                <a href="#schedule">
                  <CalendarDays className="h-4 w-4" />
                  View schedule
                </a>
              </Button>
              <p className="mt-1 text-center text-xs text-muted-foreground lg:text-right">
                First training is free. Ages 7–45.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
