import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import platformDashboard from "@/assets/platform-dashboard.png";

const PlatformSection = () => {
  return (
    <section id="platform" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold mb-6">
              Platform
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              <span className="text-primary italic">Simplified</span>
              <br />
              <span className="text-foreground">
                AI agent management
                <br />
                and compliance
              </span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              Hasely simplifies AI operations and compliance by using trusted agents to manage complex workflows — helping your team monitor their automation impact throughout their entire operation, without the need for deep technical knowledge or big budgets.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-5 py-2.5 rounded text-xs font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              Book a demo <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src={platformDashboard}
              alt="Hasely platform dashboard"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
