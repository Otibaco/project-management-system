"use client"
import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, CheckSquare, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Enterprise Project Management System
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Plan, execute, and monitor your projects efficiently. Facilitate team collaboration, assign tasks, and manage resources.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl bg-background p-4 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="relative z-10 h-full rounded-lg border bg-background p-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div className="text-sm font-medium">Project Dashboard</div>
                    <div className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <div className="mt-4 grid gap-2">
                    <div className="h-2 w-3/4 rounded bg-muted" />
                    <div className="h-2 w-1/2 rounded bg-muted" />
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="h-20 rounded bg-muted" />
                      <div className="h-20 rounded bg-muted" />
                    </div>
                    <div className="mt-2 h-32 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Key Features
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our system offers all the tools needed to manage projects efficiently.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              {
                icon: <CheckSquare className="h-6 w-6 text-primary" />,
                title: "Task Management",
                desc: "Create, assign, and monitor tasks. Set priorities and deadlines to keep your project on track.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Team Collaboration",
                desc: "Facilitate communication and collaboration among team members with integrated tools.",
              },
              {
                icon: <Calendar className="h-6 w-6 text-primary" />,
                title: "Planning",
                desc: "Create detailed schedules, set milestones, and visualize the project timeline.",
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-primary" />,
                title: "Metrics and Reports",
                desc: "Analyze project performance with real-time metrics and usability reports.",
              },
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "Time Tracking",
                desc: "Record time spent on each task and project for better resource management.",
              },
              {
                icon: <ArrowRight className="h-6 w-6 text-primary" />,
                title: "Workflows",
                desc: "Define custom processes based on components and agile methodologies like RUP.",
              },
            ].map(({ icon, title, desc }, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center gap-2">
                  {icon}
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}