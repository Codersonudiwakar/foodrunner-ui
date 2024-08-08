import React, { useState } from 'react';
import { myAxios } from '../service/service';

const Payment = () => {
    const [paymentType, setPaymentType] = useState('');
    const [upiId, setUpiId] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentProcessed, setPaymentProcessed] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState(null);

    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };

    const handleContinue = async () => {
        if (paymentType) {
            setIsProcessing(true);
            setTimeout(async () => {
                try {
                    // Save the payment details to the /foodRunner/cart endpoint
                    const response = await myAxios.post('/foodRunner/cart', paymentData);
                    console.log(paymentData);

                    if (response.status === 200) {
                        setPaymentDetails(paymentData);
                        setPaymentProcessed(true);
                    } else {
                        alert('Failed to save payment details.');
                    }
                } catch (error) {
                    console.error('Error saving payment details:', error);
                    alert('Failed to save payment details.');
                } finally {
                    setIsProcessing(false);
                }
            }, 2000);
        } else {
            alert('Please select a payment method.');
        }
    };

    return (
        <div>
            <h2>Select Payment Method</h2>
            <div>
                <label>
                    <input 
                        type="radio" 
                        value="upi" 
                        checked={paymentType === 'upi'} 
                        onChange={handlePaymentTypeChange} 
                    />
                    UPI
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="cod" 
                        checked={paymentType === 'cod'} 
                        onChange={handlePaymentTypeChange} 
                    />
                    Cash on Delivery
                </label>
            </div>

            <div>
                {paymentType === 'upi' && (
                    <div>
                        <h3>UPI Payment</h3>
                        <label>UPI ID:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your UPI ID" 
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                        />
                    </div>
                )}

                {paymentType === 'cod' && (
                    <div>
                        <h3>Cash on Delivery</h3>
                        <p>You will pay at the time of delivery.</p>
                    </div>
                )}
            </div>

            {!paymentProcessed && (
                <button onClick={handleContinue} disabled={isProcessing}>
                    {isProcessing ? 'Processing...' : 'Continue'}
                </button>
            )}

            {paymentProcessed && paymentDetails && (
                <div>
                    <h3>Payment Successful!</h3>
                    <p>Your payment was processed successfully using {paymentType.toUpperCase()}.</p>
                    <pre>{JSON.stringify(paymentDetails, null, 2)}</pre> {/* Display the payment details as JSON */}
                </div>
            )}
        </div>
    );
};

export default Payment;
