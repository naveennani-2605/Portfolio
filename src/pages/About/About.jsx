import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./About.css";
import profile from "../images/profile.jpeg";
import resume from '../About/NaveenResume.pdf';


function About() {
  return (
    <section className="about-container" id="about">
      <div className="intro-img">
        <div className="my-image">
          <img src={profile} alt="" className="profile"/>
        </div>
        <div className="introduction">
          <h1 className="about-title">ABOUT ME</h1>
          <p>I am <span className="name-color">Valadasu Naveen</span>, Computer Science Engineering Student and aspiring Frontend Web Developer from MLRITM-Hyderabad. I have hands-on experience in building responsive web applications using React.js, HTML, CSS, JavaScript, Bootstrap. <span className="highlights"> I have developed projects like a personal portfolio website and an Automatic Accident Detection system using deep learning using Python.</span> You can check them by <a href="https://github.com/naveennani-2605" className="git-link" target="_blank">Clicking Me</a>. I am passionate about learning new technologies and building impactful solutions.</p>
          <ul className="socials">
            <li><a href="https://www.facebook.com/profile.php?id=100025798393569&sk=photos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faFacebook} /></a></li>
            <li><a href="https://www.linkedin.com/in/valadasu-naveen-58690a2a4/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/naveennani-2605" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faGithub} /></a></li>
            <li><a href="https://www.instagram.com/naveennani_006/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icons' icon={faInstagram} /></a></li>
          </ul>
          <div className="download-resume">
            <a href={resume} download="Resume_Naveen.pdf">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;