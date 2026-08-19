import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Stack.css";

const skills = [
  // Full-Stack Development
  "React.js",
  "React Router",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MongoDB Atlas",
  "Mongoose",
  "JavaScript (ES6+)",

  // Frontend
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Responsive Web Design",
  "Axios",

  // APIs & Authentication
  "REST APIs",
  "JWT Authentication",

  // AI Engineering
  "Claude",
  "Claude Code",
  "Claude API",
  "MCP",
  "AI Agents",

  // Tools & Deployment
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "Netlify",
  "Render",
  "CI/CD",

  // Programming
  "Python"
];

function Stack() {
  return (
    <section className="stack" id="stack">
      <div className="section-head" data-reveal>
        <div><span>03 / STACK</span><small>TOOLS I TRUST</small></div>
        <h2>My stack is practical,<br />focused, and production-minded.</h2>
      </div>

      <div className="stack-console" data-reveal>
        <div className="console-head">
          <span>naveen@portfolio:~/capabilities</span>
          <span>● LIVE</span>
        </div>
        <div className="console-command"><b>$</b> list --skills --production-ready</div>
        <div className="stack-cloud">
          {skills.map((tech, index) => (
            <span key={tech} style={{ "--i": index }}>{tech}</span>
          ))}
        </div>
        <div className="console-output">
          <span><FontAwesomeIcon icon={faBolt} /> UI systems initialized</span>
          <span><FontAwesomeIcon icon={faCheck} /> API layer connected</span>
          <span><FontAwesomeIcon icon={faCheck} /> Deployment pipeline ready</span>
        </div>
      </div>

      <div className="evidence-row">
        <article data-reveal><strong>20+</strong><span>responsive components delivered</span></article>
        <article data-reveal><strong>4+</strong><span>deployed web products</span></article>
        <article data-reveal><strong>3×</strong><span>full-stack internships</span></article>
        <article data-reveal><strong>5+</strong><span>technical certifications</span></article>
      </div>
    </section>
  );
}

export default Stack;
