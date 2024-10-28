import React from 'react';
import logo from '../img/logo2.png'; 
import '../index.css'; // Make sure to import your CSS file
import FooterUp from './FooterUp'; // Corrected the import to match component casing

function Footer() {
  return (
    <>
      <FooterUp /> 
      <footer className="footer">
        <div className="footer-content">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">© 2024 RAN Global Auto Engineering Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
