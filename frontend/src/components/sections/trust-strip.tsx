import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { trustHighlights } from "@/data/content";

export function TrustStrip() {
  return (
    <section id="trust" className="relative border-b border-line bg-paper">
      <div className="container-x">
        <div className="flex items-center justify-between gap-4 border-b border-line py-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/65">
            What you can expect from us
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 text-[12px] font-medium text-ink/65 transition-colors hover:text-ink"
          >
            <span className="link-underline">How we work</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
          {trustHighlights.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.05}
              y={12}
              className="bg-paper"
            >
              <div className="group h-full px-2 py-7 sm:px-6 lg:px-5 lg:py-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white text-sky transition-colors group-hover:border-sky/35">
                    <ServiceIcon name={item.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.14em] text-ink/20">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-6 text-[13.5px] font-semibold text-ink">
                  {item.title}
                </p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
