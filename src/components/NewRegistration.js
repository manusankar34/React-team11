import React, { useState } from 'react';
import './NewRegistration.css';
import { useNavigate } from 'react-router-dom';

const NewRegistration = () => {
  const [PatientName, setPatientName] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [UserName, setUserName] = useState('');
  const [MailId, setMailId] = useState('');
  const [Password, setPassword] = useState('');
  const [CPassword, setCPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!PatientName) newErrors.PatientName = "Full name is required";
    if (!MailId) {
      newErrors.MailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(MailId)) {
      newErrors.MailId = "Email is invalid";
    }
    if (!ContactNumber) {
      newErrors.contactNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(ContactNumber)) {
      newErrors.contactNumber = "Phone number must be 10 digits";
    }
    if (!Password) newErrors.Password = "Password is required";
    if (Password !== CPassword) {
      newErrors.CPassword = "Passwords must match";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('https://localhost:44307/api/Registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            PatientName: PatientName,
            age: Age,
            gender: Gender,
            contactNumber: ContactNumber,
            address: Address,
            UserName: UserName,
            MailId: MailId,
            Password: Password,
          }),
        });

        if (response.ok) {
          window.alert('Registered Successfully');
          navigate('/login-type');
        } else {
          console.error('Sign up failed');
        }
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="new-registration">
      <h2>NEW REGISTRATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name:</label>
          <input type="text" name="PatientName" value={PatientName} onChange={(e) => setPatientName(e.target.value)} required />
          {errors.PatientName && <span className="error">{errors.PatientName}</span>}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="Age" value={Age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="Gender" value={Gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" name="ContactNumber" value={ContactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
          {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="Address" value={Address} onChange={(e) => setAddress(e.target.value)} required></textarea>
        </div>
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" name="UserName" value={UserName} onChange={(e) => setUserName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Mail Id:</label>
          <input type="text" name="MailId" value={MailId} onChange={(e) => setMailId(e.target.value)} required />
          {errors.MailId && <span className="error">{errors.MailId}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
          {errors.Password && <span className="error">{errors.Password}</span>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="CPassword" value={CPassword} onChange={(e) => setCPassword(e.target.value)} required />
          {errors.CPassword && <span className="error">{errors.CPassword}</span>}
        </div>
        <button className="btn-register" type="submit">Register Here</button>
      </form>
    </div>
  );
};

export default NewRegistration;
























/* import React, { useState } from 'react';
import './NewRegistration.css';
import { useNavigate } from 'react-router-dom';
const NewRegistration = () => {


  const [patient, setPatient] = useState('');
  const [PatientName, setPatientName] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [UserName, setUserName] = useState('');
  const [MailId, setMailId] = useState('');
  const [Password, setPassword] = useState('');
  const [CPassword, setCPassword] = useState('');

   //const [patient, setPatient] = useState({
  //   const 
  //   namek: '',
  //   age: '',
  //   gender: '',
  //   contactNumber: '',
  //   address: '',
  //   UserName: '',
  //   MailId:'',
  //   Password: '',
  //   cPassword: '',
  // });

  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPatient({ ...patient, [name]: value });
  // };

  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!PatientName) newErrors.fullname = "Full name is required";
    if (!MailId) {
      newErrors.MailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(MailId)) {
      newErrors.MailId = "Email is invalid";
    }
    if (!ContactNumber) {
      newErrors.phocontactNumberne = "Phone number is required";
    } else if (!/^\d{10}$/.test(ContactNumber)) {
      newErrors.contactNumber = "Phone number must be 10 digits";
    }
    if (!Password) newErrors.password = "Password is required";
    if (Password !== CPassword) {
      newErrors.CPassword = "Passwords must match";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('https://localhost:44307/api/Registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            namek: PatientName,
            age: Age,
            gender: Gender,
            contactNumber: ContactNumber,
            address: Address,
            UserName:UserName,
            MailId:MailId,
            Password: Password,
           
          }),
        });

        if (response.ok) {
          console.log('Sign up successful');
          navigate('/login');
        } else {
          console.error('Sign up failed');
        }
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="new-registration">
      <h2>NEW REGISTRATION</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">

       
         
          
          <label>Patient Name:</label>
          <input type="text" name="name" value={PatientName} onChange={(e)=>setPatientName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={Age} onChange={(e)=>setAge(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={Gender} onChange={(e)=>setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" name="contactNumber"  value={ContactNumber}onChange={(e)=>setContactNumber(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea name="address" value={Address}onChange={(e)=>setAddress(e.target.value)}required ></textarea>
        </div>
        <div className="form-group">
          <label>User Name:</label>
          <input type="text" name="name" value={UserName} onChange={(e)=>setUserName(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label>Mail Id:</label>
          <input type="text" name="name" value={MailId} onChange={(e)=>setMailId(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="text" name="name" value={Password} onChange={(e)=>setPassword(e.target.value)}  required />
        </div>
        <div className="form-group">
          <label>Confirm password:</label>
          <input type="text" name="name" value={CPassword} onChange={(e)=>setCPassword(e.target.value)}  required />
        </div>
        <button type="submit" onClick={handleSubmit}>Register Here</button>
      </form>
    </div>
  );
};

export default NewRegistration;
 */