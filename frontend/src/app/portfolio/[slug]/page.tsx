import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ChevronRight, Info } from "lucide-react";
import type { Metadata } from "next";
import { FinalCta } from "@/components/sections/final-cta";
import { ProjectPreview } from "@/components/portfolio/project-preview";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getProject, projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createMetadata({
    title: `${project.title} — Concept Case Study`,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-white pb-12 pt-32 sm:pt-36">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-soft opacity-60 mask-fade-b" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full bg-sky/[0.08] blur-[110px]"
        />
        <div className="container-x relative">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink/65"
            >
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/portfolio" className="transition-colors hover:text-ink">
                Portfolio
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-ink/65" aria-current="page">
                {project.title}
              </span>
            </nav>
          </Reveal>

          <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-line bg-paper px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-ink/65">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-ink px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white/85">
                    Demo concept
                  </span>
                </div>
                <h1 className="mt-5 text-[clamp(2.3rem,4.6vw,3.9rem)] font-bold leading-[1.02] tracking-[-0.04em] text-ink">
                  {project.title}
                </h1>
                <p className="mt-3 text-[15px] text-muted">{project.subtitle}</p>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/contact">
                    Discuss a similar project
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button href="/portfolio" variant="outline">
                    All concepts
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:col-span-4">
              <dl className="grid grid-cols-2 gap-4 border-t border-line pt-5">
                {[
                  ["Category", project.category],
                  ["Status", project.year],
                  ["Stack", project.stack.slice(0, 2).join(" · ")],
                  ["Type", "Concept case study"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink/65">
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-[12px] text-ink/65">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative mt-10 overflow-hidden rounded-2xl border border-line bg-paper">
              <div className="h-[300px] sm:h-[400px] lg:h-[480px]">
                <ProjectPreview project={project} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="container-x py-14 sm:py-18">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex items-start gap-3 rounded-xl border border-line bg-paper p-5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                  <p className="text-[12px] leading-relaxed text-muted">
                    <span className="font-semibold text-ink">This is a demo concept.</span>{" "}
                    {project.title} was designed by KiyoraX to illustrate our approach to{" "}
                    {project.category.toLowerCase()} products. It is not a delivered client
                    project, and no client outcomes are claimed.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky">
                    01 / The challenge
                  </p>
                  <h2 className="mt-3 text-[clamp(1.55rem,2.6vw,2.1rem)] font-bold leading-tight text-ink">
                    Why this product needed to exist.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-muted">
                    {project.challenge}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky">
                    02 / The solution
                  </p>
                  <h2 className="mt-3 text-[clamp(1.55rem,2.6vw,2.1rem)] font-bold leading-tight text-ink">
                    The approach we would take.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-muted">
                    {project.solution}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-9">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-sky">
                    03 / Key features
                  </p>
                  <h2 className="mt-3 text-[clamp(1.55rem,2.6vw,2.1rem)] font-bold leading-tight text-ink">
                    What the product would include.
                  </h2>
                  <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13px] text-ink/70">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={0.1}>
                <div className="lg:sticky lg:top-28">
                  <div className="rounded-2xl border border-line bg-white p-6">
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                      Project snapshot
                    </p>
                    <dl className="mt-4 divide-y divide-line border-y border-line">
                      {[
                        ["Category", project.category],
                        ["Tags", project.tags.join(" · ")],
                        ["Stack", project.stack.join(" · ")],
                        ["Status", "Demo concept"],
                      ].map(([label, value]) => (
                        <div key={label} className="py-3.5">
                          <dt className="text-[8.5px] font-semibold uppercase tracking-[0.14em] text-ink/65">
                            {label}
                          </dt>
                          <dd className="mt-1 text-[12.5px] text-ink/65">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <Button href="/contact" size="md" className="mt-5 w-full">
                      Build something like this
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-3 block text-center text-[11px] text-ink/65 hover:text-ink"
                    >
                      or email {site.email}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-line bg-paper">
        <div className="container-x py-14 sm:py-18">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-[clamp(1.55rem,2.8vw,2.1rem)] font-bold text-ink">
                More concept work
              </h2>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-[12px] text-ink/65 hover:text-ink"
              >
                View all <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <ProjectCard project={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
