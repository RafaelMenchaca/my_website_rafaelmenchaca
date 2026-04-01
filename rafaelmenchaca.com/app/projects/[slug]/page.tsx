import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import TechList from "@/components/tech/TechList"
import type { Project, ProjectSlug } from "@/data/projects"
import { getProjectContent, projects } from "@/data/projects"
import { getCopy } from "@/lib/i18n"
import { getCurrentLocale } from "@/lib/get-current-locale"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug as ProjectSlug] as Project | undefined

  if (!project) {
    return {
      title: "Project not found",
    }
  }

  return {
    title: project.title,
    description: project.tagline,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const locale = await getCurrentLocale()
  const siteCopy = getCopy(locale)
  const { slug } = await params
  const project = projects[slug as ProjectSlug] as Project | undefined

  if (!project) {
    notFound()
  }

  const projectContent = getProjectContent(project, locale)
  const hasLinks = Boolean(project.links?.demo || project.links?.github)

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto space-y-16">
      <section className="page-reveal">
        <h1 className="text-4xl font-bold">{projectContent.title}</h1>

        <p className="mt-2 text-xl text-gray-600">{projectContent.tagline}</p>

        <p className="mt-6 text-gray-600">{projectContent.overview}</p>

        {project.caseStudyImages?.overview && (
          <div className="mt-10">
            <div className="max-w-3xl mx-auto">
              <Image
                src={project.caseStudyImages.overview}
                alt={`${project.title} ${siteCopy.projects.detail.overviewAlt}`}
                width={900}
                height={500}
                className="rounded-lg border"
              />
            </div>
          </div>
        )}
      </section>

      <section className="page-reveal page-reveal-delay-1">
        <h2 className="text-2xl font-semibold">{siteCopy.projects.detail.problem}</h2>

        <p className="mt-4 text-gray-600">{projectContent.problem}</p>
      </section>

      <section className="page-reveal page-reveal-delay-1">
        <h2 className="text-2xl font-semibold">{siteCopy.projects.detail.solution}</h2>

        <p className="mt-4 text-gray-600">{projectContent.solution}</p>

        {project.caseStudyImages?.solution && (
          <div className="mt-10">
            <div className="max-w-3xl mx-auto">
              <Image
                src={project.caseStudyImages.solution}
                alt={`${project.title} ${siteCopy.projects.detail.solutionAlt}`}
                width={900}
                height={500}
                className="rounded-lg border"
              />
            </div>
          </div>
        )}
      </section>

      <section className="page-reveal page-reveal-delay-2">
        <h2 className="text-2xl font-semibold">{siteCopy.projects.detail.tech}</h2>

        <TechList items={project.tech} layout="grid" className="mt-4" />
      </section>

      <section className="page-reveal page-reveal-delay-2">
        <h2 className="text-2xl font-semibold">{siteCopy.projects.detail.challenges}</h2>

        <ul className="mt-4 list-disc list-inside text-gray-600">
          {projectContent.challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </section>

      <section className="page-reveal page-reveal-delay-3">
        <h2 className="text-2xl font-semibold">{siteCopy.projects.detail.learnings}</h2>

        <ul className="mt-4 list-disc list-inside text-gray-600">
          {projectContent.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </section>

      {hasLinks && (
        <section className="page-reveal page-reveal-delay-3">
          <h2 className="text-2xl font-semibold">{siteCopy.projects.detail.links}</h2>

          <div className="mt-4 flex gap-4">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="button-interactive button-primary px-5 py-2 rounded bg-black text-white text-sm"
              >
                {siteCopy.projects.card.liveDemo}
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="button-interactive button-secondary px-5 py-2 rounded border text-sm"
              >
                {siteCopy.projects.card.githubRepo}
              </a>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
