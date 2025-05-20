"use client"
import Footer from "@/components/Footer"
import LandingPage from "@/components/LandingPage"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <LandingPage />
    </div>
  )
}