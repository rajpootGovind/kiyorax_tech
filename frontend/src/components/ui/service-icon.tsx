import {
  Blocks,
  Code2,
  Cpu,
  Globe,
  Handshake,
  LayoutDashboard,
  Layers,
  Megaphone,
  MessageSquare,
  Puzzle,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  "shopping-bag": ShoppingBag,
  users: Users,
  "layout-dashboard": LayoutDashboard,
  sparkles: Sparkles,
  smartphone: Smartphone,
  megaphone: Megaphone,
  blocks: Blocks,
  code: Code2,
  workflow: Workflow,
  layers: Layers,
  target: Target,
  puzzle: Puzzle,
  cpu: Cpu,
  "shield-check": ShieldCheck,
  messages: MessageSquare,
  handshake: Handshake,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
