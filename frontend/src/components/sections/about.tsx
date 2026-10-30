import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { AboutPanel } from "./about-panel";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper text-ink">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-70 mask-fade-b" />
      <div className="container-x section-pad relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/40">About KiyoraX</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04]">
                Technology built around{" "}
                <span className="text-gradient-brand">your business.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 text-[15px] leading-relaxed text-ink/65">
                KiyoraX Technologies is a digital solutions company focused on helping
                businesses turn ideas into impactful technology products.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/50">
                We combine modern engineering, creative thinking, and business
                understanding to develop scalable websites, intelligent applications,
                CRM platforms, and digital experiences.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 grid max-w-md grid-cols-3 gap-4 border-y border-ink/10 py-5">
                {[
                  ["Strategy", "Business first"],
                  ["Engineering", "Built to scale"],
                  ["Design", "Considered UX"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/35">
                      {label}
                    </p>
                    <p className="mt-1.5 text-[13px] font-medium text-ink/75">{value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
              >
                <span className="link-underline">More about KiyoraX</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-ink/15 transition-colors group-hover:border-ink/40">
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
