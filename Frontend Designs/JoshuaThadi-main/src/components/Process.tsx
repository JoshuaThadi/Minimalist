import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const processSteps = [
  {
    number: "01.",
    title: "UX / Wireframing",
    content: "Understanding your needs and creating the blueprint for your project.",
  },
  {
    number: "02.",
    title: "Web Design",
    content: "Crafting beautiful, user-centered designs that align with your brand.",
  },
  {
    number: "03.",
    title: "Web Development",
    content: "Building responsive, performant websites with clean code.",
  },
  {
    number: "04.",
    title: "Analytics Setup / Support",
    content: "Setting up tracking and providing ongoing support for your project.",
  },
];

const Process = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-24 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-display-sm font-normal mb-6">
              My way of getting things done
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Fast and transparent, the path to owning a website that will represent your brand in the best of light is only 4 weeks away. Standing by the Waterfall methodology, I assure a step-by-step completion of the whole process.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="border-t border-border last:border-b"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex items-center justify-between text-left hover:bg-secondary/30 -mx-2 px-2 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground w-8">
                        {step.number}
                      </span>
                      <span className="text-base font-normal">{step.title}</span>
                    </div>
                    {openIndex === index ? (
                      <Minus className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="pb-5 pl-12 pr-8 animate-fade-in">
                      <p className="text-sm text-muted-foreground">
                        {step.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
