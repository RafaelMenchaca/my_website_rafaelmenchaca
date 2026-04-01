"use client"

import { FormEvent, useState } from "react"

type ContactFormProps = {
  copy: {
    title: string
    description: string
    badge: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    projectTypeLabel: string
    projectTypePlaceholder: string
    projectTypeOptions: {
      webApp: string
      aiProduct: string
      collaboration: string
      other: string
    }
    messageLabel: string
    messagePlaceholder: string
    preferEmail: string
    submit: string
    pendingMessage: string
  }
}

export default function ContactForm({ copy }: ContactFormProps) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage(copy.pendingMessage)
  }

  return (
    <section className="page-reveal page-reveal-delay-2 mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{copy.title}</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            {copy.description}
          </p>
        </div>

        <span className="inline-flex w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
          {copy.badge}
        </span>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-gray-700">
            {copy.nameLabel}
            <input
              type="text"
              name="name"
              placeholder={copy.namePlaceholder}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            {copy.emailLabel}
            <input
              type="email"
              name="email"
              placeholder={copy.emailPlaceholder}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-gray-700">
            {copy.companyLabel}
            <input
              type="text"
              name="company"
              placeholder={copy.companyPlaceholder}
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            {copy.projectTypeLabel}
            <select
              name="projectType"
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            >
              <option value="" disabled>
                {copy.projectTypePlaceholder}
              </option>
              <option value="web-app">{copy.projectTypeOptions.webApp}</option>
              <option value="ai-product">{copy.projectTypeOptions.aiProduct}</option>
              <option value="collaboration">{copy.projectTypeOptions.collaboration}</option>
              <option value="other">{copy.projectTypeOptions.other}</option>
            </select>
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700">
          {copy.messageLabel}
          <textarea
            name="message"
            rows={6}
            placeholder={copy.messagePlaceholder}
            className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
          />
        </label>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            {copy.preferEmail}{" "}
            <a
              href="mailto:rafaelmenchaca.dev@gmail.com"
              className="font-medium text-gray-700 underline decoration-gray-300 underline-offset-4 transition hover:text-black"
            >
              rafaelmenchaca.dev@gmail.com
            </a>
          </p>

          <button
            type="submit"
            className="button-interactive button-primary inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-sm font-medium text-white"
          >
            {copy.submit}
          </button>
        </div>

        {statusMessage && (
          <p
            role="status"
            className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600"
          >
            {statusMessage}
          </p>
        )}
      </form>
    </section>
  )
}
