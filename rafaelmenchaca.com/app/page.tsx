import Image from "next/image"


export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 py-24 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-tight">
            Rafael Menchaca
          </h1>

          <p className="mt-4 text-xl text-gray-600">
            <strong className="text-gray-900 font-semibold">
              Backend developer
            </strong>{" "}
            building AI-powered web applications with solid
            architecture and real-world use cases.
          </p>

          <p className="mt-4 text-gray-600 max-w-2xl">
            I focus on backend logic, data flow, and AI
            integration, using frontend as a delivery layer
            for well-structured systems.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="px-5 py-2 rounded bg-black text-white text-sm"
            >
              View Projects
            </a>

            <a
              href="/about"
              className="px-5 py-2 rounded border text-sm"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 rounded-full overflow-hidden border bg-gray-100 flex items-center justify-center text-sm text-gray-500">
            <Image
              src="/images/profile/avatar_v4.jpg"
              alt="Rafael Menchaca"
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
        </div>

      </section>


      {/* Featured Project */}
      <section className="px-6 py-16 max-w-4xl mx-auto border-t">
        <h2 className="text-2xl font-semibold">
          Featured Project
        </h2>

        <div className="mt-6 p-6 border rounded">
          <h3 className="text-xl font-semibold">
            Educativo IA
          </h3>

          <p className="mt-2 text-gray-600">
            An AI-powered platform that helps teachers generate
            structured lesson plans faster and more efficiently.
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
      </section>

      {/* CTA */}
      <section className="px-6 py-16 max-w-4xl mx-auto border-t">
        <h2 className="text-2xl font-semibold">
          Let’s build something useful
        </h2>

        <p className="mt-2 text-gray-600">
          I’m interested in frontend, full-stack roles, and
          building products with real users in mind.
        </p>

        <a
          href="/contact"
          className="inline-block mt-6 px-5 py-2 rounded bg-black text-white text-sm"
        >
          Get in touch
        </a>
      </section>


    </main>
  )
}
