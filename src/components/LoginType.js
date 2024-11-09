import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginType.css';

const LoginType = () => {
  const navigate = useNavigate();

  const handleLogin = (userType) => {
    navigate(`/login/${userType}`);
  };

  const handleRegister = () => {
    navigate('/new-registration');
  };
  const handleBackToHome = () => {
    navigate('/home');
  };


  return (
    <div className="login-type-wrapper">
      {/* <div className="image-container">
        <img src="https://t4.ftcdn.net/jpg/01/33/33/41/360_F_133334155_X23HzbJKawbIgXVaub4bPM8CjpkS5uMS.jpg" alt="Medical Background" />
      </div> */}
      <div className="login-type-container">
        <h2>SELECT LOGIN TYPE</h2>
        <button onClick={() => handleLogin('ADMIN')}>Admin Login</button>
        <button onClick={() => handleLogin('DOCTOR')}>Doctor Login</button>
        <button onClick={() => handleLogin('PATIENT')}>Patient Login</button>
        <button onClick={handleRegister}>New Registration</button>

        <button onClick={handleBackToHome} className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5z"></path>
          </svg>
          Home
        </button>
      </div>
    </div>
  );
};

export default LoginType;






/* 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginType.css';

const LoginType = () => {
  const navigate = useNavigate();

  const handleLogin = (userType) => {
    navigate(`/login/${userType}`);
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-type-container">
      <h2>SELECT  LOGIN TYPE</h2>
      <button onClick={() => handleLogin('admin')}>Admin Login</button>
      <button onClick={() => handleLogin('patient')}>Patient Login</button>
      <button onClick={() => handleLogin('doctor')}>Doctor Login</button>
      <button onClick={handleRegister}>New Registration</button>
    </div>
  );
};

export default LoginType;
 */