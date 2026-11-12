import { ArrowUpRight, Check, HeartHandshake, MessagesSquare, Target } from "lucide-react";
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

const waysOfWorking = [
  {
    icon: Target,
    title: "Close to the problem",
    body: "The people in your first conversation stay close to the work. No relay of handoffs.",
  },
  {
    icon: MessagesSquare,
    title: "Direct communication",
    body: "Clear updates, honest timelines, and access to the people actually doing the work.",
  },
  {
    icon: HeartHandshake,
    title: "Accountable after launch",
    body: "We stay involved as the product settles in, not only until the handover document is signed.",
  },
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
            <span className="text-sky">the possibilities.</span>
          </>
        }
        description="Great technology starts with great people. Meet the team bringing ideas, creativity, and technical expertise together to build meaningful digital solutions."
        actions={
          <Button href="/contact">
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

      <section className="relative overflow-hidden bg-white">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Leadership</p>
                <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] font-bold text-ink">
                  Setting the direction.
                </h2>
              </div>
              <p className="max-w-sm text-[12.5px] leading-relaxed text-muted">
                Strategy, engineering, and business growth — led by people who stay close
                to the work.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.06} y={18}>
                <TeamCard member={member} featured showBio priority={index === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-col gap-3 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">The wider team</p>
                <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] font-bold text-ink">
                  Specialists across the lifecycle.
                </h2>
              </div>
              <p className="max-w-sm text-[12.5px] leading-relaxed text-muted">
                Engineering, performance marketing, social, and client-facing roles working
                as one team.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialists.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.04} y={16}>
                <TeamCard member={member} showBio />
              </Reveal>
            ))}
          </div>

          <p className="mt-8 border-t border-line pt-5 text-[10.5px] leading-relaxed text-ink/65">
            All portraits on this page are temporary demo images. They do not depict the
            named team members. Final team photography will replace them.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">How we operate</p>
                <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.08] text-ink">
                  A small team with{" "}
                  <span className="text-sky">wide coverage.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                  We keep teams close to the problem. The people in the first conversation
                  are the people accountable for the outcome.
                </p>
                <p className="mt-7 max-w-md border-l-2 border-sky pl-5 font-display text-[18px] leading-relaxed text-ink/70">
                  &ldquo;The people closest to the problem should be closest to the
                  solution.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Button href="/contact" variant="outline" size="sm" className="mt-7">
                  Talk to the team
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-line">
                {waysOfWorking.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 0.05}>
                      <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white text-sky">
                          <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                        </span>
                        <div>
                          <h3 className="text-[16.5px] font-semibold text-ink">{item.title}</h3>
                          <p className="mt-1.5 max-w-lg text-[13px] leading-relaxed text-muted">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.1}>
                <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-line bg-white p-4">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                  <p className="text-[12px] leading-relaxed text-muted">
                    We work as one cross-functional team — strategy, design, engineering, and
                    growth — so decisions do not get lost between departments.
                  </p>
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
