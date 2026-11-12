import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
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
    <footer className="relative overflow-hidden bg-ink-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-80 w-[620px] rounded-full bg-sky/10 blur-[120px]"
      />
      <div className="container-x relative">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Link href="/" aria-label={`${site.name} — home`} className="inline-block">
              <Logo onDark />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              A technology partner for businesses that want their ideas built
              properly, explained clearly, and supported for the long run.
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
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/65 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ) : (
                  <span
                    key={social.label}
                    title={`${social.label} profile link coming soon`}
                    aria-label={`${social.label} profile link coming soon`}
                    className="flex h-10 w-10 cursor-default items-center justify-center rounded-full border border-white/8 text-white/55"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              })}
            </div>
            <p className="mt-4 text-[10.5px] text-white/50">
              Social profile links will be published once verified.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Services
            </p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm text-sky-bright transition-colors hover:text-white"
                >
                  All services <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky-bright/80" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-start gap-3 text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky-bright/80" />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-bright/80" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-bright/80" />
                <span>{site.hours}</span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[13px] text-white/85 transition-colors hover:border-white/35 hover:text-white"
            >
              Start a project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="hairline-dark" />

        <div className="flex flex-col gap-4 py-7 text-[12px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-white/80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/80">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/15">/</span>
            <span className="text-white/50">Technology, made human.</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none relative select-none overflow-hidden">
        <p className="translate-y-[30%] text-center font-display text-[24vw] font-bold leading-none tracking-[-0.07em] text-white/[0.035]">
          KIYORAX
        </p>
      </div>
    </footer>
  );
}
