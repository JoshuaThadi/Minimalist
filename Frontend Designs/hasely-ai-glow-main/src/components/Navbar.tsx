import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import haselyLogo from "@/assets/hasely-logo.png";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Customers", href: "#" },
  { label: "Solutions", href: "#features" },
  { label: "Resources", href: "#" },
  { label: "Company", href: "#" },
  { label: "Jobs", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-hero-muted/10">
      <div className="container mx-auto flex items-center justify-between h-14 px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={haselyLogo} alt="Hasely" className="w-7 h-7 rounded" />
          <span className="font-display font-semibold text-sm text-hero-foreground uppercase tracking-wider">
            Hasely
          </span>
        </a>

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-hero-muted hover:text-hero-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#" className="text-xs text-hero-muted hover:text-hero-foreground transition-colors">
            Sign in
          </a>
          <a
            href="#"
            className="text-xs bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90 transition-opacity font-medium"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden text-hero-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-hero border-t border-hero-muted/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block text-sm text-hero-muted hover:text-hero-foreground py-1">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <ThemeToggle />
            <a href="#" className="text-xs bg-primary text-primary-foreground px-4 py-2 rounded font-medium">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
