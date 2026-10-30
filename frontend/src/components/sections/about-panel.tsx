"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Compass, Flag, Route } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    key: "vision",
    label: "Our Vision",
    icon: Compass,
    title: "A partner for the next version of your business.",
    body: "To be the technology partner ambitious businesses turn to when an idea needs to become a dependable digital product — one that creates real, measurable value and keeps earning its place as the business grows.",
    points: ["Long-term thinking", "Meaningful products", "Measurable value"],
  },
  {
    key: "mission",
    label: "Our Mission",
    icon: Flag,
    title: "Build digital products that do real work.",
    body: "To combine modern engineering, thoughtful design, and business understanding to build websites, applications, and platforms that help our clients operate smarter, connect better, and grow with confidence.",
    points: ["Modern engineering", "Thoughtful design", "Business understanding"],
  },
  {
    key: "approach",
    label: "Our Approach",
    icon: Route,
    title: "Clarity first. Then code.",
    body: "We start with the business problem, not the technology. We keep scope honest, communicate clearly, and build in reviewable milestones so every decision is understood by both sides — long before launch day.",
    points: ["Honest scope", "Clear communication", "Reviewable milestones"],
  },
] as const;

export function AboutPanel() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const tab = tabs[active];
  const Icon = tab.icon;

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 -bottom-4 h-24 rounded-[2rem] bg-ink/10 blur-xl"
      />
      <div className="relative overflow-hidden rounded-[2rem] bg-ink p-2">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-white/[0.07] bg-ink-soft">
          <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]"
          />

          <div
            role="tablist"
            aria-label="About KiyoraX"
            className="relative flex flex-wrap gap-1 border-b border-white/[0.07] p-3"
          >
            {tabs.map((item, index) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                id={`about-tab-${item.key}`}
                aria-selected={active === index}
                aria-controls={`about-panel-${item.key}`}
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    setActive((active + 1) % tabs.length);
                  }
                  if (event.key === "ArrowLeft") {
                    setActive((active - 1 + tabs.length) % tabs.length);
                  }
                }}
                className={cn(
                  "relative rounded-full px-4 py-2.5 text-[12px] font-medium transition-colors",
                  active === index ? "text-white" : "text-white/45 hover:text-white/75",
                )}
              >
                {active === index ? (
                  <motion.span
                    layoutId="about-tab"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="relative min-h-[330px] p-7 sm:min-h-[300px] sm:p-9">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-3 font-display text-[110px] font-semibold leading-none text-white/[0.035]"
            >
              0{active + 1}
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab.key}
                id={`about-panel-${tab.key}`}
                role="tabpanel"
                aria-labelledby={`about-tab-${tab.key}`}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-brand-cyan">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-[22px] font-medium leading-snug text-white">
                  {tab.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/50">{tab.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {tab.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/40"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex items-center justify-between border-t border-white/[0.07] px-7 py-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/25">
              KiyoraX / Operating principles
            </span>
            <div className="flex gap-1.5">
              {tabs.map((item, index) => (
                <button
                  key={item.key}
                  type="button"
                  aria-label={`Show ${item.label}`}
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    active === index ? "w-6 bg-brand-cyan" : "w-1.5 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
