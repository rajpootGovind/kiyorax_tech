import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";
import { technologyGroups } from "@/data/technologies";

const layers = [
  { label: "Experience", value: "React · Next.js · TypeScript", tone: "#2B9CF0" },
  { label: "Application", value: "Node.js · Express · APIs", tone: "#0F74C9" },
  { label: "Data", value: "MongoDB · PostgreSQL · MySQL", tone: "#1D3A52" },
  { label: "Intelligence", value: "AI APIs · Automation · CMS", tone: "#13293D" },
];

export function TechStack() {
  return (
    <section id="technologies" className="relative overflow-hidden bg-white">
      <div className="container-x section-pad relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow">Technology</p>
                <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.07] text-ink">
                  A modern stack, chosen for{" "}
                  <span className="text-sky">fit — not fashion.</span>
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                  Every technology we use is selected around the problem, the team who
                  will maintain it, and the years ahead. The stack should make the
                  product easier to own, not harder.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-8 rounded-2xl border border-line bg-paper p-5">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    How a KiyoraX stack is built
                  </p>
                  <div className="mt-4 space-y-0">
                    {layers.map((layer, index) => (
                      <div key={layer.label} className="relative flex items-center gap-3.5 py-2.5">
                        {index < layers.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="absolute left-[5px] top-[26px] h-[22px] w-px bg-ink/12"
                          />
                        ) : null}
                        <span
                          aria-hidden="true"
                          className="relative h-[11px] w-[11px] shrink-0 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: layer.tone }}
                        />
                        <span className="w-[76px] shrink-0 text-[11px] font-semibold text-ink/70">
                          {layer.label}
                        </span>
                        <span className="text-[11px] text-muted">{layer.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-10">
              {technologyGroups.map((group, groupIndex) => (
                <div key={group.label}>
                  <Reveal delay={groupIndex * 0.04}>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-ink/65">
                        {group.index}
                      </span>
                      <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/65">
                        {group.label}
                      </h3>
                      <span className="h-px flex-1 bg-line" />
                      <span className="text-[10px] text-ink/65">
                        {String(group.items.length).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>

                  <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {group.items.map((item, index) => (
                      <Reveal key={item.name} delay={index * 0.03} y={10}>
                        <div
                          className="group flex h-full items-center gap-3 rounded-xl border border-line bg-white px-3.5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_16px_32px_-28px_rgba(19,41,61,0.45)]"
                          style={{ "--brand": item.hex } as CSSProperties}
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-paper text-ink/65 transition-colors duration-300 group-hover:text-[color:var(--brand)]">
                            <TechIcon icon={item.icon} className="h-[17px] w-[17px]" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-[12.5px] font-semibold text-ink/85">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block truncate text-[9.5px] uppercase tracking-[0.08em] text-ink/65">
                              {item.note}
                            </span>
                          </span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
