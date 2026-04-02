import type { IconType } from "react-icons"
import { FaCode, FaServer } from "react-icons/fa6"
import {
  SiBootstrap,
  SiDjango,
  SiExpress,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

type TechListProps = {
  items: string[]
  layout?: "grid" | "wrap"
  tone?: "plain" | "chip"
  className?: string
}

type TechMeta = {
  color: string
  icon: IconType
}

const techMeta: Record<string, TechMeta> = {
  Bootstrap: {
    color: "#7952b3",
    icon: SiBootstrap,
  },
  Django: {
    color: "#092e20",
    icon: SiDjango,
  },
  Express: {
    color: "#111827",
    icon: SiExpress,
  },
  Flask: {
    color: "#111827",
    icon: SiFlask,
  },
  HTML: {
    color: "#e34f26",
    icon: SiHtml5,
  },
  "Git & GitHub": {
    color: "#181717",
    icon: SiGithub,
  },
  JavaScript: {
    color: "#f7df1e",
    icon: SiJavascript,
  },
  "Linux & tooling": {
    color: "#111827",
    icon: SiLinux,
  },
  "Next.js (App Router)": {
    color: "#111827",
    icon: SiNextdotjs,
  },
  "Next.js": {
    color: "#111827",
    icon: SiNextdotjs,
  },
  "Node.js": {
    color: "#539e43",
    icon: SiNodedotjs,
  },
  "OpenAI API": {
    color: "#10a37f",
    icon: SiOpenai,
  },
  Prisma: {
    color: "#0c344b",
    icon: SiPrisma,
  },
  Python: {
    color: "#3776ab",
    icon: SiPython,
  },
  React: {
    color: "#61dafb",
    icon: SiReact,
  },
  "REST APIs": {
    color: "#2563eb",
    icon: FaServer,
  },
  Supabase: {
    color: "#3ecf8e",
    icon: SiSupabase,
  },
  "Supabase (PostgreSQL)": {
    color: "#3ecf8e",
    icon: SiSupabase,
  },
  "PostgreSQL (Supabase)": {
    color: "#336791",
    icon: SiPostgresql,
  },
  "Tailwind CSS": {
    color: "#06b6d4",
    icon: SiTailwindcss,
  },
  TypeScript: {
    color: "#3178c6",
    icon: SiTypescript,
  },
  NestJS: {
    color: "#e0234e",
    icon: SiNestjs,
  },
}

function getTechMeta(tech: string): TechMeta {
  return (
    techMeta[tech] ?? {
      color: "#111827",
      icon: FaCode,
    }
  )
}

export default function TechList({
  items,
  layout = "wrap",
  tone = "plain",
  className = "",
}: TechListProps) {
  const listClassName =
    layout === "grid"
      ? "grid grid-cols-1 gap-2 sm:grid-cols-2"
      : "flex flex-wrap gap-2"

  const badgeClassName =
    tone === "chip"
      ? "tech-chip inline-flex cursor-default items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 select-none"
      : "inline-flex cursor-default items-center gap-2 text-gray-600"

  const iconSize = tone === "chip" ? 14 : 16

  return (
    <ul className={`${listClassName} ${className}`.trim()}>
      {items.map((tech) => {
        const { color, icon: Icon } = getTechMeta(tech)

        return (
          <li key={tech} className="list-none">
            <span className={badgeClassName}>
              <Icon aria-hidden className="shrink-0" size={iconSize} style={{ color }} />
              <span>{tech}</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
