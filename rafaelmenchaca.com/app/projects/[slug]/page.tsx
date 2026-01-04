import { projects } from "@/data/projects"

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects]

  if (!project) {
    return (
      <main className="px-6 py-24 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </main>
    )
  }

  return (
    <main className="px-6 py-24 max-w-4xl mx-auto space-y-16">
      {/* Overview */}
      <section>
        <h1 className="text-4xl font-bold">
          {project.title}
        </h1>

        <p className="mt-2 text-xl text-gray-600">
          {project.tagline}
        </p>

        <p className="mt-6 text-gray-600">
          {project.overview}
        </p>
        {/* Overview screenshot */}
        <div className="mt-8 h-64 border rounded flex items-center justify-center text-sm text-gray-500">
          Dashboard overview (screenshot coming soon)
          {/* <Image
            src="/images/projects/educativo-ia/dashboard.png"
            alt="Educativo IA dashboard"
            width={800}
            height={450}
            className="rounded border"
          /> */}

        </div>

      </section>

      {/* Problem */}
      <section>
        <h2 className="text-2xl font-semibold">
          The Problem
        </h2>

        <p className="mt-4 text-gray-600">
          {project.problem}
        </p>
      </section>

      {/* Solution */}
      <section>
        <h2 className="text-2xl font-semibold">
          The Solution
        </h2>

        <p className="mt-4 text-gray-600">
          {project.solution}
        </p>
        {/* Solution screenshot */}
        <div className="mt-8 h-64 border rounded flex items-center justify-center text-sm text-gray-500">
          Lesson plan generation flow (screenshot coming soon)
          {/* <Image
            src="/images/projects/educativo-ia/dashboard.png"
            alt="Educativo IA dashboard"
            width={800}
            height={450}
            className="rounded border"
          /> */}

        </div>

      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold">
          Tech Stack & Architecture
        </h2>

        <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-600">
          {project.tech.map((tech) => (
            <li key={tech}>• {tech}</li>
          ))}
        </ul>
      </section>

      {/* Challenges */}
      <section>
        <h2 className="text-2xl font-semibold">
          Challenges
        </h2>

        <ul className="mt-4 list-disc list-inside text-gray-600">
          {project.challenges.map((challenge) => (
            <li key={challenge}>{challenge}</li>
          ))}
        </ul>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold">
          Key Learnings
        </h2>

        <ul className="mt-4 list-disc list-inside text-gray-600">
          {project.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-2xl font-semibold">
          Links
        </h2>

        <div className="mt-4 flex gap-4">
          <a
            href={project.links.demo}
            target="_blank"
            className="px-5 py-2 rounded bg-black text-white text-sm"
          >
            Live Demo
          </a>

          <a
            href={project.links.github}
            target="_blank"
            className="px-5 py-2 rounded border text-sm"
          >
            GitHub Repo
          </a>
        </div>
      </section>
    </main>
  )
}
