import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AboutPanel } from "./about-panel";

const truths = [
  "We ask what the business needs before choosing a technology.",
  "We keep scope honest, even when that means a smaller project.",
  "We stay accountable after launch, not just until handover.",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="container-x section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">About KiyoraX</p>
              <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.07] text-ink">
                Technology built around{" "}
                <span className="text-sky">your business</span> — not the other way
                round.
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                <p>
                  KiyoraX Technologies exists for a straightforward reason: good ideas
                  often stall between ambition and execution. We close that gap with
                  thoughtful design, dependable engineering, and people who understand
                  the business behind the brief.
                </p>
                <p>
                  We work with founders, growing teams, and institutions on websites,
                  platforms, CRM systems, and products that need to prove themselves in
                  daily use.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <ul className="mt-7 space-y-3">
                {truths.map((truth) => (
                  <li key={truth} className="flex items-start gap-2.5 text-[13px] text-ink/65">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {truth}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.22}>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <span className="link-underline">More about KiyoraX</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink/35">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-7">
            <AboutPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
