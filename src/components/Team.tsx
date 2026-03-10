import React from 'react';
import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const team = [
    {
        name: 'Dr. John Smith',
        role: 'Chief Dental Surgeon',
        credentials: 'DDS, MDS (Prosthodontics) · Fellow of ICOI',
        experience: '18+',
        cases: '10k+',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
        specialties: ['Dental Implants', 'Full Mouth Rehab', 'Smile Design']
    },
    {
        name: 'Dr. Sarah Jenkins',
        role: 'Orthodontist Specialist',
        credentials: 'DDS, MDS (Orthodontics) · Certified Invisalign Provider',
        experience: '12+',
        cases: '7k+',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
        specialties: ['Clear Aligners', 'Braces', 'Early Orthodontics']
    },
    {
        name: 'Dr. Emily White',
        role: 'Pediatric Dentist',
        credentials: 'DDS, MDS (Pediatric Dentistry) · Board Certified',
        experience: '10+',
        cases: '5k+',
        image: 'https://images.unsplash.com/photo-1594824432258-250deee7d379?auto=format&fit=crop&q=80&w=800',
        specialties: ['Children\'s Dentistry', 'Preventive Care', 'Sedation Dentistry']
    },
    {
        name: 'Dr. Michael Roberts',
        role: 'Endodontist',
        credentials: 'DDS, MDS (Endodontics)',
        experience: '15+',
        cases: '8k+',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
        specialties: ['Root Canal Therapy', 'Endodontic Surgery', 'Traumatic Injuries']
    },
];

export default function Team() {
    return (
        <section id="team" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <p className="section-label justify-center">
                        <span className="w-6 h-px bg-clinical-blue inline-block" />
                        Our Specialists
                        <span className="w-6 h-px bg-clinical-blue inline-block" />
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-6">
                        Meet Our <br /><span className="text-clinical-blue">Expert Team</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Our highly qualified team of specialists combine decades of clinical experience with ongoing education to deliver world-class dental care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((doc, i) => (
                        <motion.div
                            key={doc.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group text-center"
                        >
                            <div className="relative mb-6 overflow-hidden rounded-3xl aspect-[3/4] shadow-lg">
                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 blur-[2px] group-hover:blur-0" loading="lazy" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <p className="text-white text-xs font-semibold leading-relaxed">{doc.specialties.join(', ')}</p>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="bg-clinical-blue/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full flex items-center gap-1">
                                        <Award size={9} /> Expert
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-navy-900 font-bold text-lg mb-1">{doc.name}</h3>
                            <p className="text-clinical-blue text-xs font-bold uppercase tracking-wider mb-2">{doc.role}</p>
                            <p className="text-gray-400 text-xs leading-relaxed mb-3">{doc.credentials}</p>
                            <span className="inline-block bg-blue-50 text-clinical-blue text-xs font-bold px-3 py-1.5 rounded-full">
                                {doc.cases}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
