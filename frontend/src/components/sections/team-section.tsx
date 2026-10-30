import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TeamCard } from "@/components/team/team-card";
import { leadership, specialists } from "@/data/team";

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-violet/[0.07] blur-[120px]"
      />
      <div className="container-x section-pad relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-white/40">Our team</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] text-white">
                The people behind{" "}
                <span className="text-gradient">the possibilities.</span>
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                Great technology starts with great people. Meet the team bringing ideas,
                creativity, and technical expertise together to build meaningful digital
                solutions.
              </p>
            </div>
          </Reveal>
          <Button href="/team" variant="outline" size="sm">
            Meet the full team
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {leadership.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.06} y={18}>
              <TeamCard member={member} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.04} y={16}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
              Portrait photography will be added as final team images are approved.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-[12px] text-white/45 transition-colors hover:text-white"
            >
              Work with this team
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
