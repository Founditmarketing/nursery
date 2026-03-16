import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import PlantList from './pages/PlantList';
import CategoryPage from './pages/CategoryPage';
import ScrollToHashElement from './components/ScrollToHash';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-emerald-200 selection:text-emerald-900 flex flex-col">
      <ScrollToHashElement />
      <Navigation />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plant-list" element={<PlantList />} />
          <Route path="/category/:id" element={<CategoryPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

