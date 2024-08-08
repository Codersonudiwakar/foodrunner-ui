import React, { useState } from 'react';

const Payment = () => {
    const [paymentType, setPaymentType] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentProcessed, setPaymentProcessed] = useState(false);

    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };

    const handleContinue = () => {
        if (paymentType) {
            setIsProcessing(true);
            // Simulate payment processing delay
            setTimeout(() => {
                setPaymentProcessed(true);
                setIsProcessing(false);
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
                        value="card" 
                        checked={paymentType === 'card'} 
                        onChange={handlePaymentTypeChange} 
                    />
                    Card
                </label>
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
                {paymentType === 'card' && (
                    <div>
                        <h3>Card Payment</h3>
                        <label>Card Number:</label>
                        <input type="text" placeholder="Enter your card number" />
                        <label>Expiry Date:</label>
                        <input type="text" placeholder="MM/YY" />
                        <label>CVV:</label>
                        <input type="text" placeholder="CVV" />
                    </div>
                )}

                {paymentType === 'upi' && (
                    <div>
                        <h3>UPI Payment</h3>
                        <label>UPI ID:</label>
                        <input type="text" placeholder="Enter your UPI ID" />
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

            {paymentProcessed && (
                <div>
                    <h3>Payment Successful!</h3>
                    <p>Your payment was processed successfully using {paymentType.toUpperCase()}.</p>
                </div>
            )}
        </div>
    );
};

export default Payment;
