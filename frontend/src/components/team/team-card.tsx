import Image from "next/image";
import type { TeamMember } from "@/data/team";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export function TeamCard({
  member,
  featured = false,
  showBio = false,
  priority = false,
  className,
}: {
  member: TeamMember;
  featured?: boolean;
  showBio?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const portrait = images.team[member.portrait];

  return (
    <article className={cn("group relative flex h-full flex-col", className)}>
      <div className="relative overflow-hidden rounded-xl border border-line bg-mist">
        <div className={cn("relative w-full", featured ? "aspect-[4/4.5]" : "aspect-[4/4.6]")}>
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
            className="object-cover object-top grayscale-[0.35] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,rgba(10,30,46,0.30)_100%)]"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/85 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-ink/65 backdrop-blur-sm">
          Demo portrait
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/75 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.1em] text-white/85 backdrop-blur-sm">
          {member.leadership ? "Leadership" : "Team"}
        </span>
      </div>

      <div className="pt-4">
        <h3 className={cn("font-semibold tracking-tight text-ink", featured ? "text-[18px]" : "text-[16px]")}>
          {member.name}
        </h3>
        <p className="mt-1 text-[11.5px] font-medium text-sky">{member.role}</p>
        <p className="mt-2 text-[12px] leading-relaxed text-muted">
          {showBio ? member.bio : member.focus}
        </p>
      </div>
    </article>
  );
}
