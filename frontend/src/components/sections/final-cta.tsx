import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-18">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-18 lg:px-16">
            <div aria-hidden="true" className="absolute inset-0 bg-grid-soft opacity-[0.08]" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-28 h-96 w-96 rounded-full bg-sky/20 blur-[110px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-sky/10 blur-[100px]"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 360 360"
              className="pointer-events-none absolute -right-16 top-1/2 hidden h-[340px] w-[340px] -translate-y-1/2 opacity-40 lg:block"
            >
              <circle cx="180" cy="180" r="150" fill="none" stroke="rgba(255,255,255,0.08)" />
              <circle cx="180" cy="180" r="112" fill="none" stroke="rgba(43,156,240,0.25)" strokeDasharray="2 8" />
              <ellipse cx="180" cy="180" rx="165" ry="66" fill="none" stroke="rgba(43,156,240,0.18)" transform="rotate(-28 180 180)" />
              <circle cx="330" cy="180" r="4" fill="#5FC2FF" />
              <circle cx="112" cy="76" r="3" fill="#8FD8FF" />
            </svg>

            <div className="relative max-w-3xl">
              <p className="eyebrow text-sky-bright">Start here</p>
              <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.04em] text-white">
                Have an idea in mind?{" "}
                <span className="text-sky-bright">Let&apos;s turn it into something meaningful.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
                Tell us what you&apos;re trying to build. We&apos;ll help you explore the
                right approach.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Magnetic>
                  <Button href="/contact" variant="light" size="lg" className="w-full sm:w-auto">
                    Start a conversation
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </Button>
                </Magnetic>
                <Button
                  href={`mailto:${site.email}`}
                  variant="onDark"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Email our team
                </Button>
              </div>

              <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                {site.email} · {site.location} · Response within one business day
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
