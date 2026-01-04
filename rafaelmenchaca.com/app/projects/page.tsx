import Link from "next/link"
import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/data/projects"


export default function ProjectsPage() {
  const projectList = Object.entries(projects)

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        A selection of projects focused on backend systems,
        AI integration, and real-world use cases.
      </p>

      <section className="mt-12 space-y-6">
        {Object.entries(projects).map(([slug, project]) => (
          <ProjectCard
            key={slug}
            slug={slug}
            title={project.title}
            description={project.tagline}
            tech={project.tech}
            image={project.image} // opcional
          />
        ))}
      </section>

    </main>
  )
}
