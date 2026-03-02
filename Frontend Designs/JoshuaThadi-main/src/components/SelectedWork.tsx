import { useState } from "react";
import { ChevronDown } from "lucide-react";

const workExperience = [
  {
    name: "Microsoft",
    role: "Senior Product Designer",
    description: "Led the design of enterprise productivity tools, collaborating with cross-functional teams to deliver user-centered solutions. Focused on improving user workflows and accessibility across Microsoft 365 suite.",
    year: "23-Present",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    responsibilities: [
      "Led design system initiatives for Teams platform",
      "Conducted user research with 500+ enterprise users",
      "Improved onboarding conversion by 40%",
    ],
  },
  {
    name: "Google",
    role: "UX Designer",
    description: "Designed intuitive interfaces for Google Cloud Platform, focusing on simplifying complex workflows for developers and enterprises. Collaborated closely with engineering to ensure pixel-perfect implementation.",
    year: "21-23",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    responsibilities: [
      "Redesigned GCP console navigation",
      "Created design documentation and guidelines",
      "Mentored junior designers on the team",
    ],
  },
  {
    name: "Spotify",
    role: "Product Designer",
    description: "Worked on the Spotify for Artists platform, helping musicians understand their audience through data visualization and intuitive dashboards. Shipped features used by millions of artists worldwide.",
    year: "19-21",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png",
    responsibilities: [
      "Designed artist analytics dashboard",
      "Improved playlist submission flow",
      "Led A/B testing initiatives",
    ],
  },
  {
    name: "Airbnb",
    role: "Junior Designer",
    description: "Started my career designing host tools and guest experience features. Learned the fundamentals of product design while working alongside talented designers on impactful projects.",
    year: "18-19",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png",
    responsibilities: [
      "Supported host onboarding redesign",
      "Created mobile app illustrations",
      "Assisted in design system maintenance",
    ],
  },
];

const SelectedWork = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="work" className="py-24 border-t border-border">
      <div className="container mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xl lg:text-2xl font-normal">
            Work Experience<sup className="text-xs align-super">({workExperience.length})</sup>
          </h2>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Companies I've had the pleasure to work with
          </p>
        </div>

        <div className="space-y-0">
          {workExperience.map((work, index) => (
            <div
              key={index}
              className="border-t border-border first:border-t-0"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="w-full py-6 cursor-pointer hover:bg-secondary/30 -mx-4 px-4 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl lg:text-4xl font-normal mb-1 transition-transform truncate">
                      {work.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {work.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <span className="text-sm sm:text-lg lg:text-xl text-muted-foreground">
                      /{work.year}
                    </span>
                    <ChevronDown 
                      className={`h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition-transform duration-300 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`} 
                    />
                  </div>
                </div>
              </button>

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-2 sm:px-4 pb-8 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 bg-secondary/50 p-4 sm:p-6 lg:p-8 rounded-lg">
                    {/* Company Logo */}
                    <div className="sm:col-span-2 lg:col-span-3 flex items-start justify-center sm:justify-start">
                      <div className="bg-background p-3 sm:p-4 rounded-lg w-20 h-20 sm:w-32 sm:h-32 flex items-center justify-center">
                        <img
                          src={work.image}
                          alt={`${work.name} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="sm:col-span-2 lg:col-span-5">
                      <h4 className="text-sm font-medium mb-2 sm:mb-3">{work.role}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {work.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="sm:col-span-2 lg:col-span-4">
                      <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                        Key Contributions
                      </h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {work.responsibilities.map((item, i) => (
                          <li key={i} className="text-xs sm:text-sm flex items-start gap-2">
                            <span className="text-muted-foreground mt-0.5 sm:mt-1">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-base font-medium mb-2">Want to see more?</h3>
          <p className="text-sm text-muted-foreground">
            Reach me out at{" "}
            <a href="mailto:contact@todordimov.com" className="hover-line text-foreground">
              contact@joshuathadi.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
