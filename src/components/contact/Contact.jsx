import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

export default function Contact() {
  return (
    <section id="Contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <div className="contact-info">
            <h3 className="contact-label">Email</h3>
            <a href="mailto:mohitzaveri06@gmail.com" className="contact-link">
              mohitzaveri06@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <div className="contact-info">
            <h3 className="contact-label">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/mohitzaveri"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/mohitzaveri
            </a>
          </div>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <div className="contact-info">
            <h3 className="contact-label">GitHub</h3>
            <a
              href="https://github.com/mohitzaveri"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/mohitzaveri
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
