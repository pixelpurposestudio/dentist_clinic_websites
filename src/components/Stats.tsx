import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Star, Stethoscope } from 'lucide-react';

const stats = [
    { value: '15,000+', label: 'Happy Patients', icon: Users },
    { value: '4.9+', label: 'Google Rating', icon: Star },
    { value: '10,000+', label: 'Surgeries Done', icon: Award },
    { value: '99%', label: 'Success Rate', icon: Stethoscope },
];

export default function Stats() {
    return (
        <section className="bg-navy-900 py-16 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map(({ value, label, icon: Icon }, i) => (
                        <motion.div
                            key={label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 rounded-2xl bg-clinical-blue/10 border border-clinical-blue/20 flex items-center justify-center">
                                    <Icon className="text-clinical-blue" size={22} />
                                </div>
                            </div>
                            <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{value}</p>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-sans">{label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Certification badges */}
                <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
                    {[
                        'ISO 9001:2015 Certified',
                        'FDA Approved Materials',
                        'CBCT 3D Scanning Equipped',
                        'Award Winning Clinic 2024',
                        '0% EMI Plans Available',
                    ].map((badge) => (
                        <span
                            key={badge}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-clinical-blue inline-block" />
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
