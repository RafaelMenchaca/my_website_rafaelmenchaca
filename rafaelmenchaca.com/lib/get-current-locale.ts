import { cookies } from "next/headers"
import { LOCALE_COOKIE, normalizeLocale } from "@/lib/i18n"

export async function getCurrentLocale() {
  const cookieStore = await cookies()

  return normalizeLocale(cookieStore.get(LOCALE_COOKIE)?.value)
}
