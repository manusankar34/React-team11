import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { userType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ UserName: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [fetchedData, setFetchedData] = useState(null); 

  const validateForm = () => {
    const newErrors = {};
    if (!formData.UserName) newErrors.UserName = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      if ((userType === 'ADMIN' && formData.password === '1') ||
          (userType === 'DOCTOR' && formData.password === '2')) {
        if (userType === 'ADMIN') {
          navigate('/admin-dashboard');
        } else if (userType === 'DOCTOR') {
          navigate('/doctor-dashboard');
        }
      } else if (userType === 'PATIENT') {
        try {
          const response = await fetch(`https://localhost:44307/api/Registration/${encodeURIComponent(formData.UserName)}/${encodeURIComponent(formData.password)}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          });
console.log(response);
          if (response.ok) {
         
              navigate('/appointment');
         
          } else {
            setLoginError('Username or password are incorrect');
          }
        } catch (error) {
          console.error('Error:', error);
          setLoginError('An error occurred while logging in.');
        }
      } else {
        setLoginError('Invalid credentials');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="login-container">
      <div className="login-containerk">
        <h2>{userType.charAt(0).toUpperCase() + userType.slice(1)} LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              required
            />
            {errors.UserName && <p className="error">{errors.UserName}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {loginError && <p className="error">{loginError}</p>}
          <button type="submit" className="login-btnk">LOGIN</button>
          <button onClick={handleBackToPrevious} className="back-button">Back</button>
        </form>
        {fetchedData && (
          <div className="fetched-data">
            <h3>Fetched Data:</h3>
            <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;








