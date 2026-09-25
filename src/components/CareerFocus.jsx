import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stages = ['LEARN', 'BUILD', 'EXPERIMENT', 'IMPROVE', 'ENGINEER'];

export default function CareerFocus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] mb-4 block">CAREER DIRECTION</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1220] mb-6">
            AI / ML{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              ENGINEER
            </span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            My goal is to build strong expertise in Artificial Intelligence and Machine Learning while developing the software engineering skills required to create reliable, scalable and useful AI applications.
          </p>
        </motion.div>

        {/* Progression */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
          {stages.map((stage, i) => (
            <div key={stage} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className="relative flex items-center justify-center w-28 h-28 md:w-32 md:h-32"
              >
                {/* Circle bg */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#2563EB]/20"
                  animate={inView ? { borderColor: ['rgba(37,99,235,0.2)', 'rgba(37,99,235,0.5)', 'rgba(37,99,235,0.2)'] } : {}}
                  transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full bg-blue-50"
                  animate={inView ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="relative z-10 text-sm font-bold text-[#2563EB] tracking-wider">{stage}</span>
              </motion.div>

              {/* Connector */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, scaleY: 0 }}
                  animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + i * 0.15 }}
                  className="w-0.5 h-8 md:w-8 md:h-0.5 bg-gradient-to-b md:bg-gradient-to-r from-[#2563EB] to-[#06B6D4] origin-top md:origin-left"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
