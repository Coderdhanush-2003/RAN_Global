import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo.png';
import '../index.css'; 
import '../styles.scss'; 
import SocialMedia from './social'; 
import { NavLink , Link  } from 'react-router-dom';

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const closeNavbar = () => setCollapsed(true);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
        <Link to="/"><img src={logo} alt="Logo" style={{ width: '300px', height: '100px', paddingLeft: '1px' }} /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!collapsed}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" exact activeClassName="active" onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AboutUs" activeClassName="active" onClick={closeNavbar}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products" activeClassName="active" onClick={closeNavbar}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Customers" activeClassName="active" onClick={closeNavbar}>
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Infrastructure" activeClassName="active" onClick={closeNavbar}>
                  Infrastructure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ContactUs" activeClassName="active" onClick={closeNavbar}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="App">
              {/* Other components */}
              <SocialMedia />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
