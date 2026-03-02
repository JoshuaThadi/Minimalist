import { motion } from "framer-motion";

const LogoSvg = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center shrink-0 ${className}`}>{children}</div>
);

const logos = [
  // Google
  <LogoSvg key="google">
    <svg viewBox="0 0 272 92" width="100" height="34">
      <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="hsl(var(--foreground))" opacity="0.3"/>
      <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="hsl(var(--foreground))" opacity="0.3"/>
      <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="hsl(var(--foreground))" opacity="0.3"/>
      <path d="M225 3v65h-9.5V3h9.5z" fill="hsl(var(--foreground))" opacity="0.3"/>
      <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.96 0-11.84 4.37-11.59 12.93z" fill="hsl(var(--foreground))" opacity="0.3"/>
      <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z" fill="hsl(var(--foreground))" opacity="0.3"/>
    </svg>
  </LogoSvg>,
  // Microsoft text
  <LogoSvg key="microsoft">
    <span className="font-display font-semibold text-xl md:text-2xl text-foreground/25 tracking-tight select-none">Microsoft</span>
  </LogoSvg>,
  // Amazon
  <LogoSvg key="amazon">
    <span className="font-display font-bold text-xl md:text-2xl text-foreground/25 tracking-tight select-none italic">amazon</span>
  </LogoSvg>,
  // Salesforce
  <LogoSvg key="salesforce">
    <span className="font-display font-semibold text-xl md:text-2xl text-foreground/25 tracking-tight select-none">salesforce</span>
  </LogoSvg>,
  // Toyota
  <LogoSvg key="toyota">
    <span className="font-display font-bold text-xl md:text-2xl text-foreground/25 tracking-wider select-none uppercase">Toyota</span>
  </LogoSvg>,
  // Deloitte
  <LogoSvg key="deloitte">
    <span className="font-display font-semibold text-xl md:text-2xl text-foreground/25 tracking-tight select-none">Deloitte.</span>
  </LogoSvg>,
  // SAP
  <LogoSvg key="sap">
    <span className="font-display font-bold text-xl md:text-2xl text-foreground/25 tracking-wider select-none">SAP</span>
  </LogoSvg>,
  // Oracle
  <LogoSvg key="oracle">
    <span className="font-display font-bold text-xl md:text-2xl text-foreground/25 tracking-tight select-none uppercase">Oracle</span>
  </LogoSvg>,
];

const TrustBar = () => {
  return (
    <section className="py-14 bg-section-alt border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]"
        >
          Trusted by 100,000+ customers at the world's leading companies
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-section-alt to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-section-alt to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max">
          {/* Duplicate logos for seamless scroll */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center px-8 md:px-12">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
