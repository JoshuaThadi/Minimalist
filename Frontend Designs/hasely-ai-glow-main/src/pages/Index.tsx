import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustBar from "@/components/TrustBar";
import PlatformSection from "@/components/PlatformSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TrustBar />
      <PlatformSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
