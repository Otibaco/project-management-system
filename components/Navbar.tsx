"use client"
import Link from "next/link"
import { useState } from "react"
import { BarChart3, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav" // Import your UserNav component

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // TODO: Replace this with your real authentication logic
  const isLoggedIn = false // Set to true to test UserNav, or use your auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
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

        {/* Desktop UserNav or Login */}
        <div className="hidden md:flex items-center gap-2">
          {isLoggedIn ? (
            <UserNav />
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          )}
        </div>


        {/* Mobile UserNav or Login + Menu */}
        <div className="flex items-center gap-2 md:hidden">
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
          <div className="relative bg-white w-72 max-w-[90vw] h-full shadow-lg flex flex-col animate-slide-in-right ml-auto">
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
                <Link href="/register" className="mt-4">
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