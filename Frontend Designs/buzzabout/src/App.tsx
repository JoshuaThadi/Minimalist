import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import ScrollingBanner from './components/ScrollingBanner';
import UseCases from './components/UseCases';
import Setup from './components/Setup';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <Features />
      <ScrollingBanner />
      <UseCases />
      <Setup />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
