import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
            href="/"
            className="hover:opacity-80 transition cursor-pointer"
        >
            <Image
            src="/images/brand/logo_3.png"
            alt="Rafael Menchaca"
            width={32}
            height={32}
            className="rounded-full"
            />
        </Link>

        {/* Navigation */}
        <div className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact"  className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
