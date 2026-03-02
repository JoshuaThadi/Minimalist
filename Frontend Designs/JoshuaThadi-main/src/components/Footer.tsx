import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Left - Logo & Tagline */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight leading-none mb-6">
              Joshua<br />Thadi<span className="text-muted-foreground">.</span>
            </h2>
            <p className="text-sm text-muted-foreground max-w-xs">
              Digital designer crafting meaningful experiences through design and code.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Navigation</h3>
            <nav className="space-y-3">
              <a href="#about" className="block text-sm hover-line w-fit">About</a>
              <a href="#projects" className="block text-sm hover-line w-fit">Projects</a>
              <a href="#services" className="block text-sm hover-line w-fit">Services</a>
              <a href="#process" className="block text-sm hover-line w-fit">Process</a>
              <a href="#contact" className="block text-sm hover-line w-fit">Contact</a>
            </nav>
          </div>

          {/* Right - Get in Touch */}
          <div className="lg:col-span-3">
            <h3 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">Get in Touch</h3>
            <a 
              href="mailto:contact@todordimov.com" 
              className="text-sm hover-line inline-flex items-center gap-1 mb-6"
            >
              contact@joshuathadi.com
              <ArrowUpRight className="h-3 w-3" />
            </a>
            
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              <a
                href="mailto:contact@todordimov.com"
                className="p-2.5 border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Todor Dimov. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed & developed with precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
