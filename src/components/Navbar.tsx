import React from 'react';
import { Phone, Menu, X, Calendar, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onBooking }: { onBooking: () => void }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Our Team', href: '#team' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="relative">
              <div className="w-10 h-10 clinical-gradient rounded-xl flex items-center justify-center shadow-lg shadow-clinical-blue/30">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8.2 9.3 9.3 10.1C7.8 10.6 6 12.2 6 15C6 18.5 8.5 22 12 22C15.5 22 18 18.5 18 15C18 12.2 16.2 10.6 14.7 10.1C15.8 9.3 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z" fill="white" />
                </svg>
              </div>
            </div>
            <div>
              <span className={`text-lg font-display font-bold tracking-tight leading-none ${scrolled ? 'text-navy-900' : 'text-white'}`}>
                Elite<span className="text-clinical-blue">Dental</span>
              </span>
              <p className={`text-[9px] uppercase tracking-[0.2em] font-sans font-semibold leading-none mt-0.5 ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>Premium Care</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`text-sm font-medium transition-colors hover:text-clinical-blue cursor-pointer ${scrolled ? 'text-navy-900' : 'text-white/90'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Group */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+911234567890"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${scrolled ? 'text-navy-900 hover:text-clinical-blue' : 'text-white/90 hover:text-white'
                }`}
            >
              <Phone size={15} />
              +91 12345 67890
            </a>
            <button
              onClick={onBooking}
              className="bg-clinical-blue hover:bg-navy-800 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-clinical-blue/30 flex items-center gap-2"
            >
              <Calendar size={15} />
              Book Free Consult
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 cursor-pointer ${scrolled ? 'text-navy-900' : 'text-white'}`}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-navy-900 hover:bg-gray-50 rounded-xl cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:+911234567890" className="flex items-center justify-center gap-2 py-3 border border-clinical-blue text-clinical-blue rounded-xl font-bold">
                  <Phone size={16} /> Call Now: +91 12345 67890
                </a>
                <button
                  onClick={() => { onBooking(); setIsOpen(false); }}
                  className="w-full bg-clinical-blue text-white py-4 rounded-xl font-bold clinical-gradient"
                >
                  Book Free Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
