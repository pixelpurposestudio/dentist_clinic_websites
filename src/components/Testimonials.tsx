import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        location: 'Local Resident',
        treatment: 'Smile Makeover',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=47',
        text: "I was always self-conscious about my smile, but the team here completely transformed it. The process was painless, and the staff made me feel so comfortable. I finally have the confidence to smile in photos!",
    },
    {
        name: 'David Chen',
        location: 'Local Resident',
        treatment: 'Dental Implants',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=12',
        text: "After losing a tooth, I was worried about my options. Dr. Smith explained everything clearly, and the implant procedure was a success. It feels just like a natural tooth!",
    },
    {
        name: 'James Wilson',
        location: 'Local Resident',
        treatment: 'Root Canal',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=68',
        text: "I had a severe toothache and they fit me in for an emergency root canal immediately. I didn't feel a thing during the procedure! The doctors here truly care about their patients.",
    },
    {
        name: 'Elena Rodriguez',
        location: 'Local Resident',
        treatment: 'Teeth Whitening',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=57',
        text: "My teeth were stained from years of coffee, but the whitening treatment here worked wonders. My smile is so much brighter now, and I feel great!",
    },
    {
        name: 'Michael Brown',
        location: 'Local Resident',
        treatment: 'Routine Check-up',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=44',
        text: "The best dental experience I've ever had. The hygienist was thorough and gentle, and the dentist answered all my questions. Highly recommend for regular check-ups!",
    },
    {
        name: 'Jessica Lee',
        location: 'Local Resident',
        treatment: 'Orthodontics',
        rating: 5,
        avatar: 'https://i.pravatar.cc/150?img=8',
        text: "My daughter's braces journey has been fantastic. The staff is wonderful with kids, and her teeth are looking amazing. We're so happy with the results!",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-28 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="section-label justify-center">
                        <span className="w-6 h-px bg-clinical-blue inline-block" />
                        Patient Stories
                        <span className="w-6 h-px bg-clinical-blue inline-block" />
                    </p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900 mb-6">
                        Loved By <br /> <span className="text-clinical-blue">Thousands Of Patients</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Don't just take our word for it. Read what our patients have to say about their experience with us.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-yellow-400" fill="#facc15" />)}
                        </div>
                        <p className="text-gray-600 font-semibold">4.9 / 5 across 1,200+ Patient Reviews</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                        >
                            <Quote className="text-clinical-blue/20 mb-4" size={36} />
                            <p className="text-gray-600 leading-relaxed flex-1 mb-6 text-sm">"{t.text}"</p>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <img src={t.avatar} className="w-11 h-11 rounded-full object-cover" alt={t.name} referrerPolicy="no-referrer" />
                                <div className="flex-1">
                                    <p className="text-navy-900 font-bold text-sm">{t.name}</p>
                                    <p className="text-gray-400 text-xs">{t.treatment} · {t.location}</p>
                                </div>
                                <div className="flex">
                                    {Array(t.rating).fill(0).map((_, j) => (
                                        <Star key={j} size={12} className="text-yellow-400" fill="#facc15" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
