import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Compass,
  Flag,
  PenTool,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { team } from "@/data/team";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "KiyoraX Technologies is a technology partner for businesses that want dependable digital products, clear communication, and engineering built to last.",
  path: "/about",
});

const pillars = [
  {
    index: "01",
    title: "Our vision",
    icon: Compass,
    body: "To be the technology partner businesses turn to when an idea needs to become a dependable digital product — one that creates real value and keeps earning its place as the business grows.",
  },
  {
    index: "02",
    title: "Our mission",
    icon: Flag,
    body: "To combine modern engineering, thoughtful design, and business understanding to build websites, applications, and platforms that help our clients operate smarter, connect better, and grow with confidence.",
  },
  {
    index: "03",
    title: "Our approach",
    icon: Route,
    body: "We start with the business problem, not the technology. Scope stays honest, communication stays clear, and work moves in reviewable milestones so both sides understand every decision.",
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
    body: "Clean architecture, sensible dependencies, and maintainable code. We build for the team who will own the product after launch, not just for the demo.",
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
            <span className="text-sky">your business.</span>
          </>
        }
        description="We are a technology partner helping businesses turn ideas into meaningful digital products — combining modern engineering, thoughtful design, and a clear understanding of the business behind the brief."
        meta={[
          { label: "Team", value: `${team.length} specialists` },
          { label: "Disciplines", value: "Web · CRM · AI · Growth" },
          { label: "Engagements", value: "Project & retainer" },
          { label: "Location", value: "Pune, India" },
        ]}
      />

      <section className="relative overflow-hidden bg-white">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Who we are</p>
                <h2 className="mt-5 max-w-2xl text-[clamp(1.95rem,3.6vw,2.9rem)] font-bold leading-[1.08] text-ink">
                  A team built to turn ambitious ideas into{" "}
                  <span className="text-sky">dependable products.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted">
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
                    <li key={item} className="flex items-start gap-2.5 text-[13px] text-ink/65">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-soft text-sky">
                        <Check className="h-2.5 w-2.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-ink p-7 text-white sm:p-8">
                <div aria-hidden="true" className="absolute inset-0 bg-grid-soft opacity-[0.08]" />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky/20 blur-[80px]"
                />
                <div className="relative">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/55">
                    KiyoraX at a glance
                  </p>
                  <p className="mt-5 font-display text-[21px] font-semibold leading-snug tracking-tight text-white">
                    A technology partner for businesses that care how the product behaves
                    after launch.
                  </p>
                  <dl className="mt-7 divide-y divide-white/10 border-y border-white/10">
                    {[
                      ["What we build", "Websites, platforms, CRM, AI"],
                      ["Who we serve", "Founders, institutions, enterprises"],
                      ["How we work", "Discovery-led, milestone based"],
                      ["Where we are", "Pune, India"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-6 py-3.5">
                        <dt className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55">
                          {label}
                        </dt>
                        <dd className="text-right text-[12px] text-white/70">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[9.5px] uppercase tracking-[0.12em] text-white/55">
                      <Users className="h-3.5 w-3.5 text-sky-bright" />
                      {team.length} people, one team
                    </span>
                    <Link
                      href="/team"
                      className="group inline-flex items-center gap-1.5 text-[12px] font-medium text-sky-bright"
                    >
                      Meet the team
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper">
        <div className="container-x section-pad relative">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">What drives us</p>
              <h2 className="mt-5 text-[clamp(1.95rem,3.6vw,2.9rem)] font-bold leading-[1.08] text-ink">
                Vision, mission, and a{" "}
                <span className="text-sky">practical approach.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.06} y={16}>
                  <div className="border-t-2 border-ink/10 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-sky">
                        <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                      </span>
                      <span className="text-[10px] font-semibold tracking-[0.14em] text-ink/65">
                        {pillar.index}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[18px] font-semibold text-ink">{pillar.title}</h3>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-muted">
                      {pillar.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-12 max-w-3xl border-l-2 border-sky pl-5 font-display text-[19px] leading-relaxed text-ink/70 sm:text-[21px]">
              &ldquo;Technology should serve the business — not ask the business to
              reorganise itself around the software.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">How we work</p>
                <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-bold leading-[1.08] text-ink">
                  Three habits that shape every project.
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
                  They sound simple. Applied consistently, they are the difference between
                  a demo and a product people rely on.
                </p>
                <Button href="/services" variant="outline" size="sm" className="mt-7">
                  Explore our services
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-line">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Reveal key={principle.title} delay={index * 0.05}>
                      <div className="grid gap-4 border-b border-line py-7 sm:grid-cols-[auto_1fr] sm:gap-8">
                        <div className="flex items-start gap-4">
                          <span className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-ink/65">
                            0{index + 1}
                          </span>
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-sky">
                            <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                          </span>
                        </div>
                        <div>
                          <h3 className="text-[17.5px] font-semibold tracking-tight text-ink">
                            {principle.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
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

          <Reveal delay={0.08}>
            <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-paper px-6 py-5 sm:flex-row sm:items-center">
              <p className="flex items-start gap-3 text-sm text-ink/65">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                Curious how we would approach your project? Start with a conversation.
              </p>
              <Button href="/contact" size="sm">
                Talk to us
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
