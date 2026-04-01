import type { Metadata } from "next"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import ContactForm from "@/components/contact/ContactForm"
import { getCopy } from "@/lib/i18n"
import { getCurrentLocale } from "@/lib/get-current-locale"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rafael Menchaca for software, AI, and product collaboration.",
}

export default async function ContactPage() {
  const locale = await getCurrentLocale()
  const siteCopy = getCopy(locale)

  return (
    <main className="px-6 py-24 max-w-3xl mx-auto">
      <h1 className="page-reveal text-3xl font-bold">{siteCopy.contact.title}</h1>

      <p className="page-reveal page-reveal-delay-1 mt-4 text-lg text-gray-600">
        {siteCopy.contact.intro}
      </p>

      <p className="page-reveal page-reveal-delay-2 mt-4 text-gray-600">
        {siteCopy.contact.emailLead}
      </p>

      <p className="page-reveal page-reveal-delay-2 mt-2">
        <a
          href="mailto:rafaelmenchaca.dev@gmail.com"
          className="font-medium underline decoration-gray-300 underline-offset-4 transition hover:text-black"
        >
          rafaelmenchaca.dev@gmail.com
        </a>
      </p>

      <div className="page-reveal page-reveal-delay-3 mt-8 flex gap-6 items-center">
        <a
          href="https://github.com/RafaelMenchaca"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="icon-interactive text-gray-600 hover:text-gray-900"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://www.linkedin.com/in/rafael-menchaca-058317325/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="icon-interactive text-gray-600 hover:text-[#0A66C2]"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://x.com/rafael_mench_g"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
          className="icon-interactive text-gray-600 hover:text-black"
        >
          <FaXTwitter size={22} />
        </a>
      </div>

      <ContactForm copy={siteCopy.contact.form} />

      <p className="page-reveal page-reveal-delay-3 mt-12 text-sm text-gray-500">
        {siteCopy.contact.footerNote}
      </p>
    </main>
  )
}
