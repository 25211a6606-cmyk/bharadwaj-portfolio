import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const stats = [
  { value: '02', label: 'Year of B.Tech' },
  { value: 'CSM', label: 'Branch (AI & ML)' },
  { value: 'Python', label: 'Primary Language' },
  { value: 'AI/ML', label: 'Career Focus' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB]">
            ABOUT ME
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-12 leading-tight"
        >
          Learning today.{' '}
          <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
            Building for tomorrow.
          </span>
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-[#64748B] leading-relaxed">
              I'm a second-year B.Tech CSM student specializing in Artificial Intelligence &amp; Machine Learning at BVRIT Narsapur, with a strong interest in Python programming, data analytics, machine learning, and emerging AI technologies.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              I'm continuously strengthening my technical foundation through hands-on learning, practical exercises, and exploring real-world applications of AI and ML. I enjoy understanding how data can be transformed into meaningful insights and how intelligent systems can be developed to solve practical problems.
            </p>
            <p className="text-[#64748B] leading-relaxed">
              Currently, I'm focused on improving my programming, data handling, machine learning, and software development skills while expanding my knowledge of modern AI technologies. I'm eager to learn, experiment, collaborate, and grow toward a career as an AI/ML Engineer.
            </p>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a href="https://github.com/25211a6606-cmyk" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
                <Github size={16} className="shrink-0" /> github.com/25211a6606-cmyk
              </a>
              <a href="https://www.linkedin.com/in/ane-bharadwaj-b8ab29388/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
                <Linkedin size={16} className="shrink-0" /> linkedin.com/in/ane-bharadwaj
              </a>
              <a href="mailto:bharadwajane07@gmail.com"
                className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
                <Mail size={16} className="shrink-0" /> bharadwajane07@gmail.com
              </a>
              <a href="tel:+919959435111"
                className="flex items-center gap-3 text-sm text-[#64748B] hover:text-[#2563EB] transition-colors">
                <Phone size={16} className="shrink-0" /> +91 9959435111
              </a>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[280px] aspect-square">
              {/* Abstract AI visual */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100" />
              <svg viewBox="0 0 200 200" className="relative z-10 w-full h-full p-8" aria-label="Abstract AI neural network graphic">
                {/* Nodes */}
                {[
                  [40, 40], [100, 30], [160, 40],
                  [30, 100], [80, 80], [120, 80], [170, 100],
                  [40, 140], [100, 120], [160, 140],
                  [60, 170], [100, 170], [140, 170],
                ].map(([cx, cy], i) => (
                  <motion.circle
                    key={i}
                    cx={cx} cy={cy}
                    r={i % 3 === 0 ? 5 : 3.5}
                    fill={i % 2 === 0 ? '#2563EB' : '#06B6D4'}
                    opacity={0.6}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
                {/* Connections */}
                {[
                  [40,40,80,80], [100,30,80,80], [100,30,120,80], [160,40,120,80],
                  [80,80,100,120], [120,80,100,120], [30,100,40,140], [170,100,160,140],
                  [40,140,60,170], [100,120,100,170], [160,140,140,170],
                  [80,80,30,100], [120,80,170,100],
                ].map(([x1,y1,x2,y2], i) => (
                  <motion.line
                    key={`l${i}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#2563EB"
                    strokeWidth={0.8}
                    opacity={0.15}
                    animate={{ opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="p-6 rounded-xl bg-[#EFF6FF] border border-blue-100 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-[#2563EB] mb-1">{stat.value}</div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
