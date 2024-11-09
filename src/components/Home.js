 import React, { useState, useEffect } from 'react';
 import { useNavigate } from 'react-router-dom';
 import Slider from 'react-slick';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import {motion} from "framer-motion";

 const ImageSlider = ({ images }) => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     cssEase: 'linear',
   };

   return (
     <Slider {...settings}>
       {images.map((image, index) => (
         <div key={index} className="slide">
           <img src={image} alt={`Slide ${index}`} className="slide-image" />
         </div>
       ))}
     </Slider>
   );
 };

const Home = () => {
  const [color, setColor] = useState('green');
  const navigate = useNavigate();
  const images = [
   'https://media.istockphoto.com/id/1364075546/photo/empty-corridor-in-modern-hospital-with-information-counter-and-hospital-bed-in-rooms-3d.jpg?s=612x612&w=0&k=20&c=xxFDmIVpH1wJaaiorpvfzec4RRggSb48PDb_dU9bTjo=',
   'https://media.istockphoto.com/id/503494308/photo/senior-female-patient-in-bed-with-concerned-medical-staff.jpg?s=612x612&w=0&k=20&c=PlamPhN8_6Y0VDhxNPC56T6l6PFTX7FJaRuiLDW_t6o=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEq6sgo3TDtx-3YE-IdmOWA7qBSTcFqIneg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkoSY2hJXmUM2Xd_y63qURXV4fWRysDnuImg&s',
];

  useEffect(() => {
    const colors = ['darkblue', 'darkgreen'];
    let index = 0;

    const intervalId = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
     }, 1000);

     return () => clearInterval(intervalId);
   }, []);

  const handleLoginClick = () => {
    navigate('/login-type');   };

   return (
     <div className="home-container">
       <div className="main-content">
         <section className="hero-section">
           <div className="hero-content">
             <h3 style={{ color: color }}>LIFE-CARE HOSPITALS</h3>
           </div>
        </section>
        <div className="enquirenow"></div>
        <button onClick={handleLoginClick} className="login-btn corner-btn blinking">LOGIN NOW</button>
      </div>


      
      <div className="sidebar">
      <div className="imgclass">

</div>

        <div className="gallery">
          <h4>GALLERY</h4>
          <ImageSlider images={images} />
        </div>
       </div>
    </div>
);
 };

export default Home;

