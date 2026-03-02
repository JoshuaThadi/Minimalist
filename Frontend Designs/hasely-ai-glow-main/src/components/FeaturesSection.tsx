import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import featureWorkflow from "@/assets/feature-workflow.png";
import featureAutomation from "@/assets/feature-automation.png";
import featureIntelligence from "@/assets/feature-intelligence.png";

const features = [
  {
    title: "Workflow Agents",
    description: "Automate repetitive tasks across your global operations with intelligent AI agents.",
    image: featureWorkflow,
    link: "Deploy workflow agents now",
    stat: "4.2",
    compliance: "Compliant with ISO/IEC 42001, AI Ethics Guidelines, ISO 27001",
  },
  {
    title: "Operations AI",
    description: "Let AI coordinate your operations with precision and real-time efficiency.",
    image: featureAutomation,
    link: "Explore operations AI",
    stat: "3.8",
    compliance: "Compliant with NIST AI RMF, SOC 2 Type II, GDPR",
  },
  {
    title: "Risk Intelligence",
    description: "Reduce risk across your entire supply chain with AI-powered monitoring.",
    image: featureIntelligence,
    link: "Learn about risk AI",
    stat: "5.1",
    compliance: "Compliant with DPIA",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading - matching italic purple + black style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.2] font-medium">
            <span className="text-primary italic">Lead your operations to success.</span>
            <br />
            <span className="text-foreground">
              Easily deploy AI agents in line with emerging standards, all within one intuitive platform.
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-5">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Stat + arrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-foreground">{feature.stat}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
              </div>

              {/* Link */}
              <a href="#" className="text-xs text-primary hover:underline">
                {feature.link}
              </a>

              {/* Compliance line */}
              <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed">
                {feature.compliance}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
