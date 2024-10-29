import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/AboutUs'; 
import Products from './pages/Products';
import Customers from './pages/Customers';
import Infrastructure from './pages/Infrastructure';
import ContactUs from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/RAN_Global" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Infrastructure" element={<Infrastructure />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
