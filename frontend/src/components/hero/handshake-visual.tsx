"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Handshake, MousePointer2, Sparkles } from "lucide-react";
import { images } from "@/data/images";

const HandshakeScene = dynamic(() => import("./handshake-scene"), {
  ssr: false,
  loading: () => null,
});

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2") ??
      canvas.getContext("webgl") ??
      canvas.getContext("experimental-webgl");
    return Boolean(context);
  } catch {
    return false;
  }
}

function scheduleIdle(callback: () => void) {
  type IdleWindow = Window & {
    requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
  };
  const idleWindow = window as IdleWindow;

  if (typeof idleWindow.requestIdleCallback === "function") {
    idleWindow.requestIdleCallback(callback, { timeout: 1600 });
    return;
  }

  window.setTimeout(callback, 220);
}

/**
 * Signature hero visual: a live WebGL handshake between a human hand and a
 * robotic hand. The scene is code-split, mounted only once it is on screen on
 * a WebGL-capable device, and falls back to the demo photograph elsewhere.
 */
export function HandshakeVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const [supported, setSupported] = useState<boolean | null>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    setSupported(hasWebGL());

    const query = window.matchMedia("(max-width: 640px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !supported) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "160px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [supported]);

  useEffect(() => {
    if (!visible || !supported) return;
    let cancelled = false;

    scheduleIdle(() => {
      if (!cancelled) setMounted(true);
    });

    return () => {
      cancelled = true;
    };
  }, [visible, supported]);

  const showCanvas = supported === true && mounted;
  const showPhoto = supported === false;
  const asset = images.hero.handshake;

  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-2 bottom-6 top-4 rounded-[50%_50%_44%_56%/54%_48%_52%_46%] bg-[radial-gradient(120%_100%_at_50%_45%,#eef6fd_0%,#e7f1fa_45%,rgba(255,255,255,0)_78%)]" />
        <div className="absolute right-3 top-2 h-24 w-24 rounded-full border border-sky/20 sm:-right-2" />
        <div className="absolute bottom-8 left-1 h-16 w-16 bg-dots opacity-60" />
      </div>

      <div
        ref={containerRef}
        role="img"
        aria-label="A live 3D visual of a human hand and a robotic hand meeting in a handshake, symbolising a trusted partnership between people and technology."
        className="relative aspect-[5/4.5] w-full sm:aspect-[5/4.2]"
      >
        {!ready && !showPhoto ? (
          <div
            aria-hidden="true"
            className="absolute inset-x-10 bottom-16 top-12 animate-pulse rounded-[42%] bg-[radial-gradient(60%_55%_at_52%_46%,rgba(146,183,214,0.28),rgba(255,255,255,0)_72%)]"
          />
        ) : null}

        {showPhoto ? (
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#eaf1f7]">
            <Image
              src={asset.src}
              alt={asset.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 560px"
              placeholder="blur"
              blurDataURL={asset.blurDataURL}
              className="object-cover object-center"
            />
          </div>
        ) : null}

        {showCanvas ? (
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: ready ? 1 : 0 }}
          >
            <HandshakeScene
              reduced={reduced}
              compact={compact}
              onReady={() => setReady(true)}
            />
          </div>
        ) : null}

        <span className="absolute left-1 top-3 inline-flex items-center gap-2 rounded-full border border-line bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/70 shadow-[0_10px_30px_-24px_rgba(19,41,61,0.6)] backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
          Human trust
        </span>
        <span className="absolute right-1 top-3 inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ink px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 shadow-[0_10px_30px_-22px_rgba(19,41,61,0.9)]">
          <Sparkles className="h-3 w-3 text-sky-bright" aria-hidden="true" />
          Technology
        </span>
      </div>

      <div className="relative mt-1 flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sky-bright">
            <Handshake className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span>
            <span className="block font-display text-[15px] font-semibold leading-tight text-ink">
              Partnership, by design.
            </span>
            <span className="mt-0.5 block text-[11px] text-muted">
              One team, on your side.
            </span>
          </span>
        </div>
        <p className="max-w-[168px] text-[9px] font-medium uppercase leading-relaxed tracking-[0.14em] text-ink/45 sm:text-right">
          Human judgement
          <br />
          Engineered precision
        </p>
      </div>

      {showCanvas && !reduced ? (
        <span className="pointer-events-none absolute bottom-[27%] right-0 hidden items-center gap-1.5 rounded-full border border-line/80 bg-white/70 px-2.5 py-1 text-[9.5px] font-medium uppercase tracking-[0.12em] text-ink/45 backdrop-blur-sm lg:inline-flex">
          <MousePointer2 className="h-3 w-3" aria-hidden="true" />
          Live 3D
        </span>
      ) : null}
    </div>
  );
}
