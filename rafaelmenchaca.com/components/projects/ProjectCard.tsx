import Image from "next/image"
import Link from "next/link"

type ProjectCardProps = {
  slug: string
  title: string
  description: string
  tech: string[]
  image?: string
}

export default function ProjectCard({
  slug,
  title,
  description,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <div className="p-6 border rounded">
      {/* Title */}
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      {/* Content */}
      <div className="mt-4 flex flex-col md:flex-row gap-6 items-start">
        {/* Image (optional) */}
        {image && (
          <div className="relative w-full md:w-48 h-32 rounded-md overflow-hidden border bg-gray-100 flex-shrink-0">
            <Image
              src={image}
              alt={`${title} preview`}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Text + Button */}
        <div>
          <p className="text-gray-600">
            {description}
          </p>

          <p className="mt-3 text-sm text-gray-500">
            {tech.join(" · ")}
          </p>

          <Link
            href={`/projects/${slug}`}
            className="inline-block mt-4 px-3 py-1.5 text-xs border rounded-md hover:bg-gray-50 transition"
          >
            View case study
          </Link>
        </div>
      </div>
    </div>
  )
}
