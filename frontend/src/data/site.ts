export const site = {
  name: "KiyoraX Technologies",
  shortName: "KiyoraX",
  tagline: "Technology That Moves Businesses Forward.",
  positioning: "Building Intelligent Digital Experiences.",
  description:
    "KiyoraX Technologies builds innovative digital solutions that help businesses operate smarter, connect better, and grow faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "hello@kiyorax.com",
  phone: "+91 90000 00000",
  phoneHref: "+919000000000",
  location: "Pune, Maharashtra, India",
  hours: "Mon – Sat, 10:00 – 19:00 IST",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  { label: "LinkedIn", key: "linkedin", href: "" },
  { label: "Instagram", key: "instagram", href: "" },
  { label: "X", key: "x", href: "" },
  { label: "GitHub", key: "github", href: "" },
] as const;

export const serviceOptions = [
  "Website Development",
  "E-commerce Development",
  "CRM Development",
  "Educational Website / Software",
  "Institutional Website",
  "Web Application Development",
  "Mobile Application Development",
  "AI Integration",
  "Digital Marketing",
  "WordPress Development",
  "Other",
] as const;

export const budgetOptions = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "Above ₹3,00,000",
  "Not Decided",
] as const;

export const timelineOptions = [
  "ASAP",
  "1 – 2 months",
  "3 – 4 months",
  "4 – 6 months",
  "Flexible",
] as const;

export const contactOptions = ["Email", "Phone", "WhatsApp"] as const;
