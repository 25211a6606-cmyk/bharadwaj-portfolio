import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const areas = [
  {
    num: '01',
    title: 'AI & MACHINE LEARNING',
    desc: 'Exploring machine learning algorithms, data preprocessing, model evaluation and intelligent systems.',
    visual: 'neural',
  },
  {
    num: '02',
    title: 'DATA & ANALYTICS',
    desc: 'Working with data using Python and exploring how meaningful insights can be extracted from datasets.',
    visual: 'data',
  },
  {
    num: '03',
    title: 'GENERATIVE AI',
    desc: 'Exploring large language models, multimodal AI, prompt engineering and AI-powered applications.',
    visual: 'generative',
  },
];

function NeuralVisual() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
      {[[20,20],[60,15],[100,20],[15,45],[45,40],[75,40],[105,45],[30,65],[60,65],[90,65]].map(([cx,cy],i) => (
        <motion.circle key={i} cx={cx} cy={cy} r={3} fill="#2563EB" opacity={0.5}
          animate={{ scale:[1,1.4,1], opacity:[0.3,0.7,0.3] }}
          transition={{ duration:3+i*0.3, repeat:Infinity, ease:'easeInOut' }} />
      ))}
      {[[20,20,45,40],[60,15,45,40],[60,15,75,40],[100,20,75,40],[15,45,30,65],[45,40,60,65],[75,40,60,65],[105,45,90,65]].map(([x1,y1,x2,y2],i) => (
        <motion.line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563EB" strokeWidth={0.6} opacity={0.2}
          animate={{ opacity:[0.1,0.3,0.1] }}
          transition={{ duration:4+i*0.2, repeat:Infinity, ease:'easeInOut' }} />
      ))}
    </svg>
  );
}

function DataVisual() {
  const bars = [35, 55, 40, 65, 50, 70, 45];
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.rect key={i} x={10+i*15} y={80-h} width={8} height={h} rx={2}
          fill="#2563EB" opacity={0.3}
          animate={{ height:[h, h*0.7, h], y:[80-h, 80-h*0.7, 80-h] }}
          transition={{ duration:3+i*0.4, repeat:Infinity, ease:'easeInOut' }} />
      ))}
    </svg>
  );
}

function GenerativeVisual() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" aria-hidden="true">
      {Array.from({length:15},(_, i) => (
        <motion.circle key={i}
          cx={20+Math.random()*80} cy={10+Math.random()*60}
          r={1.5+Math.random()*2} fill="#06B6D4" opacity={0.4}
          animate={{ cx: 20+Math.random()*80, cy: 10+Math.random()*60, opacity:[0.2,0.6,0.2] }}
          transition={{ duration:5+Math.random()*3, repeat:Infinity, ease:'easeInOut' }} />
      ))}
    </svg>
  );
}

const visuals = { neural: NeuralVisual, data: DataVisual, generative: GenerativeVisual };

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[#2563EB] mb-4 block">WHAT I EXPLORE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-4">Areas of Exploration</h2>
          <p className="text-[#64748B] max-w-xl mx-auto">Areas I'm currently developing deeper expertise in.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => {
            const Visual = visuals[area.visual];
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="group relative p-8 rounded-2xl bg-white border border-blue-100 hover:border-[#2563EB]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/5"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="h-24 mb-6 rounded-lg bg-blue-50/50 overflow-hidden">
                  <Visual />
                </div>
                <span className="text-xs font-bold text-[#2563EB]/40 mb-2 block">{area.num}</span>
                <h3 className="text-lg font-bold text-[#0B1220] mb-3">{area.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{area.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
