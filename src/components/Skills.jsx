function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>

      <div className="skill">
        <div className="skill-name">HTML</div>
        <div className="progress-bar"><div className="progress html">90%</div></div>
      </div>

      <div className="skill">
        <div className="skill-name">CSS</div>
        <div className="progress-bar"><div className="progress css">85%</div></div>
      </div>

      <div className="skill">
        <div className="skill-name">JavaScript</div>
        <div className="progress-bar"><div className="progress js">70%</div></div>
      </div>

      <div className="skill">
        <div className="skill-name">Bootstrap</div>
        <div className="progress-bar"><div className="progress Bootstrap">65%</div></div>
      </div>

      <div className="skill">
        <div className="skill-name">React</div>
        <div className="progress-bar"><div className="progress react">75%</div></div>
      </div>
    </section>
  );
}

export default Skills;
