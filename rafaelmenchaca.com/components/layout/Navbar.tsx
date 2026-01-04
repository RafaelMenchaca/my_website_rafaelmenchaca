import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b">
      {/* Logo / Home */}
      <Link
        href="/"
        className="font-semibold text-lg tracking-tight"
      >
        RM
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
      </div>
    </nav>
  )
}
