"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  tone = "light",
  className,
}: {
  items: AccordionItem[];
  tone?: "light" | "dark";
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduced = useReducedMotion();
  const light = tone === "light";

  return (
    <div className={cn("divide-y", light ? "divide-ink/10" : "divide-white/10", className)}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-6 text-left transition-colors",
                  light ? "text-ink hover:text-brand-blue" : "text-white hover:text-brand-cyan",
                )}
              >
                <span className="flex gap-4">
                  <span
                    className={cn(
                      "mt-0.5 font-mono text-[11px] tracking-widest",
                      light ? "text-ink/35" : "text-white/35",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-medium sm:text-base">{item.question}</span>
                </span>
                <span
                  className={cn(
                    "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    light ? "border-ink/15" : "border-white/15",
                    isOpen && "rotate-45 border-transparent bg-[linear-gradient(120deg,#00c8f5,#852eff)] text-white",
                  )}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "pb-7 pl-9 pr-10 text-sm leading-relaxed sm:text-[15px]",
                      light ? "text-ink/60" : "text-muted",
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
