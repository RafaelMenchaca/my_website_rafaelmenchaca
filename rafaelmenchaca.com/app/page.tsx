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
    <main className="relative min-h-screen">
      <section className="relative px-6 pt-16 pb-18 max-w-4xl mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 max-w-2xl">
            <h1 className="page-reveal whitespace-nowrap text-4xl font-bold leading-tight tracking-tight text-gray-900">
              Software Developer
            </h1>

            <p className="page-reveal page-reveal-delay-1 mt-5 max-w-2xl text-xl leading-8 text-gray-800">
              Building AI-powered web applications with solid architecture and
              real-world use cases.
            </p>

            <p className="page-reveal page-reveal-delay-2 mt-3 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              I focus on software architecture, data flow, and AI integration,
              using frontend as a delivery layer for well-structured systems.
            </p>

            <div className="page-reveal page-reveal-delay-3 mt-8 flex gap-4">
              <Link
                href="/projects"
                className="button-interactive button-primary rounded-xl bg-black px-5 py-2.5 text-sm text-white"
              >
                View Projects
              </Link>

              <Link
                href="/about"
                className="button-interactive button-secondary rounded-xl border px-5 py-2.5 text-sm"
              >
                About Me
              </Link>
            </div>
          </div>

          <div className="page-reveal page-reveal-delay-3 flex w-full max-w-[15rem] flex-col items-center self-center text-center">
            <div className="relative">
              <div className="absolute inset-3 rounded-full bg-gray-300/55 blur-2xl" />

              <div className="relative rounded-full bg-[linear-gradient(145deg,rgba(226,232,240,0.95),rgba(203,213,225,0.98))] p-[6px] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.34)]">
                <div className="relative h-44 w-44 overflow-hidden rounded-full border border-slate-200/80 bg-gray-100 md:h-48 md:w-48">
                  <Image
                    src="/images/profile/avatar_v4.jpg"
                    alt="Rafael Menchaca"
                    fill
                    className="object-cover"
                    priority
                    sizes="192px"
                  />
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Rafael Menchaca
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/RafaelMenchaca"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-interactive inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/85 text-gray-600 shadow-sm hover:text-gray-900"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-interactive inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/85 text-gray-600 shadow-sm hover:text-[#0A66C2]"
              >
                <FaLinkedin size={16} />
              </a>

              <a
                href="https://x.com/rafael_mench_g"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="icon-interactive inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white/85 text-gray-600 shadow-sm hover:text-black"
              >
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-reveal px-6 py-16 max-w-4xl mx-auto border-t border-gray-200/80">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
            Featured Projects
          </h2>
        </div>

        <div className="mt-7 space-y-8">
          {featuredProjects.map(([slug, project]) => (
            <ProjectCard
              key={slug}
              slug={slug}
              title={project.title}
              tagline={project.tagline}
              summary={project.cardSummary}
              tech={project.tech}
              image={project.image}
              links={project.links}
            />
          ))}
        </div>
      </section>

      <section className="page-reveal page-reveal-delay-1 px-6 py-16 max-w-4xl mx-auto border-t border-gray-200/80">
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
