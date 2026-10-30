import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-56 h-96 w-96 rounded-full bg-brand-violet/[0.08] blur-[120px]"
      />
      <div className="container-x section-pad relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Everything you need to build and{" "}
                <span className="text-gradient">scale digitally.</span>
              </>
            }
            description="Eight focused capabilities, one accountable team. We design, engineer, and support the digital products your business depends on."
            action={
              <Button href="/services" variant="outline" size="sm">
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={Math.min(index * 0.04, 0.24)}
              y={18}
              className={cn("sm:col-span-1", spans[index] ?? "lg:col-span-4")}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] card-sheen p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.16] sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-cyan/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white/70 transition-all duration-500 group-hover:border-brand-cyan/30 group-hover:bg-brand-cyan/[0.08] group-hover:text-brand-cyan">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 transition-colors group-hover:text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-7">
                  <h3 className="text-[19px] font-medium tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-[13px] leading-relaxed text-white/40",
                      index === 0 && "max-w-lg",
                    )}
                  >
                    {service.short}
                  </p>
                </div>

                {index === 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25 transition-colors group-hover:text-brand-cyan/70">
                    Explore service
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-brand-cyan/40 group-hover:text-brand-cyan">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center">
            <p className="text-sm text-white/50">
              Not sure which service fits?{" "}
              <span className="text-white/80">Let&apos;s figure it out together.</span>
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-brand-cyan"
            >
              Book a free consultation
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
