import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/LoSi.css';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [signupMessage, setSignupMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {

      const response = await axios.post('http://localhost:8080/api/v1/user/authenticateUsers', formData);


      const token = response.data.token;


      localStorage.setItem('authToken', token);

      if (response.data.includes("Authenticated user")) {
        setSignupMessage('Authentication Successfulled');
        setTimeout(() => {
          navigate('/Shop');
        }, 3000);}
        else{
          if(response.data.includes("Incorrect Password")){
            setSignupMessage('Incorrect Password');
          }
          else if(response.data.includes("User not registered yet!!!")){
            setSignupMessage('Register first to login');
          }
        }
      
      
    } catch (error) {
      
      console.error('Login failed', error.message);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        {signupMessage && <p className="signup-message">{signupMessage}</p>}
        <div className="loginsignup-fields">
          <input type="email" name="email" placeholder='Email' onChange={handleChange} />
          <input type="password" name="password" placeholder='Password' onChange={handleChange} />
        </div>
        <button onClick={handleLogin}>Continue</button>
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
};

export default LoginSignup;

