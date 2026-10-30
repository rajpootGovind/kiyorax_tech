import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/reveal";
import { TechIcon } from "@/components/ui/tech-icon";
import { technologyGroups } from "@/data/technologies";

const layers = [
  { label: "Experience", value: "React · Next.js · Tailwind", tone: "#00c8f5" },
  { label: "Application", value: "Node · Express · TypeScript", tone: "#286bff" },
  { label: "Data", value: "MongoDB · PostgreSQL · MySQL", tone: "#6a5cff" },
  { label: "Intelligence", value: "AI APIs · Automation · Integrations", tone: "#852eff" },
];

export function TechStack() {
  return (
    <section id="technologies" className="relative overflow-hidden bg-paper text-ink">
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="container-x section-pad relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-ink/40">Technology stack</p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04]">
                  Powered by <span className="text-gradient-brand">modern technologies.</span>
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-ink/55">
                  We choose tools for fit, not fashion. Every stack is selected around
                  the problem, the team that will maintain it, and the years ahead.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative mt-9 overflow-hidden rounded-2xl border border-ink/10 bg-white p-2">
                  <div className="rounded-xl border border-ink/[0.06] bg-paper/60 px-5 py-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
                      How a KiyoraX stack is built
                    </p>
                    <div className="mt-4 space-y-0">
                      {layers.map((layer, index) => (
                        <div
                          key={layer.label}
                          className="relative flex items-center gap-4 py-3"
                        >
                          {index < layers.length - 1 ? (
                            <span
                              aria-hidden="true"
                              className="absolute left-[5px] top-[26px] h-[28px] w-px bg-ink/10"
                            />
                          ) : null}
                          <span
                            aria-hidden="true"
                            className="relative h-[11px] w-[11px] shrink-0 rounded-full border-2 border-white shadow-sm"
                            style={{ backgroundColor: layer.tone }}
                          />
                          <span className="w-20 shrink-0 text-[11px] font-medium text-ink/70">
                            {layer.label}
                          </span>
                          <span className="text-[11px] text-ink/40">{layer.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {technologyGroups.map((group, groupIndex) => (
                <div key={group.label}>
                  <Reveal delay={groupIndex * 0.04}>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] text-ink/30">
                        {group.index}
                      </span>
                      <h3 className="text-[13px] font-medium uppercase tracking-[0.16em] text-ink/70">
                        {group.label}
                      </h3>
                      <span className="h-px flex-1 bg-ink/10" />
                      <span className="font-mono text-[10px] text-ink/25">
                        {String(group.items.length).padStart(2, "0")}
                      </span>
                    </div>
                  </Reveal>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {group.items.map((item, index) => (
                      <Reveal key={item.name} delay={index * 0.03} y={12}>
                        <div
                          className="group relative flex h-full items-center gap-3.5 rounded-xl border border-ink/[0.08] bg-white/80 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(5,6,10,0.35)]"
                          style={{ "--brand": item.hex } as CSSProperties}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink/[0.06] bg-paper/70 text-ink/55 transition-colors duration-300 group-hover:text-[color:var(--brand)]">
                            <TechIcon icon={item.icon} className="h-[18px] w-[18px]" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-[13px] font-medium text-ink/85">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block truncate font-mono text-[8.5px] uppercase tracking-[0.12em] text-ink/35">
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
