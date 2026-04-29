import { education } from '../data/constants';

export default function EducationSection() {
  return (
    <section id="c-education" style={{ padding: '60px 56px', borderTop: '1px solid var(--line)' }}>
      <div className="mono" style={{ fontSize: 12, color: 'var(--accent-soft)', letterSpacing: '0.2em', marginBottom: 8 }}>
        # EDUCATION.MD
      </div>
      <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 32px', letterSpacing: '-0.02em', color: 'var(--text)' }}>
        Education
      </h2>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
        {education.map((edu, i) => (
          <div key={edu.id} style={{
            padding: '24px 28px',
            borderTop: i === 0 ? 'none' : '1px solid var(--line)',
            display: 'flex', gap: 20, alignItems: 'flex-start',
          }}>
            <img
              src={edu.img} alt={edu.school}
              style={{ width: 52, height: 52, objectFit: 'contain', background: '#fff', borderRadius: 6, padding: 4, flexShrink: 0 }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 6 }}>
                <h3 style={{ fontSize: 20, fontWeight: 500, margin: 0, color: 'var(--text)' }}>{edu.school}</h3>
                <span className="mono" style={{ fontSize: 12, color: 'var(--text-mute)' }}>{edu.date}</span>
              </div>
              <div style={{ fontSize: 16, color: 'var(--accent-soft)', marginBottom: 8 }}>{edu.degree}</div>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
                <span className="mono" style={{ fontSize: 13, color: 'var(--good)' }}>GPA: {edu.grade}</span>
                <span style={{ fontSize: 14, color: 'var(--text-dim)', maxWidth: 520 }}>{edu.desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
