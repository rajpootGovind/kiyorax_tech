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
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {portfolioFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={cn(
              "rounded-full border px-4 py-2 text-[12px] font-medium transition-all duration-300",
              filter === item
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink/65 hover:border-ink/25 hover:text-ink",
            )}
          >
            {item}
          </button>
        ))}
        <span className="ml-auto hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/65 sm:block">
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
                className="group grid overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:border-ink/20 hover:shadow-[0_30px_60px_-45px_rgba(19,41,61,0.45)] lg:grid-cols-2"
              >
                <div className="relative min-h-[280px] overflow-hidden border-b border-line sm:min-h-[340px] lg:border-b-0 lg:border-r">
                  <ProjectPreview project={featured} />
                  <span className="absolute left-5 top-5 rounded-full border border-line bg-white/90 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-ink/65 backdrop-blur-sm">
                    {featured.category}
                  </span>
                  <span className="absolute right-5 top-5 rounded-full bg-ink/80 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">
                    Featured concept
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sky">
                    {featured.subtitle}
                  </p>
                  <h2 className="mt-3 text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold tracking-tight text-ink">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-muted">
                    {featured.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {featured.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-[12px] text-ink/65">
                        <Check className="h-3.5 w-3.5 text-sky" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {featured.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-paper px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.08em] text-ink/65"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-ink">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
