function About() {
  return (
    <section className="about-container" id="about">
      <h2>About Me</h2>
      <div className="about-page">
        <div className="about-image">
          <img src="/about.jpg" alt="Naveen Profile" />
        </div>
        <div className="about-text">
          <p>
            Hi, I’m <span style={{ fontWeight: 900 }}>Naveen</span>!! I am a passionate web developer who loves creating
          clean, responsive, and user-friendly
          websites. My focus is on building modern web solutions using HTML, CSS, and JavaScript. I enjoy turning
          creative ideas into real projects that not only look good but also perform efficiently across all devices.
          I constantly strive to learn new technologies and improve my coding skills to stay updated with the
          fast-growing web industry. My interest lies in front-end development, but I am also exploring back-end
          concepts to become a full-stack developer in the future.
          When working on a project, I pay attention to detail, prioritize performance, and aim to deliver an excellent
          user experience.
          </p>
          <a href="/resume.jpg" download="resume" className="resume">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
export default About;