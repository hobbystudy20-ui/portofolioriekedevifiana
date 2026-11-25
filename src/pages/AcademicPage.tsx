import { Play } from 'lucide-react';

const graduationImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBHTMF1goBvSTYuyrrS8NauE-lFq_ahvQSalV-bdQEWheq0irJGbOyt9aC1s9H1xHc2CUX-cCNY-hZMnxJJTtkY3J_FUE7gMquOBBmX-T1_WGafdqZpUHv337Iv32eXHpEvnqUDfzV3InAfofEjtJDv7bhJ1UeWXTsi7wyTwp2Cw84Owu8SEktl_rAJ9EqhGcX_xaXeLc2mVMsHDxmjQRi2R7iLLcNzm7RvU_BO8_cw2SOloMVyb3AF',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuApFFbr5jDByIUkHQfTCdFOik6adthHrBaNHjTrpfThaEq9OZr8N6sSsaXGsnCIp2L4JHWFGuD4pkjIEqkyzvTdst6rSt8Xnm2bBOVIKUI4YntY31-BExLFP3e-psFIZcPeAfuwZ7hc4ZyFyj0bqUwQ2NdjTFv_RXjIHo7OcFc0uXSoGxqVFjLxGzINCB7x4krYN312o7Iojq1V52r0cIlSnky6SUSvzTa_xGO8e5i1O1qJsKqNNSSj',
];

const education = [
  ['2020 - 2025', 'Profesi Ners & Sarjana Terapan Keperawatan', 'Poltekkes Kemenkes Surakarta'],
];

function AcademicPage() {
  return (
    <section className="academic section-shell" id="academic">
      <div className="section-heading centered"><h2>Academic Journey</h2><span className="heading-line" /></div>
      <div className="academic-grid">
        <div className="timeline">
          <div className="academic-photo">
            <img src="/20250924_085105.jpg" alt="Ns. Rieke Devi Fiana di Poltekkes Kemenkes Surakarta" />
          </div>
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
  );
}

export default AcademicPage;
