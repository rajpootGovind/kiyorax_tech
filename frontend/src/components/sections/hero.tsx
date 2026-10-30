import Link from "next/link";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { HeroVisual } from "@/components/3d/hero-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 sm:pt-32 lg:pt-36">
      <div aria-hidden="true" className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(0,200,245,0.16),rgba(40,107,255,0.06)_45%,transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute left-[-18%] top-[38%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(133,46,255,0.14),transparent_65%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-[620px] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px translate-x-[580px] bg-gradient-to-b from-transparent via-white/[0.06] to-transparent xl:block"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:pb-24 lg:pt-12 xl:gap-12">
          <div className="relative z-10">
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] py-1.5 pl-2 pr-4 backdrop-blur-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00c8f5,#852eff)]">
                  <Star className="h-3 w-3 fill-white text-white" aria-hidden="true" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Your technology partner for what&apos;s next
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-7 text-[clamp(2.65rem,5.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">
                Transforming ideas into powerful{" "}
                <span className="text-gradient">digital experiences.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-white/55 sm:text-[17px]">
                From intelligent CRM platforms and scalable web applications to
                AI-powered solutions and high-converting digital experiences, we help
                businesses build, innovate, and grow.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic>
                  <Button href="/contact" variant="brand" size="lg">
                    Start Your Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.14}>
                  <Button href="/portfolio" variant="outline" size="lg">
                    Explore Our Work
                  </Button>
                </Magnetic>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-6 text-[12px] text-white/40">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3ddc84]" />
                  Open for new partnerships
                </span>
                <span className="hidden h-3 w-px bg-white/15 sm:block" />
                <span>Websites · Platforms · CRM · AI · Marketing</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={12} className="relative z-0">
            <HeroVisual />
          </Reveal>
        </div>

        <div className="pointer-events-none relative -mt-2 hidden pb-6 lg:block">
          <div className="flex items-center justify-between border-t border-white/[0.06] pt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/25">
              Building intelligent digital experiences
            </p>
            <a
              href="#trust"
              className="pointer-events-auto inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35 transition-colors hover:text-white/70"
            >
              Scroll to explore
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/25">
              01 / Home
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
