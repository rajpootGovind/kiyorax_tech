import Image from "next/image";
import type { CSSProperties } from "react";
import { images } from "@/data/images";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const palette: Record<Project["preview"], { from: string; to: string }> = {
  crm: { from: "#2b9cf0", to: "#0f74c9" },
  commerce: { from: "#1d3a52", to: "#2b9cf0" },
  institution: { from: "#0f74c9", to: "#5fc2ff" },
  saas: { from: "#2b9cf0", to: "#13293d" },
  website: { from: "#13293d", to: "#5fc2ff" },
  dashboard: { from: "#5fc2ff", to: "#0f74c9" },
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
        accent ? "bg-sky/70" : "bg-ink/12",
        className,
      )}
      style={{ width: w }}
    />
  );
}

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-paper/70 px-3 py-2">
      <span className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/12" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/12" />
      </span>
      <span className="mx-auto rounded-full border border-line bg-white px-3 py-0.5 text-[6px] uppercase tracking-[0.16em] text-ink/65">
        {label}
      </span>
      <span className="h-1 w-3 rounded-full bg-ink/10" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="hidden w-9 shrink-0 flex-col items-center gap-3 border-r border-line py-3 sm:flex">
      <span className="h-3 w-3 rounded-[4px] bg-ink" />
      <span className="mt-1 h-2.5 w-2.5 rounded-sm bg-sky/60" />
      <span className="h-2.5 w-2.5 rounded-sm bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-sm bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-sm bg-ink/15" />
      <span className="mt-auto h-2.5 w-2.5 rounded-full bg-ink/15" />
    </div>
  );
}

function CrmContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Bar w="54px" accent />
          <Bar w="88px" className="h-1 bg-ink/20" />
        </div>
        <span className="rounded-full bg-sky-soft px-2 py-0.5 text-[6px] font-medium text-sky">
          Pipeline
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["New", "In talks", "Won"].map((stage, index) => (
          <div key={stage} className="rounded-md border border-line bg-paper/60 p-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[5.5px] font-medium uppercase tracking-wider text-ink/65">
                {stage}
              </span>
              <span className="h-1 w-1 rounded-full bg-sky/60" />
            </div>
            <div className="mt-1.5 space-y-1.5">
              {[0, 1].map((n) => (
                <div
                  key={n}
                  className="rounded border border-line bg-white p-1.5"
                  style={{ opacity: 1 - index * 0.08 - n * 0.06 }}
                >
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-sky/50" />
                    <Bar w="58%" />
                  </div>
                  <div className="mt-1.5 flex items-center justify-between">
                    <Bar w="36%" className="bg-ink/8" />
                    <span className="h-1.5 w-4 rounded-full bg-sky/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2.5 flex gap-2">
        {[0, 1].map((index) => (
          <div
            key={index}
            className="flex flex-1 items-center gap-1.5 rounded-md border border-line bg-white px-2 py-1.5"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-emerald-500" : "bg-sky"}`} />
            <Bar w={index === 0 ? "44%" : "56%"} className="bg-ink/10" />
          </div>
        ))}
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
            <span className="h-3 w-8 rounded-full border border-line" />
            <span className="h-3 w-3 rounded-full bg-sky/20" />
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((index) => (
            <div key={index} className="overflow-hidden rounded-md border border-line bg-white">
              <div
                className="aspect-square w-full"
                style={{
                  background: `linear-gradient(${135 + index * 20}deg, rgba(43,156,240,${0.22 - index * 0.04}), rgba(19,41,61,0.08))`,
                }}
              />
              <div className="space-y-1 p-1.5">
                <Bar w="80%" />
                <Bar w="42%" className="bg-sky/40" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {[0, 1].map((index) => (
            <div key={index} className="flex items-center gap-1.5 rounded-md bg-paper p-1.5">
              <span className="h-3 w-3 rounded bg-ink/10" />
              <Bar w={index === 0 ? "64%" : "48%"} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden w-[30%] shrink-0 rounded-md border border-line bg-paper/70 p-2 sm:block">
        <span className="text-[6px] font-medium uppercase tracking-wider text-ink/65">
          Cart
        </span>
        <div className="mt-2 space-y-2">
          {[0, 1, 2].map((index) => (
            <div key={index} className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded bg-[linear-gradient(135deg,rgba(43,156,240,0.35),rgba(19,41,61,0.08))]" />
              <span className="flex-1 space-y-1">
                <Bar w="80%" />
                <Bar w="50%" className="bg-ink/8" />
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-px bg-line" />
        <div className="mt-2.5 space-y-1.5">
          <Bar w="60%" className="bg-ink/8" />
          <Bar w="40%" className="bg-ink/8" />
        </div>
        <div className="mt-3 h-4 rounded-full bg-ink opacity-90" />
      </div>
    </div>
  );
}

function InstitutionContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between border-b border-line pb-2">
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-sm bg-ink" />
          <Bar w="38px" />
        </div>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((index) => (
            <Bar key={index} w="16px" className="bg-ink/10" />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-3">
        <div className="col-span-3 space-y-2">
          <Bar w="30%" accent />
          <Bar w="92%" className="h-2.5 bg-ink/30" />
          <Bar w="74%" className="h-2.5 bg-ink/20" />
          <Bar w="60%" className="bg-ink/8" />
          <div className="flex gap-1.5 pt-1">
            <span className="h-3.5 w-12 rounded-full bg-ink" />
            <span className="h-3.5 w-10 rounded-full border border-line" />
          </div>
        </div>
        <div className="col-span-2 h-[74px] overflow-hidden rounded-md bg-[linear-gradient(140deg,rgba(43,156,240,0.32),rgba(19,41,61,0.08))]">
          <div className="flex h-full items-end p-1.5">
            <div className="h-1/2 w-full rounded-sm bg-[linear-gradient(180deg,transparent,rgba(19,41,61,0.18))]" />
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {["Programmes", "Admissions", "Campus"].map((label) => (
          <div key={label} className="rounded-md border border-line bg-paper/60 p-1.5">
            <span className="text-[5.5px] uppercase tracking-wider text-ink/65">
              {label}
            </span>
            <div className="mt-1.5 space-y-1">
              <Bar w="76%" />
              <Bar w="52%" className="bg-ink/8" />
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
          <Bar w="94px" className="h-1 bg-ink/15" />
        </div>
        <div className="flex -space-x-1">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="h-3.5 w-3.5 rounded-full border border-white bg-[linear-gradient(135deg,#2b9cf0,#13293d)]"
              style={{ opacity: 0.4 + index * 0.2 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        <div className="col-span-3 rounded-md border border-line bg-paper/60 p-2">
          <div className="flex items-center justify-between">
            <Bar w="40px" className="bg-ink/15" />
            <span className="text-[6px] font-medium text-emerald-600">+18%</span>
          </div>
          <svg viewBox="0 0 160 54" className="mt-1.5 h-[52px] w-full" aria-hidden="true">
            <defs>
              <linearGradient id="preview-area-light" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2b9cf0" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#2b9cf0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 44 C14 40 22 30 34 32 C46 34 52 22 66 24 C80 26 86 12 100 16 C114 20 124 8 138 10 C150 12 154 6 160 4 V54 H0 Z"
              fill="url(#preview-area-light)"
            />
            <path
              d="M0 44 C14 40 22 30 34 32 C46 34 52 22 66 24 C80 26 86 12 100 16 C114 20 124 8 138 10 C150 12 154 6 160 4"
              fill="none"
              stroke="#2b9cf0"
              strokeWidth="1.4"
            />
          </svg>
        </div>
        <div className="space-y-1.5">
          {[0, 1, 2].map((index) => (
            <div key={index} className="rounded-md border border-line bg-white p-1.5">
              <Bar w="70%" className="bg-ink/8" />
              <Bar w="48%" className="mt-1 bg-sky/40" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md border border-line bg-white px-2 py-1.5"
          >
            <span className="h-2 w-2 rounded-sm bg-sky/40" />
            <Bar w={`${52 - index * 8}%`} />
            <span className="ml-auto h-1.5 w-6 rounded-full bg-ink/8" />
            <span className="h-1.5 w-4 rounded-full bg-sky/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteContent() {
  return (
    <div className="flex-1 p-3">
      <div className="flex items-center justify-between border-b border-line pb-2">
        <Bar w="34px" className="bg-ink/30" />
        <div className="flex gap-1.5">
          {[0, 1, 2].map((index) => (
            <Bar key={index} w="14px" className="bg-ink/10" />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-3">
        <div className="col-span-3 space-y-2">
          <Bar w="24%" accent />
          <div className="space-y-1.5">
            <Bar w="94%" className="h-3 bg-ink/30" />
            <Bar w="82%" className="h-3 bg-ink/20" />
            <Bar w="56%" className="h-3 bg-ink/15" />
          </div>
          <Bar w="72%" className="bg-ink/8" />
          <span className="mt-1 block h-4 w-16 rounded-full bg-ink" />
        </div>
        <div className="col-span-2 rounded-md bg-[linear-gradient(150deg,rgba(43,156,240,0.28),rgba(19,41,61,0.08))] p-1.5">
          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-end gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            </div>
            <div className="space-y-1">
              <Bar w="80%" className="bg-ink/25" />
              <Bar w="55%" className="bg-ink/12" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[0, 1].map((index) => (
          <div key={index} className="rounded-md border border-line bg-white p-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-sm bg-[linear-gradient(135deg,rgba(43,156,240,0.3),rgba(19,41,61,0.08))]" />
              <div className="flex-1 space-y-1">
                <Bar w="78%" />
                <Bar w="46%" className="bg-ink/8" />
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
          <Bar w="80px" className="h-1 bg-ink/15" />
        </div>
        <span className="rounded border border-line px-1.5 py-0.5 text-[5.5px] uppercase tracking-wider text-ink/65">
          This month
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="flex items-center justify-center rounded-md border border-line bg-paper/60 p-2">
          <div
            className="relative h-12 w-12 rounded-full"
            style={{
              background:
                "conic-gradient(#2b9cf0 0deg 205deg, #13293d 205deg 300deg, rgba(19,41,61,0.08) 300deg 360deg)",
            }}
          >
            <span className="absolute inset-[5px] rounded-full bg-white" />
            <span className="absolute inset-0 flex items-center justify-center text-[7px] font-medium text-ink/65">
              68%
            </span>
          </div>
        </div>
        <div className="col-span-2 flex items-end gap-1.5 rounded-md border border-line bg-paper/60 p-2">
          {[38, 56, 44, 72, 60, 86, 54, 76].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-sm bg-[linear-gradient(180deg,rgba(43,156,240,0.65),rgba(19,41,61,0.08))]"
              style={{ height: `${height}%`, opacity: 0.55 + index * 0.05 }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 space-y-1.5">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-md border border-line bg-white px-2 py-1.5"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#2b9cf0,#13293d)]" />
            <Bar w={`${48 - index * 6}%`} />
            <span className="ml-auto h-1.5 w-8 rounded-full bg-ink/8" />
            <span className="h-1.5 w-5 rounded-full bg-sky/20" />
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
  const screenshot = images.portfolio[project.slug];
  const Content = content[project.preview];

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden bg-[#eef4fa]", className)}
      style={
        {
          backgroundImage: `radial-gradient(120% 100% at 12% 0%, ${colors.from}24, transparent 55%), radial-gradient(100% 90% at 92% 100%, ${colors.to}18, transparent 58%)`,
        } as CSSProperties
      }
    >
      {screenshot ? (
        <Image
          src={screenshot}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-dots opacity-35" aria-hidden="true" />
          <div className="absolute inset-x-[7%] bottom-[-8%] top-[13%] overflow-hidden rounded-t-xl border border-ink/10 bg-white shadow-[0_30px_70px_-36px_rgba(19,41,61,0.35)] transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.012]">
            <div className="flex h-full flex-col">
              <WindowChrome
                label={`${project.title.toLowerCase().replace(/\s+/g, "")}.kiyorax.app`}
              />
              <div className="flex min-h-0 flex-1">
                <Sidebar />
                <Content />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#eef4fa] to-transparent"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}
