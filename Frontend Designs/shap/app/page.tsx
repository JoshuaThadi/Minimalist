import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FilterTabs } from "@/components/filter-tabs"
import { BlogGrid } from "@/components/blog-grid"
import { FeaturedSection } from "@/components/featured-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FilterTabs />
        <BlogGrid />
        <FeaturedSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
