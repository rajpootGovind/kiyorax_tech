import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { whyChooseUs } from "@/data/content";

export function WhyUs() {
  return (
    <section id="why-kiyorax" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-sky/10 blur-[120px]"
      />
      <div className="container-x section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-sky-bright">Why KiyoraX</p>
                <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.07] text-white">
                  The difference is rarely the framework.
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
                  It is how a team thinks, communicates, and stays accountable after
                  launch. These are the habits we bring to every engagement.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    Our commitment
                  </p>
                  <p className="mt-4 font-display text-[21px] font-semibold leading-snug text-white">
                    &ldquo;The best technology decision is the one your business can grow
                    into.&rdquo;
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Honest scoping and timelines",
                      "Clear, consistent communication",
                      "Support that continues after launch",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[12.5px] text-white/60">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky/15 text-sky-bright">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/about"
                    className="group mt-6 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-sky-bright"
                  >
                    <span className="link-underline">How we work</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-white/10">
              {whyChooseUs.map((reason, index) => (
                <Reveal key={reason.title} delay={index * 0.04} y={12}>
                  <div className="group grid grid-cols-[auto_1fr] gap-5 border-b border-white/10 py-6 sm:gap-8">
                    <span className="mt-1 text-[10.5px] font-semibold tracking-[0.12em] text-white/55">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold tracking-tight text-white">
                        {reason.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/50">
                        {reason.description}
                      </p>
                    </div>
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
