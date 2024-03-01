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
    role:'admin',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      // Make a POST request to your Spring Boot backend endpoint
      const response = await axios.post('http://localhost:8080/api/v1/user/saveUser', formData);
      
      // Handle the response as needed (e.g., show a success message, redirect to login)
      console.log('Signup successful', response.data);
      navigate('/LoginSignup'); // Redirect to login page after successful signup
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Signup failed', error.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
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
