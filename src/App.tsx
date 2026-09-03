import { useState, type ReactNode } from 'react';
import {
  BriefcaseBusiness,
  Heart,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

const graduationImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBHTMF1goBvSTYuyrrS8NauE-lFq_ahvQSalV-bdQEWheq0irJGbOyt9aC1s9H1xHc2CUX-cCNY-hZMnxJJTtkY3J_FUE7gMquOBBmX-T1_WGafdqZpUHv337Iv32eXHpEvnqUDfzV3InAfofEjtJDv7bhJ1UeWXTsi7wyTwp2Cw84Owu8SEktl_rAJ9EqhGcX_xaXeLc2mVMsHDxmjQRi2R7iLLcNzm7RvU_BO8_cw2SOloMVyb3AF',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApFFbr5jDByIUkHQfTCdFOik6adthHrBaNHjTrpfThaEq9OZr8N6sSsaXGsnCIp2L4JHWFGuD4pkjIEqkyzvTdst6rSt8Xnm2bBOVIKUI4YntY31-BExLFP3e-psFIZcPeAfuwZ7hc4ZyFyj0bqUwQ2NdjTFv_RXjIHo7OcFc0uXSoGxqVFjLxGzINCB7x4krYN312o7Iojq1V52r0cIlSnky6SUSvzTa_xGO8e5i1O1qJsKqNNSSj',
];

const navItems = [
  ['About Me', '#about'],
  ['Academic', '#academic'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact'],
];

const education = [
  ['2018 - 2022', 'Profesi Ners & Sarjana Terapan Keperawatan', 'Poltekkes Kemenkes'],
  ['2015 - 2018', 'SMA Negeri (Science Major)', 'High School Diploma'],
  ['2012 - 2015', 'SMP Negeri', 'Junior High School'],
  ['2006 - 2012', 'SD Negeri', 'Primary School'],
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="portfolio-page">
      <nav className="top-nav">
        <div className="nav-inner">
          <a className="brand" href="#top">Ns. Rieke Devi Fiana</a>
          <div className="desktop-nav">
            {navItems.map(([label, href], index) => (
              <a className={index === 0 ? 'active' : ''} href={href} key={label}>{label}</a>
            ))}
            <a className="cv-button small" href="/download">Download CV</a>
          </div>
          <button className="menu-button" aria-label="Open menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navItems.map(([label, href]) => (
              <a href={href} key={label} onClick={() => setMobileMenuOpen(false)}>{label}</a>
            ))}
            <a className="cv-button small" href="/download">Download CV</a>
          </div>
        )}
      </nav>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <h1><span className="symphony-title">Portofolio</span><br /><span className="hero-name">Ns. Rieke Devi Fiana, S.Tr.Kep</span></h1>
            <p>“Compassionate care, dedicated to healing and enriching lives through professional nursing excellence.”</p>
            <a className="cv-button dark" href="/download">Download CV Rieke Devi Fiana</a>
          </div>
          <div className="hero-portrait">
            <div className="portfolio-item">
              <img src="/files_10888456-2026-09-03T21-34-00-337Z-IMG_2382salin.png" alt="Ns. Rieke Devi Fiana saat wisuda" />
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-heading">
            <Heart className="heading-icon" size={13} fill="currentColor" />
            <h2>About Me</h2>
          </div>
          <div className="about-card">
            <p>I am a dedicated and passionate nursing professional with a strong commitment to delivering high-quality, patient-centered care. With a Bachelor of Applied Science in Nursing (S.Tr.Kep) and professional Nurse certification (Ns.), I bring a blend of clinical expertise, empathy, and critical thinking to every patient interaction.</p>
            <p>My approach to healthcare is rooted in the belief that true healing requires both medical proficiency and human connection. I continuously strive to update my skills and knowledge to meet the evolving demands of the healthcare sector, ensuring safety, comfort, and dignity for all those under my care.</p>
          </div>
        </section>

        <section className="academic section-shell" id="academic">
          <div className="section-heading centered"><h2>Academic Journey</h2><span className="heading-line" /></div>
          <div className="academic-grid">
            <div className="timeline">
              {education.map(([year, title, school]) => (
                <div className="timeline-item" key={year}>
                  <span className="timeline-dot" />
                  <div className="education-card"><span>{year}</span><h3>{title}</h3><p>{school}</p></div>
                </div>
              ))}
            </div>
            <div className="graduation-gallery">
              {graduationImages.map((image, index) => (
                <div className="video-card" key={image}>
                  <img src={image} alt={index === 0 ? 'Nursing graduation ceremony' : 'Nursing oath ceremony'} />
                  <div className="play-button"><Play size={11} fill="currentColor" /></div>
                  {index === 0 && <span className="video-label">Profesi Graduation: Ns. Rieke Devi Fiana</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section-shell" id="projects">
          <div className="section-heading centered"><h2>Professional Experience</h2><span className="heading-line" /></div>
          <div className="experience-grid">
            <ExperienceCard icon={<BriefcaseBusiness />} title="Clinical Internship" place="Hospital X">Assisted in daily patient care, monitored vital signs, and supported senior nurses in the emergency and ICU departments.</ExperienceCard>
            <ExperienceCard icon={<Users />} title="Community Health Program" place="Rural Health Center">Conducted health education sessions, basic health screenings, and maternal care support for local communities.</ExperienceCard>
            <ExperienceCard icon={<ShieldCheck />} title="Emergency Care Workshop" place="Regional Nursing Association">Participated in advanced life support training, focusing on rapid response and critical care management.</ExperienceCard>
          </div>
        </section>

        <section className="social section-shell" id="skills">
          <h2>Connect With Me</h2>
          <div className="social-links"><a href="#contact" aria-label="Instagram"><Instagram /></a><a href="#contact" aria-label="TikTok"><Sparkles /></a><a href="#contact" aria-label="Threads"><MessageCircle /></a></div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-inner">
            <h2>Let's Collab!!</h2>
            <p>I'm always open to discussing new opportunities, collaborations, or ways we can work together to improve healthcare.</p>
            <div className="contact-card"><div><Mail /><span>rieke.devifiana@example.com</span></div><div><Phone /><span>+62 812-3456-7890</span></div></div>
            <a className="cv-button dark" href="mailto:rieke.devifiana@example.com">Reach Out Now</a>
          </div>
        </section>
      </main>

      <footer><div className="footer-inner"><div className="footer-brand">Ns. Rieke Devi Fiana</div><div className="footer-right"><div className="footer-links"><a href="#contact">LinkedIn</a><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a></div><span>© 2024 Ns. Rieke Devi Fiana, S.Tr.Kep. All Rights Reserved.</span></div></div></footer>
    </div>
  );
}

function ExperienceCard({ icon, title, place, children }: { icon: ReactNode; title: string; place: string; children: ReactNode }) {
  return <article className="experience-card"><div className="experience-icon">{icon}</div><h3>{title}</h3><p className="place">{place}</p><p className="description">{children}</p></article>;
}

export default App;
