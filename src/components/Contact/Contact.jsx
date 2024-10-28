// src/components/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.scss';
import { Form, Button, Col, Row, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../../components/social';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Card className="contact-card">
        <Row>
          {/* Contact Form Side */}
          <Col md={6} className="p-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <Col md={6} className="p-4 contact-form">
            <h4>Talk To Us</h4>
            <div className="contact-details">
             <div>
                <FontAwesomeIcon icon={faEnvelope} /> 
                <a  className="contact-email" href="mailto:info@example.com"> Email: info@example.com</a>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} href="tel:+1234567890" /> Phone Number: +123 456 7890
              </div>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Main St, City, Country
              </div>
            </div>

            {/* Embed Map */}
            <div className="map-container mt-4">
              <iframe
                title="map-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288.8012142872434!2d80.14114462417753!3d13.12257896095217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263ef4bee8ecd%3A0x2088b1557e365a45!2sR.R.ENTERPRISES!5e0!3m2!1sen!2sin!4v1730013716340!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <h4 className="mt-1 mb-3 text-center">Follow Us</h4>
            <div className="social-icons">
              <SocialMedia />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ContactForm;
