import React, { useState } from 'react';
import axios from 'axios'
import './OPT.css';

function OTP() {
  const [otp, setOTP] = useState('')
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleOTPChange = (e) => {
    setOTP(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    OTPcompare();
  };
  const OTPcompare = async () => {
    try {
      const response = await axios.post('http://localhost:5000/abc', { otp });
      console.log(response.data);
      setSuccess(response.data?.message)
    } catch (error) {
      console.error(error);
      setError('Invalid OTP. Please try again.')
    }
  };

  return (
    <>
      <form className="otp-Form" onSubmit={handleSubmit}>

        <span class="mainHeading">Enter OTP</span>
        <p class="otpSubheading">sent a verification code to your Gmail</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p>{success}</p>}

        <div class="inputContainer">

          <input maxlength="1" type="text" class="otp-input" id="otp-input1" />
          <input maxlength="1" type="text" class="otp-input" id="otp-input2" />
          <input maxlength="1" type="text" class="otp-input" id="otp-input3" />
          <input maxlength="1" type="text" class="otp-input" id="otp-input4" />

        </div>
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
        />
        <button class="verifyButton" type="submit" onClick={OTPcompare}>Verify</button>
        <p class="resendNote">Didn't receive the code? <button class="resendBtn">Resend Code</button></p>
      </form>
    </>
  );
}
export default OTP;
