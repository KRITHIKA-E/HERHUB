import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth';

// Your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyCYTaeEjaSST43JFfg_EE4XIS3dHR8fsn4",
  authDomain: "otp-verify-814fc.firebaseapp.com",
  projectId: "otp-verify-814fc",
  storageBucket: "otp-verify-814fc.firebasestorage.app",
  messagingSenderId: "137574043247",
  appId: "1:137574043247:web:1531d79237b290a919079a",
  measurementId: "G-Q9RJYJDJ0G",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const PhoneLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verifier, setVerifier] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Setup invisible reCAPTCHA once
  useEffect(() => {
    if (!verifier) {
      const recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        { size: 'invisible' },
        auth
      );
      setVerifier(recaptchaVerifier);
      recaptchaVerifier.render().catch(console.error);
    }
  }, [verifier]);

  // Send OTP to entered phone number
  const sendOtp = () => {
    if (!phone) {
      setMessage('Please enter a valid phone number.');
      return;
    }
    setLoading(true);
    setMessage('');
    signInWithPhoneNumber(auth, phone, verifier)
      .then((result) => {
        setConfirmationResult(result);
        setMessage('OTP sent successfully.');
        setLoading(false);
      })
      .catch((error) => {
        setMessage('Failed to send OTP: ' + error.message);
        setLoading(false);
      });
  };

  // Verify user-entered OTP
  const verifyOtp = () => {
    if (!otp) {
      setMessage('Please enter the OTP.');
      return;
    }
    setLoading(true);
    setMessage('');
    confirmationResult
      .confirm(otp)
      .then((result) => {
        setMessage('Phone verified successfully!');
        setLoading(false);
        // TODO: Proceed with your signup/backend logic here
      })
      .catch((error) => {
        setMessage('Invalid OTP, please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="auth-box phonelogin-box">
      <h2>Phone Number Verification</h2>

      <div id="recaptcha-container"></div>

      {!confirmationResult ? (
        <>
          <input
            type="tel"
            placeholder="+1234567890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button onClick={sendOtp} disabled={loading}>
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
        </>
      ) : (
        <>
          <p>OTP sent to <b>{phone}</b></p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button onClick={verifyOtp} disabled={loading}>
            {loading ? 'Verifying OTP...' : 'Verify OTP'}
          </button>
          <button
            onClick={() => {
              setConfirmationResult(null);
              setOtp('');
              setMessage('');
            }}
            disabled={loading}
            style={{ marginTop: '10px' }}
          >
            Resend OTP
          </button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default PhoneLogin;
