import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-paper">
      <div className="container-x section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Questions</p>
              <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.07] text-ink">
                Straight answers,{" "}
                <span className="text-sky">before we start.</span>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                If your question is not here, ask us directly. No obligation, no sales
                theatre.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl border border-line bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft text-sky">
                  <MessageSquare className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <p className="mt-4 text-[14px] font-semibold text-ink">
                  Still have a question?
                </p>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
                  Tell us what you are trying to build. We will respond with a clear,
                  considered answer.
                </p>
                <Link
                  href="/contact"
                  className="group mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink"
                >
                  <span className="link-underline">Talk to our team</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
