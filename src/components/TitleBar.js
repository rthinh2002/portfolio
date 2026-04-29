import { Bio } from '../data/constants';

export default function TitleBar({ activeSection, sections }) {
  return (
    <div style={{
      height: 36, background: 'var(--surface)',
      borderBottom: '1px solid var(--line)',
      display: 'flex', alignItems: 'center',
      padding: '0 14px', gap: 14,
      fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)',
      flexShrink: 0,
    }}>
      <div style={{ display: 'flex', gap: 7 }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#fbbf24', display: 'inline-block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
      </div>
      <span style={{ flex: 1, textAlign: 'center', letterSpacing: '0.1em' }}>
        ~/portfolio — {Bio.name.toLowerCase().replace(' ', '')} — {sections.find((s) => s.id === activeSection)?.label}
      </span>
      <span style={{ color: 'var(--text-mute)' }}>⌘K</span>
    </div>
  );
}
