import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.scss';
import SocialMediaIcons from './social';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    aboutUs: false,
    products: false,
    customers: false,
    infrastructure: false,
    contact: false,
  });
  
  // Track screen width for responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  
  return (
    <footer className="footer1">
      <div className="container">
        <div className="text-center">
          <p className="lead">
            Let's get you set up to deliver your best work!
          </p>
          <Link to="/ContactUs" className="btn">Contact</Link>
        </div>

        <div className="row justify-content-center mt-4">
          {['aboutUs', 'products', 'customers', 'infrastructure', 'contact'].map((section) => (
            <div key={section} className="col-12 col-md-2 mb-3">
              <h5
                onClick={() => isMobile && toggleSection(section)}
                style={{ cursor: isMobile ? 'pointer' : 'default' }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} 
                {isMobile && (
                  <span>
                    <i className={`fas ${openSections[section] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </span>
                )}
              </h5>
              <ul style={{ display: isMobile ? (openSections[section] ? 'block' : 'none') : 'block' }}>
                {section === 'aboutUs' && (
                  <>
                    <li><Link to="/AboutUs">Our Story</Link></li>
                    <li><Link to="/AboutUs">Mission & Vision</Link></li>
                    <li><Link to="/AboutUs">Our Value System</Link></li>
                  </>
                )}
                {section === 'products' && (
                  <>
                    <li><Link to="/Products">Stamping</Link></li>
                    <li><Link to="/Products">Tool Design</Link></li>
                  </>
                )}
                {section === 'customers' && (
                  <>
                    <li><Link to="/Customers">OEM's</Link></li>
                    <li><Link to="/Customers">Companies</Link></li>
                  </>
                )}
                {section === 'infrastructure' && (
                  <>
                    <li><Link to="/Infrastructure">Machinery Assets</Link></li>
                    <li><Link to="/Infrastructure">Power Presses</Link></li>
                    <li><Link to="/Infrastructure">Instrument Assets</Link></li>
                  </>
                )}
                {section === 'contact' && (
                  <>
                    <li><Link to="/ContactUs">Email Us</Link></li>
                    <li><Link to="/ContactUs">Support</Link></li>
                    <li><Link to="/ContactUs">Find Us</Link></li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
