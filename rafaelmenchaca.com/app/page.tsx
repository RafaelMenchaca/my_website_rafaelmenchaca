import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import ProjectCard from "@/components/projects/ProjectCard"




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
        


        {/* Avatar + Social */}
        <div className="flex-shrink-0 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border bg-gray-100">
            <Image
              src="/images/profile/avatar_v4.jpg"
              alt="Rafael Menchaca"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Social links */}
          <div className="mt-4 flex gap-4 items-center">
            <a
              href="https://github.com/RafaelMenchaca"
              target="_blank"
              aria-label="GitHub"
              className="text-gray-600 hover:text-black transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
              target="_blank"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-black transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://x.com/rafael_mench_g"
              target="_blank"
              aria-label="X"
              className="text-gray-600 hover:text-black transition"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>



      </section>


      {/* Featured Project */}
      <section className="px-6 py-16 max-w-4xl mx-auto border-t">
        <h2 className="text-2xl font-semibold">
          Featured Project
        </h2>

        <div className="mt-6">
          <ProjectCard
            slug="educativo-ia"
            title="Educativo IA"
            description="An AI-powered platform that helps teachers generate structured lesson plans faster and more efficiently."
            tech={["JavaScript","Node.js", "Supabase", "OpenAI API"]}
            image="/images/projects/educativo-ia/preview4.png"
          />
        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-16 max-w-4xl mx-auto border-t">
        <h2 className="text-2xl font-semibold">
          Let's build something useful
        </h2>

        <p className="mt-2 text-gray-600">
          I'm interested in frontend, full-stack roles, and
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
