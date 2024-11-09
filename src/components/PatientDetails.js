import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PatientDetails.css';
import axios from 'axios';

const PatientDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const res = await axios.get('https://localhost:44307/api/Appointments');
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="patient-details">
      <h3 className='hj'>PATIENT DETAILS</h3>
      {data.map((patient, index) => (
        <div key={index} className="patient-card">
          <h3>{patient.id}</h3>
          <p><strong>Patient Name:</strong> {patient.patientName}</p>
          <p><strong>Doctor Name:</strong> {patient.doctorName}</p>
          <p><strong>Date:</strong> {patient.appointmentDate}</p>
          <p><strong>Contact Number:</strong> {patient.contact_number}</p>
        </div>
      ))}
      <button onClick={handleBackToPrevious} className="backr-button">
        BACK
      </button>
    </div>
  );
};

export default PatientDetails;
