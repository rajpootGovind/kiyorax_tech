import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { whyChooseUs } from "@/data/content";

export function WhyUs() {
  return (
    <section id="why-kiyorax" className="relative overflow-hidden bg-paper text-ink">
      <div className="container-x section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/40">Why KiyoraX</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04]">
                More than development.{" "}
                <span className="text-gradient-brand">A technology partnership.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/55">
                The difference is rarely the framework. It is how a team thinks, communicates,
                and stays accountable after launch.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative mt-9 overflow-hidden rounded-3xl bg-ink p-7 text-white">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-blue/25 blur-[70px]"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 200"
                  className="pointer-events-none absolute -bottom-16 -right-12 h-56 w-56 opacity-40"
                >
                  <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.1)" />
                  <circle cx="100" cy="100" r="56" fill="none" stroke="rgba(0,200,245,0.25)" strokeDasharray="2 6" />
                  <circle cx="100" cy="100" r="34" fill="none" stroke="rgba(133,46,255,0.35)" />
                  <circle cx="156" cy="100" r="3" fill="#00C8F5" />
                  <circle cx="100" cy="44" r="2.5" fill="#B79CFF" />
                </svg>
                <p className="relative font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                  Our commitment
                </p>
                <p className="relative mt-5 max-w-xs font-display text-[24px] font-medium leading-[1.25] tracking-tight text-white">
                  &ldquo;The best technology decision is the one your business can grow into.&rdquo;
                </p>
                <ul className="relative mt-7 space-y-3">
                  {["Honest scoping and timelines", "Clear, consistent communication", "Support that continues after launch"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[12.5px] text-white/55">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <Link
                  href="/about"
                  className="relative mt-7 inline-flex items-center gap-1.5 text-[12px] font-medium text-brand-cyan"
                >
                  How we work
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
              {whyChooseUs.map((reason, index) => (
                <Reveal key={reason.title} delay={index * 0.04} y={14} className="bg-paper">
                  <div className="group h-full p-6 transition-colors duration-300 hover:bg-white sm:p-7">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink/10 text-ink/45 transition-all duration-300 group-hover:border-brand-blue/25 group-hover:text-brand-blue">
                        <ServiceIcon name={reason.icon} className="h-4 w-4" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-[16px] font-medium tracking-tight text-ink">
                      {reason.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink/50">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
