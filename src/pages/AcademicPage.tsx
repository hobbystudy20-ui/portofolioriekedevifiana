import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

const graduationVideos = [
  { src: '/lv_7402311569859677458_20251012054256_(1).mp4', label: 'Profesi Graduation: Ns. Rieke Devi Fiana' },
  { src: '/lv_7402311569859677458_20251012054256_(1)_(1).mp4', label: null },
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
        </div>
      </div>
    </section>
  );
}

export default AcademicPage;
