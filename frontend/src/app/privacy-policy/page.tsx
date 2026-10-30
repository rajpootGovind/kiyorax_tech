import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How KiyoraX Technologies collects, uses, stores, and protects the information you share through our website and project enquiry form.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          KiyoraX Technologies (&ldquo;KiyoraX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects
          your privacy. This policy explains what information we collect when you use this
          website, why we collect it, how we handle it, and the choices available to you.
        </p>
        <p>
          By using this website or submitting an enquiry, you acknowledge the practices
          described in this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>We collect information in two ways:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="text-ink/80">Information you give us.</span> When you submit the
            enquiry form we collect your name, email address, phone number, company or
            organisation name, service required, project description, and any optional
            information you provide such as budget, timeline, and preferred contact method.
          </li>
          <li>
            <span className="text-ink/80">Technical information.</span> Our hosting and
            infrastructure providers may process standard server log data such as your IP
            address, browser type, device type, referring page, and timestamps for security
            and reliability purposes.
          </li>
        </ul>
        <p>
          We do not intentionally collect sensitive personal data through this website. Please
          do not include confidential credentials or regulated personal data in the project
          description field.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    body: (
      <>
        <p>We use the information you provide to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to your enquiry and discuss your requirement.</li>
          <li>Prepare a proposal, quotation, or project plan where appropriate.</li>
          <li>Communicate about an active project or support request.</li>
          <li>Maintain internal records of business enquiries and client relationships.</li>
          <li>Protect the website against spam, abuse, and security threats.</li>
        </ul>
        <p>
          We do not sell personal information, and we do not use enquiry details for
          unrelated marketing without your consent.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and service providers",
    body: (
      <>
        <p>
          We share information only where necessary to operate the website and respond to you.
          This may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Cloud database and hosting providers that store enquiry records.</li>
          <li>
            A messaging platform used to notify our internal team of new enquiries. Messages
            contain the details you submit through the form.
          </li>
          <li>Email or communication providers used to respond to you.</li>
          <li>
            Authorities or advisers where required by law, or where necessary to protect our
            legal rights.
          </li>
        </ul>
        <p>
          Service providers are expected to process data only for the purposes we specify and
          to apply appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data retention",
    body: (
      <>
        <p>
          Enquiry records are retained for as long as reasonably necessary to respond to your
          request, maintain business records, and comply with legal obligations. If an enquiry
          does not progress, we may remove it after a reasonable period. You may ask us to
          delete your enquiry details at any time, subject to any legal or contractual
          obligations.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <>
        <p>
          We use reasonable technical and organisational measures to protect information
          submitted through this website, including server-side validation, rate limiting,
          restricted access to enquiry records, and secure handling of credentials.
        </p>
        <p>
          No method of transmission or storage is completely secure. While we take data
          protection seriously, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: (
      <>
        <p>
          This website is designed to work without advertising or tracking cookies. Essential
          cookies or local storage may be used where required for core functionality or
          security.
        </p>
        <p>
          If we introduce privacy-respecting analytics in the future, this policy will be
          updated to describe what is collected and why.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Request access to the personal information we hold about you.</li>
          <li>Ask us to correct inaccurate information.</li>
          <li>Request deletion of your information where applicable.</li>
          <li>Withdraw consent for future communications.</li>
          <li>Raise a concern with us about how your information is handled.</li>
        </ul>
        <p>
          To exercise these rights, contact us at{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline decoration-ink/30 underline-offset-2">
            {site.email}
          </a>
          . We may need to verify your identity before acting on a request.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International processing",
    body: (
      <>
        <p>
          Our service providers may process data in locations outside your country. Where this
          happens, we take reasonable steps to ensure information continues to receive
          appropriate protection consistent with this policy.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <>
        <p>
          This website is intended for businesses and professional users. It is not directed at
          children, and we do not knowingly collect personal information from children.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <>
        <p>
          We may update this policy from time to time to reflect changes in our practices or
          legal requirements. The &ldquo;last updated&rdquo; date at the top of this page will
          indicate when the policy was revised.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>
          If you have questions about this policy or how your information is handled, contact
          us:
        </p>
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      breadcrumb="Privacy Policy"
      title="Privacy Policy"
      description="How we collect, use, and protect the information you share with KiyoraX Technologies."
      updated="30 October 2026"
      sections={sections}
    />
  );
}
