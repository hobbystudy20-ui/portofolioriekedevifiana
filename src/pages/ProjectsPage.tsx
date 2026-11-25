import { BriefcaseBusiness, ExternalLink, HeartHandshake, ShieldCheck, Users } from 'lucide-react';

const projects = [
  {
    icon: <HeartHandshake />,
    title: 'DampingCare',
    link: 'https://dampingcare.web.id',
    linkLabel: 'dampingcare.web.id',
    description: 'Platform pendampingan kesehatan yang membantu pasien dan keluarga mendapatkan perawatan yang lebih personal, aman, dan nyaman.',
  },
  {
    icon: <BriefcaseBusiness />,
    title: 'Clinical Internship',
    place: 'Hospital X',
    description: 'Assisted in daily patient care, monitored vital signs, and supported senior nurses in the emergency and ICU departments.',
  },
  {
    icon: <Users />,
    title: 'Community Health Program',
    place: 'Rural Health Center',
    description: 'Conducted health education sessions, basic health screenings, and maternal care support for local communities.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Emergency Care Workshop',
    place: 'Regional Nursing Association',
    description: 'Participated in advanced life support training, focusing on rapid response and critical care management.',
  },
];

function ProjectsPage() {
  return (
    <section className="experience section-shell" id="projects">
      <div className="section-heading centered"><h2>Projects &amp; Experience</h2><span className="heading-line" /></div>
      <div className="experience-grid">
        {projects.map((project) => (
          <article className="experience-card" key={project.title}>
            <div className="experience-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            {project.place && <p className="place">{project.place}</p>}
            <p className="description">{project.description}</p>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                <ExternalLink size={15} />
                <span>{project.linkLabel}</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
