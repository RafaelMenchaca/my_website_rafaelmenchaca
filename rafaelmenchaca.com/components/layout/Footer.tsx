"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  const pathname = usePathname()

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="w-full border-t mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          {pathname === "/" ? (
            <button
              onClick={handleHomeClick}
              className="hover:opacity-80 transition cursor-pointer"
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
            <Link href="/" className="hover:opacity-80 transition cursor-pointer">
              <Image
                src="/images/brand/logo_3.png"
                alt="Rafael Menchaca"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Link>
          )}

          <p className="text-sm text-gray-500 mt-1">
            Rafael Menchaca &middot; Backend-focused developer
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-start gap-6">
          <div className="flex gap-5 items-center">
            <Link
              href="/contact"
              className="inline-block px-3 py-1.5 text-xs border rounded-md hover:bg-gray-50 transition"
            >
              Get in touch
            </Link>

            <a
              href="https://github.com/RafaelMenchaca"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-black transition"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-black transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://x.com/rafael_mench_g"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="text-gray-500 hover:text-black transition"
            >
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 pb-6">
        &copy; {new Date().getFullYear()} Rafael Menchaca
      </div>
    </footer>
  )
}
