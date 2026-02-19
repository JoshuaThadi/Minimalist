"use client"

import { useState } from "react"

const categories = ["All", "Tasks", "Collaboration", "Productivity", "Strategies"]

export function FilterTabs() {
  const [active, setActive] = useState("All")

  return (
    <section className="flex flex-col items-center gap-4 px-5 pb-10 sm:px-6">
      <span className="text-sm font-medium text-foreground">Top Picks</span>
      <div className="flex w-full max-w-full items-center justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex-shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card text-foreground hover:bg-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  )
}
