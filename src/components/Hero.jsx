import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

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
      className="relative min-h-screen flex items-center overflow-x-hidden bg-white py-20 lg:py-0"
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
              I’m Ane Bharadwaj, a second-year B.Tech CSM student specializing in Artificial Intelligence &amp; Machine Learning at BVRIT Narsapur. I’m focused on strengthening my programming, data analytics, machine learning, and software development skills while exploring modern AI technologies.
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

          {/* Right Column: Rectangular Image with Nameplate covering half of home */}
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 0 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[460px]">
              {/* Ambient Glow behind the rectangular card */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#2563EB]/25 via-[#06B6D4]/20 to-transparent blur-2xl opacity-75"
                aria-hidden="true"
              />

              {/* Smooth Antigravity Floating Container */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative rounded-3xl p-[3px] bg-gradient-to-b from-blue-300 via-blue-100 to-cyan-200 shadow-2xl shadow-blue-500/20"
              >
                {/* Rectangular Image + Name Showcase Card */}
                <div className="relative w-full rounded-[22px] overflow-hidden bg-white">
                  {/* Photo Frame */}
                  <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[390px] overflow-hidden bg-slate-100">
                    <img
                      src={profileImg}
                      alt="Ane Bharadwaj - B.Tech CSM Student at BVRIT Narsapur"
                      className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />

                    {/* Top status badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/50 shadow-sm text-xs font-semibold text-[#0B1220]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>CSM (AI/ML)</span>
                    </div>
                  </div>

                  {/* Nameplate Directly Under The Picture */}
                  <div className="p-5 bg-gradient-to-b from-white via-white to-blue-50/40 border-t border-blue-100 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-wider text-[#0B1220] uppercase">
                      ANE BHARADWAJ
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <span className="h-0.5 w-5 bg-[#2563EB]/30 rounded-full" />
                      <p className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-[0.16em] uppercase">
                        BVRIT Narsapur
                      </p>
                      <span className="h-0.5 w-5 bg-[#2563EB]/30 rounded-full" />
                    </div>
                    <p className="text-xs text-[#64748B] mt-1.5 font-medium">
                      B.Tech CSM • AI &amp; ML Engineer in the Making
                    </p>
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
