// import React, { useState } from 'react'
// import './Navbar.css'
// import cart from '../Assets/cart.png'
// import wishlist from '../Assets/wishlist.png'
// import { Link } from 'react-router-dom';

// export default function Navbar() {

//     const [menu,setMenu] = useState("shop");

//   return (
//     <div className='navbar'>
//       <div className='nav-logo'>
//         <p>Wow Fashoin</p>
//       </div>
//       <ul className='nav-menu'>
//         <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
//       </ul>

//       <div className="wishlist">
//         <Link to='/wishlist'><img src={wishlist} alt="" /></Link>
//         <div className="wishlist-count">0</div>
//       </div>

//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
//         <Link to='/cart'><img src={cart} alt="" /></Link>
//         <div className="nav-cart-count">0</div>
//       </div>
//     </div>
//   )
// }

// Navbar.jsx
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Wow Fashion</Link>
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search" />
        <button type="button"><FontAwesomeIcon icon={faSearch} /></button>
      </div>
      <ul className="nav-menu">
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>

      <div className="nav-actions">
        <div className="wc">
        <div className="wishlist">
          <Link to='/wishlist'><FontAwesomeIcon icon={faHeart} /></Link>
          <div className="wishlist-count">0</div>
        </div>
        <div className="cart-icon-container">
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
            <div className="nav-cart-count">0</div>
          </div>
        </div>
        

        <div className="nav-login-cart">
          <Link to='/login'><button type="button" class="btn btn-primary">Login</button></Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
