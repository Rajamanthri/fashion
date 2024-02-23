import React from 'react'
import './Navbar.css'
import cart from '../Assets/cart.png'
import logo from '../Assets/logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Wow Fashoin</p>
      </div>
      <ul className='nav-menu'>
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Wishlist</li>
        <li>Cart</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="" />

      </div>
    </div>
  )
}
