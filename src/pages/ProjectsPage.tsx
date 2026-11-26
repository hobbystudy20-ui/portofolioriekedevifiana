import { ExternalLink, HeartHandshake } from 'lucide-react';

const projects = [
  {
    icon: <HeartHandshake />,
    image: '/Salinan_dari_Carousel_Instagram_Dampingcare.jpg',
    title: 'DampingCare',
    link: 'https://dampingcare.web.id',
    linkLabel: 'dampingcare.web.id',
    description: 'Platform pendampingan kesehatan yang membantu pasien dan keluarga mendapatkan perawatan yang lebih personal, aman, dan nyaman.',
  },
];

function ProjectsPage() {
  return (
    <section className="experience section-shell" id="projects">
      <div className="section-heading centered"><h2>Projects &amp; Experience</h2><span className="heading-line" /></div>
      <div className="experience-grid">
        {projects.map((project) => (
          <article className="experience-card" key={project.title}>
            {project.image && <img className="experience-image" src={project.image} alt={`${project.title} project`} />}
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
