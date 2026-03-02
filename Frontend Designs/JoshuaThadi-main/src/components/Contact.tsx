import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto">
        <div className="flex items-start gap-4 mb-8">
          <span className="text-3xl lg:text-4xl">👋</span>
          <h2 className="text-display-sm font-normal max-w-lg">
            Let's talk about a project, collaboration or an idea you may have
          </h2>
        </div>

        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity rounded-full">
            Drop me a line
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
