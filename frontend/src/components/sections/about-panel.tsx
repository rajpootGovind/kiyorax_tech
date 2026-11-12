"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Compass, Flag, Route } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    key: "vision",
    label: "Our vision",
    icon: Compass,
    title: "To be the partner businesses trust with the next version of themselves.",
    body: "We want KiyoraX to be the team ambitious businesses call when an idea needs to become a dependable digital product — one that creates real value and keeps earning its place as the business grows.",
    points: ["Long-term thinking", "Meaningful products", "Measurable value"],
  },
  {
    key: "mission",
    label: "Our mission",
    icon: Flag,
    title: "Build digital products that do real work, for real people.",
    body: "We combine modern engineering, thoughtful design, and business understanding to build websites, applications, and platforms that help our clients operate smarter, connect better, and grow with confidence.",
    points: ["Modern engineering", "Thoughtful design", "Business understanding"],
  },
  {
    key: "approach",
    label: "Our approach",
    icon: Route,
    title: "Clarity first. Then code.",
    body: "We start with the business problem, not the technology. Scope stays honest, communication stays clear, and work moves in reviewable milestones — so both sides understand every decision long before launch.",
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
      <div className="absolute -right-2 -top-2 hidden h-20 w-20 rounded-full border border-sky/25 sm:block" />
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
        <div className="flex flex-wrap items-center gap-1 border-b border-line bg-paper/70 p-2">
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
                "relative rounded-full px-4 py-2 text-[12px] font-medium transition-colors",
                active === index ? "text-ink" : "text-ink/65 hover:text-ink/75",
              )}
            >
              {active === index ? (
                <motion.span
                  layoutId="about-tab"
                  className="absolute inset-0 rounded-full border border-line bg-white shadow-[0_4px_14px_-8px_rgba(19,41,61,0.25)]"
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[330px] p-6 sm:min-h-[310px] sm:p-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-5 top-2 font-display text-[96px] font-bold leading-none text-ink/[0.035]"
          >
            0{active + 1}
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              id={`about-panel-${tab.key}`}
              role="tabpanel"
              aria-labelledby={`about-tab-${tab.key}`}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-soft text-sky">
                <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-[21px] font-semibold leading-snug text-ink">
                {tab.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{tab.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tab.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-ink/65"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative flex items-center justify-between border-t border-line px-6 py-3.5">
          <span className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
            KiyoraX · Operating principles
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
                  active === index ? "w-6 bg-sky" : "w-1.5 bg-ink/15 hover:bg-ink/30",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
