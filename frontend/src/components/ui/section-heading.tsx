import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        <p
          className={cn(
            "eyebrow",
            light ? "text-ink/45" : "text-white/45",
            align === "center" && "justify-center before:hidden",
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] font-semibold",
            light ? "text-ink" : "text-white",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base",
              light ? "text-ink/60" : "text-muted",
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
