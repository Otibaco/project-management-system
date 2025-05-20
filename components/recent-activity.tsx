import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivity() {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Ana Pérez</span> completed the task{" "}
            <span className="font-semibold">Design wireframes</span>
          </p>
          <p className="text-sm text-muted-foreground">2 hours ago</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>CG</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Carlos García</span> commented on{" "}
            <span className="font-semibold">API Implementation</span>
          </p>
          <p className="text-sm text-muted-foreground">4 hours ago</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">María Rodríguez</span> created a new project{" "}
            <span className="font-semibold">Q2 Marketing Campaign</span>
          </p>
          <p className="text-sm text-muted-foreground">6 hours ago</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@user" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium leading-none">
            <span className="font-semibold">Juan Pérez</span> assigned{" "}
            <span className="font-semibold">3 new tasks</span> to <span className="font-semibold">Ana Pérez</span>
          </p>
          <p className="text-sm text-muted-foreground">8 hours ago</p>
        </div>
      </div>
    </div>
  )
}