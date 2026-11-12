"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import { MessageSquareQuote, Pause, Play } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { commitments } from "@/data/content";
import { cn } from "@/lib/utils";

const rows = [commitments.slice(0, 3), commitments.slice(3)];

function CommitmentCard({
  label,
  statement,
}: {
  label: string;
  statement: string;
}) {
  return (
    <figure className="flex w-[310px] shrink-0 flex-col justify-between rounded-xl border border-line bg-white p-5 sm:w-[360px]">
      <blockquote className="text-[13.5px] leading-relaxed text-ink/75">
        &ldquo;{statement}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-3.5">
        <span className="text-[9.5px] font-semibold uppercase tracking-[0.12em] text-sky">
          {label}
        </span>
        <span className="text-[9px] uppercase tracking-[0.1em] text-ink/65">
          Our commitment
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const paused = hovered || manualPause;

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white">
      <div className="container-x section-pad relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">How we work together</p>
              <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.07] text-ink">
                Trust is built in the{" "}
                <span className="text-sky">small, consistent things.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                Client testimonials will appear here once we have written approval.
                Until then, these are the commitments we hold ourselves to — not claims
                about work we have not been asked to publish.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-4 py-2.5 text-[11px] text-ink/65">
                <MessageSquareQuote className="h-4 w-4 text-sky" aria-hidden="true" />
                Verified client feedback pending
              </div>
              {reduced ? null : (
                <button
                  type="button"
                  onClick={() => setManualPause((value) => !value)}
                  aria-pressed={manualPause}
                  aria-label={
                    manualPause ? "Play commitment rotation" : "Pause commitment rotation"
                  }
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[11px] font-medium text-ink/65 transition-colors hover:border-ink/25 hover:text-ink"
                >
                  {manualPause ? (
                    <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {manualPause ? "Play" : "Pause"}
                </button>
              )}
            </div>
          </Reveal>
        </div>

        {reduced ? (
          <div className="mt-10 space-y-4">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid gap-4 sm:grid-cols-3">
                {row.map((item) => (
                  <CommitmentCard
                    key={item.statement}
                    label={item.label}
                    statement={item.statement}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div
            className="mt-10 space-y-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onTouchStart={() => setHovered(true)}
            onTouchEnd={() => setHovered(false)}
            onTouchCancel={() => setHovered(false)}
          >
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="relative overflow-hidden mask-fade-x"
                aria-label={rowIndex === 0 ? "Our commitments, row one" : "Our commitments, row two"}
              >
                <div
                  className={cn(
                    "flex w-max",
                    rowIndex === 0 ? "marquee-left" : "marquee-right",
                    paused && "marquee-paused",
                  )}
                >
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      aria-hidden={copy === 1}
                      className="flex gap-4 pr-4"
                    >
                      {row.map((item) => (
                        <CommitmentCard
                          key={`${copy}-${item.statement}`}
                          label={item.label}
                          statement={item.statement}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-6 text-[10.5px] text-ink/65">
          Placeholder content. Real client stories will be published only with permission.
        </p>
      </div>
    </section>
  );
}
