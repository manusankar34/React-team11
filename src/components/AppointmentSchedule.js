import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentSchedule.css';

const sampleAppointments = [
  { date: '2024-11-10', patientName: 'Mahendran kp', contactNumber: '9080675645', doctorName: 'Dr. suhaila saleem' },
  { date: '2024-11-11', patientName: 'sreedevi', contactNumber: '9895054073', doctorName: 'Dr. Ramya samayam vani' },
  { date: '2024-11-12', patientName: 'Abdu rahman', contactNumber: '8129854774', doctorName: 'Dr.ajith p' },
  { date: '2024-11-13', patientName: 'sanath ks', contactNumber: '9767564534', doctorName: 'Dr.Archana ps' },
];

const AppointmentSchedule = ({ appointments = sampleAppointments }) => {
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  return (
    <div className="appointment-schedule">
      <h3>APPOINTMENT SCHEDULE</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>PATIENT NAME</th>
            <th>CONTACT NUMBER</th>
            <th>DOCTOR NAME</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.patientName}</td>
              <td>{appointment.contactNumber}</td>
              <td>{appointment.doctorName}</td>
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

export default AppointmentSchedule;
