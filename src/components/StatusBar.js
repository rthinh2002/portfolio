export default function StatusBar({ activeSection, sections, time }) {
  return (
    <div style={{
      height: 26, background: 'var(--accent)', color: 'var(--void)',
      display: 'flex', alignItems: 'center', padding: '0 14px', gap: 16,
      fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '0.05em',
      flexShrink: 0, fontWeight: 500,
    }}>
      <span>● MAIN</span>
      <span>UTF-8</span>
      <span>C# · TS · Angular</span>
      <span style={{ flex: 1 }} />
      <span>{sections.find((s) => s.id === activeSection)?.label}</span>
      <span>{time.toTimeString().slice(0, 8)} AEST</span>
    </div>
  );
}
