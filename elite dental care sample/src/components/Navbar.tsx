import React from 'react';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Our Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-clinical-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className={`text-xl font-display font-bold tracking-tight ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                ELITE<span className="text-clinical-blue">DENTAL</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-clinical-blue ${scrolled ? 'text-navy-900' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="bg-clinical-blue hover:bg-navy-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-clinical-blue/20"
            >
              <Calendar size={18} />
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-navy-900' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-navy-900 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#appointment"
                  className="w-full bg-clinical-blue text-white px-6 py-4 rounded-xl text-center font-bold block"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
