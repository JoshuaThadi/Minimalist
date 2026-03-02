import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4 text-balance">
            Let's build something<br />together
          </h2>
          <a
            href="mailto:hello@aurum.studio"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Say Hello
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* Footer */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground text-sm">autorun</span>
          <span>© 2025 All rights reserved.</span>
          <div className="flex gap-5">
            {["Twitter", "Dribbble", "GitHub"].map((s) => (
              <a key={s} href="#" className="hover:text-foreground transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
