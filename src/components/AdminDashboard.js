import React from 'react';
import './AdminDashboard.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const AdminDashboard = () => {
  const navigate = useNavigate();


  const handleBackToPrevious = () => {
    navigate(-1);
  };
  return (
    <div className="admin-dashboard">
     
      <div className="dashboard-sectionl">
       
        <Link to="/appointment-history">PATIENT REGISTRATIONS</Link>

      
      </div>
      <div className="dashboard-section">
       
        <Link to="/appointment-schedule">NEW APPONTEMENTS</Link>
      
      </div>
      <div className="dashboard-sectionp">
        <Link to="/pharmacy-billing-details">PHARMACY</Link>
      </div>
      <div className="dashboard-sectiond">
        <Link to="/new-doctor">ADD NEW DOCTORS</Link>
       
      </div>

      <button onClick={handleBackToPrevious} className="backjk-button">
        BACK
      </button>
    </div>
  );
};

export default AdminDashboard;
