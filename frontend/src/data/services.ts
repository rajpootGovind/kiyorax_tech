export type Service = {
  slug: string;
  title: string;
  short: string;
  overview: string;
  icon: string;
  features: string[];
  outcomes: string[];
  idealFor: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short:
      "A clear, confident website that explains your business and earns the enquiry.",
    overview:
      "Your website is often the first real conversation a customer has with your business. We design and build around that moment: clear storytelling, considered design, and fast, reliable engineering. Every build is responsive, accessible, search-friendly, and simple for your team to maintain.",
    icon: "globe",
    features: [
      "Business and corporate websites",
      "Landing pages built to convert",
      "Responsive, accessible implementation",
      "CMS-powered content editing",
      "Technical SEO foundations",
      "Analytics and enquiry tracking",
    ],
    outcomes: [
      "A digital presence that feels like you",
      "Clearer, stronger inbound enquiries",
      "Fast performance on every device",
    ],
    idealFor: ["Startups", "Professional firms", "Growing brands", "Institutions"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    short:
      "Online stores that are easy to shop and straightforward to run day to day.",
    overview:
      "We build stores around the moments that decide a sale: finding the right product, understanding the options, and checking out without doubt. Catalogue, payments, inventory, and fulfilment are designed together, so the store works as well for your team as it does for your customer.",
    icon: "shopping-bag",
    features: [
      "Custom storefront development",
      "Product and catalogue management",
      "Payment gateway integration",
      "Order and fulfilment workflows",
      "Inventory and variant handling",
      "Conversion tracking and analytics",
    ],
    outcomes: [
      "A smoother path from browse to checkout",
      "Operational clarity for your team",
      "A store ready for the next stage of growth",
    ],
    idealFor: ["D2C brands", "Retailers", "Boutique sellers", "Marketplaces"],
  },
  {
    slug: "crm-development",
    title: "Custom CRM & Business Systems",
    short:
      "Software shaped around how your team actually sells, supports, and grows.",
    overview:
      "Off-the-shelf tools ask your business to change its habits. We build systems around your real process instead: lead capture, follow-ups, approvals, reporting, and the daily view your team needs. The result is software people use without being told to.",
    icon: "users",
    features: [
      "Education CRM and admissions pipelines",
      "Sales CRM and lead management",
      "Customer lifecycle tracking",
      "Workflow and follow-up automation",
      "Role-based access and permissions",
      "Custom dashboards and reporting",
    ],
    outcomes: [
      "One dependable source of truth",
      "Fewer opportunities lost to follow-up gaps",
      "Visibility leadership can act on",
    ],
    idealFor: ["Education institutes", "Sales teams", "Service businesses", "Agencies"],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    short:
      "Custom products and internal platforms engineered for real, daily workloads.",
    overview:
      "We engineer applications that hold up after the launch: clean architecture, secure APIs, considered permissions, and interfaces that stay understandable as features grow. From a focused internal tool to a complex operational platform, we build with the next year in mind.",
    icon: "layout-dashboard",
    features: [
      "Custom business applications",
      "Admin panels and operational dashboards",
      "Secure API design and integrations",
      "Authentication, roles, and audit trails",
      "Workflow and process automation",
      "Performance and accessibility reviews",
    ],
    outcomes: [
      "Less manual work across the business",
      "A platform your team can grow into",
      "Dependable performance under real use",
    ],
    idealFor: ["Enterprises", "Operations teams", "Institutions", "Product teams"],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    short:
      "Mobile experiences that feel native, stay reliable, and keep customers close.",
    overview:
      "Mobile products are decided by details: load time, touch feedback, offline behaviour, and clarity on a small screen. We build cross-platform applications with a native feel and an architecture that supports updates long after the first release.",
    icon: "smartphone",
    features: [
      "Business and customer applications",
      "Cross-platform development",
      "Push notifications and engagement",
      "API-driven mobile architecture",
      "App store release support",
      "Analytics and crash monitoring",
    ],
    outcomes: [
      "A dependable product in your customers' hands",
      "One codebase, a consistent experience",
      "A clear path for future releases",
    ],
    idealFor: ["Consumer brands", "Service businesses", "Communities", "Field teams"],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    short:
      "From first release to a platform that can carry real subscribers.",
    overview:
      "A SaaS product has to satisfy two audiences at once: the customer using it and the business running it. We build the product, the accounts and billing, and the operational visibility together, so growth does not expose gaps later. Early versions stay focused; the foundations stay serious.",
    icon: "layers",
    features: [
      "MVP and product architecture",
      "Multi-tenant account structures",
      "Subscription and billing integration",
      "Customer onboarding and self-service",
      "Admin and internal operations tooling",
      "Usage analytics and reporting",
    ],
    outcomes: [
      "A product your first customers can rely on",
      "Operational control as usage grows",
      "A technical base for the roadmap ahead",
    ],
    idealFor: ["SaaS founders", "Product teams", "B2B startups", "Enterprises"],
  },
  {
    slug: "ai-integration-automation",
    title: "AI Integration & Automation",
    short:
      "Practical AI applied to real workflows, not added for effect.",
    overview:
      "AI is only valuable when it removes real work. We identify the repetitive, high-friction parts of your operation and integrate AI where it genuinely helps, with clear boundaries, human review, and measurable outcomes rather than novelty.",
    icon: "sparkles",
    features: [
      "AI-assisted business workflows",
      "Intelligent support assistants",
      "LLM and AI API integration",
      "Document and data processing",
      "Internal knowledge assistants",
      "Human-in-the-loop review flows",
    ],
    outcomes: [
      "Faster response and turnaround",
      "Less repetitive manual effort",
      "Consistent, reviewable outputs",
    ],
    idealFor: ["Support teams", "Sales teams", "Educators", "Operations"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "Performance-led campaigns that turn attention into qualified conversations.",
    overview:
      "Marketing works when creative, media, and measurement move together. We plan and run campaigns across Meta and Google, sharpen targeting, and refine creative based on what the data actually says — not what looks good in a report.",
    icon: "megaphone",
    features: [
      "Meta Ads and Google Ads management",
      "Campaign strategy and audience targeting",
      "Social media marketing",
      "Landing pages for campaigns",
      "Lead generation funnels",
      "Performance reporting and optimisation",
    ],
    outcomes: [
      "More qualified enquiries",
      "Better return on ad spend",
      "Reporting you can make decisions with",
    ],
    idealFor: ["D2C brands", "Education institutes", "Local businesses", "B2B teams"],
  },
  {
    slug: "wordpress-cms-development",
    title: "WordPress & CMS Development",
    short:
      "A well-built WordPress site your team can update without breaking the design.",
    overview:
      "WordPress is a capable platform when it is built with discipline. We create custom themes, structure content cleanly, and keep the editing experience simple — so your team can publish confidently without a developer for every change.",
    icon: "blocks",
    features: [
      "Custom WordPress themes",
      "Content architecture and CMS setup",
      "Editor training and documentation",
      "Performance and security hardening",
      "Plugin configuration and integration",
      "Ongoing maintenance plans",
    ],
    outcomes: [
      "A site your team genuinely owns",
      "Faster publishing cycles",
      "A stable, secure foundation",
    ],
    idealFor: ["Institutions", "Publishers", "Small businesses", "Marketing teams"],
  },
  {
    slug: "educational-institutional-platforms",
    title: "Educational & Institutional Platforms",
    short:
      "Websites and systems built for admissions, learning, and institutional trust.",
    overview:
      "Education and institutions have a specific challenge: communicate clearly to prospective students and parents, while giving staff tools that make daily work lighter. We build websites, admissions platforms, and internal systems that respect both sides of that job.",
    icon: "graduation-cap",
    features: [
      "Institutional websites and programme pages",
      "Admissions enquiry management",
      "Student and counsellor workflows",
      "Learning and resource sections",
      "CMS for non-technical content teams",
      "Accessible, multilingual-ready structure",
    ],
    outcomes: [
      "A clearer story for prospective families",
      "Admissions work in fewer disconnected tools",
      "Content the institution can keep current",
    ],
    idealFor: ["Schools", "Colleges", "Training institutes", "Universities"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
