import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Design Systems",
    description: "Scalable component libraries built for consistency across every touchpoint.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Lightning-fast experiences optimized for speed and user engagement.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Production-grade architecture that grows with your business needs.",
  },
  {
    icon: Sparkles,
    title: "Pixel Perfect",
    description: "Meticulous attention to detail in every interaction and transition.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            What we do best
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
