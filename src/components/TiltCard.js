import { useState, useRef } from 'react';

export default function TiltCard({ children, intensity = 12, style, onClick, className }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, hover: false });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * intensity, ry: x * intensity, hover: true });
  };

  const onLeave = () => setTilt({ rx: 0, ry: 0, hover: false });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
        transition: tilt.hover
          ? 'transform 0.1s ease-out, box-shadow 0.3s'
          : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s',
        boxShadow: tilt.hover
          ? '0 30px 60px rgba(5, 8, 24, 0.6), 0 0 0 1px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.15)'
          : '0 8px 24px rgba(5, 8, 24, 0.4), 0 0 0 1px rgba(31, 39, 80, 1)',
        cursor: onClick ? 'pointer' : 'default',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
