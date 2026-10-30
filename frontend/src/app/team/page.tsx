import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TeamCard } from "@/components/team/team-card";
import { leadership, specialists, team } from "@/data/team";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Our Team",
  description:
    "Meet the people behind KiyoraX Technologies — leadership, engineering, marketing, and client-facing specialists building digital products with intent.",
  path: "/team",
});

const functions = [
  { label: "Leadership", count: 3, width: "33%" },
  { label: "Engineering & product", count: 1, width: "11%" },
  { label: "Marketing & growth", count: 2, width: "22%" },
  { label: "Sales & outreach", count: 3, width: "33%" },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our team"
        breadcrumb="Our Team"
        title={
          <>
            The people behind{" "}
            <span className="text-gradient">the possibilities.</span>
          </>
        }
        description="Great technology starts with great people. Meet the team bringing ideas, creativity, and technical expertise together to build meaningful digital solutions."
        actions={
          <Button href="/contact" variant="brand">
            Work with our team
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        }
        meta={[
          { label: "Team", value: `${team.length} people` },
          { label: "Leadership", value: "3 founders" },
          { label: "Disciplines", value: "Tech · Growth · Sales" },
          { label: "Based in", value: "India" },
        ]}
      />

      <section className="relative overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-violet/[0.07] blur-[120px]"
        />
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-white/40">Leadership</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-white">
                  Setting the direction.
                </h2>
              </div>
              <p className="max-w-sm text-[12.5px] leading-relaxed text-white/35">
                Strategy, engineering, and business growth — led by people who stay close
                to the work.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {leadership.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.06} y={18}>
                <TeamCard member={member} featured defaultExpanded />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.07] pt-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-white/40">The wider team</p>
                <h2 className="mt-4 text-[clamp(1.8rem,3.2vw,2.6rem)] font-semibold text-white">
                  Specialists across the lifecycle.
                </h2>
              </div>
              <p className="max-w-sm text-[12.5px] leading-relaxed text-white/35">
                Engineering, performance marketing, social, and client-facing roles working
                as one team.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specialists.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.04} y={16}>
                <TeamCard member={member} defaultExpanded />
              </Reveal>
            ))}
          </div>

          <p className="mt-8 border-t border-white/[0.07] pt-6 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-white/25">
            Portrait photography will be added as final team images are approved.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper text-ink">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Reveal>
                <p className="eyebrow text-ink/40">How we operate</p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05]">
                  A small team with{" "}
                  <span className="text-gradient-brand">wide coverage.</span>
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/55">
                  We keep teams close to the problem. The people in the first conversation
                  are the people accountable for the outcome — not a relay of handoffs.
                </p>
                <p className="mt-8 max-w-md border-l border-ink/15 pl-5 font-display text-[18px] leading-relaxed text-ink/60">
                  &ldquo;The people closest to the problem should be closest to the
                  solution.&rdquo;
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.08}>
                <div className="rounded-2xl border border-ink/10 bg-white p-6 sm:p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
                        Team composition
                      </p>
                      <p className="mt-2 font-display text-[48px] font-semibold leading-none text-ink">
                        {String(team.length).padStart(2, "0")}
                      </p>
                    </div>
                    <p className="text-right text-[11px] leading-relaxed text-ink/40">
                      People across
                      <br />
                      four functions
                    </p>
                  </div>

                  <div className="mt-8 space-y-5">
                    {functions.map((fn) => (
                      <div key={fn.label}>
                        <div className="flex items-center justify-between text-[11.5px]">
                          <span className="text-ink/60">{fn.label}</span>
                          <span className="font-mono text-[9px] text-ink/35">
                            {String(fn.count).padStart(2, "0")}
                          </span>
                        </div>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-ink/[0.07]">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#00c8f5,#286bff,#852eff)]"
                            style={{ width: fn.width }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button href="/contact" variant="outlineDark" size="sm" className="mt-8">
                    Talk to the team
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
