import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/images/logo.png"
                alt="RoxAnne's Southern Roots Nursery"
                className="h-14 md:h-24 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link to="/" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>Home</Link>
              <Link to="/about" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>About</Link>
              <Link to="/catalog" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>Catalog</Link>
              <Link to="/plant-list" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>Plant List</Link>
              <Link to="/gallery" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>Gallery</Link>
              <Link to="/#specials" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>Specials</Link>
              <Link to="/#reviews" className={`text-sm font-medium transition-all duration-300 ${isHomePage && !isScrolled ? 'text-stone-200 hover:text-white hover:text-shadow-sm' : 'text-stone-600 hover:text-emerald-700'}`}>Reviews</Link>

              <Link
                to="/contact"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 transition-transform hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isHomePage && !isScrolled ? 'text-white' : 'text-stone-900'} />
              ) : (
                <Menu className={isHomePage && !isScrolled ? 'text-white' : 'text-stone-900'} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-4"
          >
            <div className="flex flex-col gap-6 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.4 }}>
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">Home</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">About</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
                <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">Catalog</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
                <Link to="/plant-list" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">Plant List</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.4 }}>
                <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">Gallery</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
                <Link to="/#specials" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">Specials</Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>
                <Link to="/#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors">Reviews</Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium mt-8 shadow-lg inline-block mx-auto"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
