import React from 'react';
import './Footer.css';
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <p>WOW FASHION</p>
      </div>

      <div className="footer-social">
        <p>Follow Us:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
          <a href="https://www.twitter.com"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com"><img src={instagram} alt="Instagram" /></a>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Wow Fashion. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy</p>
      </div>
    </div>
  );
}
