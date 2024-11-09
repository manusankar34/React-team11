import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h3>WHAT OUR PATIENTS SAY</h3>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"Amazing care, very professional staff."</p>
          <h4>– Sarah K</h4>
        </div>
        <div className="testimonial-item">
          <p>"They really care about their patients!"</p>
          <h4>– Ajay Menon</h4>
        </div>
        <div className="testimonial-item">
          <p>"They really care about their patients!"</p>
          <h4>– Brahmananad T.P</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;