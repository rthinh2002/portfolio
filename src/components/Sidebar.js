import { Bio } from '../data/constants';

export default function Sidebar({ sections, activeSection, scrollTo }) {
  return (
    <div style={{
      width: 226, background: 'var(--surface)',
      borderRight: '1px solid var(--line)',
      padding: '20px 0', display: 'flex', flexDirection: 'column',
      flexShrink: 0, fontFamily: 'var(--font-mono)',
    }}>
      <div style={{ padding: '0 18px 18px', borderBottom: '1px solid var(--line)' }}>
        <div style={{ fontSize: 12, color: 'var(--text-mute)', letterSpacing: '0.15em', marginBottom: 8 }}>EXPLORER</div>
        <div style={{ fontSize: 13, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ color: 'var(--accent-soft)' }}>▾</span> portfolio
        </div>
      </div>

      <div style={{ padding: '12px 0', flex: 1 }}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{
              width: '100%',
              background: activeSection === s.id ? 'var(--accent-glow)' : 'transparent',
              border: 'none',
              borderLeft: activeSection === s.id ? '2px solid var(--accent)' : '2px solid transparent',
              color: activeSection === s.id ? 'var(--text)' : 'var(--text-dim)',
              padding: '8px 18px 8px 26px',
              fontFamily: 'var(--font-mono)', fontSize: 13,
              textAlign: 'left', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10,
              transition: 'all 0.15s',
            }}
          >
            <span style={{ width: 16, color: activeSection === s.id ? 'var(--accent-soft)' : 'var(--text-mute)', fontSize: 13 }}>{s.icon}</span>
            {s.label}
          </button>
        ))}
      </div>

      <div style={{ padding: 18, borderTop: '1px solid var(--line)' }}>
        <div style={{ fontSize: 12, color: 'var(--text-mute)', letterSpacing: '0.15em', marginBottom: 10 }}>SESSION</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, background: 'var(--accent)', color: 'var(--void)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 600, fontSize: 13, fontFamily: 'var(--font-mono)', flexShrink: 0,
          }}>
            {Bio.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: 13, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{Bio.name}</div>
            <div style={{ fontSize: 10, color: 'var(--good)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--good)', display: 'inline-block' }} /> available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
