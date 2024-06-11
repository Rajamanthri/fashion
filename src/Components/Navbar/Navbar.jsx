import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Placeholder logic for handling search submission
    console.log(`Search term submitted: ${searchTerm}`);
  };

  let role = localStorage.getItem("authToken");

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Wow Fashion</Link>
      </div>
      <div className="nav-search">
        <form onSubmit={handleSearchSubmit}>
          <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchInputChange} />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
      <ul className="nav-menu">
        <li><Link to="/kids">ALL</Link></li>
        <li><Link to="/men">Frock</Link></li>
        <li><Link to="/women">Sarees</Link></li>
        {role === "admin" ? (
          <li><Link to="/women">Addproduct</Link></li>
        ) : (
          null
        )}
      </ul>
      <div className="nav-actions">
        <div className="cart-icon-container">
          <div className="cart"><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link></div>
          <div className="nav-cart-count">0</div>
        </div>
        <div className="nav-login">
          <Link to='/signup'><button type="button" className="login">Register</button></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
