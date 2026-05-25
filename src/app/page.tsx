import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Stats />
        <About />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
