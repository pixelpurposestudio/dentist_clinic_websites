import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917878783384"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white text-navy-900 px-4 py-2 rounded-xl shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us instantly!
      </div>
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
}
