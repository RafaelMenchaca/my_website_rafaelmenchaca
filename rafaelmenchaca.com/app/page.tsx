import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import ProjectCard from "@/components/projects/ProjectCard"
import type { Project, ProjectSlug } from "@/data/projects"
import { projects } from "@/data/projects"

export default function Home() {
  const featuredProjects = (Object.entries(projects) as Array<[ProjectSlug, Project]>).filter(
    ([, project]) => project.featured,
  )

  return (
    <main className="min-h-screen">
      <section className="px-6 py-24 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="page-reveal text-4xl font-bold leading-tight">Rafael Menchaca</h1>

          <p className="page-reveal page-reveal-delay-1 mt-4 text-xl text-gray-600">
            <strong className="text-gray-900 font-semibold">Software developer</strong>{" "}
            building AI-powered web applications with solid architecture and
            real-world use cases.
          </p>

          <p className="page-reveal page-reveal-delay-2 mt-4 max-w-2xl text-gray-600">
            I focus on software architecture, data flow, and AI integration,
            using frontend as a delivery layer for well-structured systems.
          </p>

          <div className="page-reveal page-reveal-delay-3 mt-8 flex gap-4">
            <Link
              href="/projects"
              className="button-interactive button-primary px-5 py-2 rounded bg-black text-white text-sm"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="button-interactive button-secondary px-5 py-2 rounded border text-sm"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="page-reveal page-reveal-delay-2 flex-shrink-0 flex flex-col items-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border bg-gray-100">
            <Image
              src="/images/profile/avatar_v4.jpg"
              alt="Rafael Menchaca"
              fill
              className="object-cover"
              priority
              sizes="192px"
            />
          </div>

          <div className="mt-4 flex gap-4 items-center">
            <a
              href="https://github.com/RafaelMenchaca"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-interactive text-gray-600 hover:text-gray-900"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-interactive text-gray-600 hover:text-[#0A66C2]"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://x.com/rafael_mench_g"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="icon-interactive text-gray-600 hover:text-black"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="page-reveal px-6 py-16 max-w-4xl mx-auto border-t">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>

        <div className="mt-6 space-y-6">
          {featuredProjects.map(([slug, project]) => (
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
        </div>
      </section>

      <section className="page-reveal page-reveal-delay-1 px-6 py-16 max-w-4xl mx-auto border-t">
        <h2 className="text-2xl font-semibold">Let&apos;s build something useful</h2>

        <p className="mt-2 text-gray-600">
          I&apos;m interested in frontend, full-stack roles, and building products
          with real users in mind.
        </p>

        <Link
          href="/contact"
          className="button-interactive button-primary inline-block mt-6 px-5 py-2 rounded bg-black text-white text-sm"
        >
          Get in touch
        </Link>
      </section>
    </main>
  )
}
