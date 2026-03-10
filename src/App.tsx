import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import AppointmentModal from './components/AppointmentModal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const openBooking = () => setBookingOpen(true);
  const closeBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-white selection:bg-clinical-blue selection:text-white">
      {/* Navbar */}
      <Navbar onBooking={openBooking} />

      <main>
        {/* Hero */}
        <Hero onBooking={openBooking} />

        {/* Social Proof Stats Wall */}
        <Stats />

        {/* Services */}
        <Services onBooking={openBooking} />

        {/* Why Choose Us */}
        <section className="py-28 overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="section-label justify-start">
                  <span className="w-6 h-px bg-clinical-blue inline-block" />
                  Lorem Ipsum Difference
                </p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-10" style={{ fontSize: undefined }}>
                  Lorem Ipsum Dolor Sit<br />
                  Experience The Elite Dental<br />
                  <span className="text-clinical-blue">Difference For Yourself.</span>
                </h2>
                <ul className="space-y-4 mb-10">
                  {[
                    'Award-Winning Team of Specialists',
                    'Advanced 3D CBCT Scanning Technology',
                    'Strict Sterilization & Hygiene Protocols',
                    'Sedation & Pain-Free Dentistry Options',
                    'Transparent Pricing with 0% EMI Plans'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="text-clinical-blue shrink-0" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000"
                    alt="Elite Dental clinic interior"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-2xl hidden md:block max-w-[210px]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 clinical-gradient rounded-full flex items-center justify-center shrink-0 text-white font-black text-sm">98%</div>
                    <p className="text-navy-900 font-bold text-sm leading-tight">Patient<br />Satisfaction</p>
                  </div>
                  <p className="text-gray-500 text-xs italic leading-relaxed">"The best dental experience I've ever had! Highly recommend Elite Dental."</p>
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                    <CheckCircle2 className="text-clinical-blue" size={14} />
                    <span className="text-xs text-gray-400 font-semibold">Verified Patient Review</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <BeforeAfter onBooking={openBooking} />

        {/* Testimonials */}
        <Testimonials />

        {/* Team */}
        <Team />

        {/* CTA Band */}
        <section className="py-28 bg-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-clinical-blue/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-clinical-light/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <p className="section-label justify-center">
              <span className="w-6 h-px bg-clinical-blue inline-block" />
              Start Today
              <span className="w-6 h-px bg-clinical-blue inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Smile<br />
              <span className="text-clinical-blue">and Your Confidence?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Join 15,000+ happy patients who chose Elite Dental. We combine advanced clinical expertise with state-of-the-art technology. Your first consultation is completely free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                onClick={openBooking}
                className="clinical-gradient text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-clinical-blue/40 hover:opacity-90 transition-all cursor-pointer"
              >
                Book Free Consultation
              </button>
              <a
                href="tel:+911234567890"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                +91 12345 67890
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              Lorem · Ipsum Dolor · 0AM to 0PM · Lorem care 24/7
            </p>
          </div>
        </section>
      </main>

      <Footer onBooking={openBooking} />
      <WhatsAppButton />

      {/* Appointment Modal */}
      <AppointmentModal open={bookingOpen} onClose={closeBooking} />
    </div>
  );
}
