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
      "Fast, refined websites that present your business with clarity and convert visitors into customers.",
    overview:
      "Your website is often the first real conversation a customer has with your business. We design and build websites around that moment — clear storytelling, confident design, and fast, reliable engineering. Every build is responsive, accessible, search-friendly, and simple for your team to maintain.",
    icon: "globe",
    features: [
      "Business and corporate websites",
      "Educational and institutional websites",
      "Portfolio and personal brand sites",
      "High-converting landing pages",
      "CMS-powered content editing",
      "Technical SEO foundations",
    ],
    outcomes: [
      "A distinctive digital presence",
      "Stronger inbound enquiries",
      "Fast, mobile-first performance",
    ],
    idealFor: ["Startups", "Institutions", "Professional firms", "Growing brands"],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    short:
      "Conversion-focused online stores with dependable checkout, payments, and day-to-day store management.",
    overview:
      "We build online stores that feel effortless to shop and straightforward to run. From catalogue structure and checkout to payment gateways and inventory, every decision is made around reducing friction and increasing repeat purchases.",
    icon: "shopping-bag",
    features: [
      "Custom storefront development",
      "Product and catalogue management",
      "Payment gateway integration",
      "Order and fulfilment workflows",
      "Inventory and variant management",
      "Analytics and conversion tracking",
    ],
    outcomes: [
      "A smoother buying journey",
      "Operational clarity for your team",
      "A store built to scale with demand",
    ],
    idealFor: ["D2C brands", "Retailers", "Boutique sellers", "Marketplaces"],
  },
  {
    slug: "crm-development",
    title: "Custom CRM Development",
    short:
      "Purpose-built CRM platforms that reflect how your business actually sells, supports, and grows.",
    overview:
      "Off-the-shelf CRM tools force your business into someone else's workflow. We build CRM systems around your real pipeline — from lead capture and follow-ups to reporting and team accountability. The result is a platform your team will actually use.",
    icon: "users",
    features: [
      "Education CRM and admissions pipelines",
      "Sales CRM and lead management",
      "Customer lifecycle management",
      "Workflow and follow-up automation",
      "Role-based access and permissions",
      "Custom dashboards and reporting",
    ],
    outcomes: [
      "A single source of truth for sales",
      "Fewer leads lost to follow-up gaps",
      "Clear, real-time business visibility",
    ],
    idealFor: ["Education institutes", "Sales teams", "Service businesses", "Agencies"],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    short:
      "Scalable SaaS platforms and internal products engineered for real workloads and long-term growth.",
    overview:
      "We engineer web applications that hold up under real usage: clean architecture, secure APIs, considered permissions, and interfaces that stay understandable as features grow. From early MVPs to complex internal platforms, we build with the next year in mind.",
    icon: "layout-dashboard",
    features: [
      "SaaS product development",
      "Enterprise and internal applications",
      "Admin panels and operational dashboards",
      "Custom business applications",
      "API design and third-party integrations",
      "Authentication, roles, and audit trails",
    ],
    outcomes: [
      "A product your team can grow on",
      "Reduced manual operational work",
      "Reliable performance at scale",
    ],
    idealFor: ["SaaS founders", "Enterprises", "Operations teams", "Institutions"],
  },
  {
    slug: "ai-integration-automation",
    title: "AI Integration & Automation",
    short:
      "Practical AI applied to real workflows — support, research, content, and repetitive operations.",
    overview:
      "AI is only valuable when it removes real work. We identify the repetitive, high-friction parts of your operation and integrate AI where it genuinely helps — with clear boundaries, human review, and measurable outcomes rather than novelty.",
    icon: "sparkles",
    features: [
      "AI-assisted business workflows",
      "Intelligent support chatbots",
      "LLM and AI API integration",
      "Document and data processing automation",
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
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    short:
      "Cross-platform mobile experiences that feel native, stay reliable, and keep customers close.",
    overview:
      "Mobile products live or die on details: load time, touch feedback, offline behaviour, and clarity on a small screen. We build cross-platform applications with a native feel and an architecture that supports updates long after launch.",
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
      "One codebase, consistent experience",
      "A clear path for future releases",
    ],
    idealFor: ["Consumer brands", "Service businesses", "Communities", "Field teams"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "Performance-led campaigns and content that turn attention into measurable business outcomes.",
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
      "Clear reporting you can act on",
    ],
    idealFor: ["D2C brands", "Education institutes", "Local businesses", "B2B teams"],
  },
  {
    slug: "wordpress-cms-development",
    title: "WordPress & CMS Development",
    short:
      "Well-built WordPress sites your team can update confidently, without breaking the design.",
    overview:
      "WordPress is a powerful platform when it is built with discipline. We create custom themes, structure content cleanly, and keep the editing experience simple — so your team can publish without needing a developer for every change.",
    icon: "blocks",
    features: [
      "Custom WordPress themes",
      "Content architecture and CMS setup",
      "Page builder and editor training",
      "Performance and security hardening",
      "Plugin configuration and integration",
      "Ongoing maintenance plans",
    ],
    outcomes: [
      "A site your team can own",
      "Faster publishing cycles",
      "A stable, secure foundation",
    ],
    idealFor: ["Institutions", "Publishers", "Small businesses", "Marketing teams"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
