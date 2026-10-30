"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.07] bg-ink/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              scrolled ? "h-[68px]" : "h-[82px]",
            )}
          >
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="rounded-lg transition-opacity hover:opacity-90"
            >
              <Logo compact={scrolled} />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 backdrop-blur-md"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/55 hover:text-white",
                  )}
                >
                  {isActive(link.href) ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="brand" size="sm" className="pr-4">
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="h-px origin-left bg-[linear-gradient(90deg,#00c8f5,#286bff,#852eff)] opacity-70"
        />
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-[82px] lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-brand-blue/20 blur-[100px]"
              aria-hidden="true"
            />
            <div className="container-x relative flex flex-1 flex-col pb-10">
              <nav aria-label="Mobile" className="mt-8 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + index * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="flex items-center justify-between border-b border-white/[0.08] py-5"
                    >
                      <span
                        className={cn(
                          "font-display text-[26px] font-medium tracking-tight",
                          isActive(link.href) ? "text-white" : "text-white/65",
                        )}
                      >
                        {link.label}
                      </span>
                      <span className="font-mono text-[11px] tracking-widest text-white/30">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="mt-10"
              >
                <Button href="/contact" variant="brand" size="lg" className="w-full">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <div className="mt-8 flex flex-col gap-2 text-sm text-white/45">
                  <a href={`mailto:${site.email}`} className="link-underline w-fit">
                    {site.email}
                  </a>
                  <a href={`tel:${site.phoneHref}`} className="link-underline w-fit">
                    {site.phone}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
