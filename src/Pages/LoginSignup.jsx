import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/LoSi.css';

export default function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className='loginsingup-login'>
          Don't have an account? <Link to="/signup">Sign-up here</Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}
