import { Instagram, Mail, MessageCircle, Phone } from 'lucide-react';

const CONTACT_EMAIL = 'riekedevif@gmail.com';
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=Collaboration%20%26%20Business%20Inquiry&body=Hi%20Rieke%2C%0A%0AI%27d%20like%20to%20discuss%20a%20collaboration%20or%20business%20opportunity%20with%20you.%0A%0ABest%20regards%2C%0A`;

function SocialPage() {
  return (
    <>
      <section className="social section-shell" id="skills">
        <h2>Connect With Me</h2>
        <div className="social-links">
          <a href="https://instagram.com/rieke.df" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          <a href="https://www.tiktok.com/@itsmenersrieke" target="_blank" rel="noreferrer" aria-label="TikTok"><MessageCircle /></a>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-inner">
          <h2>Let's Collab!!</h2>
          <p>I'm always open to discussing new opportunities, collaborations, or ways we can work together to improve healthcare.</p>
          <div className="contact-card">
            <div><Mail /><a href={MAILTO_LINK}>{CONTACT_EMAIL}</a></div>
            <div><Phone /><span>0858-6570-2681</span></div>
          </div>
          <a className="cv-button dark" href={MAILTO_LINK}>Reach Out Now</a>
        </div>
      </section>
    </>
  );
}

export default SocialPage;
