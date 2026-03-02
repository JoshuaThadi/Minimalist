import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <a href="#" className="text-sm font-medium tracking-tight">
          Joshua Thadi
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("work")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection("process")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Drop me a line
          </button>
        </nav>

        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {theme === "light" ? (
            <>
              <Sun className="h-4 w-4" />
              <span className="hidden sm:inline">Light</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span className="hidden sm:inline">Dark</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
