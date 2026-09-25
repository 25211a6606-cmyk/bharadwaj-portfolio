import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Coffee, Database, Globe, Terminal,
  Brain, Eye, Sparkles, MessageSquare, Cpu,
  BarChart3, Table2, Cog, Camera, Layers, Box, Atom,
  FileCode, Palette, Plug, GitBranch, Github, Cloud, Monitor,
} from 'lucide-react';

const categories = [
  {
    title: 'PROGRAMMING',
    skills: [
      { name: 'Python', icon: Code2 },
      { name: 'Java', icon: Coffee },
      { name: 'C', icon: Terminal },
      { name: 'JavaScript', icon: Globe },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    title: 'AI & MACHINE LEARNING',
    skills: [
      { name: 'Machine Learning', icon: Brain },
      { name: 'Deep Learning', icon: Cpu },
      { name: 'Computer Vision', icon: Eye },
      { name: 'Generative AI', icon: Sparkles },
      { name: 'NLP', icon: MessageSquare },
    ],
  },
  {
    title: 'LIBRARIES & FRAMEWORKS',
    skills: [
      { name: 'NumPy', icon: BarChart3 },
      { name: 'Pandas', icon: Table2 },
      { name: 'Scikit-learn', icon: Cog },
      { name: 'OpenCV', icon: Camera },
      { name: 'TensorFlow', icon: Layers },
      { name: 'PyTorch', icon: Box },
      { name: 'React', icon: Atom },
    ],
  },
  {
    title: 'DEVELOPMENT & TOOLS',
    skills: [
      { name: 'HTML', icon: FileCode },
      { name: 'CSS', icon: Palette },
      { name: 'REST APIs', icon: Plug },
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'Google Colab', icon: Cloud },
      { name: 'VS Code', icon: Monitor },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#EFF6FF]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] mb-4 block">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-4">
            Tools I'm learning and working with.
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto">
            Building a strong foundation across programming, AI, data and software development.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
            >
              <h3 className="text-xs font-semibold tracking-[0.15em] text-[#64748B] mb-6 pb-2 border-b border-blue-100">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + ci * 0.1 + si * 0.05 }}
                      className="group relative p-5 rounded-xl bg-white border border-blue-50 hover:border-[#2563EB]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 cursor-default"
                    >
                      <Icon
                        size={28}
                        className="text-[#64748B] group-hover:text-[#2563EB] transition-all duration-300 group-hover:scale-110 mb-3"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm font-medium text-[#0B1220] group-hover:text-[#2563EB] transition-colors duration-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
