import React from 'react';
import './signup.css';

function Signup() {
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


      <button id="button" >Submit</button>
      <div class="signupContainer">
        <p>Already Have an account?</p>
        <a href="/Login">Login</a>
      </div>
    </form>
  );
}

export default Signup;
