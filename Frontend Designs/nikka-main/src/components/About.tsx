import { motion } from "framer-motion";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Our office space"
              className="w-full h-[350px] md:h-[480px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">About Nikka</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6 leading-tight">
              A team dedicated to meaningful creative work.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Founded in 2018, Nikka brings together strategists, designers, and developers who believe that great work comes from understanding people. We partner with ambitious brands to create experiences that feel effortless but drive real results.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              Our process is collaborative and transparent — we treat every project as a partnership, not a transaction. From startups to established enterprises, we bring the same level of craft and care.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-medium text-foreground">120+</p>
                <p className="text-xs text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-medium text-foreground">7</p>
                <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-medium text-foreground">24</p>
                <p className="text-xs text-muted-foreground mt-1">Team Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
