import { motion } from "framer-motion";

const stats = [
  { value: "26,519M", label: "Data points", unit: "across platforms" },
  { value: "0.2115", label: "Avg. risk score", unit: "industry benchmark" },
  { value: "99.8%", label: "Uptime", unit: "enterprise grade" },
  { value: "150+", label: "Agent templates", unit: "ready to deploy" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-section-alt border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Operations Intelligence
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Supply chain risk
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Track your entire operational footprint with real-time AI-powered analytics and risk monitoring across every tier of your supply chain.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Explore platform
            </a>
          </motion.div>

          {/* Right stats grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-5 border border-border">
                <p className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-foreground mt-1">{stat.label}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{stat.unit}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
