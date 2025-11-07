import HeroSection from './components/HeroSection';
import ValueBlock from './components/ValueBlock';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <HeroSection />
      <ValueBlock />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
