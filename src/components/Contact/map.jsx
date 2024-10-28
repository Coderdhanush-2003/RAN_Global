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

          {/* Talk to Us Side */}
          <Col md={6} className="p-4 contact-form">
            <h4>Talk To Us</h4>
            <div className="contact-details">
              <div>
                <FontAwesomeIcon icon={faEnvelope} /> Email: info@example.com
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} /> Phone Number: +123 456 7890
              </div>
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: 123 Main St, City, Country
              </div>
            </div>

            {/* Embed Map */}
            <div className="map-container mt-4">
              <iframe
                title="map-location"
                src="YOUR_GOOGLE_MAPS_EMBED_LINK_HERE"
                width="100%"
                height="250"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <h4 className="mt-4">Follow Us:</h4>
            <div className="social-icons">
              <SocialMedia />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ;
