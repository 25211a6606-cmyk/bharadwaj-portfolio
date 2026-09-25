import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.3 + 0.1,
}));

export default function Hero() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    setMouse({
      x: (clientX / window.innerWidth - 0.5) * 30,
      y: (clientY / window.innerHeight - 0.5) * 30,
    });
  };

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px]"
        style={{
          background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
          top: '10%', left: '5%',
          x: mouse.x * 0.5, y: mouse.y * 0.5,
        }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[80px]"
        style={{
          background: 'linear-gradient(135deg, #06B6D4, #2563EB)',
          bottom: '10%', right: '10%',
          x: mouse.x * -0.3, y: mouse.y * -0.3,
        }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.04] blur-[60px]"
        style={{
          background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
          top: '50%', right: '30%',
          x: mouse.x * 0.2, y: mouse.y * 0.2,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* Particles */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#2563EB]"
          style={{
            width: p.size, height: p.size,
            left: `${p.x}%`, top: `${p.y}%`,
            opacity: p.opacity,
            filter: p.size > 5 ? 'blur(1px)' : 'none',
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 10, -10, 5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Profile Picture */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <div className="relative group">
              {/* Outer soft ambient glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] opacity-60 blur-md group-hover:opacity-90 transition duration-500"
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full p-[4px] bg-gradient-to-tr from-[#2563EB] to-[#06B6D4] shadow-2xl shadow-blue-500/25"
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-white ring-4 ring-white">
                  <img
                    src="/profile.jpeg"
                    alt="Bharadwaj - AI/ML Student"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Status indicator dot */}
                <div className="absolute bottom-2 right-2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-md border border-slate-100">
                  <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-500 animate-pulse" title="Active & Open to Opportunities" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#2563EB] border-l-2 border-[#2563EB] bg-blue-50 rounded-r-full">
              AI / ML STUDENT
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1220] leading-[1.1] mb-6"
          >
            Building{' '}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
            <br />
            for the Future.
          </motion.h1>

          <motion.p variants={item} className="text-base md:text-lg text-[#64748B] max-w-2xl mx-auto mb-4 leading-relaxed">
            Second-year AI/ML student passionate about Python, data, machine learning, and building intelligent solutions.
          </motion.p>

          <motion.p variants={item} className="text-sm md:text-base text-[#64748B]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            I'm Bharadwaj, a second-year B.Tech student specializing in Artificial Intelligence &amp; Machine Learning at BVRIT, Hyderabad. I'm focused on strengthening my programming, data analytics, machine learning, and software development skills while exploring modern AI technologies.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2">
            <button
              onClick={() => scrollTo('#skills')}
              className="group px-8 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:bg-[#1d4ed8] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
            >
              Explore My Skills
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="group px-8 py-3.5 border-2 border-[#0B1220]/10 text-[#0B1220] text-sm font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Let's Connect
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#64748B]/60">SCROLL TO EXPLORE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-[#2563EB]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
