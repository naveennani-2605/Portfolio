import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Naveen Portfolio.</h3>
        <p>Passionate Web Developer creating responsive and user-friendly websites.</p>
      </div><hr />
      <div className="footer-bottom">
        <p>&copy; 2026 Valadasu Naveen`s Portfolio | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;