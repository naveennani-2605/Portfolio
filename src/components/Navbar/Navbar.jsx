import "./Navbar.css";
import { useState, useEffect } from "react";
import resume from '../Navbar/NaveenResume.pdf';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* Logo */}
      <a href="#home" className="nav-logo">
        Portfolio<span className="dot">.</span>
      </a>

      {/* Mobile Toggle */}
      <button
        className={`navbar-toggle ${isActive ? "active" : ""}`}
        onClick={handleToggle}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links */}
      <ul className={`nav-links ${isActive ? "active" : ""}`}>
        <li><a href="#home" onClick={handleClose}>Home</a></li>
        <li><a href="#about" onClick={handleClose}>About</a></li>
        <li><a href="#skills" onClick={handleClose}>Skills</a></li>
        <li><a href="#projects" onClick={handleClose}>Projects</a></li>
        <li><a href="#contact" onClick={handleClose}>Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="nav-buttons">
        <div className="resume-btn"><a href={resume} download="Resume_Naveen.pdf">Resume</a></div>
        <div className="contact-btn"><a href="#contact">Contact</a></div>
      </div>

    </nav>
  );
}

export default Navbar;