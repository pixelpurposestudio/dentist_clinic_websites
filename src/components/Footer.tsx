import React from 'react';
import { Facebook, Youtube, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer({ onBooking }: { onBooking: () => void }) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy-950 text-white pt-20 pb-10">
      {/* Emergency Strip */}
      <div className="bg-red-600/90 py-3 mb-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="font-bold">🚨 Lorem Ipsum Emergency? We're available 24/7.</span>
          <a href="tel:+911234567890" className="bg-white text-red-600 font-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
            Call Now: +91 12345 67890
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          {/* Brand & description */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-10 h-10 clinical-gradient rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 8 8.2 9.3 9.3 10.1C7.8 10.6 6 12.2 6 15C6 18.5 8.5 22 12 22C15.5 22 18 18.5 18 15C18 12.2 16.2 10.6 14.7 10.1C15.8 9.3 16.5 8 16.5 6.5C16.5 4 14.5 2 12 2Z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-display font-bold">Elite<span className="text-clinical-blue">Dental</span></span>
                <p className="text-[9px] text-gray-500 uppercase tracking-[0.2em]">Premium Care</p>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We provide comprehensive, high-quality dental care in a modern, comfortable environment. Your smile is our top priority, and we are dedicated to helping you achieve optimal oral health.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-full bg-white/5 hover:bg-clinical-blue flex items-center justify-center transition-colors cursor-pointer">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                ['Home', '#'],
                ['About Us', '#about'],
                ['Services', '#services'],
                ['Our Team', '#team'],
                ['Testimonials', '#testimonials'],
                ['Contact', '#contact'],
              ].map(([name, href]) => (
                <li key={name}>
                  <button
                    onClick={() => href === '#' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollTo(href)}
                    className="hover:text-clinical-blue transition-colors cursor-pointer text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-base font-bold mb-6">Treatments</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Smile Makeovers', 'Dental Implants', 'Clear Aligners', 'Root Canals', 'Teeth Whitening', 'Pediatric Care'].map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="hover:text-clinical-blue transition-colors cursor-pointer text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="text-clinical-blue shrink-0 mt-0.5" size={18} />
                <span>123 Medical Boulevard, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-clinical-blue shrink-0" size={18} />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-clinical-blue shrink-0" size={18} />
                <a href="mailto:contact@elitedental.in" className="hover:text-white transition-colors">contact@elitedental.in</a>
              </li>
              <li className="flex gap-3 items-start">
                <Clock className="text-clinical-blue shrink-0 mt-0.5" size={18} />
                <span>Mon – Sun · 9:00 AM – 9:00 PM<br /><span className="text-red-400 font-semibold">Emergency: 24 / 7</span></span>
              </li>
            </ul>
            <button
              onClick={onBooking}
              className="mt-6 w-full clinical-gradient text-white py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all cursor-pointer"
            >
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Elite Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Patient Bill of Rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
