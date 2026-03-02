import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/components/Projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-24">
          <h1 className="text-4xl font-normal">Project not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 hover-line">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-24">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="lg:col-span-4">
            <h1 className="text-4xl lg:text-5xl font-normal mb-4">
              {project.name}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {project.category} · /{project.year}
            </p>
            <p className="text-base leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="text-base leading-relaxed mb-8">
              This project involved creating a comprehensive digital experience with focus on user experience, visual design, and seamless functionality. The goal was to create an intuitive interface that helps users accomplish their goals efficiently.
            </p>

            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity rounded-full w-fit"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Live Site
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors rounded-full w-fit"
              >
                <Github className="h-4 w-4" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <h2 className="text-2xl font-normal mb-8">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs text-muted-foreground mb-2">Role</h3>
              <p className="text-base">Design & Development</p>
            </div>
            <div>
              <h3 className="text-xs text-muted-foreground mb-2">Timeline</h3>
              <p className="text-base">4 weeks</p>
            </div>
            <div>
              <h3 className="text-xs text-muted-foreground mb-2">Tools</h3>
              <p className="text-base">Figma, Webflow, VS Code</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
