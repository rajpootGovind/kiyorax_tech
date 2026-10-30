import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  compact?: boolean;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("h-10 w-10", className)}
    >
      <defs>
        <linearGradient id="kx-mark" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C8F5" />
          <stop offset="0.52" stopColor="#286BFF" />
          <stop offset="1" stopColor="#852EFF" />
        </linearGradient>
      </defs>
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="14" fill="url(#kx-mark)" fillOpacity="0.08" />
      <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="14" stroke="url(#kx-mark)" strokeOpacity="0.45" strokeWidth="1.5" />
      <path d="M15 13V35" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 24L31 13" stroke="url(#kx-mark)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 24L32 35" stroke="url(#kx-mark)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="34.5" cy="13.5" r="2" fill="#00C8F5" />
    </svg>
  );
}

export function Logo({ className, tone = "dark", compact = false }: LogoProps) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={compact ? "h-9 w-9" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[19px] font-semibold tracking-[-0.045em]",
            light ? "text-ink" : "text-white",
          )}
        >
          Kiyora<span className="text-gradient-brand">X</span>
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-[8px] font-medium uppercase tracking-[0.42em]",
            light ? "text-ink/45" : "text-white/40",
          )}
        >
          Technologies
        </span>
      </span>
    </span>
  );
}
