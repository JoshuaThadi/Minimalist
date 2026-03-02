import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "@/components/Projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-24">
        <div className="container mx-auto">
          <div className="mb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-6xl font-normal mb-4">All Projects</h1>
            <p className="text-muted-foreground">
              A collection of my featured work from recent years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
