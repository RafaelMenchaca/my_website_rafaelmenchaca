import Image from "next/image"
import Link from "next/link"
import TechList from "@/components/tech/TechList"

type ProjectCardProps = {
  slug: string
  title: string
  description: string
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
  description,
  tech,
  image,
  links,
}: ProjectCardProps) {
  return (
    <article className="p-6 border rounded">
      <h3 className="text-xl font-semibold">{title}</h3>

      <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
        {image && (
          <div className="relative w-full md:w-48 h-32 rounded-md overflow-hidden border bg-gray-100 flex-shrink-0">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          </div>
        )}

        <div className="w-full">
          <p className="text-gray-600">{description}</p>

          <TechList items={tech} tone="chip" className="mt-4" />

          <div className="mt-4 flex w-full flex-wrap justify-start gap-3">
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
