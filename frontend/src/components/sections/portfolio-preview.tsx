import { ArrowUpRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function PortfolioPreview() {
  const featured = projects.slice(0, 4);

  return (
    <section id="work" className="relative overflow-hidden bg-white">
      <div className="container-x section-pad relative">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Concept work that shows{" "}
                <span className="text-sky">how we think.</span>
              </>
            }
            description="A closer look at the kind of products we design and engineer — CRM platforms, institutional sites, commerce, and internal tools."
            action={
              <Button href="/portfolio" variant="outline" size="sm">
                View the portfolio
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 flex items-start gap-2.5 rounded-xl border border-line bg-paper px-4 py-3 text-[11.5px] leading-relaxed text-muted">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky" aria-hidden="true" />
            <p>
              The projects below are clearly labelled{" "}
              <span className="font-medium text-ink/70">demo concepts</span>, created to
              illustrate our capabilities. Client case studies are published only with
              approval.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.05, 0.15)} y={16}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
