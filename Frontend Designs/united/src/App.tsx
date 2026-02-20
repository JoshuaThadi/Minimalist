import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import DonationSection from './components/DonationSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-100 dark:bg-dark-bg transition-colors duration-300">
      <Header />
      <main>
        <HeroSection />
        <ImpactSection />
        <DonationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
