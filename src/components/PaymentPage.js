import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = ({ cart, totalPrice }) => {
  const currentDate = new Date().toLocaleDateString();
  const navigate = useNavigate(); 

  const nearestShops = [
    { name: 'Pharm Easy-MedPlus', address: 'Peringottukara', contact: '9045678967' },
    { name: 'Pharm EasyHealthKart', address: 'Thalikkulam', contact: '9895054072' }
  ];

  const handleProceedPayment = (e) => {
    e.preventDefault();
    navigate('/payment-gateway');
  };

  const cgstRate = 0.09; 
  const sgstRate = 0.09; 
  const cgstAmount = totalPrice * cgstRate;
  const sgstAmount = totalPrice * sgstRate;
  const finalAmount = totalPrice + cgstAmount + sgstAmount;

  return (
    <div className="payment-page">
      <h3>PHARM EASY - PAYMENT DETAILS</h3>
      <p>Date: {currentDate}</p>
      <form onSubmit={handleProceedPayment}>
        <div className="margin-left-1">
          <label>
            PATIENT NAME:
            <input type="text" name="PatientName" required />
          </label>
        </div>
        <div className="margin-left-2">
          <label>
            CONTACT NUMBER:
            <input type="text" name="ContactNumber" required />
          </label>
        </div>
        <h3>LIST OF MEDICINES</h3>
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Quantity</th>
              <th>Price per Unit (₹)</th>
              <th>Total Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">CGST (9%)</td>
              <td>₹{cgstAmount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3">SGST (9%)</td>
              <td>₹{sgstAmount.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="3"><strong>Final Amount</strong></td>
              <td><strong>₹{finalAmount.toFixed(2)}</strong></td>
            </tr>
          </tbody>
        </table>
        <button type="submit">PROCEED PAYMENT</button>
      </form>
    </div>
  );
};

export default PaymentPage;















