
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4dr6qcq', 'template_anzdt47', form.current, {
        publicKey: 'hATCsKhA28kwxUsdV',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="chat-card-container">
      <div className="chat-card">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Enter Your Name" />
          <input type="email" name="user_email" placeholder="Enter Your Email" />
          <textarea name="message" placeholder="Enter Your Message" />
          <input className="view-btn" type="submit" value="Send" />
        </form>
      </div>
      <ToastContainer
        enableMultiContainer
        containerId={'message-box-toast'}
        position="top-center"
        className="toast-container"
      />
    </div>
  );
};
