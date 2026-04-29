import './App.css';
import { useState, useEffect, useRef } from 'react';
import { experiences } from './data/constants';
import ProjectModal from './components/ProjectModal';
import TitleBar from './components/TitleBar';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

function calcYOE() {
  const earliest = experiences.reduce((min, e) => {
    const year = parseInt(e.date.match(/\d{4}/)?.[0] || '2021');
    return year < min ? year : min;
  }, new Date().getFullYear());
  return new Date().getFullYear() - earliest;
}

const yoe = calcYOE() - 1;

const SECTIONS = [
  { id: 'home',       label: 'index.tsx',    icon: '◆' },
  { id: 'about',      label: 'about.md',     icon: '✎' },
  { id: 'skills',     label: 'stack.json',   icon: '{}' },
  { id: 'experience', label: 'history.log',  icon: '↻' },
  { id: 'education',  label: 'education.md', icon: '◎' },
  { id: 'projects',   label: 'projects/',    icon: '▸' },
  { id: 'contact',    label: 'contact.tsx',  icon: '✉' },
];

export default function App() {
  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const [time, setTime] = useState(new Date());
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWinWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const computerScale = Math.max(1.1, Math.min(2.6, (winWidth - 226) / 1000));

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const onScroll = () => {
      for (const s of SECTIONS) {
        const el = root.querySelector(`#c-${s.id}`);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        const cr = root.getBoundingClientRect();
        if (r.top - cr.top < cr.height * 0.45 && r.bottom - cr.top > 80) {
          setActiveSection(s.id);
          break;
        }
      }
    };
    root.addEventListener('scroll', onScroll);
    return () => root.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const root = mainRef.current;
    const el = root?.querySelector(`#c-${id}`);
    if (el && root) root.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="pf"
      style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--void)', overflow: 'hidden' }}
    >
      <TitleBar activeSection={activeSection} sections={SECTIONS} />

      <div style={{ flex: 1, display: 'flex', minHeight: 0, overflow: 'hidden' }}>
        <Sidebar sections={SECTIONS} activeSection={activeSection} scrollTo={scrollTo} />

        <div ref={mainRef} className="pf-frame" style={{ flex: 1, position: 'relative', minWidth: 0 }}>
          <HomeSection mainRef={mainRef} computerScale={computerScale} scrollTo={scrollTo} yoe={yoe} />
          <AboutSection yoe={yoe} />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ProjectsSection onProjectClick={setActiveProject} />
          <ContactSection scrollTo={scrollTo} />
        </div>
      </div>

      <StatusBar activeSection={activeSection} sections={SECTIONS} time={time} />

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
}