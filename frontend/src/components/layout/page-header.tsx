import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb: string;
  meta?: { label: string; value: string }[];
  actions?: ReactNode;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  meta,
  actions,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-ink pb-14 pt-32 sm:pb-18 sm:pt-36">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-50 mask-fade-b" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[480px] w-[480px] rounded-full bg-brand-blue/[0.13] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-brand-violet/[0.09] blur-[100px]"
      />
      <div className="container-x relative">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
            <Link href="/" className="transition-colors hover:text-white/70">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-white/55" aria-current="page">
              {breadcrumb}
            </span>
          </nav>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="eyebrow text-white/40">{eyebrow}</p>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.01] tracking-[-0.04em] text-white">
                {title}
              </h1>
              {description ? (
                <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              ) : null}
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </Reveal>
          </div>

          {meta && meta.length > 0 ? (
            <Reveal delay={0.12} className="lg:col-span-4">
              <dl className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-5 lg:border-t-0 lg:pt-0">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-[13px] text-white/65">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
