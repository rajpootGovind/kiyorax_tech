import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-paper">
      <div className="container-x section-pad relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Our process</p>
              <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.07] text-ink">
                A clear path from first{" "}
                <span className="text-sky">conversation to launch.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                A deliberate process, not a black box. You see the plan, the progress, and
                the reasoning at every stage.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <Button href="/contact" variant="outline" size="sm">
              Start with discovery
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={Math.min(index * 0.05, 0.25)} y={16}>
              <div className="group relative h-full border-t-2 border-ink/10 py-6 transition-colors duration-300 hover:border-sky">
                <div className="flex items-start justify-between">
                  <span className="font-display text-[34px] font-bold leading-none tracking-tight text-ink/15 transition-colors duration-300 group-hover:text-sky/40">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-line bg-white px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-ink/65">
                    Stage {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  {step.description}
                </p>
                <p className="mt-4 text-[10.5px] leading-relaxed text-ink/65">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
