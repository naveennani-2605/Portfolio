import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">

      <h1 className="home-title">
        Hi, I'm <span>Naveen</span> 👋 <br />
        Frontend Web Developer
      </h1>

      <p className="home-text">
        I design and develop modern, responsive, and high-performance
        websites and web applications using the latest technologies.
        Passionate about creating clean UI with impressive web pages.
      </p>

      <div className="home-buttons">
        <div className="projects-btn"><a href="#projects">View Projects</a></div>
        <div className="explore-btn"><a href="#about">Explore More</a></div>
      </div>

    </div>
  );
}

export default Home;