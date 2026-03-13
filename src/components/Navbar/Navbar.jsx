import "./Navbar.css";
import { useState, useEffect } from "react";
import resume from "../Navbar/Resume.pdf";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Prevent background scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

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
        <a className="resume-btn" href={resume} download="Naveen Resume.pdf">
          Resume
        </a>
        <a className="contact-btn" href="#contact">
          Contact
        </a>
      </div>

    </nav>
  );
}

export default Navbar;