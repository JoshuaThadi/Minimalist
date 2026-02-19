import { BlogCard } from "./blog-card"

const blogs = [
  {
    image: "/blog-1.jpg",
    title: "Optimizing Workflow Processes for Maximum Efficiency",
    description:
      "Understand the importance of optimizing workflow processes to enhance efficiency...",
    author: { name: "Joel Keneley", avatar: "/avatar-joel.jpg" },
    readTime: "4 Min Read",
  },
  {
    image: "/blog-2.jpg",
    title: "Best Practices for Effective Project Documentation",
    description:
      "Dive into the importance of maintaining thorough project documentation. Learn best...",
    author: { name: "Sarah Devis", avatar: "/avatar-sarah.jpg" },
    readTime: "10 Min Read",
  },
  {
    image: "/blog-3.jpg",
    title: "Managing Stakeholder Expectations for Project Success",
    description:
      "Understand the importance of stakeholder management in project planning. Lear...",
    author: { name: "Micheal Smith", avatar: "/avatar-micheal.jpg" },
    readTime: "14 Min Read",
  },
]

export function BlogGrid() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  )
}
