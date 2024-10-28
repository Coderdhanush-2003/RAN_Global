import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../index.css'; 
import { Link  } from 'react-router-dom';

function SocialMedia() {
  return (
    <div className="social-media-container">
      <div className="social-media order-lg-last">
        <div className="mb-0 d-flex justify-content-center flex-wrap">
          <Link to="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#4267B2" }} />
          </Link>
          <Link to="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} style={{ color: "#000000" }} />
          </Link>
          <Link to="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#E1306C" }} />
          </Link>
          <Link to="#" className="d-flex align-items-center justify-content-center social-media-icon" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
