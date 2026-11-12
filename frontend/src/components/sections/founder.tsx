import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { founder } from "@/data/team";
import { images } from "@/data/images";

export function FounderSection() {
  const portrait = images.founder.portrait;

  return (
    <section id="founder" className="relative overflow-hidden bg-paper">
      <div className="container-x section-pad relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={0.08} className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-sky/25"
              />
              <div className="relative overflow-hidden rounded-2xl bg-mist">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={portrait.src}
                    alt={portrait.alt}
                    fill
                    sizes="(max-width: 1024px) 85vw, 440px"
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(10,30,46,0.35)_100%)]"
                  />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/85 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/65 backdrop-blur-sm">
                  Demo portrait
                </span>
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl bg-white/95 px-4 py-3 backdrop-blur-sm">
                  <div>
                    <p className="text-[13px] font-semibold text-ink">{founder.name}</p>
                    <p className="mt-0.5 text-[10.5px] text-sky">{founder.role}</p>
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sky-bright">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <Reveal>
              <p className="eyebrow">From the founder</p>
              <h2 className="mt-5 text-[clamp(1.95rem,3.8vw,3.1rem)] font-bold leading-[1.07] text-ink">
                A technology company should feel{" "}
                <span className="text-sky">human to work with.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative mt-7 border-l-2 border-sky pl-5">
                <Quote
                  className="absolute -left-2.5 -top-3 h-5 w-5 rounded-full bg-paper p-0.5 text-sky"
                  aria-hidden="true"
                />
                <p className="font-display text-[18px] font-medium leading-relaxed text-ink/80 sm:text-[20px]">
                  Built on a vision to make technology more meaningful for businesses,
                  KiyoraX brings together innovation, engineering, and a genuine
                  commitment to helping ideas grow.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 max-w-xl space-y-4 text-[14.5px] leading-relaxed text-muted">
                <p>
                  That belief shapes how we work. We take time to understand the business
                  before proposing a solution, keep communication direct, and stay close
                  to the product after launch.
                </p>
                <p>
                  The goal is not to be the loudest technology company in the room. It is
                  to be the one clients trust with the next idea, too.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div>
                  <p className="font-display text-[17px] font-semibold text-ink">
                    Ramkrushna Vishnu Gaikwad
                  </p>
                  <p className="mt-0.5 text-[11.5px] uppercase tracking-[0.1em] text-ink/65">
                    Founder &amp; CEO
                  </p>
                </div>
                <span className="hidden h-8 w-px bg-line sm:block" />
                <Link
                  href="/team"
                  className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-ink"
                >
                  <span className="link-underline">Meet the team</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ink/35">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
                <Button href="/about" variant="ghost" size="sm" className="px-0">
                  Our story
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-6 text-[10px] text-ink/65">
                Demo portrait shown. Replace it with the founder&apos;s photograph by
                updating one file in /public/images/founder.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
