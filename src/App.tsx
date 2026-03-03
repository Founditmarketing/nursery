import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Inventory from './components/Inventory';
import Specials from './components/Specials';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navigation />
      <Hero />
      <About />
      <Inventory />
      <Specials />
      <Reviews />
      <Footer />
    </div>
  );
}

