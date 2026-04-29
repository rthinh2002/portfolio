import { Bio } from '../data/constants';
import Computer3D from '../components/Computer3D';

export default function HomeSection({ mainRef, computerScale, scrollTo, yoe }) {
  return (
    <section id="c-home" style={{ minHeight: '88%', padding: '40px 56px', position: 'relative' }}>
      <div className="grid-overlay" />
      <div className="pf-hero-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 32,
        alignItems: 'center', position: 'relative', zIndex: 1, minHeight: 560,
      }}>
        <div>
          <div className="mono" style={{ fontSize: 12, color: 'var(--accent-soft)', letterSpacing: '0.2em', marginBottom: 20 }}>
            ◆ /home/{Bio.name.split(' ')[0].toLowerCase()}
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 500, lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0, color: 'var(--text)' }}>
            {Bio.name}
          </h1>
          <div style={{ marginTop: 14, fontSize: 22, color: 'var(--accent-soft)', fontWeight: 300 }}>
            {Bio.roles[0]} · {yoe}+ years
          </div>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.7, color: 'var(--text-dim)', maxWidth: 460, fontWeight: 300 }}>
            {Bio.description}
          </p>
          <div className="mono" style={{
            marginTop: 32, background: 'var(--surface)',
            border: '1px solid var(--line)', padding: '14px 18px',
            fontSize: 13, color: 'var(--text-dim)',
            display: 'flex', alignItems: 'center', gap: 10, maxWidth: 460,
          }}>
            <span style={{ color: 'var(--good)' }}>$</span>
            <span style={{ color: 'var(--text)' }}>open ./experience</span>
            <span className="cursor-blink" style={{ marginLeft: 'auto' }} />
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button className="pf-btn pf-btn-primary" onClick={() => scrollTo('experience')}>→ Professional Experience</button>
            <a href={Bio.resume} target="_blank" rel="noopener noreferrer" className="pf-btn" style={{ textDecoration: 'none' }}>↓ Resume</a>
            <button className="pf-btn" onClick={() => scrollTo('contact')}>✉ Contact</button>
          </div>
        </div>

        <div className="pf-hero-computer" style={{ position: 'relative', height: 700, paddingTop: 650, marginLeft: -180 }}>
          <Computer3D containerRef={mainRef} scale={computerScale} />
          <div className="mono" style={{
            position: 'absolute', top: 12, left: 12,
            fontSize: 10, color: 'var(--text-mute)', letterSpacing: '0.1em',
            border: '1px solid var(--line)', padding: '4px 10px', background: 'var(--surface)',
          }}>
            ◉ workstation.live
          </div>
          <div className="mono" style={{ position: 'absolute', bottom: 12, right: 12, fontSize: 10, color: 'var(--text-mute)', letterSpacing: '0.1em' }}>
            ↻ tracking cursor
          </div>
        </div>
      </div>
    </section>
  );
}
