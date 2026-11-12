export type Technology = {
  name: string;
  icon: string;
  hex: string;
  note: string;
};

export type TechnologyGroup = {
  label: string;
  index: string;
  items: Technology[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    label: "Frontend",
    index: "01",
    items: [
      { name: "React", icon: "react", hex: "#61DAFB", note: "Component architecture" },
      { name: "Next.js", icon: "nextdotjs", hex: "#13293D", note: "Full-stack framework" },
      { name: "TypeScript", icon: "typescript", hex: "#3178C6", note: "Type-safe code" },
      { name: "JavaScript", icon: "javascript", hex: "#B58F00", note: "Web fundamentals" },
      { name: "Tailwind CSS", icon: "tailwindcss", hex: "#06B6D4", note: "Design systems" },
    ],
  },
  {
    label: "Backend",
    index: "02",
    items: [
      { name: "Node.js", icon: "nodedotjs", hex: "#5FA04E", note: "Server runtime" },
      { name: "Express", icon: "express", hex: "#13293D", note: "API layer" },
      { name: "Python", icon: "python", hex: "#3776AB", note: "Automation & AI" },
      { name: "FastAPI", icon: "fastapi", hex: "#009688", note: "Python APIs" },
      { name: "PHP", icon: "php", hex: "#777BB4", note: "Legacy & CMS" },
    ],
  },
  {
    label: "Data",
    index: "03",
    items: [
      { name: "MongoDB", icon: "mongodb", hex: "#47A248", note: "Document data" },
      { name: "PostgreSQL", icon: "postgresql", hex: "#4169E1", note: "Relational data" },
      { name: "MySQL", icon: "mysql", hex: "#4479A1", note: "Relational data" },
    ],
  },
  {
    label: "Platforms & AI",
    index: "04",
    items: [
      { name: "WordPress", icon: "wordpress", hex: "#21759B", note: "CMS platform" },
      { name: "AI APIs", icon: "sparkles", hex: "#00C8F5", note: "Intelligent features" },
      { name: "Automation", icon: "workflow", hex: "#852EFF", note: "Workflow engines" },
      { name: "Integrations", icon: "plug", hex: "#286BFF", note: "Third-party services" },
    ],
  },
];
