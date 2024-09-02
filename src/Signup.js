import React, { useState } from 'react';
import axios from 'axios'
import './signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleGmailChange = (e) => {
    setGmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/Send', { gmail });
      if (response.status === 200) {
        console.log('Email sent successfully');
        setHasSubmitted(true);
      } else {
        console.error(`Failed to send email: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setIsSubmitting(false);
      event.preventDefault();
    }
  };

  return (
    <form class="form_main" onSubmit={handleSubmit}>
      <p class="heading">SignUp</p>
      <div class="inputContainer">
        <input
          placeholder="First Name"
          id="firstName"
          class="inputField"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>

      <div class="inputContainer">
        <input
          placeholder="Second Name"
          id="lastName"
          class="inputField"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>

      <div class="inputContainer">
        <input
          placeholder="Gmail"
          id="gmail"
          class="inputField"
          type="email"
          value={gmail}
          onChange={handleGmailChange}
        />
      </div>

      <div class="inputContainer">
        <input
          placeholder="Password"
          id="password"
          class="inputField"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button id="button" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
      {{hasSubmitted} && <p>Email sent successfully!</p>}
      <a href="/OTP">Verify OTP</a>
      <div class="signupContainer">
        <p>Already Have an account?</p>
        <a href="/Login">Login</a>
      </div>
    </form>
  );
}

export default Signup;