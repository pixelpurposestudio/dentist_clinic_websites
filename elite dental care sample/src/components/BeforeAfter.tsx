import React from 'react';
import { motion } from 'motion/react';

const galleryItems = [
  {
    title: 'Smile Makeover',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    tag: 'Cosmetic'
  },
  {
    title: 'Full Mouth Rehab',
    before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    tag: 'Restorative'
  },
  {
    title: 'Invisalign Results',
    before: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    tag: 'Orthodontics'
  }
];

export default function BeforeAfter() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-clinical-blue font-bold uppercase tracking-widest text-sm mb-4">Real Results</h2>
            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-navy-900">
              Transforming Smiles, <br />Changing Lives.
            </h3>
          </div>
          <p className="text-gray-600 max-w-sm text-lg">
            Browse our gallery of authentic patient transformations and see the Elite Dental difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={item.after}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-clinical-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold text-xl">{item.title}</p>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <h4 className="text-navy-900 font-bold text-lg">{item.title}</h4>
                <button className="text-clinical-blue font-bold text-sm hover:underline">View Case Study</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-10 py-4 rounded-full font-bold transition-all">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
