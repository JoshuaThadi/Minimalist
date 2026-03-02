import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-meeting.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
            Creative Agency
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-foreground mb-8">
            We craft digital
            <br />
            experiences that
            <br />
            <span className="font-medium text-primary">matter.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mb-10 leading-relaxed">
            Nikka is a strategic creative agency helping brands stand out through thoughtful design, strategy, and technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#cases"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
            >
              View Case Studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground text-sm hover:bg-secondary transition-colors"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={heroImage}
          alt="Creative team working together"
          className="w-full h-[300px] md:h-[550px] object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
