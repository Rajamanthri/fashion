import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Signup.css';


const Signup = () => {
    const navigate = useNavigate();

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <div className="signup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Sign Up</button>
        <p className="signup-login">
        Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
        </p>
        <div className="signup-agree">
          <input type="checkbox" name="" id="" />
          <p>I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
