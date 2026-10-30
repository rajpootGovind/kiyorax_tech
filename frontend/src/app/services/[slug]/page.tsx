import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { getService, services } from "@/data/services";
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

const delivery = [
  {
    step: "01",
    title: "Discover",
    text: "Understand the business goal, users, constraints, and what success looks like before proposing a solution.",
  },
  {
    step: "02",
    title: "Design",
    text: "Shape the information architecture and interface around real tasks, with review points you can respond to.",
  },
  {
    step: "03",
    title: "Build",
    text: "Engineer in reviewable milestones with clean code, staging previews, and clear communication.",
  },
  {
    step: "04",
    title: "Launch & support",
    text: "Test across devices, deploy carefully, document the handover, and support the product after release.",
  },
];

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={`Service / ${String(services.findIndex((item) => item.slug === service.slug) + 1).padStart(2, "0")}`}
        breadcrumb={service.title}
        title={service.title}
        description={service.short}
        actions={
          <>
            <Button href="/contact" variant="brand">
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

      <section className="relative overflow-hidden bg-paper text-ink">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-ink/40">Overview</p>
                <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,3.4vw,2.8rem)] font-semibold leading-[1.07]">
                  What this service{" "}
                  <span className="text-gradient-brand">delivers.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/60">
                  {service.overview}
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="mt-10">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/35">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {service.features.map((feature) => (
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

              <Reveal delay={0.18}>
                <div className="mt-10 rounded-2xl border border-ink/10 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                      <ServiceIcon name={service.icon} className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="text-[14px] font-medium text-ink">Not sure this is the right fit?</p>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/50">
                        Requirements rarely arrive neatly labelled. Tell us the problem and we
                        will recommend the most sensible path — even if it is a different service.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink"
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
                  <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                    <div className="border-b border-ink/10 p-6">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
                        Ideal for
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.idealFor.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-[11px] text-ink/60"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
                        What you can expect
                      </p>
                      <ul className="mt-4 space-y-3">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2.5 text-[13px] text-ink/60">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                      <Button href="/contact" variant="brand" size="md" className="mt-6 w-full">
                        Request a quotation
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink/30">
                        Response within one business day
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#070810]">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-xl">
                <p className="eyebrow text-white/40">Delivery</p>
                <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.05] text-white">
                  How this work <span className="text-gradient">gets delivered.</span>
                </h2>
              </div>
              <p className="max-w-xs text-[12.5px] leading-relaxed text-white/35">
                The exact plan is scoped after discovery, but the principles stay the same.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {delivery.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05} y={14} className="bg-[#070810]">
                <div className="h-full p-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-brand-cyan/60">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-[16px] font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/40">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-paper text-ink">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-[clamp(1.75rem,3vw,2.4rem)] font-semibold">
                Related capabilities
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink/55 hover:text-ink"
              >
                View all services <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05} y={14}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_20px_50px_-34px_rgba(5,6,10,0.4)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 text-ink/45 transition-colors group-hover:text-brand-blue">
                      <ServiceIcon name={item.icon} className="h-4.5 w-4.5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink/60" />
                  </div>
                  <h3 className="mt-6 text-[16px] font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink/50">{item.short}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
