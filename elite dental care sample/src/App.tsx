import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-clinical-blue selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <div className="bg-navy-900 py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://teethcarecentre.com/wp-content/uploads/2019/04/the-times-of-india.png" alt="Times of India" className="h-8 object-contain" referrerPolicy="no-referrer" />
              <img src="https://teethcarecentre.com/wp-content/uploads/2019/04/inside-outside.png" alt="Inside Outside" className="h-8 object-contain" referrerPolicy="no-referrer" />
              <img src="https://teethcarecentre.com/wp-content/uploads/2019/04/indian-express.png" alt="Indian Express" className="h-8 object-contain" referrerPolicy="no-referrer" />
              <img src="https://teethcarecentre.com/wp-content/uploads/2019/04/femina.png" alt="Femina" className="h-8 object-contain" referrerPolicy="no-referrer" />
              <img src="https://teethcarecentre.com/wp-content/uploads/2019/04/dna.png" alt="DNA" className="h-8 object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <Services />
        
        {/* Why Choose Us Section */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-clinical-blue font-bold uppercase tracking-widest text-sm mb-4">The Elite Difference</h2>
                <h3 className="text-3xl md:text-5xl font-display font-extrabold text-navy-900 mb-8">
                  Where Dental Art Meets <br />Luxury & Sophistication.
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-clinical-blue/10 flex items-center justify-center shrink-0 text-clinical-blue">
                      <span className="font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">Conservative Approach</h4>
                      <p className="text-gray-600">We prioritize preserving your natural teeth using minimally invasive techniques and precision technology.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-clinical-blue/10 flex items-center justify-center shrink-0 text-clinical-blue">
                      <span className="font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">Zero Waiting Time</h4>
                      <p className="text-gray-600">Our advanced appointment system ensures you receive undivided attention without the hassle of long waiting periods.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-clinical-blue/10 flex items-center justify-center shrink-0 text-clinical-blue">
                      <span className="font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">Ethical Conviction</h4>
                      <p className="text-gray-600">No fake commitments. We deliver treatments with utmost sincerity, fostering long-term trust with our clientele.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000" 
                    alt="Clinic Interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl hidden md:block max-w-xs">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-clinical-blue rounded-full flex items-center justify-center text-white font-bold">99%</div>
                    <p className="text-navy-900 font-bold leading-tight">Patient Satisfaction Rate</p>
                  </div>
                  <p className="text-sm text-gray-600 italic">"The attention to detail in their cosmetic work is simply unparalleled in the country."</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <BeforeAfter />

        {/* Call to Action */}
        <section className="py-24 bg-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-clinical-blue rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-clinical-blue rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-8">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Join thousands of satisfied patients who chose Elite Dental for their smile journey. Book your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-clinical-blue hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl shadow-clinical-blue/40">
                Book Appointment
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 rounded-full font-bold text-xl transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
