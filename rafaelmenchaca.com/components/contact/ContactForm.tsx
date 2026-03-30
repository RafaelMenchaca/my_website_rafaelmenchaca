"use client"

import { FormEvent, useState } from "react"

const pendingMessage =
  "Form integration coming soon. For now, email me directly at rafaelmenchaca.dev@gmail.com."

export default function ContactForm() {
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage(pendingMessage)
  }

  return (
    <section className="page-reveal page-reveal-delay-2 mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600">
            A clean contact flow is on the way. For now the form is a visual
            preview, and I&apos;m still available by email.
          </p>
        </div>

        <span className="inline-flex w-fit rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
          Coming soon
        </span>
      </div>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-gray-700">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block text-sm font-medium text-gray-700">
            Company or brand
            <input
              type="text"
              name="company"
              placeholder="Optional"
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            Project type
            <select
              name="projectType"
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="web-app">Web app</option>
              <option value="ai-product">AI product</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700">
          Message
          <textarea
            name="message"
            rows={6}
            placeholder="Tell me a bit about the product, timeline, or idea."
            className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
          />
        </label>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            Prefer email? Reach me directly at{" "}
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
            Send message
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
