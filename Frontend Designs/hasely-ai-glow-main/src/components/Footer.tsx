import haselyLogo from "@/assets/hasely-logo.png";

const footerLinks = {
  Platform: ["Overview", "Features", "Integrations", "Pricing"],
  Solutions: ["Workflow Automation", "Risk Intelligence", "Compliance", "Operations"],
  Resources: ["Documentation", "Blog", "Case Studies", "Webinars"],
  Company: ["About", "Careers", "Contact", "Press"],
};

const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground py-16 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={haselyLogo} alt="Hasely" className="w-7 h-7 rounded" />
              <span className="font-display font-semibold text-lg">hasely</span>
            </div>
            <p className="text-sm text-hero-muted leading-relaxed">
              Automate operations with trusted AI agents.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-hero-muted">© 2026 Hasely. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-hero-muted hover:text-hero-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-hero-muted hover:text-hero-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
