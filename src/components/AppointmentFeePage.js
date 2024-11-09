import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './AppointmentFeePage.css';


const AppointmentFeePage = () => {

    const location = useLocation();
  const { doctorName, appointmentDate, appointmentFee } = location.state || {};

  const [selectedDoctorName, setDoctorName] = useState(doctorName);
  const [selectedAppointmentFee, setAppointmentFee] = useState(appointmentFee);
  const [paymentMode, setPaymentMode] = useState('');
  const navigate = useNavigate();


  const handlePaymentSelection = (mode) => {
    setPaymentMode(mode);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log(`Doctor: ${doctorName}, Fee: ${appointmentFee}, Payment Mode: ${paymentMode}`);
    navigate('/confirmation');
  };

  return (
    <div className="appointment-fee-page">

    <h3>Hospital Appointment Fee</h3>
      <p>Doctor: {selectedDoctorName}</p>
      <p>Date: {appointmentDate}</p>
      <p>Fee: ₹{selectedAppointmentFee}</p>
      <h3>Hospital Appointment Fee</h3>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label>
            Doctor Name:
            <input
              type="text"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Appointment Fee:
            <input
              type="number"
              value={appointmentFee}
              onChange={(e) => setAppointmentFee(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Payment Mode:
            <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} required>
              <option value="">Select Payment Mode</option>
              <option value="UPI">UPI</option>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </label>
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default AppointmentFeePage;
