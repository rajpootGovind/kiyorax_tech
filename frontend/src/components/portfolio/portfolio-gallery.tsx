"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { ProjectCard } from "./project-card";
import { ProjectPreview } from "./project-preview";
import { portfolioFilters, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function PortfolioGallery() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("All");
  const reduced = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (project) => project.category === filter || project.tags.includes(filter),
    );
  }, [filter]);

  const [featured, ...rest] = filtered;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
        {portfolioFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={cn(
              "rounded-full border px-4 py-2 text-[12px] font-medium transition-all duration-300",
              filter === item
                ? "border-white/20 bg-white text-ink"
                : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/80",
            )}
          >
            {item}
          </button>
        ))}
        <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 sm:block">
          {filtered.length} {filtered.length === 1 ? "concept" : "concepts"}
        </span>
      </div>
      <p aria-live="polite" className="sr-only">
        Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"} in {filter}.
      </p>

      <motion.div layout className="mt-8 space-y-5">
        <AnimatePresence mode="popLayout">
          {featured ? (
            <motion.article
              layout
              key={featured.slug}
              initial={reduced ? false : { opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/portfolio/${featured.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-white/[0.09] bg-ink-soft transition-all duration-500 hover:border-white/[0.18] lg:grid-cols-2"
              >
                <div className="relative h-[300px] overflow-hidden sm:h-[360px] lg:h-auto lg:min-h-[420px]">
                  <ProjectPreview project={featured} />
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-ink/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
                    {featured.category}
                  </span>
                  <span className="absolute right-5 top-5 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-cyan/80 backdrop-blur-md">
                    Featured concept
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                    {featured.subtitle}
                  </p>
                  <h2 className="mt-3 text-[clamp(1.7rem,3vw,2.4rem)] font-semibold tracking-tight text-white">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-lg text-[13.5px] leading-relaxed text-white/45">
                    {featured.summary}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {featured.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[12px] text-white/40">
                        <Check className="h-3.5 w-3.5 text-brand-cyan/60" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {featured.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.12em] text-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium text-white">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ) : null}
        </AnimatePresence>

        <div className="grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {rest.map((project) => (
              <motion.article
                layout
                key={project.slug}
                initial={reduced ? false : { opacity: 0, scale: 0.99 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
