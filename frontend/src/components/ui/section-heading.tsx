import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        <p className={cn("eyebrow", dark ? "text-sky-bright" : "text-sky", align === "center" && "eyebrow-center justify-center")}>
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-5 text-[clamp(1.95rem,3.6vw,3rem)] font-bold leading-[1.08]",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-xl text-[15px] leading-relaxed sm:text-base",
              dark ? "text-white/60" : "text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
