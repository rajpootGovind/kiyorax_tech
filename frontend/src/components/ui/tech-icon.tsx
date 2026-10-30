import {
  siExpress,
  siFastapi,
  siJavascript,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siWordpress,
} from "simple-icons";
import { Plug, Sparkles, Workflow } from "lucide-react";

const icons: Record<string, { path: string; title: string }> = {
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  javascript: siJavascript,
  tailwindcss: siTailwindcss,
  nodedotjs: siNodedotjs,
  express: siExpress,
  python: siPython,
  fastapi: siFastapi,
  php: siPhp,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  mysql: siMysql,
  wordpress: siWordpress,
};

export function TechIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  if (icon === "sparkles") {
    return <Sparkles className={className} strokeWidth={1.25} aria-hidden="true" />;
  }
  if (icon === "workflow") {
    return <Workflow className={className} strokeWidth={1.25} aria-hidden="true" />;
  }
  if (icon === "plug") {
    return <Plug className={className} strokeWidth={1.25} aria-hidden="true" />;
  }

  const brand = icons[icon];
  if (!brand) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-label={`${brand.title} logo`}
    >
      <path d={brand.path} />
    </svg>
  );
}
