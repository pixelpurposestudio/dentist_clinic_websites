import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Zap, Heart, Microscope, Activity, Baby, Smile } from 'lucide-react';

const services = [
  {
    title: 'Smile Makeovers',
    description: 'Transform your appearance with custom veneers, whitening, and gum contouring designed for your facial aesthetics.',
    icon: Sparkles,
    color: 'bg-blue-50 text-blue-600',
    price: 'From ₹15,000',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements using premium Swiss and German titanium implants.',
    icon: Shield,
    color: 'bg-indigo-50 text-indigo-600',
    price: 'From ₹25,000',
  },
  {
    title: 'Laser Dentistry',
    description: 'Painless, stitch-free procedures for gum treatment, cavity prep, and fast healing using advanced lasers.',
    icon: Zap,
    color: 'bg-cyan-50 text-cyan-600',
    price: 'From ₹2,500',
  },
  {
    title: 'Clear Aligners',
    description: 'Straighten your teeth invisibly and comfortably without traditional metal braces using custom 3D aligners.',
    icon: Activity,
    color: 'bg-emerald-50 text-emerald-600',
    price: 'From ₹45,000',
  },
  {
    title: 'Root Canal Treatment',
    description: 'Single-visit, painless root canals performed by endodontic specialists using rotary instruments.',
    icon: Microscope,
    color: 'bg-violet-50 text-violet-600',
    price: 'From ₹4,500',
  },
  {
    title: 'Teeth Whitening',
    description: 'Achieve a shade up to 8x lighter in just one hour with our professional, safe whitening treatments.',
    icon: Smile,
    color: 'bg-yellow-50 text-yellow-600',
    price: 'From ₹6,000',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle, friendly dental care focused on children’s oral health in a fun and comforting environment.',
    icon: Baby,
    color: 'bg-rose-50 text-rose-600',
    price: 'From ₹1,000',
  },
  {
    title: 'Crowns & Bridges',
    description: 'Restore damaged teeth with durable, aesthetic zirconia and metal-free ceramic crowns built to last.',
    icon: Heart,
    color: 'bg-pink-50 text-pink-600',
    price: 'From ₹8,000',
  },
];

export default function Services({ onBooking }: { onBooking: () => void }) {
  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="section-label">
            <span className="w-6 h-px bg-clinical-blue inline-block" />
            Our Treatments
            <span className="w-6 h-px bg-clinical-blue inline-block" />
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Comprehensive Care,<br />
            <span className="text-clinical-blue">For Every Smile.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From routine checkups to full mouth rehabilitation, we offer a complete range of dental services using the latest international technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="service-card group"
              onClick={onBooking}
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={26} />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-clinical-blue font-bold text-sm">{service.price}</span>
                <span className="text-gray-400 text-xs group-hover:text-clinical-blue transition-colors">Book →</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-5 text-sm">Financing available with <strong className="text-navy-900">0% EMI</strong> over 3–12 months.</p>
          <button
            onClick={onBooking}
            className="clinical-gradient text-white px-10 py-4 rounded-full font-bold text-base shadow-xl shadow-clinical-blue/30 hover:opacity-90 transition-all cursor-pointer"
          >
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
