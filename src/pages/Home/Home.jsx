import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <div className="hero-intro">
            <span className="signal"><i /> FULL-STACK DEVELOPER</span>
            <p>Hyderabad, India · Available for internships, roles, and meaningful web projects.</p>
          </div>

          <h1 aria-label="Hi, I am Naveen, MERN stack developer">
            <span className="hero-line line-one">Hi, I’m Naveen.</span>
            <span className="hero-line line-two">MERN Stack</span>
            <span className="hero-line line-three">Developer<span className="hero-dot">.</span></span>
          </h1>

          <div className="hero-bottom">
            <div className="hero-cta">
              <a href="#work">View Projects <FontAwesomeIcon icon={faArrowRight} /></a>
              <a href="mailto:naveennani2605@gmail.com">Start a conversation</a>
            </div>
            <p>
              I build responsive interfaces, REST APIs, and full-stack applications with React, Node.js, Express, and MongoDB.
            </p>
          </div>
        </div>

        <aside className="hero-card" aria-label="Portfolio summary">
          <div className="hero-card-head">
            <span>Profile</span>
            <i />
          </div>
          <div className="hero-card-title">
            <small>Valadasu Naveen</small>
            <strong>Web designer and full-stack developer.</strong>
          </div>
          <div className="hero-card-grid">
            <article><b>3+</b><span>Projects</span></article>
            <article><b>2×</b><span>Internships</span></article>
            <article><b>2027</b><span>B.Tech CSE</span></article>
            <article><b>MERN</b><span>Main stack</span></article>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>REACT</span><b>✦</b><span>NODE</span><b>✦</b><span>EXPRESS</span><b>✦</b>
          <span>MONGODB</span><b>✦</b><span>REST APIs</span><b>✦</b><span>RESPONSIVE UI</span><b>✦</b>
          <span>REACT</span><b>✦</b><span>NODE</span><b>✦</b><span>EXPRESS</span><b>✦</b>
          <span>MONGODB</span><b>✦</b><span>REST APIs</span><b>✦</b><span>RESPONSIVE UI</span><b>✦</b>
        </div>
      </div>
    </>
  );
}

export default Home;
