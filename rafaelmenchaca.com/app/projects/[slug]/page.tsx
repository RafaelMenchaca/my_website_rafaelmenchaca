import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Project, ProjectSlug } from "@/data/projects"
import { projects } from "@/data/projects"

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
  const { slug } = await params
  const project = projects[slug as ProjectSlug] as Project | undefined
  const hasLinks = Boolean(project?.links?.demo || project?.links?.github)

  if (!project) {
    notFound()
  }

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto space-y-16">
      <section>
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <p className="mt-2 text-xl text-gray-600">{project.tagline}</p>

        <p className="mt-6 text-gray-600">{project.overview}</p>

        {project.caseStudyImages?.overview && (
          <div className="mt-10">
            <div className="max-w-3xl mx-auto">
              <Image
                src={project.caseStudyImages.overview}
                alt={`${project.title} overview`}
                width={900}
                height={500}
                className="rounded-lg border"
              />
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">The Problem</h2>

        <p className="mt-4 text-gray-600">{project.problem}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">The Solution</h2>

        <p className="mt-4 text-gray-600">{project.solution}</p>

        {project.caseStudyImages?.solution && (
          <div className="mt-10">
            <div className="max-w-3xl mx-auto">
              <Image
                src={project.caseStudyImages.solution}
                alt={`${project.title} solution preview`}
                width={900}
                height={500}
                className="rounded-lg border"
              />
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Tech Stack & Architecture</h2>

        <ul className="mt-4 grid grid-cols-2 gap-2 pl-4 text-gray-600 list-disc">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Challenges</h2>

        <ul className="mt-4 list-disc list-inside text-gray-600">
          {project.challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Key Learnings</h2>

        <ul className="mt-4 list-disc list-inside text-gray-600">
          {project.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </section>

      {hasLinks && (
        <section>
          <h2 className="text-2xl font-semibold">Links</h2>

          <div className="mt-4 flex gap-4">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded bg-black text-white text-sm"
              >
                Live Demo
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded border text-sm"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </section>
      )}
    </main>
  )
}
