// TechIcon — loads SVG icons from public/icons/.
// Place downloaded SVGs in public/icons/ using the filenames mapped below.
// Falls back to a 2-letter abbreviation badge for any missing file.

// Maps every tech name used in constants.js → SVG filename in public/icons/
const ICON_FILES = {
  // Front-End
  'React Js':    'react.svg',
  'React JS':    'react.svg',
  'React':       'react.svg',
  'Angular':     'angular.svg',
  'HTML':        'html.svg',
  'CSS':         'css.svg',
  'JavaScript':  'javascript.svg',
  'TypeScript':  'typescript.svg',
  'Bootstrap':   'bootstrap.svg',
  'Tailwind':    'tailwind.svg',
  'Tailwindcss': 'tailwind.svg',
  // Back-End
  'Node Js':       'nodejs.svg',
  'Node JS':       'nodejs.svg',
  'Express Js':    'express.svg',
  'Next Js':       'nextjs.svg',
  'Next JS':       'nextjs.svg',
  'Nextjs':        'nextjs.svg',
  'C#':            'csharp.svg',
  'ASP .NET':      'dotnet.svg',
  'ASP .NET Core': 'dotnet.svg',
  // Databases
  'MySQL':      'mysql.svg',
  'Postgresql': 'postgresql.svg',
  'MongoDB':    'mongodb.svg',
  'Firebase':   'firebase.svg',
  'MSSQL':      'mssql.svg',
  // Cloud
  'AWS':                   'aws.svg',
  'Azure':                 'azure.svg',
  'Azure DevOps':          'azure-devops.svg',
  'Google Cloud Platform': 'gcp.svg',
  'GCP':                   'gcp.svg',
  'Cloudfront':            'cloudfront.svg',
  'S3':                    's3.svg',
  // Tools
  'Git':       'git.svg',
  'GitHub':    'github.svg',
  'Docker':    'docker.svg',
  'VS Code':   'vscode.svg',
  'Postman':   'postman.svg',
  'WordPress': 'wordpress.svg',
  'Figma':     'figma.svg',
  'Slack':     'slack.svg',
  // AI / ML
  'Python':           'python.svg',
  'Keras':            'keras.svg',
  'Tensorflow':       'tensorflow.svg',
  'Scikit-learn':     'scikit-learn.svg',
  'Pandas':           'pandas.svg',
  'Numpy':            'numpy.svg',
  'Matplotlib':       'matplotlib.svg',
  'Seaborn':          'seaborn.svg',
  'Jupyter Notebook': 'jupyter.svg',
  'Google Colab':     'google-colab.svg',
  // Other
  'Vercel':        'vercel.svg',
  'RESTful API':   'rest-api.svg',
  'Stripe API':    'stripe.svg',
  'Google Map API':'google-maps.svg',
  'Vist':          'vite.svg',
};

const BASE = process.env.PUBLIC_URL || '';

export function TechIcon({ name, size = 18 }) {
  const file = ICON_FILES[name];

  if (file) {
    return (
      <img
        src={`${BASE}/icons/${file}`}
        width={size}
        height={size}
        alt={name}
        style={{ objectFit: 'contain' }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    );
  }

  // Fallback abbreviation badge for unmapped or missing icons
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#1f2750" stroke="#3b82f6" strokeWidth="0.8" />
      <text x="12" y="15" textAnchor="middle" fontSize="9" fontWeight="700" fill="#60a5fa" fontFamily="monospace">
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}

// Generative project visual — renders actual project screenshot or a themed fallback
export function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(5,8,24,0.7) 100%)' }} />
      </div>
    );
  }

  // Fallback: category-themed SVG
  return (
    <svg viewBox="0 0 320 160" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="160" fill="#0a0e27" />
      <text x="160" y="80" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="rgba(139,149,199,0.5)">{project.title}</text>
    </svg>
  );
}

// Company logo — renders company img or an initial badge
export function CompanyLogo({ company, imgSrc, size = 36 }) {
  return imgSrc ? (
    <img
      src={imgSrc}
      alt={company}
      style={{ width: size, height: size, objectFit: 'contain', background: '#fff', borderRadius: 4, padding: 2 }}
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    />
  ) : (
    <div style={{
      width: size, height: size,
      background: 'var(--void)',
      border: '1px solid var(--line)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--accent-soft)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13, fontWeight: 600,
    }}>
      {company.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
    </div>
  );
}
