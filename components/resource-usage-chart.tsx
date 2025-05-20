"use client"

export function ResourceUsageChart() {
  // In a real case, a chart would be implemented here using a library like recharts or chart.js
  // For this example, we will use a simple visual representation

  const projects = [
    { name: "Website Redesign", percentage: 35, color: "bg-blue-500" },
    { name: "CRM Implementation", percentage: 25, color: "bg-green-500" },
    { name: "Q2 Marketing Campaign", percentage: 15, color: "bg-yellow-500" },
    { name: "Mobile App Development", percentage: 20, color: "bg-purple-500" },
    { name: "Others", percentage: 5, color: "bg-gray-500" },
  ]

  return (
    <div className="space-y-6">
      <div className="h-8 w-full flex rounded-md overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.color} h-full`}
            style={{ width: `${project.percentage}%` }}
            title={`${project.name}: ${project.percentage}%`}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${project.color}`} />
            <div className="text-sm">{project.name}</div>
            <div className="text-sm font-medium ml-auto">{project.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}