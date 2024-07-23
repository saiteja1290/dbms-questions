import "@/styles/globals.css"
import { Fira_Code } from "next/font/google"
import { cn } from "@/lib/utils"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head />
      <body
        className={cn(
          "min-h-screen bg-gray-900 antialiased text-white",
          firaCode.variable,
          "font-mono" // This applies the monospace font
        )}
      >
        {children}
      </body>
    </html>
  )
}