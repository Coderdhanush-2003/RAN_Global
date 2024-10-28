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
        {/* Center Text and Button */}
        <div className="text-center">
          <p className="lead">
          Let's get you set up to deliver your best work!
          </p>
          <Link to="/ContactUs" className="btn">Contact</Link>
        </div>

        {/* Five Columns */}
        <div className="row mt-3 item-center">
          <div className="col-12 col-md-2 mb-3">
            {/* Toggle only on mobile */}
            <h5
              onClick={() => toggleSection('aboutUs')}
              style={{ cursor: 'pointer', display: 'none' }} 
            >
              About Us <span>{openSections.aboutUs ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.aboutUs ? 'block' : 'none' }}>
              <li><Link to="/AboutUs">Our Story</Link></li>
              <li><Link to="/AboutUs">Mission & Vision</Link></li>
              <li><Link to="/AboutUs">Our Value System</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>About Us</h5> 
            <ul>
              <li><Link to="/AboutUs">Our Story</Link></li>
              <li><Link to="/AboutUs">Mission & Vision</Link></li>
              <li><Link to="/AboutUs">Our Value System</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('products')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Products <span>{openSections.products ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.products ? 'block' : 'none' }}>
              <li><Link to="/Products">Stamping</Link></li>
              <li><Link to="/Products">Tool Design</Link></li>
              <li><Link to="/Products">Products</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Products</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/Products">Stamping</Link></li>
              <li><Link to="/Products">Tool Design</Link></li>
              <li><Link to="/Products">Products</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('customers')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Customers <span>{openSections.customers ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.customers ? 'block' : 'none' }}>
              <li><Link to="/Customers">OEM's</Link></li>
              <li><Link to="/Customers">Companies</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Customers</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/Customers">OEM's</Link></li>
              <li><Link to="/Customers">Companies</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('infrastructure')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Infrastructure <span>{openSections.infrastructure ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.infrastructure ? 'block' : 'none' }}>
              <li><Link to="/Infrastructure">Machinery Assets</Link></li>
              <li><Link to="/Infrastructure">Power Presses</Link></li>
              <li><Link to="/Infrastructure">Instrument Assets</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Infrastructure</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/Infrastructure">Machinery Assets</Link></li>
              <li><Link to="/Infrastructure">Power Presses</Link></li>
              <li><Link to="/Infrastructure">Instrument Assets</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-2 mb-3">
            <h5
              onClick={() => toggleSection('contact')}
              style={{ cursor: 'pointer', display: 'none' }} // Hide toggle on larger screens
            >
              Contact <span>{openSections.contact ? '▲' : '▼'}</span>
            </h5>
            <ul style={{ display: openSections.contact ? 'block' : 'none' }}>
              <li><Link to="/ContactUs">Email Us</Link></li>
              <li><Link to="/ContactUs">Support</Link></li>
              <li><Link to="/ContactUs">Find Us</Link></li>
            </ul>
            <h5 style={{ display: 'block' }}>Contact</h5> {/* Always display this on larger screens */}
            <ul>
              <li><Link to="/ContactUs">Email Us</Link></li>
              <li><Link to="/ContactUs">Support</Link></li>
              <li><Link to="/ContactUs">Find Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mt-4">
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
