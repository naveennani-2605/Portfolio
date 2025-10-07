import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="name">Portfolio.</a>

        <button 
          className={`navbar-toggle ${isActive ? "active" : ""}`} 
          onClick={handleToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navbar-menu ${isActive ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
