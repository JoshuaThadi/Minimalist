import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <p className="text-xl font-semibold text-foreground mb-4">Nikka</p>
            <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
              A creative agency crafting digital experiences through strategy, design, and technology.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Navigation</p>
            <div className="space-y-2">
              {["Case Studies", "Services", "About", "News"].map((item) => (
                <a key={item} href="#" className="block text-sm text-foreground/70 hover:text-foreground transition-colors font-light">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">Connect</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-light">
            © 2024 Nikka Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
