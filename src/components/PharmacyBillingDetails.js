import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PharmacyBillingDetails.css';

const sampleBillingDetails = [
  { date: '2024-11-01', patientName: 'Ranjith Ar', invoiceNumber: 'INV001', billAmount: '150.00' },
  { date: '2024-11-02', patientName: 'Amal pm', invoiceNumber: 'INV002', billAmount: '200.00' },
  { date: '2024-11-03', patientName: 'dayana davis', invoiceNumber: 'INV003', billAmount: '175.00' },
  { date: '2024-11-04', patientName: 'avinash kp', invoiceNumber: 'INV004', billAmount: '220.00' },
];

const PharmacyBillingDetails = ({ billingDetails = sampleBillingDetails }) => {
  const navigate = useNavigate();

  const handleBackToPrevious = () => {
    navigate(-1);
  };

  return (
    <div className="pharmacy-billing-details">
      <h3>PHARMACY BILLING DETAILS</h3>
      <table>
        <thead>
          <tr>
            <th>DATE</th>
            <th>PATIENT NAME</th>
            <th>INVOICE NUMBER</th>
            <th>BILL AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {billingDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.date}</td>
              <td>{detail.patientName}</td>
              <td>{detail.invoiceNumber}</td>
              <td>{detail.billAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleBackToPrevious} className="backj-button">
        BACK
      </button>
    </div>
  );
};

export default PharmacyBillingDetails;
