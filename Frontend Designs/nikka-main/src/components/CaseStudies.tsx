import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const cases = [
  {
    image: caseStudy1,
    category: "Branding",
    title: "Luxury & Grace — Complete Brand Identity",
    year: "2024",
  },
  {
    image: caseStudy2,
    category: "Web Design",
    title: "Artisan Ceramics — E-Commerce Platform",
    year: "2024",
  },
  {
    image: caseStudy3,
    category: "Marketing",
    title: "Vivid Media — Digital Campaign Strategy",
    year: "2023",
  },
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
              Case Studies
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1 text-sm text-primary hover:underline underline-offset-4">
            View all projects <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.a
              key={item.title}
              href="#"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] md:h-[340px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.category}</span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{item.year}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
