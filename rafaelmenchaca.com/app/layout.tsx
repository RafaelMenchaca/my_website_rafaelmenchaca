import "./globals.css"
import Navbar from "@/components/layout/Navbar"

export const metadata = {
  title: "Rafael Menchaca | Developer",
  description: "Portfolio of Rafael Menchaca",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
