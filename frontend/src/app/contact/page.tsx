import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Start a project with KiyoraX Technologies. Share your website, CRM, web application, AI, or digital marketing requirement and our team will respond within one business day.",
  path: "/contact",
});

const nextSteps = [
  {
    number: "01",
    title: "We review your requirement",
    text: "Your enquiry reaches our team directly. We read the details properly before responding.",
  },
  {
    number: "02",
    title: "We respond honestly",
    text: "You receive a considered reply with clarifying questions, an initial direction, or a recommendation.",
  },
  {
    number: "03",
    title: "We plan a discovery call",
    text: "If it looks like a fit, we schedule a focused conversation about scope, approach, and timeline.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        breadcrumb="Contact Us"
        title={
          <>
            Let&apos;s build something that{" "}
            <span className="text-gradient">moves your business forward.</span>
          </>
        }
        description="Whether you're starting a new business, upgrading existing systems, or building your next digital product, tell us what you need. We will respond with a clear next step."
        meta={[
          { label: "Response", value: "Within 1 business day" },
          { label: "Email", value: site.email },
          { label: "Phone", value: site.phone },
          { label: "Hours", value: site.hours },
        ]}
      />

      <section className="relative overflow-hidden bg-paper text-ink">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-ink/40">Start a conversation</p>
                <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold leading-[1.07]">
                  A real conversation,{" "}
                  <span className="text-gradient-brand">not a sales script.</span>
                </h2>
                <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-ink/55">
                  Share as much or as little as you know. If you are still shaping the idea,
                  that is a perfectly good place to start.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-8 overflow-hidden rounded-2xl bg-ink p-6 text-white">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                    Direct contact
                  </p>
                  <div className="mt-5 space-y-4">
                    <a
                      href={`mailto:${site.email}`}
                      className="group flex items-center gap-3.5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-brand-cyan/80 transition-colors group-hover:border-brand-cyan/40">
                        <Mail className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/30">
                          Email
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-white/75 transition-colors group-hover:text-white">
                          {site.email}
                        </span>
                      </span>
                    </a>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="group flex items-center gap-3.5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-brand-cyan/80 transition-colors group-hover:border-brand-cyan/40">
                        <Phone className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/30">
                          Phone
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-white/75 transition-colors group-hover:text-white">
                          {site.phone}
                        </span>
                      </span>
                    </a>
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-brand-cyan/80">
                        <MapPin className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/30">
                          Location
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-white/75">
                          {site.location}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-brand-cyan/80">
                        <Clock className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/30">
                          Working hours
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-white/75">
                          {site.hours}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/35">
                    What happens next
                  </p>
                  <ol className="mt-5 space-y-5">
                    {nextSteps.map((step, index) => (
                      <li key={step.number} className="relative flex gap-4">
                        {index < nextSteps.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="absolute left-[11px] top-7 h-[calc(100%+4px)] w-px bg-ink/10"
                          />
                        ) : null}
                        <span className="relative flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper font-mono text-[8px] text-ink/45">
                          {step.number}
                        </span>
                        <div>
                          <p className="text-[13px] font-medium text-ink/80">{step.title}</p>
                          <p className="mt-1 text-[12px] leading-relaxed text-ink/45">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.06} y={16}>
                <EnquiryForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
