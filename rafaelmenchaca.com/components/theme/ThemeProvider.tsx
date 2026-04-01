"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type ThemePreference = "auto" | "light" | "dark"
export type ThemeMode = "light" | "dark"

const STORAGE_KEY = "theme-preference"

type ThemeContextValue = {
  themePreference: ThemePreference
  resolvedTheme: ThemeMode
  setThemePreference: (themePreference: ThemePreference) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "auto" || value === "light" || value === "dark"
}

function getAutoTheme(): ThemeMode {
  const hour = new Date().getHours()

  return hour >= 19 || hour < 7 ? "dark" : "light"
}

function resolveTheme(themePreference: ThemePreference): ThemeMode {
  return themePreference === "auto" ? getAutoTheme() : themePreference
}

function applyTheme(themePreference: ThemePreference): ThemeMode {
  const resolvedTheme = resolveTheme(themePreference)
  const root = document.documentElement

  root.dataset.theme = resolvedTheme
  root.dataset.themePreference = themePreference
  root.style.colorScheme = resolvedTheme

  return resolvedTheme
}

function getInitialThemePreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "auto"
  }

  const storedPreference = localStorage.getItem(STORAGE_KEY)

  return isThemePreference(storedPreference) ? storedPreference : "auto"
}

function getInitialResolvedTheme(themePreference: ThemePreference): ThemeMode {
  if (typeof document === "undefined") {
    return resolveTheme(themePreference)
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light"
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>(
    getInitialThemePreference,
  )
  const [resolvedTheme, setResolvedTheme] = useState<ThemeMode>(() =>
    getInitialResolvedTheme(getInitialThemePreference()),
  )

  const setThemePreference = (nextThemePreference: ThemePreference) => {
    const nextResolvedTheme = applyTheme(nextThemePreference)

    localStorage.setItem(STORAGE_KEY, nextThemePreference)
    setThemePreferenceState(nextThemePreference)
    setResolvedTheme(nextResolvedTheme)
  }

  useEffect(() => {
    if (themePreference !== "auto") {
      return
    }

    const syncAutoTheme = () => {
      const nextResolvedTheme = getAutoTheme()

      if (document.documentElement.dataset.theme !== nextResolvedTheme) {
        applyTheme("auto")
      }

      setResolvedTheme((currentTheme) =>
        currentTheme === nextResolvedTheme ? currentTheme : nextResolvedTheme,
      )
    }

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        syncAutoTheme()
      }
    }

    const intervalId = window.setInterval(syncAutoTheme, 60_000)

    window.addEventListener("focus", syncAutoTheme)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      window.clearInterval(intervalId)
      window.removeEventListener("focus", syncAutoTheme)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [themePreference])

  const value = useMemo<ThemeContextValue>(
    () => ({
      themePreference,
      resolvedTheme,
      setThemePreference,
    }),
    [resolvedTheme, themePreference],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
