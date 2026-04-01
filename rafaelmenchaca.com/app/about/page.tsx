import type { Metadata } from "next"
import TechList from "@/components/tech/TechList"
import { getCopy } from "@/lib/i18n"
import { getCurrentLocale } from "@/lib/get-current-locale"

export const metadata: Metadata = {
  title: "About",
  description: "About Rafael Menchaca and the technologies he works with.",
}

export default async function AboutPage() {
  const locale = await getCurrentLocale()
  const siteCopy = getCopy(locale)
  const technologies = [
    "Python",
    "JavaScript",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Express",
    "Git & GitHub",
    "Linux & tooling",
    "Django",
    "Flask",
    "REST APIs",
    "Supabase (PostgreSQL)",
    "OpenAI API",
    "Bootstrap",
    "Tailwind CSS",
  ]

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="page-reveal text-3xl font-bold">{siteCopy.about.title}</h1>

      <p className="page-reveal page-reveal-delay-1 mt-6 text-lg text-gray-600">
        {siteCopy.about.intro}
      </p>

      <p className="page-reveal page-reveal-delay-2 mt-4 text-gray-600">
        {siteCopy.about.focus}
      </p>

      <p
        className="page-reveal page-reveal-delay-3 mt-4 text-gray-600"
        dangerouslySetInnerHTML={{ __html: siteCopy.about.educativo }}
      />

      <h2 className="page-reveal mt-12 text-2xl font-semibold">{siteCopy.about.workWith}</h2>

      <TechList
        items={technologies}
        layout="grid"
        className="page-reveal page-reveal-delay-1 mt-4"
      />

      <h2 className="page-reveal mt-12 text-2xl font-semibold">
        {siteCopy.about.thinkingTitle}
      </h2>

      <p className="page-reveal page-reveal-delay-1 mt-4 text-gray-600">
        {siteCopy.about.thinkingBodyOne}
      </p>

      <p className="page-reveal page-reveal-delay-2 mt-4 text-gray-600">
        {siteCopy.about.thinkingBodyTwo}
      </p>
    </main>
  )
}
