import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import'./Hero.css'
import family from '../Assets/family.png'
import man1 from '../Assets/man1.png'
// import cart from '../Assets/cart'

export default function Hero() {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    navigate('/cart');
  };

  const shopItems = [
    { id: 1, itemName: 'Item 1', price: 22},
    { id: 2, itemName: 'Item 2', price: 30 },
  ];

  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <div class = "all">
    <div className='hero'>

      <div className="hero-left">
        <h2>Welcome to Wow Fashion!</h2>
       <div className="left_para">
       Elevate your style with <span>Wow Fashion</span> – where sophistication meets flair. Explore our curated collection, designed for the modern woman who embraces elegance in every stride. Discover your perfect look today!
       </div>
      
      <Link to='/kids'><button type="button" class="explore">Explore</button></Link>
     
      </div>

      <div className="hero-right">
            <img src={family} alt="" />
            
      </div>
    </div>
    <div className="populer-item">
      <div className="populartext">Most Selling</div>
        {shopItems.map((item) => (
          <div className="card">
            <div key={item.id} className="item">
            <div className="item-img"><img src={family} alt={item.itemName} /></div>
            <div className="item-name"><h3>{item.itemName}</h3></div>
            <div className="item-price"><p>${item.price}</p></div>
            <button class="item-btn" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
          <div key={item.id} className="item">
            <div className="item-img"><img src={family} alt={item.itemName} /></div>
            <div className="item-name"><h3>{item.itemName}</h3></div>
            <div className="item-price"><p>${item.price}</p></div>
            <button class="item-btn" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
          <div key={item.id} className="item">
            <div className="item-img"><img src={family} alt={item.itemName} /></div>
            <div className="item-name"><h3>{item.itemName}</h3></div>
            <div className="item-price"><p>${item.price}</p></div>
            <button class="item-btn" onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}
