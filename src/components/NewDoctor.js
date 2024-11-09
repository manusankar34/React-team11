import React, { useState } from 'react';
import './NewDoctor.css';
import { useNavigate } from 'react-router-dom';


const NewDoctor = () => {
  const [doctor, setDoctor] = useState({
    name: '',
    qualification: '',
    specialization: '',
    experience: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Doctor Details:', doctor);
  };
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  return (
    <div className="new-doctor">
      <h3>ADD  NEW DOCTOR</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Doctor Name:</label>
          <input type="text" name="name" value={doctor.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Qualification:</label>
          <input type="text" name="qualification" value={doctor.qualification} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Specialization:</label>
          <input type="text" name="specialization" value={doctor.specialization} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Experience:</label>
          <input type="text" name="experience" value={doctor.experience} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" name="contactNumber" value={doctor.contactNumber} onChange={handleChange} required />
        </div>
        <button type="submit">ADD DOCTOR</button>
      </form>
      <button onClick={handleBackToPrevious} className="backw-button">
       
        BACK
      </button>
    </div>
  );
};

export default NewDoctor;
