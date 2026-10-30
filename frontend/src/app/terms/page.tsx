import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the KiyoraX Technologies website and the basis on which project discussions and services are handled.",
  path: "/terms",
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    body: (
      <>
        <p>
          By accessing or using this website, you agree to these Terms &amp; Conditions. If you
          do not agree, please discontinue use of the website.
        </p>
        <p>
          These terms govern your use of the website. Separate written agreements govern any
          professional services we provide.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "Use of the website",
    body: (
      <>
        <p>You agree to use this website lawfully and not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Attempt to gain unauthorised access to the website, servers, or data.</li>
          <li>Introduce malicious code, spam, or automated abuse.</li>
          <li>Interfere with the availability or integrity of the website.</li>
          <li>Copy or republish website content without permission.</li>
          <li>Submit false, misleading, or unlawful information through our forms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "services",
    title: "Services and proposals",
    body: (
      <>
        <p>
          Information on this website describes our capabilities and is provided for general
          information. It does not constitute a binding offer.
        </p>
        <p>
          Project scope, deliverables, timelines, fees, and responsibilities are defined only in
          a written proposal or agreement accepted by both parties. Any estimates shared before
          discovery are indicative and may change once requirements are understood.
        </p>
      </>
    ),
  },
  {
    id: "portfolio",
    title: "Portfolio and demo concepts",
    body: (
      <>
        <p>
          Projects marked as &ldquo;demo concept&rdquo; on this website are illustrative designs
          created by KiyoraX. They are not client engagements, and no client outcomes,
          endorsements, or results are claimed for them.
        </p>
        <p>
          Client case studies, testimonials, and logos will be published only where we have
          appropriate permission.
        </p>
      </>
    ),
  },
  {
    id: "quotations",
    title: "Quotations and payments",
    body: (
      <>
        <p>
          Quotations are valid for the period stated in the quotation, or for 30 days where no
          period is stated. Unless agreed otherwise in writing:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Payments are milestone-based and defined in the project agreement.</li>
          <li>Work may be paused where invoices remain unpaid beyond agreed terms.</li>
          <li>Third-party costs such as hosting, licenses, or ad spend are billed separately.</li>
          <li>Taxes are charged where applicable.</li>
        </ul>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "Client responsibilities",
    body: (
      <>
        <p>
          Successful delivery depends on timely cooperation. Clients are responsible for
          providing accurate requirements, content, approvals, access, and feedback within
          agreed timeframes, and for ensuring they have the rights to any material they supply.
        </p>
        <p>
          Delays in feedback or access may affect the project timeline and are handled according
          to the project agreement.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          All content on this website — including text, design, graphics, code, and branding —
          is owned by or licensed to KiyoraX Technologies and is protected by applicable
          intellectual property laws. You may not reproduce or redistribute it without written
          permission.
        </p>
        <p>
          Ownership of project deliverables, licences, and third-party components is defined in
          the relevant project agreement. We may retain the right to reference non-confidential
          work in our portfolio unless agreed otherwise.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services and links",
    body: (
      <>
        <p>
          This website may reference or link to third-party websites, tools, or services. We do
          not control those services and are not responsible for their content, availability, or
          privacy practices. Your use of third-party services is governed by their own terms.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    body: (
      <>
        <p>
          We treat information shared during enquiries with care and limit access to team members
          who need it to respond. Formal confidentiality obligations for project work are set out
          in the relevant agreement, and a non-disclosure agreement can be arranged where
          required.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <>
        <p>
          This website and its content are provided on an &ldquo;as available&rdquo; basis. While
          we make reasonable efforts to keep information accurate and the website available, we
          do not warrant that the website will be uninterrupted, error-free, or complete.
        </p>
        <p>
          Nothing on this website constitutes legal, financial, or other professional advice.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by applicable law, KiyoraX Technologies will not be
          liable for indirect, incidental, special, or consequential losses arising from your use
          of this website or reliance on its content.
        </p>
        <p>
          Nothing in these terms excludes liability that cannot lawfully be excluded. Liability
          relating to professional services is governed by the applicable project agreement.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <>
        <p>
          These terms are governed by the laws of India. Subject to any dispute-resolution
          provisions in a project agreement, courts located in Maharashtra, India, will have
          jurisdiction over disputes relating to this website.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <>
        <p>
          We may update these terms from time to time. The revised version will be published on
          this page with an updated date. Continued use of the website after changes are
          published constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>For questions about these terms, contact:</p>
        <p>
          KiyoraX Technologies
          <br />
          Email:{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline decoration-ink/30 underline-offset-2">
            {site.email}
          </a>
          <br />
          Phone:{" "}
          <a href={`tel:${site.phoneHref}`} className="text-ink underline decoration-ink/30 underline-offset-2">
            {site.phone}
          </a>
          <br />
          Location: {site.location}
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      breadcrumb="Terms & Conditions"
      title="Terms & Conditions"
      description="The basis on which you may use this website, and how project discussions and services are handled."
      updated="30 October 2026"
      sections={sections}
    />
  );
}
