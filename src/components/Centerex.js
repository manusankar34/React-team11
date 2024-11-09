
import React from 'react';
import './Centerex.css';

function Centerex() {
  const specialties = [
    { name: 'Liver Institute', image: 'https://kmchhospitals.com/wp-content/uploads/2016/05/liver_transplant.png', link: '/cardiac-sciences' },
    { name: 'Heart Institute', image: 'https://kmchhospitals.com/wp-content/uploads/2016/05/heart-institute.png', link: '/liver-care' },
    { name: 'Neuro Center', image: 'https://kmchhospitals.com/wp-content/uploads/2016/05/neuro_scieince.png', link: '/nephrology' },
    { name: 'Cancer Center', image: 'https://kmchhospitals.com/wp-content/uploads/2016/05/cancer.png', link: '/oncology' },
    { name: 'Orthopaedics', image: 'https://kmchhospitals.com/wp-content/uploads/2016/05/joint_replacement.png', link: '/orthopaedics' },
    { name: 'Radiology', image: 'https://kmchhospitals.com/wp-content/uploads/2016/05/radiologoy.png', link: '/neurosurgery' },
  ];

  return (
    <section id="Centerex" className="Centerex">
    <div class="space">

    </div>
      <h3> LifeCare-The Health Care You Can Trust</h3>
      <hr />
      <p>LIFCARE Hospital has always been in the forefront to introduce the most advanced and sophisticated treatment options in various specialities and subspecialities, most of them are at par with the international standards.</p>
      <br />

      <div className="Centerex-list">
        {specialties.map((specialty, index) => (
          <div key={index} className="Centerex-item" onClick={() => window.location.href = specialty.link}>
            <img src={specialty.image} alt={specialty.name} className="Centerex-image" />
            <h3>{specialty.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Centerex;

