import { experiences } from '../data/constants';
import { TechIcon, CompanyLogo } from '../components/TechIcon';

function parseBullets(desc) {
  return desc
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('•'))
    .map((l) => l.replace(/^•\s*/, ''));
}

export default function ExperienceSection() {
  return (
    <section id="c-experience" style={{ padding: '60px 56px', borderTop: '1px solid var(--line)' }}>
      <div className="mono" style={{ fontSize: 12, color: 'var(--accent-soft)', letterSpacing: '0.2em', marginBottom: 8 }}>
        # HISTORY.LOG
      </div>
      <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 32px', letterSpacing: '-0.02em', color: 'var(--text)' }}>
        Experience
      </h2>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}>
        {experiences.map((exp, i) => {
          const bullets = parseBullets(exp.desc);
          return (
            <div key={exp.id} style={{
              padding: '24px 28px',
              borderTop: i === 0 ? 'none' : '1px solid var(--line)',
              display: 'grid', gridTemplateColumns: '148px 1fr', gap: 28,
            }}>
              <div className="mono" style={{ fontSize: 12, color: 'var(--text-mute)', letterSpacing: '0.04em', paddingTop: 4, lineHeight: 1.7 }}>
                {exp.date}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                  <CompanyLogo company={exp.company} imgSrc={exp.img} size={34} />
                  <h3 style={{ fontSize: 21, fontWeight: 500, margin: 0, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {exp.role}
                  </h3>
                  <span className="mono" style={{ color: 'var(--accent-soft)', fontSize: 13 }}>@ {exp.company}</span>
                </div>
                <ul style={{ margin: '0 0 12px', padding: 0, listStyle: 'none' }}>
                  {bullets.slice(0, 4).map((b, j) => (
                    <li key={j} style={{ fontSize: 15, color: 'var(--text-dim)', padding: '3px 0', display: 'flex', gap: 12 }}>
                      <span className="mono" style={{ color: 'var(--text-mute)', flexShrink: 0, fontSize: 12 }}>{String(j + 1).padStart(2, '0')}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                  {exp.skills.map((s) => (
                    <span key={s} className="tag mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, padding: '3px 8px 3px 5px' }}>
                      <TechIcon name={s} size={13} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
