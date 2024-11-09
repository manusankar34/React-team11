import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" style={{ backgroundColor: 'skyblue' }}>
  <div className="marquee">
    <p style={{ color: 'green' }}>
      VenaSeal™️ powered Glue Therapy for Varicose Veins is now available at <b style={{ color: 'black' }}>LIFE-CARE</b> Hospital. For details call <b style={{ color: 'black' }}>+91 8606945541</b>
    </p>
  </div>
  
  <h6 style={{ color: 'green', fontSize: '10px', marginRight: '20px' }}>
    Help line: +91 495 2489000
  </h6>
  <br />
  <h6 style={{ color: 'green', fontSize: '12px' }}>
    Email us: info@lifecare.com
  </h6>
  
  <ul>
   
  </ul>
</nav>

    
  );
}

export default Navbar;