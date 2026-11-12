import { ArrowUpRight, Info } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "Explore concept case studies from KiyoraX Technologies across CRM, education, e-commerce, websites, and custom web applications.",
  path: "/portfolio",
});

const questions = [
  {
    index: "01",
    title: "What problem are we solving?",
    body: "Before a single screen is designed, we agree on the business problem the product must solve and how we will know it worked.",
  },
  {
    index: "02",
    title: "Who is actually using it?",
    body: "The people who use the product every day shape the decisions. We design around their tasks, pressures, and existing habits.",
  },
  {
    index: "03",
    title: "What happens after launch?",
    body: "A product is not finished on release day. We plan for ownership, maintenance, and the next round of improvements from the start.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        breadcrumb="Portfolio"
        title={
          <>
            Real thinking.{" "}
            <span className="text-sky">Meaningful products.</span>
          </>
        }
        description="A selection of demo concepts that illustrate how we approach products across CRM, education, commerce, websites, and internal platforms."
        actions={
          <>
            <Button href="/contact">
              Start your project
              <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline">
              Our services
            </Button>
          </>
        }
        meta={[
          { label: "Concepts", value: `${projects.length} case studies` },
          { label: "Categories", value: "CRM · Web · Commerce" },
          { label: "Focus", value: "Product & platform" },
          { label: "Next", value: "Your project" },
        ]}
      />

      <section className="relative overflow-hidden bg-white">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="mb-8 flex items-start gap-3 rounded-xl border border-line bg-paper p-5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              <p className="max-w-3xl text-[12px] leading-relaxed text-muted">
                <span className="font-semibold text-ink">A note on transparency.</span> Every
                project listed on this page is a clearly labelled demo concept created to
                illustrate our capabilities and design approach. They are not client
                engagements. Verified case studies with client-approved details and outcomes
                will replace these as they are cleared for publication.
              </p>
            </div>
          </Reveal>
          <PortfolioGallery />
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Our lens</p>
                <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,2.9rem)] font-bold leading-[1.08] text-ink">
                  Every project starts with the same{" "}
                  <span className="text-sky">three questions.</span>
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                  They keep the work honest — and make sure the final product is useful, not
                  merely impressive.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="border-t border-line">
                {questions.map((question, index) => (
                  <Reveal key={question.index} delay={index * 0.05}>
                    <div className="grid grid-cols-[auto_1fr] gap-6 border-b border-line py-6">
                      <span className="mt-1 text-[10px] font-semibold tracking-[0.14em] text-ink/65">
                        {question.index}
                      </span>
                      <div>
                        <h3 className="text-[17px] font-semibold text-ink">{question.title}</h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-muted">
                          {question.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
