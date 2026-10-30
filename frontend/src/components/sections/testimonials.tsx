"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/content";
import { cn } from "@/lib/utils";

const AUTO_DELAY = 7000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hovering, setHovering] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const active = testimonials[index];

  useEffect(() => {
    if (hovering || paused || reduced) return;
    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_DELAY);
    return () => window.clearInterval(timer);
  }, [hovering, paused, reduced]);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="relative overflow-hidden bg-paper text-ink">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="container-x section-pad relative">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-ink/40">Client voices</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04]">
                Trusted relationships.{" "}
                <span className="text-gradient-brand">Better digital experiences.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/55">
                We publish client stories only with written permission. Until then,
                these spaces stay honestly reserved.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink/70 hover:text-ink"
            >
              <span className="link-underline">Worked with us? Share your experience</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mt-12 overflow-hidden rounded-3xl bg-ink p-6 text-white sm:p-10 lg:p-12"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onFocus={() => setHovering(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setHovering(false);
              }
            }}
            role="region"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid opacity-30"
            />
            <Quote
              className="absolute right-8 top-8 h-20 w-20 text-white/[0.05]"
              strokeWidth={1}
              aria-hidden="true"
            />

            <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div className="min-h-[210px] sm:min-h-[190px]">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[8.5px] uppercase tracking-[0.2em] text-white/35">
                  <span className="h-1 w-1 rounded-full bg-brand-cyan" />
                  Placeholder — awaiting client approval
                </span>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.blockquote
                    key={index}
                    custom={direction}
                    initial={reduced ? false : { opacity: 0, y: direction * 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, y: direction * -16 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-7 max-w-3xl font-display text-[clamp(1.25rem,2.4vw,1.85rem)] font-medium leading-[1.35] tracking-[-0.02em] text-white/90"
                  >
                    &ldquo;{active.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(0,200,245,0.2),rgba(133,46,255,0.2))] font-mono text-[11px] text-white/70">
                  KX
                </span>
                <div className="md:text-right">
                  <p className="text-[13px] font-medium text-white/80">{active.name}</p>
                  <p className="mt-0.5 text-[11px] text-white/35">{active.role}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
                    {active.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-10 flex items-center justify-between border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  {testimonials.map((item, dotIndex) => (
                    <button
                      key={item.name + dotIndex}
                      type="button"
                      onClick={() => go(dotIndex)}
                      aria-label={`Go to testimonial ${dotIndex + 1}`}
                      aria-current={dotIndex === index ? "true" : undefined}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        dotIndex === index ? "w-7 bg-brand-cyan" : "w-1.5 bg-white/20 hover:bg-white/40",
                      )}
                    />
                  ))}
                </div>
                <span aria-live="polite" className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                  {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPaused((value) => !value)}
                  aria-label={paused ? "Play testimonial rotation" : "Pause testimonial rotation"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
