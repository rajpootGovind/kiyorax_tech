import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { trustHighlights } from "@/data/content";
import Link from "next/link";

export function TrustStrip() {
  return (
    <section id="trust" className="relative border-y border-white/[0.07] bg-[#06070c]">
      <div className="container-x">
        <div className="flex items-center justify-between gap-4 py-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
            What we build
          </p>
          <Link
            href="/services"
            className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 transition-colors hover:text-white/70 sm:inline-flex"
          >
            Explore capabilities
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px border-t border-white/[0.07] bg-white/[0.06] md:grid-cols-3 lg:grid-cols-5">
        {trustHighlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05} y={14} className="bg-[#06070c]">
            <div className="group h-full p-6 transition-colors duration-300 hover:bg-white/[0.025] lg:p-7">
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-cyan/80 transition-colors group-hover:border-brand-cyan/30 group-hover:text-brand-cyan">
                  <ServiceIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10px] tracking-widest text-white/20">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-6 text-[13px] font-medium text-white/85">{item.title}</p>
              <p className="mt-2 text-[12px] leading-relaxed text-white/35">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
