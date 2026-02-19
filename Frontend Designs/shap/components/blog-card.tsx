"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface BlogCardProps {
  image: string
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  readTime: string
}

export function BlogCard({ image, title, description, author, readTime }: BlogCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative mb-3 overflow-hidden rounded-xl sm:mb-4 sm:rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={400}
          height={280}
          className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground shadow-md transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          Open Blog
          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </div>
      </div>

      <h3 className="mb-1.5 text-sm font-semibold leading-snug text-foreground sm:mb-2 sm:text-base">{title}</h3>
      <p className="mb-3 text-xs leading-relaxed text-muted-foreground line-clamp-2 sm:mb-4 sm:text-sm">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={author.avatar}
            alt={author.name}
            width={28}
            height={28}
            className="h-6 w-6 rounded-full object-cover sm:h-7 sm:w-7"
          />
          <span className="text-xs font-medium text-foreground sm:text-sm">{author.name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{readTime}</span>
      </div>
    </article>
  )
}
