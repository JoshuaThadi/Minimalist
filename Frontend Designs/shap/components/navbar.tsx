"use client"

import { ChevronDown, Settings, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-4">
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-1 rounded-full border border-border bg-card/90 px-2 py-2 shadow-sm backdrop-blur-md md:flex">
        <a
          href="#"
          className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          App
        </a>
        <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
          Others
          <ChevronDown className="h-3.5 w-3.5" />
        </button>

        <div className="mx-2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card">
          <Settings className="h-4 w-4 text-foreground" />
        </div>

        <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
          All Pages
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <a
          href="#"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
        >
          Get Template
        </a>

        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
        )}
      </nav>

      {/* Mobile Navigation Bar */}
      <nav className="flex w-full items-center justify-between rounded-full border border-border bg-card/90 px-3 py-2 shadow-sm backdrop-blur-md md:hidden">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card">
            <Settings className="h-4 w-4 text-foreground" />
          </div>
          <span className="text-sm font-bold text-foreground">Shap</span>
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-foreground" />
              ) : (
                <Moon className="h-4 w-4 text-foreground" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-4 w-4 text-foreground" />
            ) : (
              <Menu className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-card p-4 shadow-lg">
            <a
              href="#"
              className="rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              onClick={() => setMobileOpen(false)}
            >
              App
            </a>
            <button className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              Others
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              All Pages
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="mt-2 border-t border-border pt-3">
              <a
                href="#"
                className="flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:opacity-90"
                onClick={() => setMobileOpen(false)}
              >
                Get Template
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
