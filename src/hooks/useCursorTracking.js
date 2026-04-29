import { useState, useEffect } from 'react';

export function useCursorTracking(ref) {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      setPos({ x: Math.max(0, Math.min(1, x)), y: Math.max(0, Math.min(1, y)), active: true });
    };
    const onLeave = () => setPos((p) => ({ ...p, active: false }));
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [ref]);

  return pos;
}
