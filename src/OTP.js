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
      if(response.status === 200){
      setSuccess(response.data?.message)
      }else{
        setError('Invalid OTP. Please try again.')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="otp-Form" onSubmit={handleSubmit}>

        <span class="mainHeading">Enter OTP</span>
        <p class="otpSubheading">verification code sent to your Gmail</p>
        {error && <p style={{ color: 'red' }}>{error}</p>} {success &&<p style={{ color: 'red' }}>{success}</p>}
        <input
          class="input"
          type="number"
          value={otp}
          onChange={handleOTPChange}
          placeholder="Enter OTP"
        />
        <button class="resendBtn">Forget Password</button>
        <button class="verifyButton" type="submit" onClick={OTPcompare}>Verify</button>
        <p class="resendNote">Didn't receive the code? <button class="resendBtn">Resend Code</button></p>
      </form>
    </>
  );
}
export default OTP;
