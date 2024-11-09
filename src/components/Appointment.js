import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Appointment.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import axios from 'axios';

const Appointment = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [appointmentDate, setAppointmentDate] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const API_URL = 'https://localhost:44307/api/Appointments';

  const onSubmit = async (data) => {
    const newAppointment = {
      appointmentDate: data.date,
      contact_number: data.phone,
      patientName: data.name,
      doctorName: data.doctor,
    };

    try {
      const response = await axios.post(API_URL, newAppointment);
      window.alert('Appointment created successfully!');
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setAppointmentDate('');
    setContactNumber('');
    setPatientName('');
    setDoctorName('');
  };

  const handleBackToPrevious = () => {
    navigate('/login-type');
  };

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bookbg">
              <div className="appoint-form">
                <div className="col-md-6 right-portion">
                  <div className="col-sm-12 col-xs-12">
                    <h4>BOOK AN APPOINTMENT WITH US</h4>
                    <p className="deskview">Book an appointment at Lifecare Hospitals by filling the form below. Our team will get back to you at the earliest.</p>
                    <br />
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register('name', { required: 'Name is required' })}
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Invalid phone number. It should be 10 digits long.',
                        },
                      })}
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                    <input
                      type="date"
                      placeholder="Appointment Date"
                      {...register('date', { required: 'Date is required' })}
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                    {errors.date && <p>{errors.date.message}</p>}
                    <select
                      {...register('doctor', { required: 'Please select a doctor' })}
                      value={doctorName}
                      onChange={(e) => setDoctorName(e.target.value)}
                    >
                      <option value="">Select Doctor</option>
                      <option value="Dr.Ajith P">Dr.Ajith P</option>
                      <option value="Dr.Ajith Kumar K">Dr.Ajith Kumar K</option>
                      <option value="Dr.Arjun Sudevan">Dr.Arjun Sudevan</option>
                      <option value="Dr.Arya Rajagopal">Dr.Arya Rajagopal</option>
                      <option value="Dr.Gopika Vasudevan">Dr.Gopika Vasudevan</option>
                    </select>
                    {errors.doctor && <p>{errors.doctor.message}</p>}
                    <div>
                      <button type="submit">SUBMIT</button>
                      <button onClick={handleBackToPrevious} className="back-button">
                        BACK
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;






















