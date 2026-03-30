import type { Metadata } from "next"
import TechList from "@/components/tech/TechList"

export const metadata: Metadata = {
  title: "About",
  description: "About Rafael Menchaca and the technologies he works with.",
}

export default function AboutPage() {
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
      <h1 className="page-reveal text-3xl font-bold">About Me</h1>

      <p className="page-reveal page-reveal-delay-1 mt-6 text-lg text-gray-600">
        I&apos;m a software developer interested in building reliable systems and
        implementing AI in practical, real-world applications.
      </p>

      <p className="page-reveal page-reveal-delay-2 mt-4 text-gray-600">
        While I work across the stack, my main focus is on software
        architecture, data modeling, API design, and AI-powered workflows.
        Frontend is a tool for delivering well-structured systems, not the end
        goal.
      </p>

      <p className="page-reveal page-reveal-delay-3 mt-4 text-gray-600">
        I&apos;m currently developing <strong>Educativo IA</strong>, an AI-powered
        educational platform. This project has allowed me to work on software
        architecture, authentication, database design, and AI integration using
        modern tools.
      </p>

      <h2 className="page-reveal mt-12 text-2xl font-semibold">What I work with</h2>

      <TechList
        items={technologies}
        layout="grid"
        className="page-reveal page-reveal-delay-1 mt-4"
      />

      <h2 className="page-reveal mt-12 text-2xl font-semibold">
        How I think as a developer
      </h2>

      <p className="page-reveal page-reveal-delay-1 mt-4 text-gray-600">
        I care about writing code that is readable, maintainable, and easy to
        reason about. I prefer simple solutions that solve real problems instead
        of overengineering.
      </p>

      <p className="page-reveal page-reveal-delay-2 mt-4 text-gray-600">
        I&apos;m continuously learning and improving by building projects,
        refactoring my own work, and understanding how real-world applications
        are structured.
      </p>
    </main>
  )
}
