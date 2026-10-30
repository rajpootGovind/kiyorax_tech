import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectPreview } from "./project-preview";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.18]",
        className,
      )}
    >
      <div className="relative h-[250px] overflow-hidden sm:h-[280px] lg:h-[300px]">
        <ProjectPreview project={project} />
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-brand-cyan/80 backdrop-blur-md">
          Concept
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[20px] font-medium tracking-tight text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-[12px] text-white/40">{project.subtitle}</p>
          </div>
          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-brand-cyan/40 group-hover:text-brand-cyan">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-4 line-clamp-2 text-[13px] leading-relaxed text-white/40">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-5">
          {project.stack.slice(0, 4).map((tech, techIndex) => (
            <span key={tech} className="flex items-center gap-2">
              {techIndex > 0 ? (
                <span className="h-[3px] w-[3px] rounded-full bg-white/20" aria-hidden="true" />
              ) : null}
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
