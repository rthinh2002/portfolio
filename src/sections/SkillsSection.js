import { skills } from '../data/constants';
import { TechIcon } from '../components/TechIcon';

const skillGroups = skills.map((g) => ({
  group: g.title,
  items: g.skills.map((s) => s.name),
}));

export default function SkillsSection() {
  return (
    <section id="c-skills" style={{ padding: '60px 56px', borderTop: '1px solid var(--line)' }}>
      <div className="mono" style={{ fontSize: 12, color: 'var(--accent-soft)', letterSpacing: '0.2em', marginBottom: 8 }}>
        # STACK.JSON
      </div>
      <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 32px', letterSpacing: '-0.02em', color: 'var(--text)' }}>
        Tech Stack
      </h2>
      <div style={{ border: '1px solid var(--line)', background: 'var(--surface)' }}>
        {skillGroups.map((g, i) => (
          <div key={g.group} style={{
            display: 'grid', gridTemplateColumns: '160px 1fr',
            borderTop: i === 0 ? 'none' : '1px solid var(--line)',
            alignItems: 'center',
          }}>
            <div className="mono" style={{
              padding: '18px 20px', fontSize: 12, color: 'var(--accent-soft)',
              letterSpacing: '0.05em', background: 'var(--void)',
              borderRight: '1px solid var(--line)',
              height: '100%', display: 'flex', alignItems: 'center',
            }}>
              {g.group.toUpperCase()}
            </div>
            <div style={{ padding: '14px 20px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {g.items.map((item) => (
                <span key={item} className="tag mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 9px 4px 6px' }}>
                  <TechIcon name={item} size={16} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
