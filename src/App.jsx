import HeroSection from './components/HeroSection';
import PainBlock from './components/PainBlock';
import ValueBlock from './components/ValueBlock';
import StepsBlock from './components/StepsBlock';
import TargetBlock from './components/TargetBlock';
import ImpactBlock from './components/ImpactBlock';
import ReviewsBlock from './components/ReviewsBlock';
import CTASection from './components/CTASection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <HeroSection />
      <PainBlock />
      <ValueBlock />
      <StepsBlock />
      <TargetBlock />
      <ImpactBlock />
      <ReviewsBlock />
      <CTASection />
      <LeadForm />
      <Footer />
    </div>
  );
}

export default App;
