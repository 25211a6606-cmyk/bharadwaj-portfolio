import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Hammer, RefreshCw } from 'lucide-react';

const cards = [
  { icon: BookOpen, title: 'Learn', desc: 'Understand the fundamentals.' },
  { icon: Hammer, title: 'Build', desc: 'Apply knowledge through practice.' },
  { icon: RefreshCw, title: 'Improve', desc: 'Learn from mistakes and iterate.' },
];

export default function Learning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 bg-[#EFF6FF]/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1220] mb-4">LEARNING BY BUILDING</h2>
          <p className="text-[#64748B] max-w-2xl mx-auto mb-12 leading-relaxed">
            I believe the best way to understand technology is to experiment with it. I'm continuously learning new concepts, applying them through hands-on practice, and improving my understanding through experimentation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="p-6 rounded-xl bg-white border border-blue-100 hover:border-[#2563EB]/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={28} className="text-[#2563EB] mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#0B1220] mb-2">{card.title}</h3>
                <p className="text-sm text-[#64748B]">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
