import { ArrowUpRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-paper text-ink">
      <div className="container-x section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/40">FAQ</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04]">
                Questions before we build{" "}
                <span className="text-gradient-brand">something great?</span>
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/55">
                A few straight answers. If your question is not here, ask us directly —
                no obligation, no sales theatre.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white">
                  <MessageSquare className="h-4 w-4" strokeWidth={1.5} />
                </span>
                <p className="mt-4 text-[14px] font-medium text-ink">Still have questions?</p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/50">
                  Tell us about your requirement and we will respond with a clear,
                  considered answer.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium text-ink"
                >
                  <span className="link-underline">Talk to our team</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-7">
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
