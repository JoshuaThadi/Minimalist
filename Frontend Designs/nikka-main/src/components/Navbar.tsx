import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Case Studies", href: "#cases" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
          Nikka
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 space-y-3 bg-background">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-sm text-muted-foreground hover:text-foreground">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <ThemeToggle />
            <a href="#contact" className="text-sm px-5 py-2.5 rounded-full bg-primary text-primary-foreground">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
