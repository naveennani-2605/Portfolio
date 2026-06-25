import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#log" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {menuOpen && <button className="nav-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />}

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Naveen home">
          NAVEEN<span>✦</span>
        </a>
        <div className="topbar-status"><i /> PORTFOLIO EXPERIENCE · 2026</div>
        <nav className={menuOpen ? "topnav open" : "topnav"}>
          {navLinks.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="resume-pill" href="/Resume.pdf" download="Valadasu_Naveen_Resume.pdf">
          Résumé <FontAwesomeIcon icon={faArrowDown} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </header>
    </>
  );
}

export default Navbar;
