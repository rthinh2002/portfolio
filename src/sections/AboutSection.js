import { Bio } from '../data/constants';

export default function AboutSection({ yoe }) {
  return (
    <section id="c-about" style={{ padding: '60px 56px', borderTop: '1px solid var(--line)' }}>
      <div className="mono" style={{ fontSize: 12, color: 'var(--accent-soft)', letterSpacing: '0.2em', marginBottom: 8 }}>
        # ABOUT.MD
      </div>
      <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 32px', letterSpacing: '-0.02em', color: 'var(--text)' }}>
        Background
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, alignItems: 'start' }}>
        <p style={{ fontSize: 19, lineHeight: 1.75, color: 'var(--text)', margin: 0, fontWeight: 300 }}>
          {Bio.description}
        </p>
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', padding: 20, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 2 }}>
          <div style={{ color: 'var(--accent-soft)', marginBottom: 10 }}>{'// metadata.json'}</div>
          <div><span style={{ color: 'var(--text-mute)' }}>"name"</span>: <span style={{ color: 'var(--text)' }}>"{Bio.name}"</span>,</div>
          <div><span style={{ color: 'var(--text-mute)' }}>"yoe"</span>: <span style={{ color: 'var(--accent-soft)' }}>{yoe}</span>,</div>
          <div><span style={{ color: 'var(--text-mute)' }}>"roles"</span>: [<span style={{ color: 'var(--text)' }}>{Bio.roles.map(r => `"${r}"`).join(', ')}</span>],</div>
        </div>
      </div>
    </section>
  );
}
