import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { FinalCta } from "@/components/sections/final-cta";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { getService, services } from "@/data/services";
import { faqs } from "@/data/faqs";
import { processSteps } from "@/data/content";
import { projects, type Project } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: service.short,
    path: `/services/${service.slug}`,
  });
}

const relatedCategory: Record<string, Project["category"] | undefined> = {
  "website-development": "Websites",
  "ecommerce-development": "E-commerce",
  "crm-development": "CRM",
  "web-application-development": "Web Applications",
  "mobile-application-development": "Web Applications",
  "saas-development": "Web Applications",
  "ai-integration-automation": "Web Applications",
  "digital-marketing": "Websites",
  "wordpress-cms-development": "Websites",
  "educational-institutional-platforms": "Education",
};

const faqPicks: Record<string, number[]> = {
  "website-development": [0, 3, 6],
  "ecommerce-development": [2, 3, 4],
  "crm-development": [1, 3, 6],
  "web-application-development": [0, 3, 5],
  "mobile-application-development": [0, 3, 4],
  "saas-development": [0, 3, 5],
  "ai-integration-automation": [7, 3, 6],
  "digital-marketing": [0, 6, 4],
  "wordpress-cms-development": [3, 4, 6],
  "educational-institutional-platforms": [0, 3, 6],
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const category = relatedCategory[service.slug];
  const relatedProjects = (
    category ? projects.filter((project) => project.category === category) : projects
  ).slice(0, 2);
  const serviceFaqs = (faqPicks[service.slug] ?? [0, 3, 6])
    .map((index) => faqs[index])
    .filter(Boolean);

  return (
    <>
      <PageHeader
        eyebrow={`Service / ${String(services.findIndex((item) => item.slug === service.slug) + 1).padStart(2, "0")}`}
        breadcrumb={service.title}
        title={service.title}
        description={service.short}
        actions={
          <>
            <Button href="/contact">
              Discuss this service
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline">
              All services
            </Button>
          </>
        }
        meta={[
          { label: "Engagement", value: "Scoped after discovery" },
          { label: "Delivery", value: "Milestone based" },
          { label: "Stack", value: "Modern & maintainable" },
          { label: "Support", value: "Available on request" },
        ]}
      />

      <section className="relative overflow-hidden bg-white">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Overview</p>
                <h2 className="mt-5 max-w-2xl text-[clamp(1.85rem,3.2vw,2.6rem)] font-bold leading-[1.08] text-ink">
                  What this service{" "}
                  <span className="text-sky">delivers.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                  {service.overview}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-9">
                  <h3 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    What&apos;s included
                  </h3>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-[13.5px] text-ink/70">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-9 rounded-2xl border border-line bg-paper p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                      <ServiceIcon name={service.icon} className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-ink">
                        Not sure this is the right fit?
                      </p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                        Requirements rarely arrive neatly labelled. Tell us the problem and
                        we will recommend the most sensible path — even if it is a different
                        service.
                      </p>
                      <Link
                        href="/contact"
                        className="group mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink"
                      >
                        <span className="link-underline">Start a conversation</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="lg:sticky lg:top-28">
                  <div className="overflow-hidden rounded-2xl border border-line bg-white">
                    <div className="border-b border-line p-6">
                      <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                        Ideal for
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.idealFor.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-line bg-paper px-3 py-1.5 text-[11px] text-ink/65"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                        What you can expect
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2.5 text-[13px] text-ink/65">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                      <Button href="/contact" size="md" className="mt-6 w-full">
                        Request a quotation
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                      <p className="mt-3 text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/65">
                        Response within one business day
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-line bg-paper p-5">
                    <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                      Related capabilities
                    </p>
                    <ul className="mt-3 space-y-2">
                      {related.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="group flex items-center justify-between gap-3 text-[12px] text-ink/65 transition-colors hover:text-ink"
                          >
                            {item.title}
                            <ArrowUpRight className="h-3.5 w-3.5 text-ink/65 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow">Delivery</p>
                <h2 className="mt-5 text-[clamp(1.85rem,3.4vw,2.7rem)] font-bold leading-[1.08] text-ink">
                  How this work{" "}
                  <span className="text-sky">gets delivered.</span>
                </h2>
              </div>
              <p className="max-w-xs text-[12.5px] leading-relaxed text-muted">
                The exact plan is scoped after discovery, but the principles stay the same.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <Reveal key={item.number} delay={Math.min(index * 0.04, 0.2)} y={14}>
                <div className="border-t-2 border-ink/10 py-5">
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-sky">
                    {item.number}
                  </span>
                  <h3 className="mt-3 text-[16px] font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="relative overflow-hidden bg-white">
          <div className="container-x section-pad relative">
            <Reveal>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">Related work</p>
                  <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] font-bold text-ink">
                    Concept work in this space.
                  </h2>
                </div>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink/65 hover:text-ink"
                >
                  View all projects <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {relatedProjects.map((project, index) => (
                <Reveal key={project.slug} delay={index * 0.05} y={14}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-[10.5px] text-ink/65">
              These are demo concepts, not delivered client engagements.
            </p>
          </div>
        </section>
      ) : null}

      <section className="relative overflow-hidden bg-paper">
        <div className="container-x section-pad relative">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">FAQs</p>
                <h2 className="mt-5 text-[clamp(1.85rem,3.2vw,2.6rem)] font-bold leading-[1.08] text-ink">
                  Questions about{" "}
                  <span className="text-sky">this kind of work.</span>
                </h2>
                <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-muted">
                  Still unsure? Ask directly — we would rather give you a straight answer
                  than a sales pitch.
                </p>
                <Button href="/contact" variant="outline" size="sm" className="mt-6">
                  Ask a question
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.06}>
                <Accordion items={serviceFaqs} />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
