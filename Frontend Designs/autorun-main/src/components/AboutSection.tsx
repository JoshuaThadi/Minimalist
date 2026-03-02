import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            About
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground max-w-xl mx-auto mb-4 text-balance">
            Small team. Big ambition.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed mb-10">
            We're a tight-knit studio of designers and engineers who believe great products
            come from clarity of thought, not complexity. Less noise, more signal.
          </p>

          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { value: "150+", label: "Projects" },
              { value: "12y", label: "Experience" },
              { value: "98%", label: "Satisfaction" },
            ].map((s) => (
              <div key={s.label}>
                <span className="text-2xl md:text-3xl font-bold text-foreground block">{s.value}</span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
