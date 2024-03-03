import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    f_Name: '',
    l_Name: '',
    email: '',
    password: '',
    role:'user',
  });
  const [signupMessage, setSignupMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/saveUser', formData);
      console.log('Signup response', response.data);
  
      if (response.data.includes("User created successfully.")) {
        setSignupMessage('Signup successful! Redirecting to login page...');
        setTimeout(() => {
          navigate('/Login');
        }, 3000);
      } else {
        // Display specific error messages based on backend response
      if (response.data.includes("User created successfully.")) {
        setSignupMessage("User with this email already exists.");
      } else if (response.data.includes("Please provide all required fields.")) {
        setSignupMessage("Please provide all required fields.");
      } else {
        
      }
      }
    } catch (error) {
      console.error('Signup failed', error.message);
      setSignupMessage('An error occurred during signup. Please try again later.');
    }
  };
  

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        {signupMessage && <p className="signup-message">{signupMessage}</p>}
        <div className="signup-fields">
          <input type="text" name="f_Name" placeholder="First Name" onChange={handleChange} />
          <input type="text" name="l_Name" placeholder="Last Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
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
};

export default Signup;
