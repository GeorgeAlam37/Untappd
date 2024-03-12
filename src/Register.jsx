import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { emailjsConfig } from '../src/emailjsconfig';
import check from './assets/check.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';
const Register = () => {
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const acceptTermsCheckbox = document.getElementById('acceptTerms');
    if (!acceptTermsCheckbox.checked) {
      setRegistrationMessage('Please accept the terms and conditions.');
      return;
    }
  
    // Get form data
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Send data to EmailJS
    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      data,
      emailjsConfig.userId
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setRegistrationMessage('Registration successful!');
      
            // Reset form fields (empty back)
            e.target.reset();
      //hide msg after 2m
      setTimeout(() => {
        setRegistrationMessage('');
      }, 2000);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setRegistrationMessage('Something went wrong! Try again');
    });
  };

  return (
    <>
      <Navbar />

      {/* Centered Message */}
      <div
        className="registration-message"
        style={{
          visibility: registrationMessage ? 'visible' : 'hidden',
          opacity: registrationMessage ? 1 : 0,
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1000',
          width: '400px',
          transition: 'opacity 0.5s, visibility 0.5s',
        }}
                        
      >
        {registrationMessage && (
          <div
            className={`alert ${registrationMessage.includes('successful') ? 'alert-success' : 'alert-danger'} text-center`}
            role="alert"
          >
            {registrationMessage}
          </div>
        )}
      </div>

      {/* Registration body */}
      <div className="main p-5">
        <div className="container-fluid">
          <div className="row">
            {/* Text Information */}
            <div className="col-lg-6 col-md-12 py-md-5 mx-auto mb-4 mb-md-0 mb-lg-0">
              <h2 className="text-start mb-4 fw-bold fs-42">Register Here</h2><br /><br />
              <p className='fs-24'>
                Discovery day is our introduction day. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p><br /><br />

              <p className="mt-4 d-flex align-items-center">
                <img src={check} alt="check" className="mr-4" />
                Discover how fun programming is.
              </p>

              <p className='mt-4 d-flex align-items-center'>
                <img src={check} alt='check' className="mr-4" />
                Joining offers a supportive community. HTML, CSS.
              </p>
              <p className='mt-4 d-flex align-items-center'>
                <img src={check} alt='check' className="mr-4" />
                Essential coding skills including HTML, CSS.
              </p>
            </div>

            {/* Registration Form */}
            <div className="col-lg-6 col-md-12 p-5 form">
              <h2 className="text-start fw-bold fs-25 mb-4">Register For Discovery Day</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="form-label"></label>
                  <input type="text" className="form-control" id="name" name='name' autoComplete="name" placeholder="Enter your name" required/>
                </div>

                <div>
                  <label htmlFor="phone" className="form-label"></label>
                  <input type="tel" className="form-control" id="phone" name='phone' autoComplete="tel" pattern="[0-9]{10}" title="Please enter a valid phone number" placeholder="Enter your phone number" required/>
                </div>

                <div>
                  <label htmlFor="email" className="form-label"></label>
                  <input type="email" className="form-control" id="email" name='email' placeholder="Enter your email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" title="Please enter a valid email address" autoComplete="email" required/>
                </div>

                <div className="mb-4">
                  <label htmlFor="birthdate" className="form-label"></label>
                  <input type="date" className="form-control" id="birthdate" name="birthdate" autoComplete="bday" required/>
                </div>

                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input shadow" id="acceptTerms" />
                  <label className="form-check-label ml-3" htmlFor="acceptTerms">
                    Accept terms and conditions
                  </label>
                </div>

                <button type="submit" className="btn btn-success w-70 rounded-pill">
                  Sign up for free
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Registration body */}

      <Footer />
    </>
  );
};

export default Register;
