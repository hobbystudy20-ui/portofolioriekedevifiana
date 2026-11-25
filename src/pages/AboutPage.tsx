import { Heart } from 'lucide-react';

function AboutPage() {
  return (
    <section className="about section-shell" id="about">
      <div className="section-heading">
        <Heart className="heading-icon" size={13} fill="currentColor" />
        <h2>About Me</h2>
      </div>
      <div className="about-card">
        <div className="about-photo">
          <img src="/IMG_2421 copy.webp" alt="Ns. Rieke Devi Fiana saat wisuda" />
        </div>
        <p>I am a dedicated and passionate nursing professional with a strong commitment to delivering high-quality, patient-centered care. With a Bachelor of Applied Science in Nursing (S.Tr.Kep) and professional Nurse certification (Ns.), I bring a blend of clinical expertise, empathy, and critical thinking to every patient interaction.</p>
        <p>My approach to healthcare is rooted in the belief that true healing requires both medical proficiency and human connection. I continuously strive to update my skills and knowledge to meet the evolving demands of the healthcare sector, ensuring safety, comfort, and dignity for all those under my care.</p>
        <p className="about-scroll-prompt">Senang berkenalan dengan kamu!</p>
      </div>
    </section>
  );
}

export default AboutPage;
