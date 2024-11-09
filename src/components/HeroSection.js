

import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styled from "styled-components";

function Hero() {
  const [color, setColor] = useState('green');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const colors = ['darkgreen', 'green','brown', 'darkgreen'];
    let index = 0;

    const intervalId = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="hero">
      <h3 style={{ color: color }}>LIFE-CARE HOSPITALS - A LEGACY OF HEALING & CARE</h3>
     
     
      <Button variant="primary" onClick={handleShow}>
        ENQUIRE NOW
      </Button>
<div>
  
</div>
      <Modal show={show} onHide={handleClose} centered animation={true} className="fade">
     <Modal.Header closeButton id="cls"> 
          <Modal.Title>LIFECARE-ENQUIRY HERE</Modal.Title>
      </Modal.Header> 
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Hero;
