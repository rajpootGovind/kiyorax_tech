import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-[#080a11] px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-brand-cyan/[0.14] blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-violet/[0.16] blur-[110px]"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] opacity-50 sm:-right-10 sm:-top-16"
            >
              <g className="animate-spin-slow" style={{ transformOrigin: "200px 200px" }}>
                <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.07)" />
                <circle cx="200" cy="200" r="112" fill="none" stroke="rgba(0,200,245,0.18)" strokeDasharray="2 8" />
                <ellipse cx="200" cy="200" rx="168" ry="66" fill="none" stroke="rgba(133,46,255,0.2)" transform="rotate(-28 200 200)" />
                <circle cx="350" cy="200" r="4" fill="#00C8F5" />
                <circle cx="132" cy="96" r="3" fill="#B79CFF" />
              </g>
            </svg>

            <div className="relative max-w-3xl">
              <p className="eyebrow text-white/40">Start here</p>
              <h2 className="mt-5 text-[clamp(2.1rem,4.6vw,4rem)] font-semibold leading-[1.02] text-white">
                Have an idea?{" "}
                <span className="text-gradient">Let&apos;s turn it into reality.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/50">
                Whether you&apos;re starting a new business, upgrading existing systems, or
                building your next digital product, our team is ready to help.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Magnetic>
                  <Button href="/contact" variant="brand" size="lg">
                    Start a Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </Magnetic>
                <Magnetic strength={0.14}>
                  <Button href={`mailto:${site.email}`} variant="outline" size="lg">
                    <Mail className="h-4 w-4" />
                    Talk to Our Team
                  </Button>
                </Magnetic>
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                {site.email} · {site.location}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
