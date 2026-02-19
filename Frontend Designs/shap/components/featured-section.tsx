import Image from "next/image"
import { ArrowUpRight, Star } from "lucide-react"

export function FeaturedSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-24">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-center text-center sm:mb-12">
        <div className="mb-4 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
          <Star className="h-4 w-4" />
          Featured Blogs
        </div>
        <h2 className="max-w-lg text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Dive into Our Top Blogs
        </h2>
        <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          Explore our curated selection of top blogs, offering expert insights and valuable tips for
          project management success.
        </p>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left: Main Featured Blog */}
        <article className="group cursor-pointer">
          <h3 className="mb-2 text-lg font-semibold text-foreground sm:text-xl">
            Creating Effective Project Roadmaps for Success
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-5">
            Learn how to develop comprehensive project roadmaps that provide clear direction, outline
            key milestones, and ensure all team members...
          </p>
          <div className="relative mb-4 overflow-hidden rounded-2xl sm:mb-5">
            <Image
              src="/featured-blog.jpg"
              alt="Creating Effective Project Roadmaps for Success"
              width={600}
              height={400}
              className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/avatar-jenney.jpg"
                alt="Jenney Cord"
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <span className="text-sm font-medium text-foreground">Jenney Cord</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-xs text-muted-foreground">Tasks</span>
              <span className="text-xs text-muted-foreground">8 Min Read</span>
            </div>
          </div>
        </article>

        {/* Right: Side Blog Cards */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Card 1 - with small image */}
          <article className="group flex cursor-pointer items-stretch gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-muted sm:gap-4 sm:p-4">
            <div className="relative w-20 flex-shrink-0 overflow-hidden rounded-xl sm:w-24">
              <Image
                src="/blog-2.jpg"
                alt="Managing Stakeholder Expectations"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1.5 sm:gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground sm:px-3">
                  Collaboration
                </span>
                <span className="text-xs text-muted-foreground">14 Min Read</span>
              </div>
              <h4 className="text-sm font-semibold leading-snug text-foreground">
                Managing Stakeholder Expectations for Project Success
              </h4>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground sm:h-9 sm:w-9">
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>
          </article>

          {/* Card 2 - no image */}
          <article className="group flex cursor-pointer items-stretch gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-muted sm:gap-4 sm:p-4">
            <div className="flex flex-1 flex-col justify-center gap-1.5 sm:gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground sm:px-3">
                  Collaboration
                </span>
                <span className="text-xs text-muted-foreground">4 Min Read</span>
              </div>
              <h4 className="text-sm font-semibold leading-snug text-foreground">
                Elevating Project Efficiency with Strategic Planning
              </h4>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground sm:h-9 sm:w-9">
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>
          </article>

          {/* Card 3 - large image with overlay */}
          <article className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border">
            <div className="relative h-44 w-full sm:h-52">
              <Image
                src="/reed.jpg"
                alt="Optimizing Workflow Processes"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground sm:h-9 sm:w-9">
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-sm sm:px-3">
                    Collaboration
                  </span>
                  <span className="text-xs text-white/80">4 Min Read</span>
                </div>
                <h4 className="mb-1 text-sm font-semibold leading-snug text-white">
                  Optimizing Workflow Processes for Maximum Efficiency
                </h4>
                <p className="hidden text-xs leading-relaxed text-white/70 line-clamp-1 sm:block">
                  Understand the importance of optimizing workflow processes to...
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
