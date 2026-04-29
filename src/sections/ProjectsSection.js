import { projects } from '../data/constants';
import TiltCard from '../components/TiltCard';
import { TechIcon } from '../components/TechIcon';

const portfolioProjects = projects.filter((p) => p.category !== 'Blogs');

export default function ProjectsSection({ onProjectClick }) {
  return (
    <section id="c-projects" style={{ padding: '60px 56px', borderTop: '1px solid var(--line)' }}>
      <div className="mono" style={{ fontSize: 12, color: 'var(--accent-soft)', letterSpacing: '0.2em', marginBottom: 8 }}>
        # PROJECTS/
      </div>
      <h2 style={{ fontSize: 40, fontWeight: 500, margin: '0 0 32px', letterSpacing: '-0.02em', color: 'var(--text)' }}>
        Selected Work
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
        {portfolioProjects.map((p, idx) => (
          <TiltCard
            key={`${idx}-${p.title}`}
            intensity={8}
            onClick={() => onProjectClick(p)}
            style={{ background: 'var(--surface)' }}
          >
            {/* Window chrome */}
            <div style={{
              padding: '8px 14px', borderBottom: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', gap: 8,
              fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-mute)',
            }}>
              <span style={{ display: 'flex', gap: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--line)' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--line)' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
              </span>
              <span style={{ flex: 1, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {p.title.toLowerCase().replace(/[\s,]+/g, '-').slice(0, 28)}.tsx
              </span>
              <span style={{ fontSize: 10, color: p.private ? 'var(--text-mute)' : 'var(--good)', flexShrink: 0 }}>
                {p.private ? '⊘ private' : '⎇ public'}
              </span>
            </div>

            {/* Visual */}
            <div style={{ height: 160, borderBottom: '1px solid var(--line)', overflow: 'hidden', background: '#0a0e27' }}>
              {p.image ? (
                <img
                  src={p.image} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              ) : (
                <svg viewBox="0 0 320 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                  <rect width="320" height="160" fill="#0a0e27" />
                  <text x="160" y="80" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="rgba(139,149,199,0.4)">{p.title}</text>
                </svg>
              )}
            </div>

            {/* Body */}
            <div style={{ padding: '18px 20px' }}>
              <div className="mono" style={{ fontSize: 11, color: 'var(--accent-soft)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                {p.category}
              </div>
              <h3 style={{ fontSize: 21, fontWeight: 500, margin: '0 0 8px', letterSpacing: '-0.01em', color: 'var(--text)' }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--text-dim)', margin: '0 0 12px' }}>
                {p.description.length > 110 ? p.description.slice(0, 110) + '…' : p.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {p.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="tag mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 11, padding: '3px 7px 3px 4px' }}>
                    <TechIcon name={tag} size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
