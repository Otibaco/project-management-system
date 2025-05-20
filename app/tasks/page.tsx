"use client"

import Link from "next/link"
import { Filter, Plus, Search, Edit, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardNav } from "@/components/dashboard-nav"
import { useData } from "@/contexts/DataContext"

export default function TasksPage() {
  const { tasks, deleteTask } = useData()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header and Navigation */}
      <div className="grid flex-1 grid-cols-1 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden border-r bg-muted/40 md:block">
          <DashboardNav />
        </aside>
        {/* Main Content */}
        <main className="flex flex-col gap-6 p-4 sm:p-6">
          {/* Header Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Tasks</h1>
            <div className="flex items-center gap-2">
              <Link href="/tasks/new">
                <Button>
                  <Plus className="h-4 w-4" />
                  {/* Show text only on small screens */}
                  <span className="ml-2">New Task</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex w-full gap-2">
            <div className="relative flex-1 min-w-0 max-w-full sm:max-w-xs md:max-w-xs lg:max-w-sm xl:max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-8 w-full" />
            </div>
            <Button variant="outline" size="sm" className="h-9 flex-shrink-0">
              <Filter className="h-4 w-4" />
              <span className="ml-2">Filter</span>
            </Button>
          </div>

          {/* Responsive Table */}
          <div className="w-full overflow-x-auto rounded-lg border bg-background">
            <Table className="min-w-[700px]">
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead>Assigned To</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.projectId}</TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell>{task.status}</TableCell>
                    <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Link href={`/tasks/edit/${task.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={() => deleteTask(task.id)}>
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