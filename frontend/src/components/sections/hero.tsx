import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { HandshakeVisual } from "@/components/hero/handshake-visual";
import { site } from "@/data/site";

const capabilities = [
  "Website development",
  "Web applications",
  "Custom CRM",
  "E-commerce",
  "SaaS",
  "AI integration",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-soft opacity-60 mask-fade-b" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] rounded-full bg-sky/[0.07] blur-[110px]"
      />
      <div className="container-x relative">
        <div className="grid items-center gap-10 pb-12 pt-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 lg:pb-16 lg:pt-10">
          <div className="relative z-10">
            <Reveal delay={0.05}>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pl-2 pr-4 text-[11px] font-medium text-ink/65 backdrop-blur-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-soft text-sky">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                </span>
                Websites · Platforms · CRM · AI · Growth
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-7 max-w-[15ch] text-[clamp(2.55rem,5.2vw,4.55rem)] font-bold leading-[1.01] tracking-[-0.045em] text-ink">
                Great ideas deserve a technology partner{" "}
                <span className="text-sky">you can trust.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-muted sm:text-[17px]">
                From your first idea to a fully working digital product, we make
                technology feel simpler, smarter, and more human.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic>
                  <Button href="/contact" size="lg" className="w-full sm:w-auto">
                    Let&apos;s build something together
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </Button>
                </Magnetic>
                <Button href="/portfolio" variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore our work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 text-[12px] text-ink/65">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Open for new partnerships
                </span>
                <span className="hidden h-3 w-px bg-line sm:block" />
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-ink/65" aria-hidden="true" />
                  Based in {site.location}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={14} className="relative z-0">
            <HandshakeVisual />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="border-t border-line py-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/65">
                What we do
              </p>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="text-[12.5px] font-medium text-ink/65"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink/70 hover:text-ink"
              >
                <span className="link-underline">All services</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
