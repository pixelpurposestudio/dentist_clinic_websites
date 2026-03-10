import React from 'react';
import { motion } from 'motion/react';

const cases = [
  {
    title: 'Full Smile Makeover',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    tag: 'Cosmetic',
    detail: 'Porcelain veneers + whitening — 3 visits',
  },
  {
    title: 'Full Mouth Rehabilitation',
    before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    tag: 'Restorative',
    detail: 'Implants + zirconia crowns — 8 weeks',
  },
  {
    title: 'Invisalign Results',
    before: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800',
    tag: 'Orthodontics',
    detail: 'Clear aligners — 14 months treatment',
  },
];

function BeforeAfterCard({ item }: { item: typeof cases[0] }) {
  const [position, setPosition] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setPosition(pct);
  };

  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX); };
  const onTouchMove = (e: React.TouchEvent) => updatePosition(e.touches[0].clientX);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div className="mb-4">
        <span className="bg-clinical-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{item.tag}</span>
      </div>
      <div
        ref={containerRef}
        className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl cursor-col-resize select-none"
        onMouseMove={onMouseMove}
        onMouseDown={() => { dragging.current = true; }}
        onMouseUp={() => { dragging.current = false; }}
        onMouseLeave={() => { dragging.current = false; }}
        onTouchMove={onTouchMove}
      >
        {/* After (full width) */}
        <img src={item.after} alt={`${item.title} after`} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={item.before} alt={`${item.title} before`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / position}%` }} referrerPolicy="no-referrer" />
        </div>
        {/* Divider */}
        <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg pointer-events-none" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5L3 10L7 15M13 5L17 10L13 15" stroke="#0077b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute bottom-4 left-4 bg-navy-900/80 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full pointer-events-none">Before</span>
        <span className="absolute bottom-4 right-4 bg-clinical-blue/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full pointer-events-none">After</span>
      </div>
      <div className="mt-5 px-1">
        <h3 className="text-navy-900 font-bold text-lg mb-1">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.detail}</p>
      </div>
    </motion.div>
  );
}

export default function BeforeAfter({ onBooking }: { onBooking: () => void }) {
  return (
    <section id="results" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="section-label">
              <span className="w-6 h-px bg-clinical-blue inline-block" />
              Real Results
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-900">
              Transforming Smiles,<br />
              <span className="text-clinical-blue">Changing Lives.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs text-base leading-relaxed">
            Drag the slider on each photo to compare the before and after. These are our real patients — no filters, no editing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {cases.map((item) => (
            <BeforeAfterCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={onBooking}
            className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-10 py-4 rounded-full font-bold transition-all cursor-pointer"
          >
            Start Your Transformation →
          </button>
        </div>
      </div>
    </section>
  );
}
