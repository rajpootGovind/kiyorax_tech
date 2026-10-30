"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

export function TeamCard({
  member,
  featured = false,
  defaultExpanded = false,
  className,
}: {
  member: TeamMember;
  featured?: boolean;
  defaultExpanded?: boolean;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.03] sm:p-7",
        className,
      )}
    >
      {featured ? (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,200,245,0.5),rgba(133,46,255,0.5),transparent)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-blue/[0.12] blur-3xl"
          />
        </>
      ) : null}

      <div className="flex items-start justify-between">
        <div
          className={cn(
            "relative rounded-full bg-[linear-gradient(135deg,rgba(0,200,245,0.5),rgba(40,107,255,0.3),rgba(133,46,255,0.5))] p-px",
            featured ? "h-[76px] w-[76px]" : "h-16 w-16",
          )}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-ink-soft">
            <span
              className={cn(
                "font-display font-medium tracking-tight text-white/85",
                featured ? "text-[22px]" : "text-[18px]",
              )}
            >
              {member.initials}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-1 right-1 h-2 w-2 rounded-full border-2 border-ink-soft bg-brand-cyan"
          />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
          {featured ? "Leadership" : "Team"}
        </span>
      </div>

      <h3
        className={cn(
          "mt-6 font-medium tracking-tight text-white",
          featured ? "text-[20px]" : "text-[16px]",
        )}
      >
        {member.name}
      </h3>
      <p className="mt-1 text-[11.5px] font-medium text-brand-cyan/75">{member.role}</p>

      <div
        className={cn(
          "mt-4 overflow-hidden text-[12.5px] leading-relaxed text-white/40 transition-all duration-500",
          expanded ? "max-h-[500px]" : "max-h-[60px]",
        )}
      >
        <p>{member.bio}</p>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        className="mt-4 inline-flex w-fit items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/30 transition-colors hover:text-brand-cyan"
      >
        {expanded ? "Read less" : "Read more"}
        <ChevronDown
          className={cn("h-3 w-3 transition-transform duration-300", expanded && "rotate-180")}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}
