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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || open
            ? "border-b border-line bg-white/92 backdrop-blur-md"
            : "border-b border-transparent bg-white/60 backdrop-blur-sm",
        )}
      >
        <div className="container-x">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-[68px]" : "h-[78px]",
            )}
          >
            <Link
              href="/"
              aria-label={`${site.name} — home`}
              className="rounded-lg transition-opacity hover:opacity-80"
            >
              <Logo compact={scrolled} />
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "group relative py-2 text-[13.5px] font-medium transition-colors duration-200",
                    isActive(link.href)
                      ? "text-ink"
                      : "text-ink/65 hover:text-ink",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-sky transition-transform duration-300",
                      isActive(link.href)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Button href="/contact" size="sm" className="pr-5">
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="h-px origin-left bg-sky"
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-white pt-[68px] lg:hidden"
          >
            <div className="container-x relative flex flex-1 flex-col pb-10">
              <nav aria-label="Mobile" className="mt-6 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + index * 0.04, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className="flex items-center justify-between border-b border-line py-5"
                    >
                      <span
                        className={cn(
                          "font-display text-[25px] font-semibold tracking-tight",
                          isActive(link.href) ? "text-ink" : "text-ink/65",
                        )}
                      >
                        {link.label}
                      </span>
                      <span className="text-[11px] font-medium tracking-widest text-ink/65">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="mt-8"
              >
                <Button href="/contact" size="lg" className="w-full">
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
                <div className="mt-7 flex flex-col gap-2 text-sm text-ink/65">
                  <a href={`mailto:${site.email}`} className="link-underline w-fit">
                    {site.email}
                  </a>
                  <a href={`tel:${site.phoneHref}`} className="link-underline w-fit">
                    {site.phone}
                  </a>
                  <span className="mt-1 text-[12px] text-ink/65">{site.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
