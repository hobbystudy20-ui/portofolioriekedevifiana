import { useState, useEffect, type ReactNode } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import AboutPage from '@/pages/AboutPage';
import AcademicPage from '@/pages/AcademicPage';
import ProjectsPage from '@/pages/ProjectsPage';
import SocialPage from '@/pages/SocialPage';

const CONTACT_EMAIL = 'riekedevif@gmail.com';
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=Collaboration%20%26%20Business%20Inquiry&body=Hi%20Rieke%2C%0A%0AI%27d%20like%20to%20discuss%20a%20collaboration%20or%20business%20opportunity%20with%20you.%0A%0ABest%20regards%2C%0A`;

export type PageKey = 'home' | 'about' | 'academic' | 'projects' | 'skills' | 'contact';

const navItems: Array<[string, PageKey]> = [
  ['Home', 'home'],
  ['About Me', 'about'],
  ['Academic', 'academic'],
  ['Projects', 'projects'],
  ['Sosmed', 'skills'],
];

const NAV_HEART = <span className="nav-heart">Rie<Heart size={13} fill="currentColor" /></span>;

const pages: Record<PageKey, ReactNode> = {
  home: null,
  about: <AboutPage />,
  academic: <AcademicPage />,
  projects: <ProjectsPage />,
  skills: <SocialPage />,
  contact: <SocialPage />,
};

function App() {
  const [page, setPage] = useState<PageKey>(() => {
    const hash = window.location.hash.replace('#', '') as PageKey;
    return hash in pages ? hash : 'home';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageKey;
      setPage(hash in pages ? hash : 'home');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const go = (next: PageKey) => {
    window.location.hash = next;
    setPage(next);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeKey = page === 'contact' ? 'skills' : page;

  return (
    <div className="portfolio-page">
      <nav className="top-nav">
        <div className="nav-inner">
          <div className="desktop-nav">
            {navItems.map(([label, key]) => (
              <a
                key={key}
                href={`#${key}`}
                className={activeKey === key ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); go(key); }}
              >
                {label}
              </a>
            ))}
            <a className="nav-heart-link" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>{NAV_HEART}</a>
            <a className="cv-button small" href={MAILTO_LINK}>Click For Collab or Bussines Inq</a>
          </div>
          <button className="menu-button" aria-label="Open menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, key]) => (
              <a
                href={`#${key}`}
                key={key}
                className={activeKey === key ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); go(key); }}
              >
                {label}
              </a>
            ))}
            <a className="nav-heart-link" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>{NAV_HEART}</a>
            <a className="cv-button small" href={MAILTO_LINK}>Click For Collab or Bussines Inq</a>
          </div>
        )}
      </nav>

      <main id="top">
        {page === 'home' && (
          <section className="hero section-shell">
            <div className="hero-portrait">
              <div className="portfolio-item">
                <img className="animasi-foto-otomatis" src="/files_10888456-2026-09-03T21-34-00-337Z-IMG_2382salin.png" alt="Ns. Rieke Devi Fiana saat wisuda" />
              </div>
              <a className="cv-button dark hero-cv" href={MAILTO_LINK}>Ns. Rieke Devi Fiana</a>
              <span className="symphony-lockup">
                <img className="portfolio-flower" src="/—Pngtree—pink_rose_flower_17408230.png" alt="Bunga mawar dekorasi" />
                <span className="symphony-title">Portofolio</span>
              </span>
            </div>
          </section>
        )}
        {page !== 'home' && <div className="page-spacer" />}
        {pages[page]}
      </main>

      <footer>
        <div className="footer-inner">
          <button className="footer-brand" onClick={() => go('home')}>Ns. Rieke Devi Fiana</button>
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/rieke-devi-fiana-a85aa2208" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); go('skills'); }}>Privacy Policy</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); go('skills'); }}>Terms of Service</a>
            </div>
            <span>© 2026 Ns. Rieke Devi Fiana, S.Tr.Kep. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
