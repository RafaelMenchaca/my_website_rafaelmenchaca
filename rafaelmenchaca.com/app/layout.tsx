import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { getCopy } from "@/lib/i18n"
import { getCurrentLocale } from "@/lib/get-current-locale"

export const metadata: Metadata = {
  title: {
    default: "Rafael Menchaca | Developer",
    template: "%s | Rafael Menchaca",
  },
  description: "Portfolio of Rafael Menchaca",
  icons: {
    icon: "/favicon.png",
  },
}

const themeInitScript = `
  (function () {
    try {
      var storageKey = "theme-preference";
      var themePreference = localStorage.getItem(storageKey) || "auto";
      var hour = new Date().getHours();
      var resolvedTheme =
        themePreference === "auto"
          ? (hour >= 19 || hour < 7 ? "dark" : "light")
          : themePreference;
      var root = document.documentElement;
      root.dataset.theme = resolvedTheme;
      root.dataset.themePreference = themePreference;
      root.style.colorScheme = resolvedTheme;
    } catch (error) {}
  })();
`

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getCurrentLocale()
  const siteCopy = getCopy(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar locale={locale} labels={siteCopy.navbar} />
          {children}
          <Footer labels={siteCopy.footer} />
        </ThemeProvider>
      </body>
    </html>
  )
}
