import ScrollAnimation from 'react-animate-on-scroll';
import projectsData from './projectsData.json'; // Adjust path as necessary
import { Container } from './styles';
import githubIcon from '../../assets/github.svg'
import externalLink from "../../assets/external-link.svg"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projectsData.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                      <img src={githubIcon} alt="Visit site" />
                    </a>
                  )}
                  {project.externalLink && (
                    <a href={project.externalLink} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techList.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
