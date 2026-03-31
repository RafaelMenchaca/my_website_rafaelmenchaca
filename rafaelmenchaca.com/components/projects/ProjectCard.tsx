import Image from "next/image"
import Link from "next/link"
import TechList from "@/components/tech/TechList"

type ProjectCardProps = {
  slug: string
  title: string
  tagline: string
  summary: string
  tech: string[]
  image?: string
  links?: {
    demo?: string
    github?: string
  }
}

export default function ProjectCard({
  slug,
  title,
  tagline,
  summary,
  tech,
  image,
  links,
}: ProjectCardProps) {
  return (
    <article className="rounded-[28px] border border-gray-200/80 bg-white px-5 py-5 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.45)] md:px-6">
      <h3 className="text-lg font-semibold tracking-tight text-gray-900 md:text-xl">
        {title}
      </h3>

      <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-stretch md:gap-4">
        <div className="w-full max-w-[18.5rem] shrink-0 self-center md:max-w-[15.5rem] md:self-start lg:max-w-[16.5rem]">
          {image && (
            <div className="rounded-2xl border border-gray-200/80 bg-gray-50 p-2 shadow-sm shadow-gray-200/70">
              <div className="relative h-44 w-full overflow-hidden rounded-xl bg-gray-100 md:h-48">
                <Image
                  src={image}
                  alt={`${title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 296px, (max-width: 1024px) 248px, 264px"
                />
              </div>
            </div>
          )}
        </div>

        <div className="min-w-0 flex flex-1 flex-col">
          <p className="text-sm font-medium text-gray-500">{tagline}</p>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            {summary}
          </p>

          <TechList items={tech} tone="chip" className="mt-4" />

          <div className="mt-5 flex w-full flex-wrap justify-start gap-3 md:mt-auto md:pt-5">
            {links?.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noreferrer"
                className="button-interactive button-primary inline-block px-3 py-1.5 text-xs rounded-md bg-black text-white"
              >
                Live Demo
              </a>
            )}

            {links?.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="button-interactive button-secondary inline-block px-3 py-1.5 text-xs border rounded-md"
              >
                GitHub Repo
              </a>
            )}

            <Link
              href={`/projects/${slug}`}
              className="button-interactive button-secondary inline-block px-3 py-1.5 text-xs border rounded-md"
            >
              View case study
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
