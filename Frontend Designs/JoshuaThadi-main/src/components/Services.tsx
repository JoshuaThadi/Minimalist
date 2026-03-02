const services = [
  {
    number: "01",
    title: "Design",
    description: "I make web designs that engage your audience and create the user experience you want.",
  },
  {
    number: "02",
    title: "Development",
    description: "Bringing visuals to life through developing highly functional web solutions.",
  },
  {
    number: "03",
    title: "The Full Package",
    description: "Get the best of both worlds for your website, capture your brand identity and get fully functional features.",
  },
];

const Services = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto">
        <h2 className="text-xl lg:text-2xl font-normal italic mb-12">
          I can help you with ...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <span className="text-4xl lg:text-5xl font-light text-muted-foreground/40 block mb-4">
                {service.number}
              </span>
              <h3 className="text-base font-medium mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
