import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  onDark?: boolean;
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
        <linearGradient id="kx-mark" x1="14" y1="12" x2="36" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5FC2FF" />
          <stop offset="0.55" stopColor="#2B9CF0" />
          <stop offset="1" stopColor="#8FD8FF" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="47" height="47" rx="13.5" fill="#0A1E2E" />
      <rect
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="13.5"
        stroke="rgba(43,156,240,0.35)"
      />
      <path d="M15 13V35" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 24L31 13" stroke="url(#kx-mark)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 24L32 35" stroke="url(#kx-mark)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="34.5" cy="13.5" r="2" fill="#5FC2FF" />
    </svg>
  );
}

export function Logo({ className, onDark = false, compact = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={compact ? "h-9 w-9" : "h-10 w-10"} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[19px] font-bold tracking-[-0.045em]",
            onDark ? "text-white" : "text-ink",
          )}
        >
          Kiyora<span className="text-sky-bright">X</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[7.5px] font-semibold uppercase tracking-[0.30em]",
            onDark ? "text-white/60" : "text-ink/65",
          )}
        >
          Technologies
        </span>
      </span>
    </span>
  );
}
