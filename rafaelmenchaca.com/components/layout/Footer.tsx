"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

type FooterProps = {
  labels: {
    role: string
    cta: string
  }
}

export default function Footer({ labels }: FooterProps) {
  const pathname = usePathname()

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="mt-24 w-full border-t border-gray-200 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          {pathname === "/" ? (
            <button
              onClick={handleHomeClick}
              className="icon-interactive hover:opacity-80 cursor-pointer"
            >
              <Image
                src="/images/brand/logo_3.png"
                alt="Rafael Menchaca"
                width={32}
                height={32}
                className="rounded-full"
              />
            </button>
          ) : (
            <Link href="/" className="icon-interactive hover:opacity-80 cursor-pointer">
              <Image
                src="/images/brand/logo_3.png"
                alt="Rafael Menchaca"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
          )}

          <p className="mt-1 text-sm text-gray-600">
            Rafael Menchaca &middot; {labels.role}
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-start gap-6">
          <div className="flex gap-5 items-center">
            <Link
              href="/contact"
              className="button-interactive button-secondary inline-block px-3 py-1.5 text-xs border rounded-md"
            >
              {labels.cta}
            </Link>

            <a
              href="https://github.com/RafaelMenchaca"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="icon-interactive text-gray-600 hover:text-gray-900"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="icon-interactive text-gray-600 hover:text-[#0A66C2]"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://x.com/rafael_mench_g"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="icon-interactive text-gray-600 hover:text-black"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="pb-6 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Rafael Menchaca
      </div>
    </footer>
  )
}
