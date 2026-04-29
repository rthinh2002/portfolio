import { useState, useEffect } from 'react';
import { useCursorTracking } from '../hooks/useCursorTracking';

export default function Computer3D({ containerRef, scale = 1 }) {
  const cursor = useCursorTracking(containerRef);
  const [t, setT] = useState(0);

  useEffect(() => {
    let raf;
    const tick = () => { setT((v) => v + 0.4); raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const rx = (cursor.y - 0.5) * 24;
  const ry = (cursor.x - 0.5) * -45;
  const idleY = cursor.active ? 0 : Math.sin(t * 0.04) * 5;

  const screenW = 280, screenH = 200, screenD = 36;
  const bezel = 14, standH = 30;
  const baseW = 140, baseD = 80, baseH = 12;

  const faceBg = 'linear-gradient(160deg, #1a2048 0%, #111634 60%, #0a0e27 100%)';
  const sideBg = 'linear-gradient(180deg, #0c1131 0%, #060a1f 100%)';
  const edge = '1px solid rgba(96,165,250,0.45)';
  const edgeSoft = '1px solid rgba(59,130,246,0.25)';

  return (
    <div style={{
      perspective: '1400px',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
    }}>
      {/* Scale wrapper — transitions instantly so resize is visible */}
      <div style={{
        transformStyle: 'preserve-3d',
        transform: `scale(${scale})`,
        transition: 'transform 0.25s ease',
      }}>
      {/* Rotation wrapper — smooth cursor / idle animation */}
      <div style={{
        transformStyle: 'preserve-3d',
        transform: `translateY(${idleY}px) rotateX(${8 + rx}deg) rotateY(${ry}deg)`,
        transition: cursor.active
          ? 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
          : 'transform 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
      }}>
        {/* MONITOR */}
        <div style={{ position: 'absolute', transformStyle: 'preserve-3d', transform: `translateY(${-(standH + screenH / 2)}px)` }}>
          {/* Front face with screen */}
          <div style={{
            position: 'absolute',
            width: screenW, height: screenH,
            left: -screenW / 2, top: -screenH / 2,
            background: faceBg,
            border: edge,
            transform: `translateZ(${screenD / 2}px)`,
            boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(59,130,246,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: bezel, boxSizing: 'border-box',
          }}>
            <div style={{
              width: '100%', height: '100%',
              background: 'radial-gradient(ellipse at 50% 30%, #0e1a3d 0%, #050818 100%)',
              border: '1px solid rgba(59,130,246,0.5)',
              boxShadow: 'inset 0 0 30px rgba(59,130,246,0.18)',
              display: 'flex', flexDirection: 'column',
              padding: 10,
              fontFamily: 'JetBrains Mono, ui-monospace, monospace',
              color: '#60a5fa', fontSize: 9, lineHeight: 1.6,
              overflow: 'hidden', position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.18) 2px 3px)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3b82f6', borderBottom: '1px solid rgba(59,130,246,0.3)', paddingBottom: 4, marginBottom: 6 }}>
                <span>~/portfolio</span>
                <span style={{ color: '#34d399' }}>● online</span>
              </div>
              <div style={{ color: '#34d399' }}>$ ng serve --prod</div>
              <div style={{ color: '#8b95c7' }}>&gt; Angular ready on :4200</div>
              <div style={{ color: '#3b82f6', marginTop: 4 }}>$ dotnet run</div>
              <div style={{ color: '#8b95c7' }}>&gt; ASP.NET ready on :5000</div>
              <div style={{ color: '#fbbf24' }}>$ az webapp deploy</div>
              <div style={{ color: '#34d399' }}>✓ deployed to Azure in 3.8s</div>
              <div style={{ marginTop: 'auto', color: '#3b82f6', display: 'flex', alignItems: 'center', gap: 4 }}>
                $<span style={{ animation: 'blink 1s step-end infinite', background: '#60a5fa', width: 5, height: 9, display: 'inline-block', marginLeft: 4 }} />
              </div>
            </div>
          </div>

          {/* Back face */}
          <div style={{ position: 'absolute', width: screenW, height: screenH, left: -screenW / 2, top: -screenH / 2, background: sideBg, border: edgeSoft, transform: `translateZ(${-screenD / 2}px) rotateY(180deg)` }}>
            <div style={{ position: 'absolute', top: '30%', left: '20%', right: '20%', height: 40, background: 'repeating-linear-gradient(90deg, transparent 0 3px, rgba(96,165,250,0.15) 3px 5px)' }} />
          </div>

          {/* Top */}
          <div style={{ position: 'absolute', width: screenW, height: screenD, left: -screenW / 2, top: -screenH / 2 - screenD / 2 + screenD / 2, background: 'linear-gradient(180deg, #1a2048, #0c1131)', border: edgeSoft, transform: `translateY(${-screenH / 2}px) rotateX(90deg)`, transformOrigin: 'top' }} />
          {/* Bottom */}
          <div style={{ position: 'absolute', width: screenW, height: screenD, left: -screenW / 2, top: screenH / 2 - screenD / 2, background: 'linear-gradient(0deg, #060a1f, #0c1131)', border: edgeSoft, transform: `translateY(${screenD / 2}px) rotateX(-90deg)`, transformOrigin: 'bottom' }} />
          {/* Left */}
          <div style={{ position: 'absolute', width: screenD, height: screenH, left: -screenW / 2 - screenD / 2 + screenD / 2, top: -screenH / 2, background: sideBg, border: edgeSoft, transform: `translateX(${-screenW / 2}px) rotateY(-90deg)`, transformOrigin: 'left' }} />
          {/* Right */}
          <div style={{ position: 'absolute', width: screenD, height: screenH, left: screenW / 2 - screenD / 2, top: -screenH / 2, background: sideBg, border: edgeSoft, transform: `translateX(${screenD / 2}px) rotateY(90deg)`, transformOrigin: 'right' }} />
        </div>

        {/* STAND (neck) */}
        <div style={{ position: 'absolute', width: 16, height: standH, left: -8, top: -standH, background: 'linear-gradient(180deg, #1a2048, #0a0e27)', border: edgeSoft, transformStyle: 'preserve-3d' }}>
          <div style={{ position: 'absolute', inset: 0, transform: 'translateZ(8px)', background: 'linear-gradient(180deg, #1a2048, #0a0e27)', border: edgeSoft }} />
          <div style={{ position: 'absolute', inset: 0, transform: 'translateZ(-8px) rotateY(180deg)', background: sideBg, border: edgeSoft }} />
          <div style={{ position: 'absolute', width: 16, height: standH, left: -8 + 8, top: 0, transform: 'translateX(-8px) rotateY(-90deg)', transformOrigin: 'left', background: sideBg, border: edgeSoft }} />
          <div style={{ position: 'absolute', width: 16, height: standH, left: 8 - 8, top: 0, transform: 'translateX(8px) rotateY(90deg)', transformOrigin: 'right', background: sideBg, border: edgeSoft }} />
        </div>

        {/* BASE */}
        <div style={{ position: 'absolute', transformStyle: 'preserve-3d', transform: 'translateY(0)' }}>
          <div style={{ position: 'absolute', width: baseW, height: baseD, left: -baseW / 2, top: -baseH / 2, background: 'linear-gradient(180deg, #1a2048, #0c1131)', border: edge, transform: `translateY(${-baseH / 2}px) rotateX(90deg)`, transformOrigin: 'top' }} />
          <div style={{ position: 'absolute', width: baseW, height: baseD, left: -baseW / 2, top: baseH / 2 - baseD / 2, background: 'linear-gradient(0deg, #060a1f, #0c1131)', border: edgeSoft, transform: `translateY(${baseD / 2}px) rotateX(-90deg)`, transformOrigin: 'bottom' }} />
          <div style={{ position: 'absolute', width: baseD, height: baseH, left: -baseW / 2, top: -baseH / 2, background: sideBg, border: edgeSoft, transform: `translateX(${-baseW / 2}px) rotateY(-90deg)`, transformOrigin: 'left' }} />
          <div style={{ position: 'absolute', width: baseD, height: baseH, left: baseW / 2 - baseD, top: -baseH / 2, background: sideBg, border: edgeSoft, transform: `translateX(${baseD / 2}px) rotateY(90deg)`, transformOrigin: 'right' }} />
          <div style={{ position: 'absolute', width: baseW, height: baseH, left: -baseW / 2, top: -baseH / 2, background: faceBg, border: edge, transform: `translateZ(${baseD / 2}px)` }} />
          <div style={{ position: 'absolute', width: baseW, height: baseH, left: -baseW / 2, top: -baseH / 2, background: sideBg, border: edgeSoft, transform: `translateZ(${-baseD / 2}px) rotateY(180deg)` }} />
        </div>
      </div>{/* end rotation wrapper */}
      </div>{/* end scale wrapper */}
    </div>
  );
}
