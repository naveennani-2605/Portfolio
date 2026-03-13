import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./About.css";
import profile from "../images/profile.jpeg";
import resume from "../About/Resume.pdf";

function About() {
  return (
    <section className="about-container" id="about">
      <div className="intro-img">
        <div className="my-image">
          <img src={profile} alt="Profile" className="profile" />
        </div>

        <div className="introduction">
          <h1 className="about-title">ABOUT ME</h1>

          <p>
            I am{" "}
            <span className="name-color">Valadasu Naveen</span>, Computer Science
            Engineering Student and aspiring MERN Stack Developer from
            MLRITM-Hyderabad. I have hands-on experience in building modern and
            responsive web applications using MongoDB, Express.js, React.js, and
            Node.js along with HTML, CSS, and JavaScript.
            <span className="highlights">
              {" "}
              I have developed projects like a personal portfolio website and
              full-stack web applications with authentication, APIs, and database
              integration using the MERN stack.
            </span>{" "}
            You can check them by{" "}
            <a
              href="https://github.com/naveennani-2605"
              className="git-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clicking Me
            </a>.<br />
            I am passionate about learning new technologies and building
            scalable and impactful web solutions.
          </p>

          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100025798393569&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faFacebook} />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/valadasu-naveen-58690a2a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/naveennani-2605"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faGithub} />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/naveennani_006/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icons" icon={faInstagram} />
              </a>
            </li>
          </ul>

          <div className="download-resume">
            <a href={resume} download="Naveen Resume.pdf">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;