import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Star, ShieldCheck, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2000",
    alt: "Dentist with happy patient"
  },
  {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000",
    alt: "Professional dental consultation"
  },
  {
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
    alt: "Perfect smile transformation"
  },
  {
    image: "https://images.unsplash.com/photo-1629909608135-ca29ed9c4bb0?auto=format&fit=crop&q=80&w=2000",
    alt: "Modern dental care experience"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/70 to-navy-900/30"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clinical-blue/20 border border-clinical-blue/30 text-clinical-blue text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={14} />
              Award Winning Clinic 2024
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
              World-Class <br />
              <span className="text-clinical-blue">Dental Care</span> <br />
              for the Elite.
            </h1>
            
            <p className="text-lg text-gray-200 mb-8 max-w-lg leading-relaxed drop-shadow-md">
              Experience high-end dentistry where art meets luxury. Our ISO-certified hospital combines ultra-modern technology with a personalized approach to your smile.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-clinical-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-clinical-blue/30">
                Start Your Transformation
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
                View Our Results
              </button>
            </div>

            {/* Above the fold certifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center sm:items-start gap-2">
                <ShieldCheck className="text-clinical-blue" size={24} />
                <span className="text-white text-xs font-bold uppercase tracking-tighter">ISO 9001:2015</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Star className="text-yellow-400" size={24} />
                <span className="text-white text-xs font-bold uppercase tracking-tighter">4.9/5 Google Rating</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <Award className="text-clinical-blue" size={24} />
                <span className="text-white text-xs font-bold uppercase tracking-tighter">AACD Member</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2">
                <CheckCircle2 className="text-clinical-blue" size={24} />
                <span className="text-white text-xs font-bold uppercase tracking-tighter">15+ Years Exp.</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Trust Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-clinical-blue/20 rounded-full blur-3xl"></div>
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      className="w-12 h-12 rounded-full border-2 border-white object-cover"
                      alt="Patient"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-navy-900 text-sm font-bold">12,000+ Happy Patients</p>
                </div>
              </div>
              <p className="text-navy-900/70 italic mb-4">
                "The most professional dental experience I've ever had. My smile makeover completely changed my confidence!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-clinical-blue/10 rounded-full flex items-center justify-center text-clinical-blue">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-navy-900 font-bold text-sm">Verified Transformation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slideshow Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all ${currentSlide === i ? 'w-8 bg-clinical-blue' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
}
