import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default Index;
