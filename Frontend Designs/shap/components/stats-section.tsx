import { Users, FileText, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: FileText,
    value: "200+",
    label: "Articles Published",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Active Readers",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Reader Satisfaction",
  },
  {
    icon: Award,
    value: "15+",
    label: "Industry Awards",
  },
]

export function StatsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20">
      <div className="rounded-2xl border border-border bg-card p-6 sm:rounded-3xl sm:p-8 md:p-12">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-2xl">
                <stat.icon className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{stat.value}</span>
              <span className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
