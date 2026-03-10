import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Star, Award, ChevronLeft, ChevronRight, CheckCircle2, Zap } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    alt: "Premium dental care",
    headline: "Premium Dental Care",
    sub: "Where Art Meets Precision.",
    badge: "ISO 9001:2015 Certified"
  },
  {
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000",
    alt: "Smile makeovers",
    headline: "Transform Your Smile",
    sub: "With Advanced Cosmetic Dentistry.",
    badge: "0% EMI Plans Available"
  },
  {
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2000",
    alt: "Happy patients",
    headline: "15,000+ Happy Smiles",
    sub: "Delivered With Excellence.",
    badge: "Award Winning Team"
  }
];

const certs = [
  { icon: ShieldCheck, label: 'ISO 9001:2015', color: 'text-clinical-blue' },
  { icon: Star, label: '4.9 / 5 Rating', color: 'text-yellow-400' },
  { icon: Award, label: 'Award Winning', color: 'text-clinical-blue' },
  { icon: CheckCircle2, label: '15+ Yrs Exp.', color: 'text-clinical-blue' },
];

export default function Hero({ onBooking }: { onBooking: () => void }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8500); // Slower slideshow timing
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToResults = () => {
    document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0 bg-navy-950">
        <AnimatePresence>
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-900/40" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute top-20 w-full z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-end">
          <div className="flex items-center gap-3">
            <span className="bg-gold text-navy-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">0% EMI Available</span>
            <a href="tel:+911234567890" className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors">
              <Zap size={10} />Emergency: 24/7
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-clinical-blue/20 border border-clinical-blue/30 text-clinical-blue text-xs font-bold uppercase tracking-wider mb-6">
                <Award size={13} />{slides[currentSlide].badge}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h1 key={`h-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                {slides[currentSlide].headline} <br />
                <span className="text-clinical-light">{slides[currentSlide].sub}</span>
              </motion.h1>
            </AnimatePresence>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Experience world-class dentistry where art meets precision. We provide pain-free, specialized care tailored to give you the perfect smile you deserve.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button onClick={onBooking} className="clinical-gradient hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-2xl shadow-clinical-blue/40 cursor-pointer">
                Book Free Consultation
              </button>
              <button onClick={scrollToResults} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-base transition-all cursor-pointer">
                View Our Results
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-white/10">
              {certs.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <Icon className={color} size={22} />
                  <span className="text-white text-[10px] font-bold uppercase tracking-wider leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="hidden lg:flex justify-end">
            <div className="glass-card rounded-3xl p-8 max-w-xs w-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-clinical-blue/10 rounded-full blur-3xl" />
              <div className="flex items-center gap-3 mb-5">
                <div className="flex -space-x-2">
                  {[21, 22, 23, 24].map((n) => (
                    <img key={n} src={`https://i.pravatar.cc/80?img=${n}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-0.5">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}</div>
                  <p className="text-navy-900 text-xs font-bold">15,000+ Happy Patients</p>
                </div>
              </div>
              <blockquote className="text-navy-900/70 italic text-sm leading-relaxed mb-5">
                "The best dental experience I've ever had. Painless treatment, great ambiance, and my smile looks absolutely perfect."
              </blockquote>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <img src="https://i.pravatar.cc/80?img=47" className="w-9 h-9 rounded-full object-cover" alt="Sarah M." referrerPolicy="no-referrer" />
                <div>
                  <p className="text-navy-900 font-bold text-sm">Sarah M.</p>
                  <p className="text-gray-400 text-xs">Smile Makeover</p>
                </div>
                <CheckCircle2 className="text-clinical-blue ml-auto" size={18} />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-gray-100">
                {[['4.9★', 'Google Rating'], ['99%', 'Satisfaction']].map(([val, label]) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl font-display font-bold text-navy-900">{val}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        <button onClick={prevSlide} className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"><ChevronLeft size={22} /></button>
        <button onClick={nextSlide} className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"><ChevronRight size={22} /></button>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1.5 rounded-full transition-all cursor-pointer ${currentSlide === i ? 'w-8 bg-clinical-blue' : 'w-2 bg-white/30'}`} />
        ))}
      </div>
    </section>
  );
}
