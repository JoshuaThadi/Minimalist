import { Search, Newspaper } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center px-5 pt-28 pb-10 text-center sm:px-6 sm:pt-32 sm:pb-12">
      <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
        <Newspaper className="h-4 w-4" />
        Our Blogs
      </div>

      <h1 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
        Insights and Inspiration, Explore Our Blog
      </h1>

      <p className="mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
        Dive into our blog for expert insights, tips, and industry trends to elevate your project
        management journey.
      </p>

      <div className="mt-6 flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-card px-4 py-3 shadow-sm transition-shadow focus-within:shadow-md focus-within:ring-2 focus-within:ring-accent/30 sm:mt-8 sm:px-5 sm:py-3.5">
        <input
          type="text"
          placeholder="Search for Blogs..."
          className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
        <Search className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
      </div>
    </section>
  )
}
