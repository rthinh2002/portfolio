import { useEffect } from 'react';
import { TechIcon, ProjectVisual } from './TechIcon';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!project) return null;

  const links = [
    project.webapp && { label: '↗ Live site', href: project.webapp },
    project.github && { label: '⎇ Source code', href: project.github },
    project.blog   && { label: '✎ Read article', href: project.blog },
  ].filter(Boolean);

  return (
    <div className="pf-modal-backdrop" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(700px, 94%)',
          maxHeight: '88%',
          overflow: 'auto',
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          color: 'var(--text)',
          animation: 'slideup 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {/* Header bar */}
        <div style={{
          padding: '14px 24px',
          borderBottom: '1px solid var(--line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--text-mute)',
          background: 'var(--void)',
        }}>
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#fbbf24' }} />
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ marginLeft: 10 }}>~/projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
          <button onClick={onClose} style={{
            background: 'transparent',
            border: '1px solid var(--line)',
            color: 'var(--text-dim)',
            width: 26, height: 26,
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>×</button>
        </div>

        {/* Project image */}
        <div style={{ height: 220, borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
          <ProjectVisual project={project} />
        </div>

        {/* Body */}
        <div style={{ padding: '32px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10, flexWrap: 'wrap' }}>
            <span className="mono" style={{ fontSize: 10, color: 'var(--accent-soft)', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'var(--accent-glow)', border: '1px solid var(--accent)', padding: '3px 8px' }}>
              {project.category}
            </span>
            {project.private && (
              <span className="mono" style={{ fontSize: 10, color: 'var(--text-mute)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                ⊘ private repo
              </span>
            )}
          </div>

          <h2 style={{ fontSize: 34, fontWeight: 500, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            {project.title}
          </h2>

          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-dim)', margin: '0 0 28px', maxWidth: 580 }}>
            {project.description}
          </p>

          {/* Stack */}
          <div style={{ marginBottom: 28 }}>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-mute)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
              Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag mono" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 9px 4px 6px' }}>
                  <TechIcon name={tag} size={14} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {links.length > 0 && (
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pf-btn${i === 0 ? ' pf-btn-primary' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
