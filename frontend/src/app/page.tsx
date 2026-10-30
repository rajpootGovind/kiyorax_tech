import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { About } from "@/components/sections/about";
import { ServicesPreview } from "@/components/sections/services-preview";
import { TechStack } from "@/components/sections/tech-stack";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { TeamSection } from "@/components/sections/team-section";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { faqs } from "@/data/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <ServicesPreview />
      <TechStack />
      <PortfolioPreview />
      <WhyUs />
      <Process />
      <Testimonials />
      <TeamSection />
      <Faq />
      <FinalCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
