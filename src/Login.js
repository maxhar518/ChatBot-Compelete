import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [firstName, setFirstName] = useState('');
  const [email, setGmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null); 

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
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
      const response = await axios.post('http://localhost:5000/Send', { email});
      if (response.status === 200) {
        console.log('Gmail Registered');
        setHasSubmitted(true);
      } else {
        setError(`Gmail Not Registered: ${response.status}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="form_main" onSubmit={handleSubmit}> 
      <p className="heading">Login</p>
      <div className="inputContainer">
        <input
          placeholder="Username"
          id="username"
          className="inputField"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="inputContainer">
        <input
          placeholder="Username"
          id="username"
          className="inputField"
          type="email"
          value={email}
          onChange={handleGmailChange}
        />
      </div>
      <div className="inputContainer">
        <input
          placeholder="Password"
          id="password"
          className="inputField"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {error && <div className="error">{error}</div>}

      <button id="button" disabled={isSubmitting}>
        {isSubmitting ? 'Logg...' : 'Login'}
      </button>
      <div className="signupContainer">
        <p>Don't have any account?</p>
        <a href="/Signup">Sign up</a>
      </div>
    </form>
  ); 
}

export default Login;