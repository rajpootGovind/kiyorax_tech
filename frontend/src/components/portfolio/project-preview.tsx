import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const palette: Record<Project["preview"], { from: string; to: string }> = {
  crm: { from: "#00c8f5", to: "#286bff" },
  commerce: { from: "#852eff", to: "#286bff" },
  institution: { from: "#286bff", to: "#00c8f5" },
  saas: { from: "#00c8f5", to: "#852eff" },
  website: { from: "#286bff", to: "#852eff" },
  dashboard: { from: "#852eff", to: "#00c8f5" },
};

function Bar({
  w,
  className,
  accent,
}: {
  w: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "block h-[3px] rounded-full",
        accent ? "bg-brand-cyan/70" : "bg-white/16",
        className,
      )}
      style={{ width: w }}
    />
  );
}

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2">
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/12" />
      </span>
      <span className="mx-auto rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-0.5 font-mono text-[6px] uppercase tracking-[0.18em] text-white/30">
        {label}
      </span>
      <span className="h-1 w-3 rounded-full bg-white/10" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden w-9 shrink-0 flex-col items-center gap-3 border-r border-white/[0.06] py-3 sm:flex">
      <span className="h-3 w-3 rounded-[4px] bg-[linear-gradient(135deg,#00c8f5,#852eff)]" />
      <span className="mt-1 h-2.5 w-2.5 rounded-sm bg-white/25" />
      <span className="h-2.5 w-2.5 rounded-sm bg-white/10" />
      <span className="h-2.5 w-2.5 rounded-sm bg-white/10" />
      <span className="h-2.5 w-2.5 rounded-sm bg-white/10" />
      <span className="mt-auto h-2.5 w-2.5 rounded-full bg-white/10" />
    </div>
  );
}

function CrmContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Bar w="54px" accent />
          <Bar w="88px" className="h-1 bg-white/25" />
        </div>
        <span className="rounded-full bg-brand-cyan/15 px-2 py-0.5 font-mono text-[6px] text-brand-cyan/80">
          Pipeline
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["New", "In talks", "Won"].map((stage, index) => (
          <div key={stage} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[5.5px] uppercase tracking-wider text-white/35">
                {stage}
              </span>
              <span className="h-1 w-1 rounded-full bg-brand-cyan/60" />
            </div>
            <div className="mt-1.5 space-y-1.5">
              {[0, 1].map((n) => (
                <div
                  key={n}
                  className="rounded border border-white/[0.06] bg-white/[0.04] p-1.5"
                  style={{ opacity: 1 - index * 0.12 - n * 0.12 }}
                >
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#00c8f5,#852eff)]" />
                    <Bar w="58%" />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between">
                    <Bar w="36%" className="bg-white/10" />
                    <span className="h-1.5 w-4 rounded-full bg-brand-cyan/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-2">
        <div className="flex flex-1 items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3ddc84]" />
          <Bar w="44%" className="bg-white/12" />
        </div>
        <div className="flex flex-1 items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-violet/70" />
          <Bar w="56%" className="bg-white/12" />
        </div>
      </div>
    </div>
  );
}

function CommerceContent() {
  return (
    <div className="flex flex-1 gap-3 p-3">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <Bar w="48px" accent />
          <div className="flex gap-1">
            <span className="h-3 w-8 rounded-full border border-white/10" />
            <span className="h-3 w-3 rounded-full bg-brand-violet/30" />
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((index) => (
            <div key={index} className="overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.02]">
              <div
                className="aspect-square w-full"
                style={{
                  background: `linear-gradient(${135 + index * 20}deg, rgba(133,46,255,${0.3 - index * 0.05}), rgba(40,107,255,0.12))`,
                }}
              />
              <div className="space-y-1 p-1.5">
                <Bar w="80%" />
                <Bar w="42%" className="bg-brand-cyan/40" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {[0, 1].map((index) => (
            <div key={index} className="flex items-center gap-1.5 rounded-md bg-white/[0.02] p-1.5">
              <span className="h-3 w-3 rounded bg-white/10" />
              <Bar w={index === 0 ? "64%" : "48%"} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-[30%] shrink-0 rounded-md border border-white/[0.06] bg-white/[0.03] p-2 sm:block">
        <span className="font-mono text-[6px] uppercase tracking-wider text-white/35">Cart</span>
        <div className="mt-2 space-y-2">
          {[0, 1, 2].map((index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded bg-[linear-gradient(135deg,rgba(133,46,255,0.4),rgba(40,107,255,0.2))]" />
              <span className="flex-1 space-y-1">
                <Bar w="80%" />
                <Bar w="50%" className="bg-white/10" />
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-px bg-white/10" />
        <div className="mt-2.5 space-y-1.5">
          <Bar w="60%" className="bg-white/10" />
          <Bar w="40%" className="bg-white/10" />
        </div>
        <div className="mt-3 h-4 rounded-full bg-[linear-gradient(90deg,#852eff,#286bff)] opacity-70" />
      </div>
    </div>
  );
}

function InstitutionContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm bg-brand-blue/70" />
          <Bar w="38px" />
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((index) => (
            <Bar key={index} w="16px" className="bg-white/12" />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-3">
        <div className="col-span-3 space-y-2">
          <Bar w="30%" accent />
          <Bar w="92%" className="h-2.5 bg-white/30" />
          <Bar w="74%" className="h-2.5 bg-white/20" />
          <Bar w="60%" className="bg-white/10" />
          <div className="flex gap-1.5 pt-1">
            <span className="h-3.5 w-12 rounded-full bg-brand-blue/40" />
            <span className="h-3.5 w-10 rounded-full border border-white/10" />
          </div>
        </div>
        <div className="col-span-2 h-[74px] overflow-hidden rounded-md bg-[linear-gradient(140deg,rgba(40,107,255,0.35),rgba(0,200,245,0.1))]">
          <div className="flex h-full items-end p-1.5">
            <div className="h-1/2 w-full rounded-sm bg-[linear-gradient(180deg,transparent,rgba(0,200,245,0.35))]" />
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Programmes", "Admissions", "Campus"].map((label) => (
          <div key={label} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
            <span className="font-mono text-[5.5px] uppercase tracking-wider text-white/30">
              {label}
            </span>
            <div className="mt-1.5 space-y-1">
              <Bar w="76%" />
              <Bar w="52%" className="bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SaasContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Bar w="60px" accent />
          <Bar w="94px" className="h-1 bg-white/20" />
        </div>
        <div className="flex -space-x-1">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="h-3.5 w-3.5 rounded-full border border-ink bg-[linear-gradient(135deg,#00c8f5,#852eff)]"
              style={{ opacity: 0.5 + index * 0.2 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        <div className="col-span-3 rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
          <div className="flex items-center justify-between">
            <Bar w="40px" className="bg-white/20" />
            <span className="font-mono text-[6px] text-brand-cyan/70">+18%</span>
          </div>
          <svg viewBox="0 0 160 54" className="mt-1.5 h-[52px] w-full" aria-hidden="true">
            <defs>
              <linearGradient id="preview-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00c8f5" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#00c8f5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 44 C14 40 22 30 34 32 C46 34 52 22 66 24 C80 26 86 12 100 16 C114 20 124 8 138 10 C150 12 154 6 160 4 V54 H0 Z"
              fill="url(#preview-area)"
            />
            <path
              d="M0 44 C14 40 22 30 34 32 C46 34 52 22 66 24 C80 26 86 12 100 16 C114 20 124 8 138 10 C150 12 154 6 160 4"
              fill="none"
              stroke="#00c8f5"
              strokeWidth="1.4"
            />
          </svg>
        </div>
        <div className="space-y-1.5">
          {[0, 1, 2].map((index) => (
            <div key={index} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
              <Bar w="70%" className="bg-white/10" />
              <Bar w="48%" className="mt-1 bg-brand-cyan/40" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1.5"
          >
            <span className="h-2 w-2 rounded-sm bg-brand-violet/50" />
            <Bar w={`${52 - index * 8}%`} />
            <span className="ml-auto h-1.5 w-6 rounded-full bg-white/10" />
            <span className="h-1.5 w-4 rounded-full bg-brand-cyan/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <Bar w="34px" className="bg-white/30" />
        <div className="flex gap-1.5">
          {[0, 1, 2].map((index) => (
            <Bar key={index} w="14px" className="bg-white/12" />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-3">
        <div className="col-span-3 space-y-2">
          <Bar w="24%" accent />
          <div className="space-y-1.5">
            <Bar w="94%" className="h-3 bg-white/30" />
            <Bar w="82%" className="h-3 bg-white/20" />
            <Bar w="56%" className="h-3 bg-white/15" />
          </div>
          <Bar w="72%" className="bg-white/10" />
          <span className="mt-1 block h-4 w-16 rounded-full bg-white/80" />
        </div>
        <div className="col-span-2 rounded-md bg-[linear-gradient(150deg,rgba(133,46,255,0.3),rgba(40,107,255,0.15))] p-1.5">
          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-end gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            </div>
            <div className="space-y-1">
              <Bar w="80%" className="bg-white/25" />
              <Bar w="55%" className="bg-white/15" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[0, 1].map((index) => (
          <div key={index} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-sm bg-[linear-gradient(135deg,rgba(40,107,255,0.35),rgba(133,46,255,0.15))]" />
              <div className="flex-1 space-y-1">
                <Bar w="78%" />
                <Bar w="46%" className="bg-white/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Bar w="52px" accent />
          <Bar w="80px" className="h-1 bg-white/20" />
        </div>
        <span className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[5.5px] uppercase tracking-wider text-white/30">
          This month
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="flex items-center justify-center rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
          <div
            className="relative h-12 w-12 rounded-full"
            style={{
              background:
                "conic-gradient(#00c8f5 0deg 205deg, #852eff 205deg 300deg, rgba(255,255,255,0.08) 300deg 360deg)",
            }}
          >
            <span className="absolute inset-[5px] rounded-full bg-[#080b12]" />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-[7px] text-white/60">
              68%
            </span>
          </div>
        </div>
        <div className="col-span-2 flex items-end gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.02] p-2">
          {[38, 56, 44, 72, 60, 86, 54, 76].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-[linear-gradient(180deg,rgba(0,200,245,0.7),rgba(40,107,255,0.15))]"
              style={{ height: `${height}%`, opacity: 0.5 + index * 0.06 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1.5"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#852eff,#00c8f5)]" />
            <Bar w={`${48 - index * 6}%`} />
            <span className="ml-auto h-1.5 w-8 rounded-full bg-white/10" />
            <span className="h-1.5 w-5 rounded-full bg-brand-cyan/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

const content = {
  crm: CrmContent,
  commerce: CommerceContent,
  institution: InstitutionContent,
  saas: SaasContent,
  website: WebsiteContent,
  dashboard: DashboardContent,
};

export function ProjectPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const colors = palette[project.preview];
  const Content = content[project.preview];

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={
        {
          backgroundImage: `radial-gradient(120% 100% at 12% 0%, ${colors.from}2e, transparent 55%), radial-gradient(100% 90% at 92% 100%, ${colors.to}24, transparent 58%)`,
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute left-[7%] right-[7%] top-[13%] bottom-[-8%] overflow-hidden rounded-t-xl border border-white/[0.1] bg-[#070a10]/90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.015]"
      >
        <div className="flex h-full flex-col">
          <WindowChrome label={`${project.title.toLowerCase().replace(/\s+/g, "")}.kiyorax.app`} />
          <div className="flex min-h-0 flex-1">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-soft to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
