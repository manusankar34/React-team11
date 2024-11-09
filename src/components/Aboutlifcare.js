import React from 'react';
import './Aboutlifcare.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '600px',
  height: '450px',
};

const center = {
  lat: 40.748817, 
  lng: -73.985428, 
};
function Aboutlifcare() {
    return (
        <section id="aboutlifcare" className="aboutlifcare">
          <div className="container">
            <h3>LIFE-CARE - THE LEGACY OF HEALING & CARE</h3>
            <div className="content">
              <div className="section">
                <h3>OUR MISSION</h3>
                <img src="data:image/jpeg;base64,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" alt="Our Services" className="section-image" />

                <p>
                  Our mission is to provide high-quality healthcare services to our community with compassion, integrity, and excellence. We strive to improve the health and well-being of our patients through innovative medical practices and continuous improvement.
                </p>
              </div>
              <div className="section">
                <h3>OUR VISION</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Fbb4qtSJbqYeNecWw49mk18S-iZpztTd2g&s" alt="Our Services" className="section-image" />

                <p>
                  Our vision is to be the leading healthcare provider in the region, recognized for our commitment to patient care, advanced medical technology, and exceptional healthcare professionals. We aim to create a healthier future for our community.
                </p>
              </div>
              <div className="section">
                <h3>OUR HISTORY</h3>

                <img src="data:image/jpeg;base64,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" alt="Our Services" className="section-image" />

                <p>
                  Established in 1990, our hospital has grown from a small clinic to a state-of-the-art medical facility. Over the years, we have expanded our services and facilities to meet the growing needs of our community. Our dedicated team of healthcare professionals has been at the forefront of medical advancements, ensuring that our patients receive the best possible care.
                </p>
              </div>
              <div className="section">
                <h3>OUR SERVICES</h3>
                
                <img src="data:image/jpeg;base64,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" alt="Our Services" className="section-image" />
<p>
                LIFECARE Hospital Kozhikode is a new generation multi-speciality hospital on NH Bypass Road, Near Thondayad Junction in Calicut, Kerala. The Hospital is promoted by Starcare UK (care Health Systems Ltd) which was originally established in UK and later moved to Dubai. Starcare UK also operates multiple Hospitals and Medical centres in the Sultanate of Oman. The company is promoted by a group of Non Resident Indians with roots in Calicut.

We pride ourselves in upholding Good values in healthcare, practiced by eminent and trusted professionals, using leading edge technology.

The Starcare hospital building, designed as per JCIA and NABH standards by a team of clinicians and engineers from Architectural Studio, Calicut, Starcare UK and Steve Van Aelst Architects, Belgium is an elegant blend of aesthetics and efficiency creating a soothing environment that enhances the recovery. Above all, we seek to infuse our world-class spaces of medical practice with sensitivity and compassion.

We strive     To offer international quality standards of healthcare services in Kerala. To nurture an atmosphere of trust between those in need of care and the care givers. To be the most respected healthcare destination in Kerala. 

                </p>
              </div>
            </div>
          </div>


        </section>
      );
  }

export default Aboutlifcare;




