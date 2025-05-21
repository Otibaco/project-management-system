import type React from "react"
import Link from "next/link"
import { BarChart3, Calendar, CheckSquare, Clock, FileText, Home, Settings, Users, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  showHeader?: boolean
  onClose?: () => void
}

export function DashboardNav({ className, showHeader = false, onClose, ...props }: NavProps) {
  return (
    <div
      className={cn(
        // Remove p-0 so header and links share the same background
        "flex flex-col gap-2 bg-white dark:bg-zinc-900 transition-colors min-h-full",
        className
      )}
      {...props}
    >
      {showHeader && (
        <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-200 dark:border-zinc-800">
          <span className="font-bold text-xl text-zinc-900 dark:text-white">Menu</span>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close Menu"
              onClick={onClose}
            >
              <X className="h-6 w-6 text-zinc-900 dark:text-white" />
            </Button>
          )}
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <Link href="/dashboard">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </Link>
        <Link href="/projects">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <FileText className="mr-2 h-4 w-4" />
            Projects
          </Button>
        </Link>
        <Link href="/tasks">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <CheckSquare className="mr-2 h-4 w-4" />
            Tasks
          </Button>
        </Link>
        <Link href="/team">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <Users className="mr-2 h-4 w-4" />
            Team
          </Button>
        </Link>
        <Link href="/calendar">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </Button>
        </Link>
        <Link href="/resources">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <Clock className="mr-2 h-4 w-4" />
            Resources
          </Button>
        </Link>
        <Link href="/analytics">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
        </Link>
        <Link href="/settings">
          <Button variant="ghost" className="w-full justify-start text-zinc-900 dark:text-white">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  )
}