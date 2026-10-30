import Link from "next/link";
import { ArrowUpRight, Check, Compass, Flag, PenTool, Route, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/data/team";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "KiyoraX Technologies is a digital solutions company building scalable websites, intelligent applications, CRM platforms, and digital experiences around real business needs.",
  path: "/about",
});

const pillars = [
  {
    index: "01",
    title: "Our Vision",
    icon: Compass,
    body: "To be the technology partner ambitious businesses turn to when an idea needs to become a dependable digital product — one that creates real value and keeps earning its place as the business grows.",
  },
  {
    index: "02",
    title: "Our Mission",
    icon: Flag,
    body: "To combine modern engineering, thoughtful design, and business understanding to build websites, applications, and platforms that help our clients operate smarter, connect better, and grow with confidence.",
  },
  {
    index: "03",
    title: "Our Approach",
    icon: Route,
    body: "We start with the business problem, not the technology. We keep scope honest, communicate clearly, and work in reviewable milestones so every decision is understood by both sides.",
  },
];

const principles = [
  {
    title: "Strategy before pixels",
    icon: Compass,
    body: "We begin with the commercial problem: who the product serves, what it must achieve, and how success will be measured. Design and technology follow that clarity.",
  },
  {
    title: "Engineering with discipline",
    icon: ShieldCheck,
    body: "Clean architecture, sensible dependencies, and maintainable code. We build for the team that will own the product after launch, not just for the demo.",
  },
  {
    title: "Design with intent",
    icon: PenTool,
    body: "Every interface decision should reduce friction or build confidence. We avoid decoration for its own sake and design around the tasks people actually perform.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About KiyoraX"
        breadcrumb="About Us"
        title={
          <>
            Technology built around{" "}
            <span className="text-gradient">your business.</span>
          </>
        }
        description="We are a digital solutions company focused on helping businesses turn ideas into impactful technology products — combining modern engineering, creative thinking, and business understanding."
        meta={[
          { label: "Team", value: `${team.length} specialists` },
          { label: "Disciplines", value: "Web · CRM · AI · Growth" },
          { label: "Engagements", value: "Project & retainer" },
          { label: "Location", value: "Pune, India" },
        ]}
      />

      <section className="relative overflow-hidden bg-paper text-ink">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-60" />
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow text-ink/40">Who we are</p>
                <h2 className="mt-5 max-w-2xl text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.06]">
                  A team built to turn ambitious ideas into{" "}
                  <span className="text-gradient-brand">dependable products.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-7 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/60">
                  <p>
                    KiyoraX Technologies is a digital solutions company focused on helping
                    businesses turn ideas into impactful technology products. We combine
                    modern engineering, creative thinking, and business understanding to
                    develop scalable websites, intelligent applications, CRM platforms, and
                    digital experiences.
                  </p>
                  <p>
                    Our work spans early-stage products, growing businesses, and established
                    institutions. What connects every engagement is the same intent: build
                    something useful, make it dependable, and leave the client with a product
                    their team can understand and grow.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                  {[
                    "Product thinking, not just delivery",
                    "Senior involvement across the lifecycle",
                    "Documented decisions and clean handover",
                    "Support that continues after launch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-ink/60">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-8">
                <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-blue/25 blur-[80px]"
                />
                <div className="relative">
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
                    KiyoraX at a glance
                  </p>
                  <p className="mt-5 font-display text-[22px] font-medium leading-snug tracking-tight text-white">
                    A technology partner for businesses that care how the product behaves
                    after launch.
                  </p>
                  <dl className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                    {[
                      ["What we build", "Websites, platforms, CRM, AI"],
                      ["Who we serve", "Founders, institutions, enterprises"],
                      ["How we work", "Discovery-led, milestone based"],
                      ["Where we are", "Pune, India — working remotely"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-6 py-4">
                        <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                          {label}
                        </dt>
                        <dd className="text-right text-[12px] text-white/65">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-7 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">
                      <Users className="h-3.5 w-3.5 text-brand-cyan/70" />
                      {team.length} people, one team
                    </span>
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-1.5 text-[12px] text-brand-cyan"
                    >
                      Meet the team
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#070810]">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow text-white/40">What drives us</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.04] text-white">
                Vision, mission, and a{" "}
                <span className="text-gradient">practical approach.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.06} y={16} className="bg-[#070810]">
                  <div className="group h-full p-7 transition-colors duration-300 hover:bg-white/[0.02]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-brand-cyan/80">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                        {pillar.index}
                      </span>
                    </div>
                    <h3 className="mt-7 text-[18px] font-medium text-white">{pillar.title}</h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-white/45">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 max-w-3xl border-l border-brand-cyan/30 pl-5 font-display text-[19px] leading-relaxed text-white/55">
              &ldquo;Technology should serve the business — not ask the business to
              reorganise itself around the software.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper text-ink">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow text-ink/40">How we work</p>
                <h2 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05]">
                  Three habits that shape every project.
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/55">
                  They sound simple. Applied consistently, they are the difference between
                  a demo and a product people rely on.
                </p>
                <Button href="/services" variant="outlineDark" size="sm" className="mt-7">
                  Explore our services
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-ink/10 border-y border-ink/10">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Reveal key={principle.title} delay={index * 0.05}>
                      <div className="group grid gap-4 py-7 sm:grid-cols-[auto_1fr] sm:gap-8">
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-ink/25">
                            0{index + 1}
                          </span>
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 text-ink/45 transition-colors group-hover:border-brand-blue/30 group-hover:text-brand-blue">
                            <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                          </span>
                        </div>
                        <div>
                          <h3 className="text-[18px] font-medium tracking-tight text-ink">
                            {principle.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-ink/55">
                            {principle.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
