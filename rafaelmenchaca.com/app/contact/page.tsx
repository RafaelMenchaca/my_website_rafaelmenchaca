import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"

export default function ContactPage() {
  return (
    <main className="px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">
        Get in touch
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        I’m open to conversations about backend systems,
        AI-powered applications, and potential collaboration.
      </p>

      <p className="mt-4 text-gray-600">
        The easiest way to reach me is via email:
      </p>

      {/* Email */}
      <p className="mt-2">
        <a
          href="mailto:rafaelmenchaca.dev@gmail.com"
          className="font-medium underline"
        >
          arafael.menchaca@gmail.com
        </a>
      </p>

      {/* Social links */}
      <div className="mt-8 flex gap-6 items-center">
        <a
          href="https://github.com/RafaelMenchaca"
          target="_blank"
          aria-label="GitHub"
          className="text-gray-600 hover:text-black transition"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
          target="_blank"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-black transition"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://x.com/rafael_mench_g"
          target="_blank"
          aria-label="X"
          className="text-gray-600 hover:text-black transition"
        >
          <FaXTwitter size={22} />
        </a>
      </div>

      {/* Closing note */}
      <p className="mt-12 text-sm text-gray-500">
        Currently focused on building and improving my
        portfolio and backend expertise.
      </p>
    </main>
  )
}
