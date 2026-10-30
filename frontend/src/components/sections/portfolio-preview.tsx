"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { portfolioFilters, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function PortfolioPreview() {
  const [filter, setFilter] = useState<(typeof portfolioFilters)[number]>("All");
  const reduced = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (project) => project.category === filter || project.tags.includes(filter),
    );
  }, [filter]);

  return (
    <section id="work" className="relative overflow-hidden bg-[#070810]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-brand-blue/[0.08] blur-[120px]"
      />
      <div className="container-x section-pad relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/40">Featured work</p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] text-white">
              Real solutions.{" "}
              <span className="text-gradient">Meaningful impact.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              A look at the kind of products we design and engineer — from CRM
              platforms and institutional sites to commerce and internal operations
              tools.
            </p>
          </div>
          <Button href="/portfolio" variant="outline" size="sm">
            View full portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-[11.5px] leading-relaxed text-white/40">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-cyan/60" aria-hidden="true" />
          <p>
            The projects below are clearly labelled <span className="text-white/65">demo concepts</span>{" "}
            created to illustrate our capabilities. Verified client case studies are
            published only with approval.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
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
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>

        <p aria-live="polite" className="sr-only">
          Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"} in {filter}.
        </p>

        <motion.div layout className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                layout
                key={project.slug}
                initial={reduced ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={cn("md:col-span-1", spans[index] ?? "lg:col-span-6")}
              >
                <ProjectCard project={project} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
