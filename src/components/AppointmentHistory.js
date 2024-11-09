import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentHistory.css';

const sampleAppointments = [
  { date: '2024-11-01', time: '10:00 AM', patientName: 'vishnu', doctorName: 'Dr. Sathya raj', details: 'Routine check-up' },
  { date: '2024-11-02', time: '11:00 AM', patientName: 'kokila', doctorName: 'Dr. Brahamanad tp', details: 'Follow-up visit' },
  { date: '2024-11-03', time: '09:30 AM', patientName: 'rahila', doctorName: 'Dr.praveen', details: 'Consultation' },
  { date: '2024-11-04', time: '02:00 PM', patientName: 'anishlin', doctorName: 'Dr.jithin kvt', details: 'Dental check-up' },
];

const AppointmentHistory = ({ appointments = sampleAppointments }) => {
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  return (
    <div className="appointment-history">
      <h3>APPOINTMENT HISTORY</h3>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>TIME</th>
            <th>PATIENT NAME</th>
            <th>DOCTOR NAME</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleBackToPrevious} className="backj-button">
        BACK
      </button>
    </div>
  );
};

export default AppointmentHistory;
