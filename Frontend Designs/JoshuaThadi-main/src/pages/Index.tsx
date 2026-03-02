import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <SelectedWork />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
