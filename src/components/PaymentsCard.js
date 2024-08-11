import React, { useState } from 'react';
import { myAxios } from '../service/service';

const PaymentPage = () => {
    const [paymentType, setPaymentType] = useState('');
    const [paymentDetails, setPaymentDetails] = useState({
        paymentId: '',
        amount: '',
        paymentDate: '',
        paymentMethod: '',
        paymentStatus: 'PENDING',
    });

    const handlePaymentTypeChange = (type) => {
        setPaymentType(type);
        setPaymentDetails({
            ...paymentDetails,
            paymentMethod: type,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({
            ...paymentDetails,
            [name]: value,
        });
    };

    const handleSave = () => {
        myAxios.post('/app/payment', paymentDetails)
            .then(response => {
                console.log('Payment saved successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error saving the payment!', error);
            });
    };

    const handleContinue = () => {
        handleSave();
        // Add logic for what happens on continue
    };

    return (
        <div>
            <h1>Payment Options</h1>
            <div>
                <button onClick={() => handlePaymentTypeChange('UPI')}>UPI</button>
                <button onClick={() => handlePaymentTypeChange('COD')}>COD</button>
            </div>

            {paymentType && (
                <div>
                    <h2>Enter Payment Details for {paymentType}</h2>
                    <div>
                        <label>Payment ID:</label>
                        <input
                            type="text"
                            name="paymentId"
                            value={paymentDetails.paymentId}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input
                            type="number"
                            name="amount"
                            value={paymentDetails.amount}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Payment Date:</label>
                        <input
                            type="date"
                            name="paymentDate"
                            value={paymentDetails.paymentDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Payment Method:</label>
                        <input
                            type="text"
                            name="paymentMethod"
                            value={paymentType}
                            readOnly
                        />
                    </div>
                    <div>
                        <label>Payment Status:</label>
                        <input
                            type="text"
                            name="paymentStatus"
                            value="PENDING"
                            readOnly
                        />
                    </div>
                    <button onClick={handleContinue}>Continue</button>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
