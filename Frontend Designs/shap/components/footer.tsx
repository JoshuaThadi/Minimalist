import { Settings, ArrowUpRight, Mail, MapPin, Phone, Twitter, Linkedin, Github, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer>
      {/* Newsletter CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-accent px-5 py-10 text-center sm:rounded-3xl sm:px-8 sm:py-14 md:px-16">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-foreground/5" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-foreground/5" />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-lg text-balance text-2xl font-bold tracking-tight text-accent-foreground sm:text-3xl md:text-4xl text-white">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-sm text-accent-foreground/70 sm:mt-4 text-white">
              Subscribe to our newsletter and never miss out on expert tips, industry trends, and
              project management best practices.
            </p>
            <div className="mx-auto mt-6 flex max-w-md flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-full bg-accent-foreground/10 px-4 py-3 backdrop-blur-sm sm:px-5">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent-foreground/60 text-white" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-sm text-accent-foreground outline-none placeholder:text-accent-foreground/50"
                />
              </div>
              <button className="flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90">
                Subscribe
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-accent">
        <div className="mx-auto max-w-6xl px-5 pt-12 pb-6 sm:px-6 sm:pt-16 sm:pb-8">
          {/* Top Row: Logo + Nav Columns */}
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-foreground">
                  <Settings className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xl font-bold text-accent-foreground">Shap</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-accent-foreground/60 sm:mt-5 text-white">
                Empowering teams with insights, tools, and strategies to elevate project management
                and drive business success.
              </p>
              <div className="mt-5 flex items-center gap-3 sm:mt-6">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 text-accent-foreground/70 transition-colors hover:bg-accent-foreground/20 hover:text-accent-foreground"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 text-accent-foreground/70 transition-colors hover:bg-accent-foreground/20 hover:text-accent-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 text-accent-foreground/70 transition-colors hover:bg-accent-foreground/20 hover:text-accent-foreground"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-foreground/10 text-accent-foreground/70 transition-colors hover:bg-accent-foreground/20 hover:text-accent-foreground"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">
                Product
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {["Features", "Integrations", "Pricing", "Changelog", "Roadmap"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white text-accent-foreground/60 transition-colors hover:text-accent-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">
                Resources
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {["Blog", "Documentation", "Guides", "Help Center", "Community"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white text-accent-foreground/60 transition-colors hover:text-accent-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">
                Company
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {["About Us", "Careers", "Press", "Partners", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white text-accent-foreground/60 transition-colors hover:text-accent-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">
                Contact
              </h3>
              <ul className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-4">
                <li className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-foreground/60" />
                  <span className="text-sm text-white  text-accent-foreground/60">hello@shapblog.com</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-foreground/60" />
                  <span className="text-sm text-white  text-accent-foreground/60">+1 (555) 000-0000</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-foreground/60" />
                  <span className="text-sm text-white text-accent-foreground/60">San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-accent-foreground/10 sm:mt-14" />

          {/* Bottom Row */}
          <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 md:flex-row md:justify-between">
            <p className="text-xs text-accent-foreground/50 sm:text-sm">
              &copy; 2026 Shap. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-xs text-accent-foreground/50 transition-colors hover:text-accent-foreground sm:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-accent-foreground/50 transition-colors hover:text-accent-foreground sm:text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs text-accent-foreground/50 transition-colors hover:text-accent-foreground sm:text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
