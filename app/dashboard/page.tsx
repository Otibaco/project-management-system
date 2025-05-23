"use client"

import React, { useState } from "react"
import Link from "next/link"
import { BarChart3, Calendar, CheckSquare, Clock, Plus, Users, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardNav } from "@/components/dashboard-nav"
import { ProjectCard } from "@/components/project-card"
import { RecentActivity } from "@/components/recent-activity"

export default function DashboardPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900 transition-colors">
      <div className="flex-1 grid md:grid-cols-[220px_1fr]">
        {/* Sidebar for desktop */}
        <aside className="hidden md:block border-r bg-muted/40 dark:bg-zinc-900">
          <DashboardNav className="h-full" />
        </aside>

        {/* Main Section */}
        <main className="flex flex-col gap-6 p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {/* Left: Menu (mobile) and Dashboard text */}
            <div className="flex items-center gap-2">
              {/* Mobile nav button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileNavOpen(true)}
                  aria-label="Open navigation"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Dashboard</h1>
            </div>
            {/* Right: New Project button */}
            <Link href="/projects/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                <span className="sm:inline">New Project</span>
              </Button>
            </Link>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="flex flex-wrap gap-2 w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                    <CheckSquare className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 since last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">34</div>
                    <p className="text-xs text-muted-foreground">-4 since last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+4 since last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-xs text-muted-foreground">+2 since last week</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Projects</CardTitle>
                    <CardDescription>You currently have 12 active projects</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <ProjectCard
                      title="Website Redesign"
                      description="Complete update of the corporate website"
                      progress={75}
                      dueDate="15 Mar 2025"
                      team={5}
                      tasks={24}
                      completedTasks={18}
                    />
                    <ProjectCard
                      title="CRM Implementation"
                      description="Integration of the new CRM system with existing systems"
                      progress={45}
                      dueDate="30 Apr 2025"
                      team={8}
                      tasks={42}
                      completedTasks={19}
                    />
                    <ProjectCard
                      title="Q2 Marketing Campaign"
                      description="Planning and execution of the second quarter campaign"
                      progress={20}
                      dueDate="10 May 2025"
                      team={4}
                      tasks={18}
                      completedTasks={4}
                    />
                  </CardContent>
                </Card>
                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates on your projects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentActivity />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Performance</CardTitle>
                  <CardDescription>Analysis of functionality and usability metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Website Redesign</div>
                      <div className="text-sm text-muted-foreground">75%</div>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">CRM Implementation</div>
                      <div className="text-sm text-muted-foreground">45%</div>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Q2 Marketing Campaign</div>
                      <div className="text-sm text-muted-foreground">20%</div>
                    </div>
                    <Progress value={20} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">Mobile App Development</div>
                      <div className="text-sm text-muted-foreground">60%</div>
                    </div>
                    <Progress value={60} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Project Reports</CardTitle>
                  <CardDescription>Detailed reports on project status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <div className="font-medium">Weekly Progress Report</div>
                      <div className="text-sm text-muted-foreground">
                        Summary of progress for all active projects during the last week
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">
                        Download PDF
                      </Button>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-medium">Resource Allocation Report</div>
                      <div className="text-sm text-muted-foreground">
                        Detailed analysis of resource allocation across all projects
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">
                        Download PDF
                      </Button>
                    </div>
                    <div className="grid gap-2">
                      <div className="font-medium">Team Performance Report</div>
                      <div className="text-sm text-muted-foreground">
                        Evaluation of team members' performance on projects
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>

      {/* Mobile Drawer for DashboardNav */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileNavOpen(false)}
          />
          {/* Drawer */}
          <div className="relative w-4/5 max-w-xs h-full shadow-lg flex flex-col animate-slide-in-left bg-white dark:bg-zinc-900 transition-colors">
            <DashboardNav
              showHeader
              onClose={() => setMobileNavOpen(false)}
              className="h-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}