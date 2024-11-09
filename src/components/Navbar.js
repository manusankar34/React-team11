import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
<ul>
</ul>
<ul className="navbar-nav navbar-light">
<li className="nav-item"><a role="button" className="nav-link whtclr" href="/" aria-label="link"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z"></path></svg></a></li>
<li className="nav-item"><a className="nav-link whtclr" href="aboutlifcare">ABOUT US</a></li>
 <li><a href="services">SERVICES</a></li> 
<li><a href="Centerex">CENTER OF EXCELLENCE</a></li>
<li className="nav-item"><a className="nav-link whtclr" href="doctors">SPECIALISTS</a></li>
<li className="nav-item"><a className="nav-link whtclr" href="Pharmacy">PHARMACY</a></li>
<li className="nav-item"><a className="nav-link whtclr" href="health-insurance">CONTACT US</a></li>

          <li className="nav-item"><a className="nav-link whtclr appointm" href="appointment">Make Appointment</a></li>
          <img src="https://kmchhospitals.com/wp-content/uploads/2016/05/accrediation.png" alt="" width="172" height="53px" border="0"></img>

      </ul>
<div>
</div>
    
    </nav>
    
  );
}

export default Navbar;

