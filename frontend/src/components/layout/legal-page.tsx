import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function LegalPage({
  eyebrow,
  breadcrumb,
  title,
  description,
  updated,
  sections,
}: {
  eyebrow: string;
  breadcrumb: string;
  title: ReactNode;
  description: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        breadcrumb={breadcrumb}
        title={title}
        description={description}
        meta={[
          { label: "Last updated", value: updated },
          { label: "Applies to", value: "kiyorax.com" },
          { label: "Contact", value: site.email },
          { label: "Governing law", value: "India" },
        ]}
      />

      <section className="relative overflow-hidden bg-paper text-ink">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    On this page
                  </p>
                  <nav aria-label="Document sections" className="mt-4">
                    <ol className="space-y-2.5">
                      {sections.map((section, index) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="group flex items-baseline gap-3 text-[12.5px] text-ink/65 transition-colors hover:text-ink"
                          >
                            <span className="text-[9.5px] font-semibold text-ink/65">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-5">
                    <p className="text-[12.5px] font-medium text-ink">Questions about this policy?</p>
                    <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink/65">
                      Write to us and we will clarify anything that is unclear.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-medium text-ink"
                    >
                      <span className="link-underline">Contact KiyoraX</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Reveal>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <Reveal key={section.id} delay={Math.min(index * 0.03, 0.15)} y={12}>
                    <section id={section.id} className="scroll-mt-28">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[9.5px] font-semibold tracking-[0.14em] text-ink/65">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-[20px] font-semibold tracking-tight text-ink sm:text-[23px]">
                          {section.title}
                        </h2>
                      </div>
                      <div className="mt-4 space-y-3.5 pl-0 text-[13.5px] leading-relaxed text-ink/65 sm:pl-8">
                        {section.body}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
