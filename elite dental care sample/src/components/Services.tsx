import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Zap, Heart, Microscope, Activity } from 'lucide-react';

const services = [
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, whitening, and aesthetic build-ups.',
    icon: Sparkles,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth using guided surgery.',
    icon: Shield,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Laser Dentistry',
    description: 'Painless, bloodless treatments for gum issues and cavity preparations.',
    icon: Zap,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    title: 'Orthodontics',
    description: 'Invisalign and advanced braces for perfect alignment at any age.',
    icon: Activity,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Microscopic RCT',
    description: 'Precision root canal treatments using high-end dental microscopes.',
    icon: Microscope,
    color: 'bg-violet-50 text-violet-600',
  },
  {
    title: 'Kids Dentistry',
    description: 'Specialized, gentle care to build a lifetime of healthy dental habits.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-clinical-blue font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-display font-extrabold text-navy-900 mb-6">
            Comprehensive Dental Solutions
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of advanced dental procedures using the latest technology to ensure your comfort and optimal results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href="#" className="text-clinical-blue font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
