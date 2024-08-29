import React, { useState } from 'react';
import './OPT.css';

function OTP () {
    return (
        <>
            <form className="otp-Form">

                <span class="mainHeading">Enter OTP</span>
                <p class="otpSubheading">sent a verification code to your Gmail</p>
                <div class="inputContainer">

                    <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input1" />
                    <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input2" />
                    <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input3" />
                    <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input4" />

                </div>
                <button class="verifyButton" type="submit">Verify</button>
                <p class="resendNote">Didn't receive the code? <button class="resendBtn">Resend Code</button></p>
            </form>
        </>
    );
}
export default OTP;
