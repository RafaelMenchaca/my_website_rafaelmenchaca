import type { Metadata } from "next"
import type { Project, ProjectSlug } from "@/data/projects"
import ProjectCard from "@/components/projects/ProjectCard"
import { getProjectContent, projects } from "@/data/projects"
import { getCopy } from "@/lib/i18n"
import { getCurrentLocale } from "@/lib/get-current-locale"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Rafael Menchaca focused on software systems and AI integration.",
}

export default async function ProjectsPage() {
  const locale = await getCurrentLocale()
  const siteCopy = getCopy(locale)
  const projectEntries = Object.entries(projects) as Array<[ProjectSlug, Project]>

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="page-reveal text-3xl font-bold">{siteCopy.projects.title}</h1>

      <p className="page-reveal page-reveal-delay-1 mt-4 text-lg text-gray-600">
        {siteCopy.projects.intro}
      </p>

      <section className="page-reveal page-reveal-delay-2 mt-12 space-y-8">
        {projectEntries.map(([slug, project]) => {
          const projectContent = getProjectContent(project, locale)

          return (
            <ProjectCard
              key={slug}
              slug={slug}
              title={projectContent.title}
              tagline={projectContent.tagline}
              summary={projectContent.cardSummary}
              tech={project.tech}
              image={project.image}
              links={project.links}
              labels={siteCopy.projects.card}
            />
          )
        })}
      </section>
    </main>
  )
}
