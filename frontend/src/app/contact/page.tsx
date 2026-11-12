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
    title: "We read your requirement properly",
    text: "Your enquiry reaches our team directly. We take time to understand the context before responding.",
  },
  {
    number: "02",
    title: "We reply honestly",
    text: "You receive a considered response with clarifying questions, an initial direction, or a recommendation.",
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
            <span className="text-sky">moves your business forward.</span>
          </>
        }
        description="Whether you're starting something new, upgrading existing systems, or shaping your next digital product, tell us what you need. We will respond with a clear next step."
        meta={[
          { label: "Response", value: "Within 1 business day" },
          { label: "Email", value: site.email },
          { label: "Phone", value: site.phone },
          { label: "Hours", value: site.hours },
        ]}
      />

      <section className="relative overflow-hidden bg-paper">
        <div className="container-x section-pad relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Start a conversation</p>
                <h2 className="mt-5 text-[clamp(1.85rem,3.2vw,2.6rem)] font-bold leading-[1.08] text-ink">
                  A real conversation,{" "}
                  <span className="text-sky">not a sales script.</span>
                </h2>
                <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-muted">
                  Share as much or as little as you know. If you are still shaping the idea,
                  that is a perfectly good place to start.
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="mt-8 rounded-2xl border border-line bg-white p-6">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    Direct contact
                  </p>
                  <div className="mt-5 space-y-4">
                    <a href={`mailto:${site.email}`} className="group flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-sky transition-colors group-hover:bg-ink group-hover:text-white">
                        <Mail className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/65">
                          Email
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-ink/75 transition-colors group-hover:text-ink">
                          {site.email}
                        </span>
                      </span>
                    </a>
                    <a href={`tel:${site.phoneHref}`} className="group flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-sky transition-colors group-hover:bg-ink group-hover:text-white">
                        <Phone className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/65">
                          Phone
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-ink/75 transition-colors group-hover:text-ink">
                          {site.phone}
                        </span>
                      </span>
                    </a>
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-sky">
                        <MapPin className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/65">
                          Location
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-ink/75">
                          {site.location}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-sky">
                        <Clock className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.12em] text-ink/65">
                          Working hours
                        </span>
                        <span className="mt-0.5 block text-[13.5px] text-ink/75">
                          {site.hours}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                    What happens next
                  </p>
                  <ol className="mt-4 space-y-4">
                    {nextSteps.map((step, index) => (
                      <li key={step.number} className="relative flex gap-4">
                        {index < nextSteps.length - 1 ? (
                          <span
                            aria-hidden="true"
                            className="absolute left-[11px] top-7 h-[calc(100%+4px)] w-px bg-line"
                          />
                        ) : null}
                        <span className="relative flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border border-line bg-white text-[8px] font-semibold text-ink/65">
                          {step.number}
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold text-ink/80">{step.title}</p>
                          <p className="mt-1 text-[12px] leading-relaxed text-muted">
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
