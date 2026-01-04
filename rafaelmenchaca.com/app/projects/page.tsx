export default function ProjectsPage() {
  return (
    <main className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        A selection of projects I’ve built to learn,
        experiment, and solve real problems.
      </p>

      {/* Project list */}
      <section className="mt-12 space-y-6">
        {/* Educativo IA */}
        <div className="p-6 border rounded">
          <h2 className="text-xl font-semibold">
            Educativo IA
          </h2>

          <p className="mt-2 text-gray-600">
            An AI-powered platform that helps teachers
            generate structured lesson plans efficiently.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Next.js · Supabase · OpenAI API
          </p>

          <a
            href="/projects/educativo-ia"
            className="inline-block mt-4 text-sm underline"
          >
            View case study →
          </a>
        </div>

        {/* Placeholder project */}
        <div className="p-6 border rounded opacity-70">
          <h2 className="text-xl font-semibold">
            More projects coming soon
          </h2>

          <p className="mt-2 text-gray-600">
            I’m continuously building and refining new
            projects as I learn and grow.
          </p>
        </div>
      </section>
    </main>
  )
}
