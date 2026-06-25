import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Work.css";

const projects = [
  {
    no: "01",
    type: "Business system",
    title: "CRM Portal",
    statement: "A clean dashboard experience for managing leads, customers, and follow-ups.",
    description:
      "Role-based CRM with lead management, contact tracking, analytics, secure authentication, and production-ready REST APIs. The system focuses on clear workflows, quick updates, and organized customer data so teams can manage follow-ups without confusion.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    metric: "CRM",
    code: "https://github.com/naveennani-2605/CRM-Portal.git",
    live: "https://crm-portal-fi.vercel.app/login",
    tone: "lime",
  },
  {
    no: "02",
    type: "Commerce app",
    title: "E-Commerce Platform",
    statement: "Designed a responsive buying journey from product discovery to order placement for Snackio, a student startup idea.",
    description:
      "Responsive product discovery, cart state, account authentication, product CRUD, and order processing across a MERN architecture. I built it to handle the main shopping flow clearly, from browsing products to managing cart actions and preparing orders.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Axios"],
    metric: "SHOP",
    status: "Build in progress",
    tone: "orange",
  },
  {
    no: "03",
    type: "Personal brand",
    title: "Portfolio Experience",
    statement: "A personal portfolio designed like a product experience, not a plain résumé.",
    description:
      "A modular React experience balancing recruiter clarity, expressive interaction, responsive behavior, and fast deployment. It presents my work, skills, journey, and contact flow in a clean structure that feels personal, professional, and easy to explore.",
    stack: ["React.js", "CSS3", "Responsive UI", "Animations", "Web3Forms", "Vercel"],
    metric: "LIVE",
    code: "https://github.com/naveennani-2605/Portfolio.git",
    live: "https://naveenportfolio-2605.vercel.app",
    tone: "violet",
  },
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="section-head" data-reveal>
        <div><span>01 / SELECTED WORK</span><small>PROOF OVER PROMISES</small></div>
        <h2>Projects with a clear purpose.</h2>
      </div>

      <div className="case-list">
        {projects.map((project) => (
          <article className={`case ${project.tone}`} key={project.no} data-reveal>
            <div className="case-number">{project.no}</div>
            <div className="case-copy">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <strong>{project.statement}</strong>
              <p>{project.description}</p>
              <div className="case-stack">{project.stack.map((tech) => <small key={tech}>{tech}</small>)}</div>
            </div>
            <div className="case-visual">
              <div className="project-frame" aria-label={`${project.title} abstract preview`}>
                <div className="frame-top"><i /><i /><i /><span>{project.live || project.status || project.title}</span></div>
                <div className="frame-body">
                  <div className="frame-title">{project.metric}</div>
                  <div className="frame-grid">
                    <span /><span /><span /><span /><span /><span />
                  </div>
                  <div className="frame-wave">
                    <i /><i /><i /><i />
                  </div>
                </div>
              </div>
              <div className="case-actions">
                {project.code && <a href={project.code} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> Source</a>}
                {project.live && <a href={project.live} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /> Live</a>}
                {!project.code && !project.live && project.status && <span>{project.status}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
