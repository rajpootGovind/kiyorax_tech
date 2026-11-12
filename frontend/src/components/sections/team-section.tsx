import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TeamCard } from "@/components/team/team-card";
import { leadership, specialists, team } from "@/data/team";

export function TeamSection() {
  const preview = [...leadership, ...specialists.slice(0, 3)];

  return (
    <section id="team" className="relative overflow-hidden bg-white">
      <div className="container-x section-pad relative">
        <Reveal>
          <SectionHeading
            eyebrow="Our team"
            title={
              <>
                The people behind{" "}
                <span className="text-sky">the possibilities.</span>
              </>
            }
            description="Great technology starts with people who care about the outcome. Meet the team bringing strategy, engineering, design, and growth together."
            action={
              <Button href="/team" variant="outline" size="sm">
                Meet the full team
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((member, index) => (
            <Reveal key={member.id} delay={Math.min(index * 0.05, 0.25)} y={16}>
              <TeamCard member={member} featured={member.leadership} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-line pt-5 sm:flex-row sm:items-center">
            <p className="text-[10.5px] text-ink/65">
              All {team.length} team members. Portrait images are temporary demo assets.
            </p>
            <Button href="/team" variant="ghost" size="sm" className="px-0">
              See everyone
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
