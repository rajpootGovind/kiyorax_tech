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
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-ink pb-0 pt-32 sm:pt-36">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[460px] w-[460px] rounded-full bg-brand-blue/[0.13] blur-[120px]"
        />
        <div className="container-x relative">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30"
            >
              <Link href="/" className="transition-colors hover:text-white/70">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <Link href="/portfolio" className="transition-colors hover:text-white/70">
                Portfolio
              </Link>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span className="text-white/55" aria-current="page">
                {project.title}
              </span>
            </nav>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-cyan/80">
                    Demo concept
                  </span>
                </div>
                <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-[1.01] tracking-[-0.04em] text-white">
                  {project.title}
                </h1>
                <p className="mt-3 text-[15px] text-white/45">{project.subtitle}</p>
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/contact" variant="brand">
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
              <dl className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-5">
                {[
                  ["Category", project.category],
                  ["Status", project.year],
                  ["Stack", project.stack.slice(0, 2).join(" · ")],
                  ["Type", "Concept case study"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      {label}
                    </dt>
                    <dd className="mt-1.5 text-[12px] text-white/60">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative mt-12 overflow-hidden rounded-t-2xl border border-b-0 border-white/[0.09]">
              <div className="h-[320px] sm:h-[420px] lg:h-[500px]">
                <ProjectPreview project={project} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-paper text-ink">
        <div className="container-x py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-white p-5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                  <p className="text-[12px] leading-relaxed text-ink/55">
                    <span className="font-medium text-ink">This is a demo concept.</span>{" "}
                    {project.title} was designed by KiyoraX to illustrate our approach to{" "}
                    {project.category.toLowerCase()} products. It is not a delivered client
                    project, and no client outcomes are claimed.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="mt-12">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                    01 / The challenge
                  </p>
                  <h2 className="mt-4 text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-tight">
                    Why this product needed to exist.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink/60">
                    {project.challenge}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                    02 / The solution
                  </p>
                  <h2 className="mt-4 text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-tight">
                    The approach we would take.
                  </h2>
                  <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink/60">
                    {project.solution}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                    03 / Key features
                  </p>
                  <h2 className="mt-4 text-[clamp(1.6rem,2.8vw,2.2rem)] font-semibold leading-tight">
                    What the product would include.
                  </h2>
                  <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13.5px] text-ink/65">
                        <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-ink text-white">
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
                  <div className="rounded-2xl border border-ink/10 bg-white p-6">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
                      Project snapshot
                    </p>
                    <dl className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                      {[
                        ["Category", project.category],
                        ["Tags", project.tags.join(" · ")],
                        ["Stack", project.stack.join(" · ")],
                        ["Status", "Demo concept"],
                      ].map(([label, value]) => (
                        <div key={label} className="py-3.5">
                          <dt className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/30">
                            {label}
                          </dt>
                          <dd className="mt-1 text-[12.5px] text-ink/65">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <Button href="/contact" variant="brand" size="md" className="mt-6 w-full">
                      Build something like this
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-3 block text-center text-[11px] text-ink/45 hover:text-ink"
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

      <section className="relative overflow-hidden bg-[#070810]">
        <div className="container-x py-16 sm:py-20">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold text-white">
                More concept work
              </h2>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-[12px] text-white/45 hover:text-white"
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
