import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceIcon } from "@/components/ui/service-icon";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section id="services" className="relative overflow-hidden bg-paper">
      <div className="container-x section-pad relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our services"
            title={
              <>
                Ten ways we can help you{" "}
                <span className="text-sky">build, operate, and grow.</span>
              </>
            }
            description="One accountable team across strategy, design, engineering, and growth. No handoffs between disconnected vendors."
            action={
              <Button href="/services" variant="outline" size="sm">
                All services
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal delay={0.08} className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-ink p-6 text-white sm:p-7 lg:sticky lg:top-28">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sky/20 blur-[70px]"
              />
              <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                A partner, not a menu
              </p>
              <p className="relative mt-5 font-display text-[22px] font-semibold leading-snug tracking-tight">
                Most projects need more than one service. We help you choose the right
                combination.
              </p>
              <p className="relative mt-4 text-[13px] leading-relaxed text-white/55">
                Tell us what you are trying to achieve. We will suggest the smallest,
                most sensible path — even if that means less work for us.
              </p>
              <Link
                href="/contact"
                className="group relative mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-sky-bright"
              >
                <span className="link-underline">Book a free consultation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <p className="relative mt-8 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.14em] text-white/50">
                Project · Dedicated team · Support
              </p>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {services.map((service, index) => (
                <Reveal key={service.slug} delay={Math.min(index * 0.03, 0.2)} y={12}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full items-start gap-4 border-b border-line py-5"
                  >
                    <span className="mt-1 w-5 shrink-0 text-[10.5px] font-semibold tracking-[0.08em] text-ink/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-sky transition-colors duration-300 group-hover:border-sky/35 group-hover:bg-sky-soft">
                      <ServiceIcon name={service.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span className="text-[15.5px] font-semibold leading-snug text-ink transition-colors group-hover:text-sky">
                          {service.title}
                        </span>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-ink/65 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-sky" />
                      </span>
                      <span className="mt-1.5 block text-[12.5px] leading-relaxed text-muted">
                        {service.short}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
