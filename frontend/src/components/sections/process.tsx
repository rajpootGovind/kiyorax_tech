"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/content";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="process" className="relative overflow-hidden bg-[#070810]">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-violet/[0.07] blur-[120px]"
      />
      <div className="container-x section-pad relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-white/40">Our process</p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] text-white">
                  From first conversation to{" "}
                  <span className="text-gradient">successful launch.</span>
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
                  A deliberate process, not a black box. You see the plan, the progress,
                  and the reasoning at every stage.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="mt-8 space-y-3">
                  {["Weekly progress visibility", "Documented decisions", "Clean handover"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3 text-[12px] text-white/45">
                        <span className="h-px w-5 bg-brand-cyan/50" aria-hidden="true" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <Button href="/contact" variant="outline" size="sm" className="mt-8">
                  Start with discovery
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-8">
            <div className="absolute bottom-3 left-4 top-3 w-px bg-white/[0.08]" aria-hidden="true">
              <motion.div
                style={{ scaleY: reduced ? 1 : scaleY }}
                className="h-full w-full origin-top bg-[linear-gradient(180deg,#00c8f5,#286bff_55%,#852eff)]"
              />
            </div>

            <div className="space-y-2">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.03} y={16}>
                  <div className="group relative pl-12 sm:pl-16">
                    <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#070810] font-mono text-[9px] tracking-wider text-white/40 transition-all duration-300 group-hover:border-brand-cyan/50 group-hover:text-brand-cyan">
                      {step.number}
                    </span>
                    <div className="rounded-2xl border border-transparent px-5 py-4 transition-all duration-300 group-hover:border-white/[0.08] group-hover:bg-white/[0.02] sm:px-6 sm:py-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-[18px] font-medium tracking-tight text-white">
                          {step.title}
                        </h3>
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 transition-colors group-hover:text-white/35">
                          Stage {step.number}
                        </span>
                      </div>
                      <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-white/45">
                        {step.description}
                      </p>
                      <p className="mt-3 max-w-xl border-l border-white/10 pl-3 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.1em] text-white/25">
                        {step.detail}
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
