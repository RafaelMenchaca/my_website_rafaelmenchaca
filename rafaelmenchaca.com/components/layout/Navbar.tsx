"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  FaBars,
  FaClock,
  FaMoon,
  FaSun,
  FaXmark,
} from "react-icons/fa6"
import {
  useTheme,
  type ThemePreference,
} from "@/components/theme/ThemeProvider"
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n"

type NavbarProps = {
  locale: Locale
  labels: {
    home: string
    about: string
    projects: string
    contact: string
    toggleTheme: string
    toggleLanguage: string
    switchToEnglish: string
    switchToSpanish: string
    themeAuto: string
    themeAutoHint: string
    themeLight: string
    themeDark: string
    themeCurrentAuto: string
    themeCurrentLight: string
    themeCurrentDark: string
  }
}

export default function Navbar({ locale, labels }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { themePreference, setThemePreference } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [themeMenuOpen, setThemeMenuOpen] = useState(false)
  const themeMenuRef = useRef<HTMLDivElement | null>(null)

  const getNavLinkClassName = (href: string) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))

    return isActive
      ? "nav-link-interactive nav-link-active"
      : "nav-link-interactive"
  }

  const currentLocaleBadge =
    locale === "en"
      ? { flag: "\u{1F1FA}\u{1F1F8}", title: labels.switchToSpanish }
      : { flag: "\u{1F1EA}\u{1F1F8}", title: labels.switchToEnglish }

  const currentThemeTitle =
    themePreference === "auto"
      ? labels.themeCurrentAuto
      : themePreference === "dark"
        ? labels.themeCurrentDark
        : labels.themeCurrentLight

  const closeMenus = () => {
    setMobileMenuOpen(false)
    setThemeMenuOpen(false)
  }

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en"

    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`
    closeMenus()
    router.refresh()
  }

  useEffect(() => {
    if (!themeMenuOpen) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!themeMenuRef.current?.contains(event.target as Node)) {
        setThemeMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setThemeMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [themeMenuOpen])

  const themeOptions: Array<{
    value: ThemePreference
    label: string
    hint?: string
    icon: ReactNode
  }> = [
    {
      value: "auto",
      label: labels.themeAuto,
      hint: labels.themeAutoHint,
      icon: <FaClock size={14} />,
    },
    {
      value: "light",
      label: labels.themeLight,
      icon: <FaSun size={14} />,
    },
    {
      value: "dark",
      label: labels.themeDark,
      icon: <FaMoon size={14} />,
    },
  ]

  return (
    <nav className="relative z-20 w-full bg-transparent px-4 pt-4">
      <div className="mx-auto max-w-5xl">
        <div className="relative rounded-[24px] border border-gray-200/90 bg-white/88 px-4 py-3 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.22)] backdrop-blur-sm md:px-6 md:py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={closeMenus}
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

            <div className="hidden gap-4 text-sm md:flex">
              <Link href="/" onClick={closeMenus} className={getNavLinkClassName("/")}>
                {labels.home}
              </Link>
              <Link
                href="/about"
                onClick={closeMenus}
                className={getNavLinkClassName("/about")}
              >
                {labels.about}
              </Link>
              <Link
                href="/projects"
                onClick={closeMenus}
                className={getNavLinkClassName("/projects")}
              >
                {labels.projects}
              </Link>
              <Link
                href="/contact"
                onClick={closeMenus}
                className={getNavLinkClassName("/contact")}
              >
                {labels.contact}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLocale}
                className="theme-toggle icon-interactive inline-flex h-10 w-10 items-center justify-center rounded-full border"
                aria-label={labels.toggleLanguage}
                title={currentLocaleBadge.title}
              >
                <span className="locale-toggle-flag" aria-hidden>
                  {currentLocaleBadge.flag}
                </span>
              </button>

              <div ref={themeMenuRef} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setThemeMenuOpen((current) => {
                      const nextOpen = !current

                      if (nextOpen) {
                        setMobileMenuOpen(false)
                      }

                      return nextOpen
                    })
                  }}
                  className={`theme-toggle icon-interactive relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                    themeMenuOpen ? "theme-toggle-open" : ""
                  }`}
                  aria-label={labels.toggleTheme}
                  aria-expanded={themeMenuOpen}
                  aria-haspopup="menu"
                  title={currentThemeTitle}
                >
                  <span className="theme-toggle-icon-wrapper" aria-hidden>
                    <span className="theme-toggle-icon theme-icon-sun">
                      <FaSun size={16} />
                    </span>
                    <span className="theme-toggle-icon theme-icon-moon">
                      <FaMoon size={16} />
                    </span>
                  </span>

                  {themePreference === "auto" && (
                    <span className="theme-auto-indicator" aria-hidden />
                  )}
                </button>

                {themeMenuOpen && (
                  <div
                    role="menu"
                    className="theme-menu-panel absolute right-0 w-44 overflow-hidden p-2"
                  >
                    <div className="flex flex-col gap-1">
                      {themeOptions.map((option) => {
                        const isActive = themePreference === option.value

                        return (
                          <button
                            key={option.value}
                            type="button"
                            role="menuitemradio"
                            aria-checked={isActive}
                            onClick={() => {
                              setThemePreference(option.value)
                              setThemeMenuOpen(false)
                            }}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${
                              isActive
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                          >
                            <span className="shrink-0">{option.icon}</span>
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-medium">{option.label}</span>
                              {option.hint && (
                                <span className="mt-0.5 block text-xs text-gray-500">
                                  {option.hint}
                                </span>
                              )}
                            </span>
                            <span
                              className={`theme-option-indicator shrink-0 ${
                                isActive ? "theme-option-indicator-active" : ""
                              }`}
                              aria-hidden
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen((current) => {
                    const nextOpen = !current

                    if (nextOpen) {
                      setThemeMenuOpen(false)
                    }

                    return nextOpen
                  })
                }}
                className="theme-toggle icon-interactive inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav-menu"
                title="Menu"
              >
                {mobileMenuOpen ? <FaXmark size={16} /> : <FaBars size={16} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div
              id="mobile-nav-menu"
              className="mt-4 border-t border-gray-200/80 pt-4 md:hidden"
            >
              <div className="flex flex-col items-center gap-3 text-center text-sm">
                <Link
                  href="/"
                  onClick={closeMenus}
                  className={`${getNavLinkClassName("/")} w-fit`}
                >
                  {labels.home}
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenus}
                  className={`${getNavLinkClassName("/about")} w-fit`}
                >
                  {labels.about}
                </Link>
                <Link
                  href="/projects"
                  onClick={closeMenus}
                  className={`${getNavLinkClassName("/projects")} w-fit`}
                >
                  {labels.projects}
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenus}
                  className={`${getNavLinkClassName("/contact")} w-fit`}
                >
                  {labels.contact}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
