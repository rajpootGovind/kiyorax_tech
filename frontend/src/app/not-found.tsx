import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink pt-24">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-blue/15 blur-[120px]"
      />
      <div className="container-x relative text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
          Error 404
        </p>
        <h1 className="mx-auto mt-5 max-w-2xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.02] text-white">
          This page hasn&apos;t been{" "}
          <span className="text-gradient">built yet.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/45">
          The page you are looking for may have moved, or the link may be incorrect.
          Let&apos;s get you back to something useful.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="brand" size="lg">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Talk to our team
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
