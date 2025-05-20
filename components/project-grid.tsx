import { ProjectCard } from "@/components/project-card"

export function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        description="Planning and execution of the second-quarter campaign"
        progress={20}
        dueDate="10 May 2025"
        team={4}
        tasks={18}
        completedTasks={4}
      />
      <ProjectCard
        title="Mobile App Development"
        description="Creation of a mobile application for clients"
        progress={60}
        dueDate="22 Jun 2025"
        team={6}
        tasks={36}
        completedTasks={22}
      />
      <ProjectCard
        title="Database Migration"
        description="Migration of the database to a new infrastructure"
        progress={90}
        dueDate="5 Mar 2025"
        team={3}
        tasks={15}
        completedTasks={13}
      />
      <ProjectCard
        title="SEO Optimization"
        description="Improvement of search engine rankings"
        progress={30}
        dueDate="18 Apr 2025"
        team={2}
        tasks={20}
        completedTasks={6}
      />
    </div>
  )
}