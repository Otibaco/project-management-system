"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { BarChart3, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // On mount, check localStorage or system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme")
      if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setTheme("dark")
        document.documentElement.classList.add("dark")
      } else {
        setTheme("light")
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  // TODO: Replace this with your real authentication logic
  const isLoggedIn = false // Set to true to test UserNav, or use your auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-zinc-900 transition-colors">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BarChart3 className="h-6 w-6" />
          <span>ProjectPro</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 flex-1 justify-center">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
          <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">Dashboard</Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">Projects</Link>
          <Link href="/tasks" className="text-sm font-medium transition-colors hover:text-primary">Tasks</Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">Team</Link>
          <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">Resources</Link>
        </nav>

        {/* Desktop UserNav or Login + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-700" />
            )}
          </Button>
          {isLoggedIn ? (
            <UserNav />
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile UserNav or Login + Theme Toggle + Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-700" />
            )}
          </Button>
          {isLoggedIn ? (
            <UserNav />
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            aria-label="Open Menu"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Nav Drawer (Right Side) */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileNavOpen(false)}
          />
          {/* Drawer */}
          <div className="relative bg-white dark:bg-zinc-900 w-72 max-w-[90vw] h-full shadow-lg flex flex-col animate-slide-in-right ml-auto">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-bold text-xl">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close Menu"
                onClick={() => setMobileNavOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col gap-2 p-4">
              <Link href="/" onClick={() => setMobileNavOpen(false)} className="text-base font-medium py-2 px-2 rounded hover:bg-muted transition">Home</Link>
              <Link href="/dashboard" onClick={() => setMobileNavOpen(false)} className="text-base font-medium py-2 px-2 rounded hover:bg-muted transition">Dashboard</Link>
              <Link href="/projects" onClick={() => setMobileNavOpen(false)} className="text-base font-medium py-2 px-2 rounded hover:bg-muted transition">Projects</Link>
              <Link href="/tasks" onClick={() => setMobileNavOpen(false)} className="text-base font-medium py-2 px-2 rounded hover:bg-muted transition">Tasks</Link>
              <Link href="/team" onClick={() => setMobileNavOpen(false)} className="text-base font-medium py-2 px-2 rounded hover:bg-muted transition">Team</Link>
              <Link href="/resources" onClick={() => setMobileNavOpen(false)} className="text-base font-medium py-2 px-2 rounded hover:bg-muted transition">Resources</Link>

            

              {!isLoggedIn && (
                <Link href="/register" className="mt-2">
                  <Button className="w-full" onClick={() => setMobileNavOpen(false)}>Register</Button>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}