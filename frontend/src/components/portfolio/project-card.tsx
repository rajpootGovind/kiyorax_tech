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
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_30px_60px_-45px_rgba(19,41,61,0.5)]",
        className,
      )}
    >
      <div className="relative h-[240px] overflow-hidden border-b border-line sm:h-[260px]">
        <ProjectPreview project={project} />
        <span className="absolute left-4 top-4 rounded-full border border-line bg-white/90 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-ink/65 backdrop-blur-sm">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">
          Demo concept
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[19px] font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="mt-1 text-[12px] text-muted">{project.subtitle}</p>
          </div>
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink/65 transition-all duration-300 group-hover:border-sky/40 group-hover:text-sky">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-3.5 line-clamp-2 text-[12.5px] leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 pt-5">
          {project.stack.slice(0, 4).map((tech, index) => (
            <span key={tech} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="h-[3px] w-[3px] rounded-full bg-ink/20" aria-hidden="true" />
              ) : null}
              <span className="text-[9.5px] font-medium uppercase tracking-[0.08em] text-ink/65">
                {tech}
              </span>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
