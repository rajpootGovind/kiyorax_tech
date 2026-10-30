export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "CRM" | "Websites" | "E-commerce" | "Education" | "Web Applications";
  tags: string[];
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  year: string;
  preview: "crm" | "commerce" | "institution" | "saas" | "website" | "dashboard";
  featured?: boolean;
};

/**
 * These are clearly labelled demo concepts built to illustrate KiyoraX
 * capabilities. They are not client projects and must be replaced with real,
 * approved case studies before launch.
 */
export const projects: Project[] = [
  {
    slug: "edusphere-education-crm",
    title: "EduSphere",
    subtitle: "Admissions & student lifecycle CRM",
    category: "CRM",
    tags: ["CRM", "Education"],
    summary:
      "A demo concept for an education CRM that unifies enquiries, admissions, counselling follow-ups, and student records in one operational view.",
    challenge:
      "Education teams often manage enquiries across spreadsheets, messaging apps, and disconnected tools. Follow-ups slip, ownership is unclear, and leadership has no reliable view of the admissions pipeline.",
    solution:
      "EduSphere is a concept platform that centralises lead capture, counsellor assignment, stage tracking, and follow-up reminders, with dashboards that make the admissions funnel visible at a glance.",
    features: [
      "Lead capture with source tracking",
      "Counsellor assignment and follow-up reminders",
      "Admissions pipeline and stage automation",
      "Student profiles and document checklists",
      "Role-based dashboards for teams and leadership",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
    year: "Demo concept",
    preview: "crm",
    featured: true,
  },
  {
    slug: "lumen-commerce",
    title: "Lumen Commerce",
    subtitle: "Conversion-focused storefront",
    category: "E-commerce",
    tags: ["E-commerce"],
    summary:
      "A demo store concept designed around a short path from discovery to checkout, with clean product storytelling and dependable order operations.",
    challenge:
      "Many online stores look good but create friction at the exact moments that matter: finding products, understanding variants, and completing checkout confidently.",
    solution:
      "Lumen Commerce is a concept storefront with structured catalogue browsing, a streamlined cart and checkout, payment integration, and an admin view for products, inventory, and orders.",
    features: [
      "Catalogue and collection browsing",
      "Variant-aware product pages",
      "Cart, checkout, and payment integration",
      "Order and inventory management",
      "Conversion tracking and analytics hooks",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    year: "Demo concept",
    preview: "commerce",
  },
  {
    slug: "astra-institute",
    title: "Astra Institute",
    subtitle: "Institutional website & content platform",
    category: "Education",
    tags: ["Websites", "Education"],
    summary:
      "A demo institutional website concept with clear academic storytelling, programme discovery, and an editorial system the team can own.",
    challenge:
      "Institutes need to present a great deal of information without overwhelming prospective students and parents — and non-technical teams need to keep it current.",
    solution:
      "Astra is a concept site with a strong information architecture, programme pages, faculty profiles, admissions guidance, and a structured CMS so content updates do not require developers.",
    features: [
      "Programme and department pages",
      "Admissions information architecture",
      "Faculty and campus storytelling",
      "News and events publishing",
      "CMS-led content management",
    ],
    stack: ["Next.js", "Tailwind CSS", "WordPress", "TypeScript"],
    year: "Demo concept",
    preview: "institution",
  },
  {
    slug: "meridian-ops-platform",
    title: "Meridian Ops",
    subtitle: "Internal operations platform",
    category: "Web Applications",
    tags: ["Web Applications"],
    summary:
      "A demo SaaS-style operations console that brings tasks, teams, approvals, and reporting into a single, permission-aware workspace.",
    challenge:
      "Growing teams accumulate operational work across documents, chats, and ad-hoc tools. Visibility drops and accountability becomes difficult to maintain.",
    solution:
      "Meridian is a concept operations platform with configurable workflows, role-based access, approval trails, and dashboards that surface what needs attention now.",
    features: [
      "Configurable task and approval workflows",
      "Role-based access control",
      "Operational dashboards and filters",
      "Activity log and audit trail",
      "Notification and reporting layer",
    ],
    stack: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
    year: "Demo concept",
    preview: "saas",
    featured: true,
  },
  {
    slug: "northline-property-group",
    title: "Northline Property Group",
    subtitle: "Corporate website & property discovery",
    category: "Websites",
    tags: ["Websites"],
    summary:
      "A demo corporate site concept for a property business, balancing brand credibility with fast, filtered property discovery and enquiry capture.",
    challenge:
      "Property websites often prioritise visual flourish over the practical job: helping a serious buyer find the right property and start a conversation quickly.",
    solution:
      "Northline is a concept site with confident brand storytelling, structured property listings, practical filtering, and enquiry flows connected to the sales team's inbox.",
    features: [
      "Editorial brand and project pages",
      "Property listing and filtering",
      "Enquiry capture with source tracking",
      "Location and amenities storytelling",
      "SEO-ready page structure",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    year: "Demo concept",
    preview: "website",
  },
  {
    slug: "kinetiq-sales-crm",
    title: "Kinetiq",
    subtitle: "Sales pipeline CRM",
    category: "CRM",
    tags: ["CRM"],
    summary:
      "A demo sales CRM concept focused on pipeline hygiene, follow-up discipline, and the numbers a sales leader actually needs to see.",
    challenge:
      "Sales teams lose momentum when pipeline data is stale, follow-ups depend on memory, and reporting is assembled manually at the end of the month.",
    solution:
      "Kinetiq is a concept CRM with a visual pipeline, activity reminders, lead scoring fields, and leadership dashboards that stay current as the team works.",
    features: [
      "Visual pipeline and stage management",
      "Activity reminders and follow-up tasks",
      "Lead source and conversion reporting",
      "Team performance dashboards",
      "Quotation and document tracking",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    year: "Demo concept",
    preview: "dashboard",
  },
];

export const portfolioFilters = [
  "All",
  "CRM",
  "Websites",
  "E-commerce",
  "Education",
  "Web Applications",
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
