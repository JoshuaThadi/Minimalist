import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative bg-hero pt-10 overflow-hidden">
      <div className="relative min-h-[95vh] flex flex-col">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/40 to-transparent" />
        </div>

        {/* Main headline */}
        <div className="relative z-10 container mx-auto px-6 flex-1 flex items-end pb-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground max-w-5xl leading-[1.05] tracking-tight"
          >
            Simplified AI agent
            <br />
            management and
            <br />
            compliance
          </motion.h1>
        </div>

        {/* Bottom bar - mimics the reference exactly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 border-t border-hero-muted/20"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-hero-muted max-w-xl leading-relaxed uppercase tracking-wide">
              Risk analysis, compliance tracking, and operational automation — all powered by trusted AI agents to improve organisational performance.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-hero-muted/30 text-hero-foreground px-5 py-2.5 rounded text-xs font-medium uppercase tracking-wider hover:bg-hero-foreground/5 transition-colors"
              >
                Book a demo
              </a>
              <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:opacity-90 transition-opacity">
                <Play className="h-3.5 w-3.5 text-primary-foreground ml-0.5" fill="currentColor" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
