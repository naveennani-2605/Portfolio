import profile from "../../assets/images/profile.jpeg";
import "./About.css";

const briefCards = [
  {
    no: "01",
    title: "I build both sides.",
    text: "Responsive React frontends connected to structured Node, Express, and MongoDB backends.",
    label: "FRONTEND ↔ BACKEND",
  },
  {
    no: "02",
    title: "I care about the system.",
    text: "Authentication, API design, data modeling, Git workflows, deployment, and maintainability matter too.",
    label: "UX ↔ ARCHITECTURE",
  },
  {
    no: "03",
    title: "I keep shipping.",
    text: "Two internships, production-style applications, peer reviews, sprint delivery, and live deployments.",
    label: "LEARNING ↔ DELIVERY",
  },
];

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-visual" data-reveal>
          <div className="about-photo-card">
            <img src={profile} alt="Valadasu Naveen" />
            <div className="photo-badge">VN</div>
          </div>
          <div className="floating-note note-one">React</div>
          <div className="floating-note note-two">Node.js</div>
          <div className="floating-note note-three">MongoDB</div>
        </div>

        <div className="about-copy">
          <div className="section-code" data-reveal>00 / ABOUT ME</div>
          <h2 data-reveal>Hi, I’m Naveen — a CSE student designing and building all kinds of websites.</h2>
          <p data-reveal>
            I create normal pages, landing pages, product pages, portfolios, dashboards, and full-stack web applications. I care about clean layouts,
            smooth responsive design, useful interactions, secure APIs, and websites that feel professional from the first click.
          </p>
          <div className="about-intro" data-reveal>
            <span>More about me</span>
            <p>
              I’m Valadasu Naveen, a Computer Science student from Hyderabad who enjoys turning ideas into polished web experiences.
              I like designing the layout first, understanding the user flow, and then building the frontend and backend with clean,
              practical code.
            </p>
            <p>
              My focus is simple: make websites look good, work smoothly on every screen, and feel reliable when people actually use them.
              I’m currently growing through internships, real projects, and constant practice with React, Node.js, Express, and MongoDB.
            </p>
            <div className="about-actions">
              <a href="https://www.linkedin.com/in/valadasu-naveen/" target="_blank" rel="noreferrer">
                View my LinkedIn profile
              </a>
              <a href="/Resume.pdf" download="Valadasu_Naveen_Resume.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="brief">
        <div className="section-code" data-reveal>00 / QUICK INTRO</div>
        <div className="brief-heading" data-reveal>
          <p>WHAT I CARE ABOUT</p>
          <h2>Clean interfaces, reliable systems, and work that feels easy to use.</h2>
        </div>
        <div className="brief-grid">
          {briefCards.map((card) => (
            <article data-reveal key={card.no}>
              <span>{card.no}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <strong>{card.label}</strong>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
