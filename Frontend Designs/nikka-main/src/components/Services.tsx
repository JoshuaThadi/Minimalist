import { motion } from "framer-motion";
import { Lightbulb, PenTool, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "We help define your brand's core identity, positioning, and voice to create meaningful market differentiation.",
  },
  {
    icon: PenTool,
    title: "Design & Identity",
    description: "From logos to complete visual systems, we craft identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Beautiful, performant websites and digital platforms built with modern technologies and a focus on user experience.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven campaigns and content strategies that grow your audience, engagement, and revenue.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground leading-tight">
              Services tailored to your growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                className="group p-8 border border-border hover:border-primary/30 transition-colors bg-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <service.icon className="h-5 w-5 text-primary mb-5" />
                <h3 className="text-lg font-medium text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
