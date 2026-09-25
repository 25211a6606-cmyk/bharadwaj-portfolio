import { motion } from 'framer-motion';

const items = [
  'Python', 'Java', 'C', 'JavaScript', 'SQL',
  'Machine Learning', 'Deep Learning', 'Computer Vision',
  'Generative AI', 'NLP', 'NumPy', 'Pandas',
  'React', 'Git', 'GitHub',
];

export default function TechMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="py-8 bg-[#EFF6FF]/50 border-y border-blue-100 overflow-hidden">
      <div className="group flex">
        <motion.div
          className="flex shrink-0 gap-8 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap text-sm font-semibold tracking-wide text-[#2563EB]/60 hover:text-[#2563EB] transition-colors cursor-default"
            >
              {item}
              {i < doubled.length - 1 && (
                <span className="ml-8 text-[#2563EB]/20">•</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
