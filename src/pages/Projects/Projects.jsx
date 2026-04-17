import "./Projects.css";

import project1 from "../images/Accident.jpg";
import project2 from "../images/portfolio.jpg";

function Projects() {

  const projects = [
    {
      img: project1,
      title: "Automatic Accident Detection Using Deep Learning",
      desc: "Engineered a Deep Learning system to identify traffic accidents in real-time from CCTV footage. Specialized in high-accuracy detection under challenging conditions like low light and motion blur. Leveraged CNNs and Transfer Learning to optimize performance, using OpenCV for video preprocessing and TensorFlow for model deployment. Achieved high Precision/Recall scores to facilitate rapid emergency response.",
      technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Computer Vision"]
    },
    {
      img: project2,
      title: "Responsive Developer Portfolio",
      desc: "Designed and architected a high-performance personal portfolio using React.js. Focused on modular component architecture and fluid UI/UX across all device breakpoints using CSS Grid and Flexbox. Integrated a CI/CD pipeline via Vercel for automated deployments, ensuring 99.9% uptime and optimized load speeds.",
      technologies: ["React.js", "JavaScript", "CSS3", "Vercel", "Git"]
    }
  ];


  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">MY PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="img-container">
              <img src={project.img} alt={project.title} />
            </div>
            
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <span className="tech-tag" key={techIndex}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;