import "./Projects.css";

import project1 from "../images/Accident.jpg";
import project2 from "../images/portfolio.jpg";

function Projects() {

  const projects = [
    {
      img: project1,
      title: "Accident Detection System",
      desc: "Developed a deep learning–based accident detection system using Python and computer vision techniques to monitor CCTV footage in tunnels and highways. The system identifies unexpected accidents in real time under low-visibility conditions and automatically alerts authorities."
    },
    {
      img: project2,
      title: "Portfolio Website",
      desc: "I developed a personal developer portfolio using React.js, HTML, CSS, and JavaScript. It is a Single Page Application and deployed on Netlify to showcase my skills."
    }
  ];

  return (
    <section className="projects" id="projects">

      <h2 className="projects-heading">MY PROJECTS</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;