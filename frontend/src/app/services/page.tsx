import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Website development, e-commerce, custom CRM, web applications, AI integration, mobile apps, digital marketing, and WordPress development from KiyoraX Technologies.",
  path: "/services",
});

const engagementModels = [
  {
    index: "01",
    title: "End-to-end project",
    description:
      "A defined scope with discovery, design, development, testing, and launch managed by one accountable team. Best when the outcome is clear and you want a predictable path.",
    bestFor: ["New websites and platforms", "Fixed-scope products", "Institutional projects"],
  },
  {
    index: "02",
    title: "Dedicated team",
    description:
      "An embedded engineering and design team working alongside yours, with regular planning and delivery cycles. Best for evolving products that need continuous momentum.",
    bestFor: ["Growing SaaS products", "Long-term development", "Existing product teams"],
  },
  {
    index: "03",
    title: "Growth & maintenance",
    description:
      "Ongoing support, performance work, security updates, and feature enhancements after launch — so the product keeps improving rather than slowly ageing.",
    bestFor: ["Live products", "Marketing-led sites", "Teams without in-house devs"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        breadcrumb="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient">build and scale digitally.</span>
          </>
        }
        description="From a focused website to a complete CRM platform, we bring the same discipline to every engagement: understand the business, design for the task, and engineer for the long run."
        actions={
          <>
            <Button href="/contact" variant="brand">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/portfolio" variant="outline">
              See our work
            </Button>
          </>
        }
        meta={[
          { label: "Capabilities", value: `${services.length} services` },
          { label: "Focus", value: "Strategy to support" },
          { label: "Stack", value: "Modern & maintainable" },
          { label: "Engagement", value: "Project or retainer" },
        ]}
      />

      <section className="relative overflow-hidden bg-paper text-ink">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-ink/40">Capabilities</p>
                <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold">
                  Eight ways we can help.
                </h2>
              </div>
              <p className="max-w-sm text-[13px] leading-relaxed text-ink/45">
                Each service is delivered by the same cross-functional team — no handoffs
                between disconnected vendors.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 border-t border-ink/10">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={Math.min(index * 0.03, 0.18)} y={12}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-5 border-b border-ink/10 py-7 transition-colors hover:bg-white sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-ink/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-white text-ink/50 transition-all duration-300 group-hover:border-brand-blue/25 group-hover:text-brand-blue">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[20px] font-medium tracking-tight text-ink transition-colors group-hover:text-brand-blue sm:text-[22px]">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-ink/50">
                      {service.short}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                      {service.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="flex items-center gap-1.5 text-[11px] text-ink/35"
                        >
                          <Check className="h-3 w-3 text-brand-blue/60" aria-hidden="true" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center justify-self-start rounded-full border border-ink/10 text-ink/35 transition-all duration-300 group-hover:border-ink/35 group-hover:text-ink sm:justify-self-end">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-white/40">How we engage</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] text-white">
                Three ways to work{" "}
                <span className="text-gradient">with our team.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                The right engagement depends on where you are and what you need next. We
                will tell you honestly which model fits — even if it is smaller than you
                expected.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {engagementModels.map((model, index) => (
              <Reveal key={model.title} delay={index * 0.06} y={16}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.16]">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/25">
                      {model.index}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan/60" />
                  </div>
                  <h3 className="mt-7 text-[19px] font-medium text-white">{model.title}</h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-white/45">
                    {model.description}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-white/[0.08] pt-5">
                    {model.bestFor.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[11.5px] text-white/40">
                        <span className="h-px w-3 bg-brand-cyan/50" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
