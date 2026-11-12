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
    <section className="relative overflow-hidden border-b border-line bg-white pb-14 pt-32 sm:pb-16 sm:pt-36">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-soft opacity-70 mask-fade-b" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[460px] w-[460px] rounded-full bg-sky/10 blur-[120px]"
      />
      <div className="container-x relative">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/65"
          >
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-ink/65" aria-current="page">
              {breadcrumb}
            </span>
          </nav>
        </Reveal>

        <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <Reveal delay={0.05}>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-5 max-w-3xl text-[clamp(2.3rem,4.6vw,4rem)] font-bold leading-[1.03] tracking-[-0.04em] text-ink">
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
              <dl className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-5">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-ink/65">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-[13px] text-ink/70">{item.value}</dd>
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
