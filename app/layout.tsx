import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "County wide auto parts - Buy High Quality Used Auto Parts Online",
  description:
    "Find high quality used OEM auto parts with free shipping and the best warranty. Save over 50% off dealer prices on certified and tested parts.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/website-logo.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
