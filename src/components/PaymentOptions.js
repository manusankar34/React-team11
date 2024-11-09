import React, { useState } from 'react';
import { GooglePayButton } from '@google-pay/button-react';

const PaymentOptions = () => {
  const [amount, setAmount] = useState(100); // fixed amount
  const [paymentMethod, setPaymentMethod] = useState('googlePay');
  const [paymentToken, setPaymentToken] = useState(null);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayment = async () => {
    if (paymentMethod === 'googlePay') {
      const googlePay = new GooglePay({
        clientId: '2343',
        merchantId: '2343',
      });

      const paymentToken = await googlePay.tokenize({
        amount: amount,
        currency: 'USD',
      });

      setPaymentToken(paymentToken);
    }

    if (paymentToken) {
      const paymentResponse = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentToken,
          amount,
        }),
      });

      if (paymentResponse.ok) {
        console.log('Payment successful!');
      } else {
        console.log('Payment failed!');
      }
    }
  };

  return (
    <div>
      <h2>Payment Options</h2>
      <p>Amount: ${amount}</p>
      <form>
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="googlePay">Google Pay</option>
            <option value="card">Card</option>
          </select>
        </label>
        {paymentMethod === 'googlePay' && (
          <GooglePayButton
            onClick={handlePayment}
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: '100.00',
                currencyCode: 'USD',
                countryCode: 'US',
              },
            }}
          />
        )}
      </form>
    </div>
  );
};

export default PaymentOptions;









