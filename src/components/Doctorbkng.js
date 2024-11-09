import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import './Doctorbkng.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from "styled-components";

function Doctorbkng() {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctorName } = location.state || {};
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    navigate('/appointment-fee', {
      state: {
        doctorName,
        appointmentDate: data.date,
        appointmentFee: data.fee,
      },
    });
  };

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  return (
    <section id="doctorbkng" className="doctorbkng">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bookbg">
              <div className="appoint-formq">
                <div className="col-md-6 right-portion">
                  <div className="col-sm-12 col-xs-12">
                    <h4>BOOK AN APPOINTMENT WITH US</h4>
                    <h4>{doctorName}</h4>
                    <br />
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input id='jk'
                      type="text"
                      placeholder="ENTER YOUR NAME"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                    <input
                      type="email" id='jk'
                      placeholder="ENTER YOUR EMAIL"
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <input
                      type="date"
                      placeholder="SELECT APPOINTMENT DATE"
                      {...register('date', { required: 'Date is required' })}
                    />
                    {errors.date && <p>{errors.date.message}</p>}
                 
                    {errors.fee && <p>{errors.fee.message}</p>}
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
}

export default Doctorbkng;



























