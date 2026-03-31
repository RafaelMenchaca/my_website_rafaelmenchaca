"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname()

  const getNavLinkClassName = (href: string) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

    return isActive
      ? "nav-link-interactive nav-link-active"
      : "nav-link-interactive"
  }

  return (
    <nav className="relative z-20 w-full px-4 pt-4 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between rounded-[24px] border border-gray-200/90 bg-white/88 px-6 py-4 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.22)] backdrop-blur-sm">
          <Link
            href="/"
            className="icon-interactive hover:opacity-80 cursor-pointer"
          >
            <Image
              src="/images/brand/logo_3.png"
              alt="Rafael Menchaca"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>

          <div className="flex gap-4 text-sm">
            <Link href="/" className={getNavLinkClassName("/")}>
              Home
            </Link>
            <Link href="/about" className={getNavLinkClassName("/about")}>
              About
            </Link>
            <Link href="/projects" className={getNavLinkClassName("/projects")}>
              Projects
            </Link>
            <Link href="/contact" className={getNavLinkClassName("/contact")}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
