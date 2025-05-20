"use client"

import Link from "next/link"
import { Filter, Plus, Search, Edit, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardNav } from "@/components/dashboard-nav"
import { useData } from "@/contexts/DataContext"

export default function ProjectsPage() {
  const { projects, deleteProject } = useData()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header and Navigation */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block border-r bg-muted/40">
          <DashboardNav />
        </aside>
        {/* Main Content */}
        <main className="flex flex-col gap-6 p-4 sm:p-6">
          {/* Header Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects</h1>
            <div className="flex items-center gap-2">
              <Link href="/projects/new">
                <Button>
                  <Plus className="h-4 w-4" />
                  {/* Show text only on small screens */}
                  <span className="ml-2">New Project</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex w-full gap-2">
            <div className="relative flex-1 min-w-0 max-w-full sm:max-w-xs md:max-w-xs lg:max-w-sm xl:max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-8 w-full"
              />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-9 flex-shrink-0"
              style={{ marginLeft: 0 }}
            >
              <Filter className="h-4 w-4" />
              <span className="ml-2">Filter</span>
            </Button>
          </div>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto rounded-lg border bg-background">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.title}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{new Date(project.startDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(project.endDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link href={`/projects/edit/${project.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={() => deleteProject(project.id)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}