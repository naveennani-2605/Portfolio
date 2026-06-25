import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/valadasu-naveen",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/naveennani-2605",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/naveennani_006/",
    icon: "instagram",
  },
];

const socialIcons = {
  github: faGithub,
  instagram: faInstagram,
  linkedin: faLinkedin,
};

function Contact() {
  const [formState, setFormState] = useState("");

  const submitContact = async (event) => {
    event.preventDefault();
    setFormState("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "e402ded1-0edd-4e56-a14e-948b17669652");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormState("Form submitted successfully.");
        event.target.reset();
      } else {
        setFormState("Something went wrong. Please try again.");
      }
    } catch {
      setFormState("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="manifesto">
        <div className="manifesto-label" data-reveal>HOW I WORK</div>
        <div className="manifesto-text" data-reveal>
          <span>UNDERSTAND THE PROBLEM.</span>
          <span>DESIGN THE FLOW.</span>
          <span>BUILD, TEST, IMPROVE.</span>
        </div>
        <div className="manifesto-orbit"><FontAwesomeIcon icon={faBolt} /></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-pitch" data-reveal>
          <div className="section-code">04 / CONTACT</div>
          <p>HIRING? BUILDING? EXPLORING?</p>
          <h2>Have a role, project, or idea? Let’s talk.</h2>
          <div className="contact-details">
            <a href="mailto:naveennani2605@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> naveennani2605@gmail.com</a>
            <span><FontAwesomeIcon icon={faLocationDot} /> Hyderabad, India</span>
          </div>
          <div className="socials">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <FontAwesomeIcon icon={socialIcons[link.icon]} />
              </a>
            ))}
          </div>
        </div>

        <form className="message-panel" onSubmit={submitContact} data-reveal>
          <div className="panel-head"><span>NEW MESSAGE</span><i /></div>
          <label>01 / YOUR NAME<input type="text" name="name" placeholder="Who am I speaking with?" minLength="2" required /></label>
          <label>02 / YOUR EMAIL<input type="email" name="email" placeholder="Where can I reply?" required /></label>
          <label>03 / MESSAGE<textarea name="message" rows="6" placeholder="Tell me about the role, project, or collaboration." minLength="10" required /></label>
          <button type="submit">Submit Form <FontAwesomeIcon icon={faPaperPlane} /></button>
          {formState && <span className="form-state" role="status">{formState}</span>}
        </form>
      </section>
    </>
  );
}

export default Contact;
