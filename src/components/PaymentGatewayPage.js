import React, { useState } from 'react';
import './PaymentGatewayPage.css';

const PaymentGatewayPage = ({ totalPrice }) => {
  const [paymentMode, setPaymentMode] = useState('');

  const handlePaymentSelection = (mode) => {
    setPaymentMode(mode);
  };

  const handlePaymentSubmit = (e) => {
  
window.alert("Payment Sucessfull");

    console.log(`Processing payment with mode: ${paymentMode}`);
  };

  return (
    <div className="payment-gateway-page">
      <h3>Payment Gateway</h3>
      <p>Total Amount: ₹{totalPrice}</p>
      <div className="payment-options">
        <button onClick={() => handlePaymentSelection('UPI')}>UPI</button>
        <button onClick={() => handlePaymentSelection('Cash')}>Cash</button>
        <button onClick={() => handlePaymentSelection('Credit Card')}>Credit Card</button>
        <button onClick={() => handlePaymentSelection('Debit Card')}>Debit Card</button>
        <button onClick={() => handlePaymentSelection('Net Banking')}>Net Banking</button>
      </div>
      {paymentMode && (
        <form onSubmit={handlePaymentSubmit} className="payment-form">
          <h4>Enter {paymentMode} Details</h4>
          {paymentMode === 'UPI' && (
            <div>
              <label>
                UPI ID:
                <input type="text" name="upiId" required />
              </label>
            </div>
          )}
          {paymentMode === 'Credit Card' && (
            <div>
              <label>
                Card Number:
                <input type="text" name="cardNumber" required />
              </label>
              <label>
                Expiry Date:
                <input type="text" name="expiryDate" required />
              </label>
              <label>
                CVV:
                <input type="text" name="cvv" required />
              </label>
            </div>
          )}
          {paymentMode === 'Debit Card' && (
            <div>
              <label>
                Card Number:
                <input type="text" name="cardNumber" required />
              </label>
              <label>
                Expiry Date:
                <input type="text" name="expiryDate" required />
              </label>
              <label>
                CVV:
                <input type="text" name="cvv" required />
              </label>
            </div>
          )}
          {paymentMode === 'Net Banking' && (
            <div>
              <label>
                Bank Name:
                <input type="text" name="bankName" required />
              </label>
              <label>
                Account Number:
                <input type="text" name="accountNumber" required />
              </label>
              <label>
                IFSC Code:
                <input type="text" name="ifscCode" required />
              </label>
            </div>
          )}
          <button type="submit" onClick={handlePaymentSubmit()}>Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default PaymentGatewayPage;
