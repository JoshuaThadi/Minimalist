import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">
            Start a Project
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground tracking-tight mb-6 leading-tight">
            Have an idea?
            <br />
            Let's bring it to life.
          </h2>
          <p className="text-primary-foreground/70 font-light max-w-lg mx-auto mb-10 leading-relaxed">
            We're always excited to work on new projects. Tell us about your vision, and we'll help make it a reality.
          </p>
          <a
            href="mailto:hello@nikka.agency"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground text-primary text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
