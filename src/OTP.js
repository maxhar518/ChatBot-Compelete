import React, { useState } from 'react';
import './OPT.css';

function OTP() {
  const [ot, setOTP] = useState('')

  const handleOTPChange = (e) => {
    setOTP(e.target.value)
  }

  const OTPcompare = async () => {
    try {
      const response = await fetch('http://localhost:5000/abc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ot })
      });
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <form className="otp-Form">

        <span class="mainHeading">Enter OTP</span>
        <p class="otpSubheading">sent a verification code to your Gmail</p>
        <div class="inputContainer">

          <input maxlength="1" type="text" class="otp-input" id="otp-input1" />
          <input maxlength="1" type="text" class="otp-input" id="otp-input2" />
          <input maxlength="1" type="text" class="otp-input" id="otp-input3" />
          <input maxlength="1" type="text" class="otp-input" id="otp-input4" />

        </div>
        <input
          type="text"
          value={ot}
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
