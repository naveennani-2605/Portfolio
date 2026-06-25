import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import "./Journey.css";

const experience = [
  {
    date: "MAY 2026 → NOW",
    company: "THIRANEX",
    role: "Full Stack Web Development Intern",
    note: "Shipping responsive React components and integrating live Node.js / Express product features with a remote engineering team.",
    tag: "CURRENT",
  },
  {
    date: "MAY → JUN 2026",
    company: "FUTURE INTERNS",
    role: "Full Stack Web Development Intern",
    note: "Delivered MERN features across sprint cycles and improved bug turnaround through peer review and disciplined Git workflows.",
  },
  {
    date: "2024 → PRESENT",
    company: "INDEPENDENT",
    role: "Web Designer & Full Stack Developer",
    note: "Designing landing pages, portfolio pages, product pages, dashboards, and practical full-stack web applications while deepening software engineering foundations.",
  },
];

const education = {
  label: "EDUCATION RUNNING IN PARALLEL",
  degree: "B.Tech — Computer Science & Engineering",
  details: "Marri Laxman Reddy Institute of Technology and Management · Hyderabad · Expected 2027",
};

function Journey() {
  return (
    <section className="log" id="log">
      <div className="section-head invert" data-reveal>
        <div><span>02 / JOURNEY</span><small>RECENT MILESTONES</small></div>
        <h2>Work history,<br />without the boring part.</h2>
      </div>

      <div className="commit-log">
        {experience.map((item, index) => (
          <article key={item.company} data-reveal>
            <div className="commit-icon"><FontAwesomeIcon icon={faCodeBranch} /></div>
            <div className="commit-date">{item.date}</div>
            <div className="commit-copy">
              <div>
                <span>{item.company}</span>
                {item.tag && <small>{item.tag}</small>}
              </div>
              <h3>{item.role}</h3>
              <p>{item.note}</p>
            </div>
            <div className="commit-hash">vn_{String(index + 1).padStart(2, "0")}</div>
          </article>
        ))}
      </div>

      <div className="education-note" data-reveal>
        <span>{education.label}</span>
        <strong>{education.degree}</strong>
        <p>{education.details}</p>
      </div>
    </section>
  );
}

export default Journey;
