import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { DataProvider } from "@/contexts/DataContext"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ProjectPro",
  description: "Enterprise Project Management System",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} cz-shortcut-listen="true">
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  )
}