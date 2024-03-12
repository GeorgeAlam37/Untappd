import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo.svg';
import './index.css';
const Footer = () => {
  return (
    <footer className="text-light p-5" style={{background: '#98eca566'}}>
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-dark">
            <div className="d-flex flex-column align-items-center align-items-md-start">
              {/* Logo */}
              <img
                src={logo}
                alt="Logo"
                style={{ width: "89px", height: "57px", marginBottom: "20px" }}
              />

              {/* Text Information */}
              <p className="fw-bold">
              Designed and built with all the love in<br />the world with the help of our students.<br />
              Currently v1.0.0.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              {/* Social Media Icons */}
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>

              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="text-dark mr-3">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>

              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
