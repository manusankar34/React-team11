
import React, { useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
class Payment extends React.Component {  
  constructor(props) {  
   super(props);  
   this.state = {  
    amount: 100, 
    paymentMethod: 'googlePay'  
   };  
  }  
  
  handlePaymentMethodChange = (event) => { 
    const location=useLocation();
    const {patientname}=location.state||{}; 
  this.setState({ paymentMethod: event.target.value });  
  }  
  
  handlePayment = () => {  
 // Call API to process payment  
 console.log('Payment processed successfully!');  
  }  
  
  render() {  
   return (  
    <div>  
      <h2>Payment Options</h2>  
      <p>Amount: ${this.state.amount}</p>  
      <form>  
       <label>  
        Payment Method:  
        <select value={this.state.paymentMethod} onChange={this.handlePaymentMethodChange}>  
          <option value="googlePay">Google Pay</option>  
          <option value="card">Card</option>  
        </select>  
       </label>  
       {this.state.paymentMethod === 'googlePay' ? (  
        <div>  
          <button onClick={this.handlePayment}>Pay with Google Pay</button>  
        </div>  
       ) : (  
        <div>  
          <input type="text" placeholder="Card Number" />  
          <input type="text" placeholder="Expiration Date" />  
          <input type="text" placeholder="CVV" />  
          <button onClick={this.handlePayment}>Pay with Card</button>  
        </div>  
       )}  
      </form>  
    </div>  
   );  
  }  
}  
  
export default Payment;






