import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PremiumMenu } from './components/PremiumMenu';
import { Gallery } from './components/Gallery';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface-lighter text-slate-800 font-sans selection:bg-brand-500/30 selection:text-brand-900">
      <Navbar />
      <Hero />
      <PremiumMenu />
      <Gallery />
      <ContactAndLocation />
      <Footer />
      
      {/* Background radial gradient fix for the whole page bottom */}
      <div className="fixed inset-0 pointer-events-none z-[-10] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-surface-lighter to-surface-lighter opacity-80" />
    </div>
  );
}

export default App;
