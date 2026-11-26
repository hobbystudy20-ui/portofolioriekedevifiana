import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const graduationVideos = [
  { src: '/lv_7402311569859677458_20251012054256_(1).mp4', label: 'Profesi Graduation: Ns. Rieke Devi Fiana' },
];

const academicPhotos = [
  { src: '/4.png', alt: 'Clinical Practice of Nursing pada tahap D4' },
  { src: '/5.png', alt: 'Clinical Practice of Nursing pada tahap D4' },
  { src: '/6.png', alt: 'Clinical Practice of Nursing pada tahap D4' },
  { src: '/7.png', alt: 'Clinical Practice of Nursing pada tahap D4' },
  { src: '/8.png', alt: 'Sertifikasi Basic Trauma Cardiac Life Support' },
  { src: '/9.png', alt: 'Dokumentasi akademik dan praktik keperawatan' },
  { src: '/10.png', alt: 'Dokumentasi akademik dan praktik keperawatan' },
];

const education = [
  ['2020 - 2025', 'Profesi Ners & Sarjana Terapan Keperawatan', 'Poltekkes Kemenkes Surakarta'],
];

function AcademicPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (playingIndex !== null && playingIndex !== index) {
      videoRefs.current[playingIndex]?.pause();
    }
    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="academic section-shell" id="academic">
      <div className="section-heading centered"><h2>Academic Journey</h2><span className="heading-line" /></div>
      <div className="academic-grid">
        <div className="timeline">
          <div className="academic-photo-pair">
            <div className="academic-photo">
              <img src="/20250924_085105.jpg" alt="Ns. Rieke Devi Fiana di Poltekkes Kemenkes Surakarta" />
            </div>
            <div className="academic-photo">
              <img src="/IMG-20240720-WA0007.jpg" alt="Ns. Rieke Devi Fiana saat wisuda" />
            </div>
          </div>
          {education.map(([year, title, school]) => (
            <div className="timeline-item" key={year}>
              <span className="timeline-dot" />
              <div className="education-card"><span>{year}</span><h3>{title}</h3><p>{school}</p></div>
            </div>
          ))}
        </div>
        <div className="graduation-gallery">
          {graduationVideos.map(({ src, label }, index) => (
            <div className="video-card" key={src} onClick={() => togglePlay(index)}>
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={src}
                loop
                playsInline
                onEnded={() => setPlayingIndex((prev) => (prev === index ? null : prev))}
              />
              {playingIndex !== index && <div className="play-button"><Play size={11} fill="currentColor" /></div>}
              {playingIndex === index && <div className="play-button playing"><Pause size={11} fill="currentColor" /></div>}
              {label && <span className="video-label">{label}</span>}
            </div>
          ))}
          <div className="academic-photo-grid">
            {academicPhotos.map(({ src, alt }) => (
              <div className="academic-gallery-card" key={src}>
                <img src={src} alt={alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicPage;
