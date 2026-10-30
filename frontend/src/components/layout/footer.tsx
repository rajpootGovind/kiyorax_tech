import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { navLinks, site, socials } from "@/data/site";
import { services } from "@/data/services";

const socialIcons: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  instagram: Instagram,
  x: Twitter,
  github: Github,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-brand-blue/[0.09] blur-[120px]"
      />
      <div className="container-x relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/45">
              {site.description}
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.key];
                if (!Icon) return null;
                return social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span
                    key={social.label}
                    title={`${social.label} profile link coming soon`}
                    aria-label={`${social.label} profile link coming soon`}
                    className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-white/[0.06] text-white/25"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-white/55 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-underline text-sm text-white/55 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm text-brand-cyan/80 hover:text-brand-cyan"
                >
                  View all services <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">
              Get in touch
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-3 text-white/55 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan/70" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="group flex items-start gap-3 text-white/55 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan/70" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan/70" />
                <span>{site.location}</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[13px] text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col gap-4 py-7 text-[12px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms &amp; Conditions
            </Link>
            <span className="hidden text-white/20 sm:inline">/</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/25">
              Building intelligent digital experiences
            </span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative select-none overflow-hidden"
      >
        <p className="translate-y-[28%] text-center font-display text-[26vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]">
          KIYORAX
        </p>
      </div>
    </footer>
  );
}
