
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Centerex from './components/Centerex';
import Appointment from './components/Appointment';
import Pharmacy from './components/Pharmacy';
import Doctorbkng from './components/Doctorbkng';
import Medicine from './components/Medicine';
import Aboutlifcare from './components/Aboutlifcare';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PaymentPage from './components/PaymentPage';
// import PaymentModePage from './components/PaymentGatewayPage';
import PaymentGatewayPage from './components/PaymentGatewayPage';
import AppointmentFeePage from './components/AppointmentFeePage';
import LoginType from './components/LoginType';
import Login from './components/Login'; // Import Login component
import AdminDashboard from './components/AdminDashboard'; // Import AdminDashboard component
import AppointmentSchedule from './components/AppointmentSchedule';
import PharmacyBillingDetails from './components/PharmacyBillingDetails';

import AppointmentHistory from './components/AppointmentHistory';

import NewDoctor from './components/NewDoctor';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDetails from './components/PatientDetails';
import NewRegistration from './components/NewRegistration';




import './App.css';



function App() {
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Hero-Section" element={<HeroSection />} />
          <Route path="/aboutlifcare" element={<Aboutlifcare />} />
          <Route path="/services" element={<Services />} />
          <Route path="/centerex" element={<Centerex />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/doctorbkng" element={<Doctorbkng />} />
          <Route path="/medicine" element={<Medicine cart={cart} setCart={setCart} />} />
          <Route path="/payment" element={<PaymentPage cart={cart} totalPrice={totalPrice} />} />
          {/* <Route path="/payment-mode" element={<PaymentModePage />} /> */}
          <Route path="/payment-gateway" element={<PaymentGatewayPage totalPrice={totalPrice} />} />
          <Route path="/appointment-fee" element={<AppointmentFeePage />} />
          <Route path="/login-type" element={<LoginType />} />
          <Route path="/login/:userType" element={<Login />} /> {/* Add route for login */}

          <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Add route for AdminDashboard */}
          <Route path="/appointment-history" element={<AppointmentHistory />} /> {/* Add route for AdminDashboard */}
          <Route path="/appointment-schedule" element={<AppointmentSchedule/>} />
          <Route path="/pharmacy-billing-details"  element={<PharmacyBillingDetails/>} />
          <Route path="/new-doctor"  element={<NewDoctor/>} />
          <Route path="/doctor-dashboard"  element={<DoctorDashboard/>} />
          <Route path="/patient-details"  element={<PatientDetails/>} />
          <Route path="/new-registration"  element={<NewRegistration/>} />






        </Routes>
      </Router>
      <Footer />
   
    </div>
  );
}

export default App;























// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Home from './components/Home';
// import Services from './components/Services';
// import Doctors from './components/Doctors';
// import Centerex from './components/Centerex';
// import Appointment from './components/Appointment';
// import Pharmacy from './components/Pharmacy';
// import Doctorbkng from './components/Doctorbkng';
// // import Payment from './components/Payment';
// import Medicine from './components/Medicine';
// import Aboutlifcare from './components/Aboutlifcare';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import ImageSlider from './components/ImageSlider'; // Import the ImageSlider component
// import './App.css';
// import hospital1 from './images/hospital1.jpg';
// import hospital2 from './images/hospital2.jpg';
// import hospital3 from './images/hospital3.jpg';
// import PaymentPage from './components/PaymentPage';

// function App() {
//   const images = [hospital1, hospital2, hospital3];
//   const [cart, setCart] = useState([]);
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <div className="App">
//       <Header />
//       <Navbar />
//       <Router>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/aboutlifcare" element={<Aboutlifcare />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/centerex" element={<Centerex />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="/pharmacy" element={<Pharmacy />} />
//           <Route path="/doctorbkng" element={<Doctorbkng />} />
//           <Route path="/medicine" element={<Medicine cart={cart} setCart={setCart} />} />
//           <Route path="/payment" element={<PaymentPage cart={cart} totalPrice={totalPrice} />} />
//         </Routes>
//       </Router>
//       <Footer />
//     </div>
//   );
// }

// export default App;
