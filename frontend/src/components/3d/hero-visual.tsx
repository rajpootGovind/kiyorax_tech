"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("@/components/3d/hero-scene"), {
  ssr: false,
  loading: () => <OrbitalFallback />,
});

function OrbitalFallback() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full"
      role="img"
      aria-label="Abstract 3D-inspired illustration of two connected structures around a glowing core, representing partnership between business and technology."
    >
      <defs>
        <linearGradient id="kx-left" x1="120" y1="190" x2="180" y2="410" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C8F5" stopOpacity="0.55" />
          <stop offset="1" stopColor="#00C8F5" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="kx-right" x1="480" y1="190" x2="420" y2="410" gradientUnits="userSpaceOnUse">
          <stop stopColor="#852EFF" stopOpacity="0.5" />
          <stop offset="1" stopColor="#852EFF" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="kx-core" x1="260" y1="250" x2="350" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C8F5" />
          <stop offset="0.55" stopColor="#286BFF" />
          <stop offset="1" stopColor="#852EFF" />
        </linearGradient>
        <radialGradient id="kx-glow" cx="50%" cy="50%" r="50%">
          <stop stopColor="#00C8F5" stopOpacity="0.32" />
          <stop offset="1" stopColor="#00C8F5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="kx-glow-v" cx="50%" cy="50%" r="50%">
          <stop stopColor="#852EFF" stopOpacity="0.22" />
          <stop offset="1" stopColor="#852EFF" stopOpacity="0" />
        </radialGradient>
        <filter id="kx-blur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      <circle cx="300" cy="300" r="270" fill="url(#kx-glow)" />
      <circle cx="430" cy="380" r="180" fill="url(#kx-glow-v)" filter="url(#kx-blur)" />

      <g className="animate-spin-slow" style={{ transformOrigin: "300px 300px" }} opacity="0.6">
        <circle cx="300" cy="300" r="252" fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 10" />
        <ellipse cx="300" cy="300" rx="238" ry="112" fill="none" stroke="rgba(0,200,245,0.28)" strokeWidth="1" transform="rotate(-22 300 300)" />
        <ellipse cx="300" cy="300" rx="222" ry="148" fill="none" stroke="rgba(133,46,255,0.24)" strokeWidth="1" transform="rotate(32 300 300)" />
        <circle cx="118" cy="352" r="4" fill="#00C8F5" />
        <circle cx="476" cy="236" r="3.5" fill="#8FE6FF" />
        <circle cx="392" cy="466" r="3" fill="#B79CFF" />
        <circle cx="208" cy="146" r="3" fill="#FFFFFF" opacity="0.7" />
      </g>

      <g opacity="0.9">
        <rect x="112" y="188" width="66" height="224" rx="22" fill="url(#kx-left)" fillOpacity="0.13" stroke="url(#kx-left)" strokeWidth="1.2" />
        <rect x="138" y="222" width="3" height="150" rx="1.5" fill="#7FE9FF" opacity="0.7" />
        <circle cx="139.5" cy="212" r="4" fill="#7FE9FF" />
        <rect x="422" y="188" width="66" height="224" rx="22" fill="url(#kx-right)" fillOpacity="0.13" stroke="url(#kx-right)" strokeWidth="1.2" />
        <rect x="459" y="234" width="3" height="140" rx="1.5" fill="#C7A8FF" opacity="0.7" />
        <circle cx="460.5" cy="224" r="4" fill="#C7A8FF" />
      </g>

      <path d="M178 244C238 208 254 286 300 300" fill="none" stroke="rgba(0,200,245,0.5)" strokeWidth="1.2" strokeDasharray="3 5" />
      <path d="M422 244C362 208 346 286 300 300" fill="none" stroke="rgba(133,46,255,0.5)" strokeWidth="1.2" strokeDasharray="3 5" />

      <g>
        <circle cx="300" cy="300" r="92" fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="1 6" />
        <circle cx="300" cy="300" r="72" fill="#081019" stroke="rgba(127,233,255,0.35)" strokeWidth="1" />
        <circle cx="300" cy="300" r="58" fill="none" stroke="url(#kx-core)" strokeWidth="1.4" opacity="0.85" />
        <path d="M300 252L342 276V324L300 348L258 324V276Z" fill="none" stroke="url(#kx-core)" strokeWidth="1.4" opacity="0.7" />
        <circle cx="300" cy="300" r="17" fill="#DFF9FF" />
        <circle cx="300" cy="300" r="30" fill="#34E1FF" opacity="0.2" filter="url(#kx-blur)" />
        <circle cx="300" cy="300" r="4" fill="#FFFFFF" />
        <circle cx="372" cy="300" r="3.5" fill="#8FE6FF" />
        <circle cx="300" cy="232" r="2.5" fill="#FFFFFF" opacity="0.8" />
      </g>

      <g fill="#7FE9FF" opacity="0.45">
        <circle cx="196" cy="446" r="1.6" />
        <circle cx="248" cy="468" r="1.2" />
        <circle cx="352" cy="452" r="1.8" />
        <circle cx="408" cy="422" r="1.3" />
        <circle cx="214" cy="128" r="1.4" />
        <circle cx="382" cy="118" r="1.2" />
      </g>
    </svg>
  );
}

export function HeroVisual() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (reduced || !wide) return;

    let hasWebgl = false;
    try {
      const canvas = document.createElement("canvas");
      hasWebgl = Boolean(
        canvas.getContext("webgl2") || canvas.getContext("webgl"),
      );
    } catch {
      hasWebgl = false;
    }
    if (!hasWebgl) return;

    const timeout = window.setTimeout(() => setEnabled(true), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      <div
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(0,200,245,0.16),rgba(40,107,255,0.08)_45%,transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-[12%] bottom-[4%] h-[46%] w-[46%] rounded-full bg-brand-violet/12 blur-[90px]"
      />

      <div className="absolute inset-0">
        {enabled ? <HeroScene /> : <OrbitalFallback />}
      </div>

      <span className="pointer-events-none absolute left-0 top-3 h-5 w-5 border-l border-t border-white/20" aria-hidden="true" />
      <span className="pointer-events-none absolute right-0 top-3 h-5 w-5 border-r border-t border-white/20" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-3 left-0 h-5 w-5 border-b border-l border-white/20" aria-hidden="true" />
      <span className="pointer-events-none absolute bottom-3 right-0 h-5 w-5 border-b border-r border-white/20" aria-hidden="true" />

      <div className="pointer-events-none absolute left-0 top-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
        <span className="h-1 w-1 rounded-full bg-brand-cyan" />
        Connected ecosystem
      </div>
      <div className="pointer-events-none absolute right-0 top-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/35">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cyan opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-cyan" />
        </span>
        Interactive model
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4">
        <p className="max-w-[180px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-white/30">
          Partnership · Trust
          <br />
          Innovation · Growth
        </p>
        <p className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/25 sm:block">
          {enabled ? "Move cursor to explore" : "KiyoraX / connection model"}
        </p>
      </div>
    </div>
  );
}
