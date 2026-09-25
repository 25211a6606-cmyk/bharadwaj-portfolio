import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only on desktop
    if ('ontouchstart' in window) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener('mousemove', move);

    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: pos.x - (hovering ? 20 : 10),
        y: pos.y - (hovering ? 20 : 10),
        width: hovering ? 40 : 20,
        height: hovering ? 40 : 20,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    >
      <div className={`w-full h-full rounded-full border-2 border-[#2563EB] transition-all duration-200 ${
        hovering ? 'bg-[#2563EB]/10' : 'bg-transparent'
      }`} />
    </motion.div>
  );
}
