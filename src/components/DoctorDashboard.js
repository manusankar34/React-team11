import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-section">
        <Link to="/patient-details">VIEW PATIENT APPOINTMENT DETAILS</Link>
      </div>
      <button onClick={handleBackToPrevious} className="backq-button">
        BACK
      </button>
    </div>
  );
};

export default DoctorDashboard;
