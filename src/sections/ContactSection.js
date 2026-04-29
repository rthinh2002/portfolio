import { Bio } from '../data/constants';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

const SOCIAL_LINKS = [
  {
    href: Bio.github, label: 'GitHub',
    icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
  {
    href: Bio.linkedin, label: 'LinkedIn',
    icon: <g><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" stroke="none" /><circle cx="7" cy="7" r="1.6" fill="#0a0e27" /><rect x="6" y="10" width="2.2" height="8" fill="#0a0e27" /><path d="M11 10 L13 10 L13 11.5 Q14 10 15.5 10 Q18 10 18 13 L18 18 L15.8 18 L15.8 13.5 Q15.8 12 14.5 12 Q13.2 12 13.2 13.5 L13.2 18 L11 18 Z" fill="#0a0e27" stroke="none" /></g>,
  },
  {
    href: Bio.insta, label: 'Instagram',
    icon: <g><rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></g>,
  },
  {
    href: Bio.resume, label: 'Résumé',
    icon: <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2 L14 8 L20 8 M16 13 H8 M16 17 H8 M10 9 H8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
];

export default function ContactSection({ scrollTo }) {
  return (
    <section id="c-contact" style={{ padding: '80px 56px 60px', borderTop: '1px solid var(--line)', textAlign: 'center' }}>
      <div style={{ fontSize: 26, fontWeight: 500, color: 'var(--accent-soft)', letterSpacing: '-0.01em', marginBottom: 12 }}>
        {Bio.name}
      </div>
      <div className="mono" style={{ fontSize: 13, color: 'var(--text-mute)', marginBottom: 36 }}>
        Let's build something together.
      </div>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 36 }}>
        {NAV_LINKS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 16, color: 'var(--text)', padding: 0, transition: 'color 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-soft)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 36, flexWrap: 'wrap' }}>
        {SOCIAL_LINKS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.label}
            style={{
              width: 44, height: 44,
              border: '1px solid var(--line)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-dim)', textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-soft)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-glow)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)'; e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'transparent'; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              {c.icon}
            </svg>
          </a>
        ))}
      </div>

      <div className="mono" style={{ color: 'var(--text-mute)', fontSize: 11, letterSpacing: '0.1em' }}>
        © {new Date().getFullYear()} {Bio.name}. All rights reserved.
      </div>
    </section>
  );
}
