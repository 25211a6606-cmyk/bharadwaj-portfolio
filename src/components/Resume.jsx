import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download } from 'lucide-react';

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 3,
}));

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="resume"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B1220 0%, #2563EB 50%, #06B6D4 100%)' }}
    >
      {/* Floating particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -20, 0, 15, 0], x: [0, 10, -5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            LET'S BUILD THE FUTURE
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Want to know more about my background, skills and career interests?
          </p>
          <a
            href={`${import.meta.env.BASE_URL}ANE_BHARADWAJ.docx`}
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#2563EB] font-semibold rounded-full hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20 transition-all duration-300 active:scale-[0.98]"
          >
            <Download size={18} />
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>
    </section>
  );
}
