import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

import BackToTopButton from "./BackToTopButton";
import "./stylle.css";

const ContactForm = () => {
  return (
    <section id="contact">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-wrapper">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <a href="tel:9265955849" title="Give me a call">
                  9265955849
                </a>
              </span>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <a
                  href="mailto:shahadit68@gmail.com"
                  title="Send me an email"
                >
                  shahadit68@gmail.com
                </a>
              </span>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://www.instagram.com/aditx343/"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adit-shah-720639222/"
                target="_blank"
                className="contact-icon"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;