import type { Metadata } from "next"
import type { Project, ProjectSlug } from "@/data/projects"
import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Rafael Menchaca focused on software systems and AI integration.",
}

export default function ProjectsPage() {
  const projectEntries = Object.entries(projects) as Array<[ProjectSlug, Project]>

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="page-reveal text-3xl font-bold">Projects</h1>

      <p className="page-reveal page-reveal-delay-1 mt-4 text-lg text-gray-600">
        A selection of projects focused on software systems, AI integration, and
        real-world use cases.
      </p>

      <section className="page-reveal page-reveal-delay-2 mt-12 space-y-6">
        {projectEntries.map(([slug, project]) => (
          <ProjectCard
            key={slug}
            slug={slug}
            title={project.title}
            description={project.tagline}
            tech={project.tech}
            image={project.image}
            links={project.links}
          />
        ))}
      </section>
    </main>
  )
}
