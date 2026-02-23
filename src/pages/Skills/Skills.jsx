import "./Skills.css";

import bootstrap from "../images/bstrap.png";
import css from "../images/css.png";
import github from "../images/github.svg";
import html from "../images/html.png";
import javascript from "../images/js.png";
import mongodb from "../images/mDB.png";
import react from "../images/react.png";
import node from "../images/nodejs.png";

function Skills() {
  return (
    <section className="skills-container" id="skills">

      <h2 className="skills-title">SKILLS</h2>
      <p className="skills-subtitle">The skills I have learned and used through academic projects and hands-on practice. I focus on building responsive, user-friendly web applications using modern technologies.</p>

      <div className="skills-grid">
        <ul>
          <li>
            <img src={html} alt="HTML" />
            <h4>HTML</h4>
            <p>Structure and semantic layout of web pages.</p>
          </li>

          <li>
            <img src={css} alt="CSS" />
            <h4>CSS</h4>
            <p>Styling, layout design, and responsive UI.</p>
          </li>

          <li>
            <img src={javascript} alt="JavaScript" />
            <h4>JavaScript</h4>
            <p>Interactive functionality and dynamic behavior.</p>
          </li>

          <li>
            <img src={react} alt="React" />
            <h4>React Js</h4>
            <p>Building reusable components and SPAs.</p>
          </li>

          <li>
            <img src={bootstrap} alt="Bootstrap" />
            <h4>Bootstrap</h4>
            <p>Fast and responsive UI development.</p>
          </li>

          <li>
            <img src={mongodb} alt="MongoDB" />
            <h4>MongoDB</h4>
            <p>NoSQL database for modern applications.</p>
          </li>

          <li>
            <img src={github} alt="GitHub" />
            <h4>GitHub</h4>
            <p>Version control and project collaboration.</p>
          </li>

          <li>
            <img src={node} alt="Node Js" />
            <h4>Node Js</h4>
            <p>Tracking code changes efficiently.</p>
          </li>
        </ul>
      </div>

    </section>
  );
}

export default Skills;