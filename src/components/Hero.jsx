import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: (i % 3 === 0 ? 5 : i % 2 === 0 ? 3 : 2),
  x: (i * 19) % 100,
  y: (i * 23) % 100,
  duration: 10 + (i % 5) * 2,
  delay: (i * 0.4),
  opacity: 0.12 + (i % 4) * 0.05,
}));

export default function Hero() {
  const ref = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    setMouse({
      x: (clientX / window.innerWidth - 0.5) * 25,
      y: (clientY / window.innerHeight - 0.5) * 25,
    });
  };

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Silky smooth easing transitions
  const smoothEase = [0.22, 1, 0.36, 1];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: smoothEase },
    },
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-16 lg:py-0"
    >
      {/* Smooth Background Gradient Orbs */}
      <motion.div
        className="absolute w-[560px] h-[560px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
          top: '5%',
          left: '-5%',
          x: mouse.x * 0.4,
          y: mouse.y * 0.4,
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #06B6D4, #2563EB)',
          bottom: '5%',
          right: '0%',
          x: mouse.x * -0.3,
          y: mouse.y * -0.3,
        }}
        animate={{ scale: [1, 1.12, 1], rotate: [0, -12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Antigravity Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#2563EB] pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            filter: p.size > 4 ? 'blur(0.8px)' : 'none',
          }}
          animate={{
            y: [0, -35, 0, 25, 0],
            x: [0, 12, -12, 6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* 2-Column Hero Content: Text Left, Big Rectangular Image Right (50% Hero) */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & CTAs (approx. 55% width on desktop) */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 text-left order-2 lg:order-1"
          >
            <motion.div variants={item} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#2563EB] border-l-2 border-[#2563EB] bg-blue-50/80 rounded-r-full shadow-sm shadow-blue-500/5">
                <Sparkles size={13} className="text-[#2563EB]" />
                AI / ML STUDENT
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1220] leading-[1.12] mb-6 tracking-tight"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#1d4ed8] to-[#06B6D4] bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
              <br />
              for the Future.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-[#64748B] mb-4 leading-relaxed font-normal"
            >
              Second-year AI/ML student passionate about Python, data, machine learning, and building intelligent solutions.
            </motion.p>

            <motion.p
              variants={item}
              className="text-sm sm:text-base text-[#64748B]/85 mb-8 leading-relaxed font-normal"
            >
              I’m Bharadwaj, a second-year B.Tech student specializing in Artificial Intelligence &amp; Machine Learning at BVRIT, Hyderabad. I’m focused on strengthening my programming, data analytics, machine learning, and software development skills while exploring modern AI technologies.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollTo('#skills')}
                className="px-8 py-3.5 bg-[#2563EB] text-white text-sm font-semibold rounded-full hover:bg-[#1d4ed8] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
              >
                Explore My Skills
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="px-8 py-3.5 border-2 border-[#0B1220]/15 text-[#0B1220] text-sm font-semibold rounded-full hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Let's Connect
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Rectangular Image covering half of home (approx. 45-50% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothEase, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">
              {/* Ambient Glow behind the rectangular card */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2563EB]/25 via-[#06B6D4]/20 to-transparent blur-2xl opacity-70"
                aria-hidden="true"
              />

              {/* Smooth Antigravity Floating Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-3xl p-[3px] bg-gradient-to-b from-blue-200 via-blue-100 to-cyan-100 shadow-2xl shadow-blue-500/15"
              >
                {/* Rectangular Image Frame */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] rounded-[22px] overflow-hidden bg-white">
                  <img
                    src="/profile.jpeg"
                    alt="Bharadwaj - AI/ML Student at BVRIT"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Subtle gradient overlay at bottom for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1220]/60 via-[#0B1220]/20 to-transparent pointer-events-none" />

                  {/* Bottom Floating Badge inside image frame */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/95">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold tracking-wide">AI/ML • BVRIT</span>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-xs font-medium">
                      <Terminal size={13} className="text-[#06B6D4]" />
                      <span>Python &amp; Data</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
