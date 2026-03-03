import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <Leaf
                className={`w-8 h-8 transition-colors duration-500 ${
                  isScrolled ? 'text-emerald-700' : 'text-emerald-400 group-hover:text-emerald-300'
                }`}
              />
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                  isScrolled ? 'text-stone-900' : 'text-white'
                }`}
              >
                Southern Roots
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Catalog', 'Specials', 'Reviews'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-stone-600 hover:text-emerald-700' 
                      : 'text-stone-200 hover:text-white hover:text-shadow-sm'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 transition-transform hover:scale-105 active:scale-95"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-stone-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-stone-900' : 'text-white'} />
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
              {['About', 'Catalog', 'Specials', 'Reviews'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif italic text-stone-800 hover:text-emerald-700 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-medium mt-8 shadow-lg inline-block mx-auto"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
