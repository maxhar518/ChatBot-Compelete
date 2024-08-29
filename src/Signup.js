import React from 'react';
import './signup.css';

function Signup() {
  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:5000/Send', {
        method: 'POST',
      });
      if (response.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (

    <form class="form_main" action="">
      <p class="heading">SignUp</p>
      <div class="inputContainer">
        <input placeholder="First Name" id="username" class="inputField" type="text" />
      </div>

      <div class="inputContainer">
        <input placeholder="Second Name" id="username" class="inputField" type="text" />
      </div>

      <div class="inputContainer">
        <input placeholder="Gmail" id="username" class="inputField" type="email" />
      </div>

      <div class="inputContainer">
        <input placeholder="Password" id="password" class="inputField" type="password" />
      </div>

      <button id="button" onClick={sendEmail}>Submit</button>
      <a href="/OTP">Verify OTP</a>
      <div class="signupContainer">
        <p>Already Have an account?</p>
        <a href="/Login">Login</a>
      </div>
    </form>
  );
}

export default Signup;
