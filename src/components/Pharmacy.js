import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Pharmacy.css';
import { useNavigate } from 'react-router-dom';
import { className } from 'react-slick-carousel/lib/default-props';
import OrderMedicine from './OrderMedicine';  
import { useLocation } from 'react-router-dom';


function Pharmacy() {
  const navigate = useNavigate()
  const gotToNewPage=(doctorName)=>{
    navigate('/medicine',{state:{doctorName}});
   
  }

  return (
    
    <div className="pharmacy">
    
      <h3 style={{color:'green'}}>LIFE CARE -PHARMEASY</h3>
    Pharmeasy.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 1 million happy customers – PAN India. 
      <div className="pharmacy-info">
        <h3 style={{color:'green'}}>Opening Hours</h3>
        <p style={{color:'black'}}>Monday to Friday: 8:00 AM - 9:00 PM</p>
        <p style={{color:'black'}}>Saturday & Sunday: 9:00 AM - 8:00 PM</p>
      </div>
      <div className="pharmacy-list">
      <div className="pharmacy-item">
          <h3>Order Medicine</h3>
          <button style={{background:'green'}} onClick={() => gotToNewPage('Dr.Praveen Rajan')} className="btn">Click me </button>


        </div>
      <div className="pharmacy-item">
      <h3>Upload prescriptions</h3>
      <button href="#services">Clicke me...</button>
       </div>
       <div className="pharmacy-itemk">
      <h3>Get 15% off </h3>
      <button>Clicke me...</button>
       </div>
       </div>
      <div className="pharmacy-list">
      <div className="pharmacy-item">
          <h3>Pharmeasy near me</h3>
          <button>Clicke me...</button>
        </div>
      <div className="pharmacy-item">
      <h3>Opticals</h3>
      <button>Clicke me...</button>
       </div>
       <div className="pharmacy-item">
      <h3>Personal care </h3>
      <button>Clicke me...</button>
       </div>
       </div>
       <div className="pharmacy-list">
      <div className="pharmacy-item">
          <h3>Covid essentials</h3>
          <button>Clicke me...</button>
        </div>
      <div className="pharmacy-item">
      <h3>Skin care</h3>
      <button>Clicke me...</button>
       </div>
       <div className="pharmacy-item">
      <h3>Video consult </h3>
      <button>Clicke me...</button>
       </div>
       </div>
      

    
    </div>
   
  );

}

export default Pharmacy;



