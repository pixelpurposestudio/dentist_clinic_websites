import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-clinical-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                ELITE<span className="text-clinical-blue">DENTAL</span>
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-8">
              Providing high-end dentistry for 'The Elites'. ISO 9001:2015 Certified Dental Hospital delivering exceptional care.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinical-blue transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-clinical-blue transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-clinical-blue transition-colors">Our Team</a></li>
              <li><a href="#gallery" className="hover:text-clinical-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Clinic Tour</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Smile Makeover</a></li>
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Dental Implants</a></li>
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Invisalign</a></li>
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Laser Dentistry</a></li>
              <li><a href="#" className="hover:text-clinical-blue transition-colors">Root Canal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-clinical-blue shrink-0" size={20} />
                <span>2nd Floor, Pushpak66, Satellite, Ahmedabad, India 380015</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-clinical-blue shrink-0" size={20} />
                <span>+91 78 787 3384</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-clinical-blue shrink-0" size={20} />
                <span>contact@elitedental.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Elite Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
