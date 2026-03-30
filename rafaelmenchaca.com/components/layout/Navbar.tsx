import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
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
          <Link href="/" className="nav-link-interactive">
            Home
          </Link>
          <Link href="/about" className="nav-link-interactive">
            About
          </Link>
          <Link href="/projects" className="nav-link-interactive">
            Projects
          </Link>
          <Link href="/contact" className="nav-link-interactive">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
