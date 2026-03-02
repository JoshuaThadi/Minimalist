import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "ultra-ooh",
    name: "Ultra Ooh",
    category: "Web Design, Webflow Development",
    year: "22",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    description: "A comprehensive out-of-home advertising platform with modern design.",
  },
  {
    id: "alex-becher",
    name: "Alex Becher",
    category: "Web Design, Webflow Development",
    year: "21",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    description: "Personal portfolio for a creative director showcasing their work.",
  },
  {
    id: "kordes-invest",
    name: "Kordes Invest",
    category: "Web Design, Webflow Development",
    year: "21",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    description: "Investment firm website with a focus on trust and professionalism.",
  },
  {
    id: "tribevibe",
    name: "Tribevibe",
    category: "Webflow Development",
    year: "21",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    description: "Community platform connecting travelers around the world.",
  },
];

export { projects };

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-xl lg:text-2xl font-normal">
            Projects<sup className="text-xs align-super">({projects.length})</sup>
          </h2>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Featured work from recent years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group"
            >
              <div className="overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl lg:text-2xl font-normal mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  /{project.year}
                </span>
              </div>
              <Link
                to={`/project/${project.id}`}
                className="mt-4 inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity rounded-full"
              >
                View Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 border border-border px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-secondary transition-colors rounded-full w-full sm:w-auto"
          >
            More Projects
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
