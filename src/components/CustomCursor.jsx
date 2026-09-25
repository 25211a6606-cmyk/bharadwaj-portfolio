import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop/pointer devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (!visible) setVisible(true);
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const attachListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"], [data-hover]').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachListeners();
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.15s ease',
      }}
    >
      {/* Outer interactive ring - centered exactly on pointer with zero movement lag */}
      <div
        className={`rounded-full border-2 border-[#2563EB] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${
          hovering
            ? 'w-10 h-10 bg-[#2563EB]/15 scale-125 border-[#06B6D4] shadow-md shadow-blue-500/30'
            : 'w-5 h-5 bg-transparent opacity-80'
        }`}
      />
    </div>
  );
}
