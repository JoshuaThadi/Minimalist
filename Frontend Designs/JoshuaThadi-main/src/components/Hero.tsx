import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          {/* Main Title */}
          <div className="lg:col-span-8">
            <h1 className="text-display font-normal">
              Digital
              <br />
              Designer
            </h1>
          </div>

          {/* Specialization Box */}
          <div className="lg:col-span-4 flex lg:justify-end lg:items-start">
            <div className="bg-foreground text-primary-foreground p-4 max-w-[180px]">
              <p className="text-xs leading-relaxed">
                Specialized in Web Design, UX / UI, Webflow, and Front End Development.
              </p>
            </div>
          </div>
        </div>

        {/* Description Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16 lg:mt-24">
          <div className="lg:col-span-6">
            <p className="text-base lg:text-lg leading-relaxed max-w-md">
              I'm helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity rounded-full">
              Drop me a line
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="lg:col-span-3 lg:col-start-8">
            <p className="text-xs text-muted-foreground mb-3">Let's get connected</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover-line">Dribbble</a>
              </li>
              <li>
                <a href="#" className="text-sm hover-line">Behance</a>
              </li>
              <li>
                <a href="#" className="text-sm hover-line">Linkedin</a>
              </li>
              <li>
                <a href="#" className="text-sm hover-line">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
