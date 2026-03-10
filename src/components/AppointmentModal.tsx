import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, CheckCircle2 } from 'lucide-react';

const services = [
    'Smile Makeover / Veneers',
    'Dental Implants',
    'Invisalign / Braces',
    'Teeth Whitening',
    'Root Canal Treatment',
    'Laser Dentistry',
    'Kids Dentistry',
    'Dental Crowns & Bridges',
    'Full Mouth Rehabilitation',
    'General Check-up & Cleaning',
    'Other',
];

export default function AppointmentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [submitted, setSubmitted] = React.useState(false);
    const [form, setForm] = React.useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would POST to a backend or WhatsApp API
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', phone: '', email: '', service: '', date: '', message: '' });
            onClose();
        }, 3500);
    };

    // Close on Escape
    React.useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="modal-overlay"
                    onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        {/* Header */}
                        <div className="clinical-gradient p-8 relative">
                            <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-colors">
                                <X size={18} />
                            </button>
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="text-white" size={22} />
                                <h2 className="text-xl font-display font-bold text-white">Book Your Free Consultation</h2>
                            </div>
                            <p className="text-white/80 text-sm">No obligations. Our team will confirm within 2 hours.</p>
                            <div className="flex gap-4 mt-4">
                                {['No Waiting', '0% EMI', 'Free X-Ray'].map((tag) => (
                                    <span key={tag} className="text-white/90 text-xs bg-white/15 px-3 py-1 rounded-full font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Form / Success */}
                        <div className="p-8">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <CheckCircle2 className="text-green-500 mx-auto mb-4" size={52} />
                                    <h3 className="text-2xl font-display font-bold text-navy-900 mb-2">You're All Set!</h3>
                                    <p className="text-gray-500">Our team will call you within 2 hours to confirm your appointment. Check WhatsApp for your booking ID.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Full Name *</label>
                                            <input
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Priya Sharma"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clinical-blue/50 focus:border-clinical-blue"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Phone Number *</label>
                                            <input
                                                name="phone"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="+91 98765 43210"
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clinical-blue/50 focus:border-clinical-blue"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Email Address</label>
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="priya@email.com"
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clinical-blue/50 focus:border-clinical-blue"
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Treatment Interested In *</label>
                                            <select
                                                name="service"
                                                value={form.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-clinical-blue/50 focus:border-clinical-blue"
                                            >
                                                <option value="">Select service...</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Preferred Date</label>
                                            <input
                                                name="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                type="date"
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-clinical-blue/50 focus:border-clinical-blue"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Additional Notes</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={3}
                                            placeholder="Any concerns or details we should know about..."
                                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-navy-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-clinical-blue/50 focus:border-clinical-blue resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full clinical-gradient text-white py-4 rounded-2xl font-bold text-base shadow-lg shadow-clinical-blue/30 hover:opacity-90 transition-all cursor-pointer"
                                    >
                                        Confirm Free Consultation →
                                    </button>
                                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                                        <Phone size={12} />
                                        <span>Or call directly: <a href="tel:+911234567890" className="text-clinical-blue font-bold hover:underline">+91 12345 67890</a> (Mon–Sun, 9AM–9PM)</span>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
