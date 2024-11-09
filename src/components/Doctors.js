import React, { useLayoutEffect } from 'react';
import './Doctors.css';
import { useNavigate } from 'react-router-dom';
import { className } from 'react-slick-carousel/lib/default-props';

function Doctors() {
  const navigate = useNavigate()
  const gotToNewPage=(doctorName)=>{
    navigate('/doctorbkng',{state:{doctorName}});


   
  }


  return (
    <section id="doctors" className="doctors">
        <h3 id="mdct">LIFE-CARE-TRANSFORMING LIVES WITH BETTER HEALTH CARE</h3>
      <h4 id="mdct">MEET OUR DOCTORS</h4>


      <div className="doctor-list">
        <div className="doctor-item">
          <h3>DR.JIJIN E.H</h3>
          <p>Director & Senior Consultant - Paediatric Cardiology(MD & CEO-LIFE CARE)</p>
         
        </div>
        <div className="doctor-item">
          <h3>DR. VISHNU RAJ.M R </h3>
          <p>Senior Consultant & Head - General Surgery & Allied Specialities</p>
        </div>
        <div className="doctor-item">
          <h3>DR. AMAL P.M</h3>
          <p>Senior Consultant & HOD - Gastroenterology Surgery, Multi Organ Transplant</p>
        </div>
      </div>
      <div className="doctor-list">
        <div className="doctor-item">
          <h3>DR.PRAVEEN RAJAN </h3>
          <p>Director & Senior Consultant - Paediatric Cardiology & Neurology</p>
          <button style={{background:'green'}} onClick={() => gotToNewPage('Dr.Praveen Rajan')} className="btn">Take Appointment </button>
        </div>
        <div className="doctor-item">
          <h3>DR. SATHYARAJAN</h3>
          <p>Senior Consultant & Head - General Surgery & Allied Specialities</p>
          <button style={{background:'lightgreen',color:'darkblue'}} onClick={() => gotToNewPage('Dr.Sathya Rajan')} className="btn">Booking Started </button>

        </div>
        <div className="doctor-item">
          <h3>DR. ALEN K VARGHEES</h3>
          <p>HOD & Senior-Consultant- Cardiovascular and Thoracic Surgery</p>
          <button style={{background:'orange'}}onClick={() => gotToNewPage('Dr. Alen K Varghese')}>Booking Closing Soon </button>

        </div>
      </div>
      <div className="doctor-list">
        <div className="doctor-item">
          <h3>DR.SUHAILA SALEEM </h3>
          <p>Director,Senior Consultant & HOD -Dermatology(Visiting)</p>
          <button style={{background:'green'}} onClick={() => gotToNewPage('Dr.Suhaila Saleem')} className="btn">Take Appointment </button>
        </div>
        <div className="doctor-item">
          <h3>DR. Ajith Kumar.K</h3>
          <p>Director, Senior Consultant & Anterior Segment Surgeon</p>
          <button id="kl" style={{backgroundColor:'red',color:'white',cursor:'not-allowed'}}>Booking closed</button>
        </div>
        <div className="doctor-item">
          <h3>Dr. Varsha K.S</h3>
          <p>Specialist - Behavioral Medicine & Certified Queer Affirmative Therapist</p>
          <button style={{background:'green'}}onClick={() => gotToNewPage('Dr. Varsha K.S')}>Take Appointment </button>
        </div>
      </div>

      <div className="doctor-list">
        <div className="doctor-item">
          <h3>Dr.Ajith P</h3>
          <p>Director Life-Care Kerala Cluster (Critical Care)</p>
          <button id="kl"style={{backgroundColor:'lightblue',color:'darkblue',cursor:'not-allowed'}}>  Not Avaliable</button>

        </div>
        <div className="doctor-item">
          <h3>Dr.Gopika Vasudevan</h3>
          <p>Senior Consultant & HOD - Neonatology</p>
          <button style={{background:'lightgreen',color:'darkblue'}} href="appointment">Online Booking</button>
          
        </div>
        <div className="doctor-item">
          <h3>Dr.Samayam Ramya Vani</h3>
          <p>Neurology and Head of Epilepsy Services</p>
          <button style={{backgroundColor:'lightblue',color:'darkblue',cursor:'not-allowed'}}>Not Avialable</button>
        </div>
      </div>
      <div className="doctor-list">
        <div className="doctor-item">
          <h3>Dr.Brahamanad T.P</h3>
          <p>Senior Consultant - Vascular & Endovascular Surgery </p>
          <button style={{background:'orange'}}onClick={() => gotToNewPage('Dr.Brahamanad T.P')}>Booking Closing Soon </button>

        </div>
        <div className="doctor-item">
          <h3>Dr. Rafeena Abdulrasheed</h3>
          <p>Senior Consultant & Head of Neurosurgery</p>
          <button id="kl" style={{backgroundColor:'red',color:'white',cursor:'not-allowed'}}>Booking closed</button>

        </div>
        <div className="doctor-item">
          <h3>Dr. Avinash P.U</h3>
          <p>Senior Specialist - Anesthesiology</p>
          <button id="kl"style={{backgroundColor:'lightblue',color:'darkblue',cursor:'not-allowed'}}>  Not Avaliable</button>

        </div>
        
      </div>

      <div className="doctor-list">
        <div className="doctor-item">
          <h3>Dr.Arya Rajagopal</h3>
          <p>Senior Specialist - Radiation Oncology</p>

          <button id="kl" style={{backgroundColor:'red',color:'white',cursor:'not-allowed'}}>Booking closed</button>
        </div>
        <div className="doctor-item">
          <h3>Dr.Arundas P</h3>
          <p>Senior Specialist - Visiting (Paediatric Endocrinologist)</p>
          <button style={{background:'green'}}onClick={() => gotToNewPage('Dr.ARUNDAS P')}>Take Appointment </button>

        </div>
        <div className="doctor-item">
          <h3>Dr.Soumya</h3>
          <p>Director - Pulmonology (LifeCare  Cluster)</p>
          <button style={{background:'orange'}}onClick={() => gotToNewPage('Dr.Soumya')}>Booking Closing Soon </button>

        </div>
        
      </div>

      <div className="doctor-list">
        <div className="doctor-item">
          <h3>Dr.Jithin KVT</h3>
          <p>Senior Consultant - Orthopaedic Oncology</p>
          <button style={{background:'green'}}onClick={() => gotToNewPage('Dr.Jithin KVT')}>Booking started </button>
        </div>
        <div className="doctor-item">
          <h3>Dr.Rajeev</h3>
          <p>Senior Neurologist - Visiting (Modern Technologies)</p>
          <button id="kl"style={{backgroundColor:'lightblue',color:'darkblue',cursor:'not-allowed'}}>  Not Avaliable</button>
        </div>
        <div className="doctor-item">
          <h3>Dr.Archana P.S</h3>
          <p>Director - Parkinson's & Movement Disorder Clinics</p>
          <button style={{background:'green'}}onClick={() => gotToNewPage('Dr.Archana P.S')}>Take Appointment </button>

        </div>
        
      </div>
    </section>
  );
}

export default Doctors;