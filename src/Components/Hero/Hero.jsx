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
    <div>
    <div className='hero'>

      <div className="hero-left">
        <h2>Welcome to Wow Fashion!</h2>
       
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
        </div>
      </div>

      <div className="hero-right">
            <img src={family} alt="" />
            
      </div>
    </div>
    <div className="populer-item">
        {shopItems.map((item) => (
          <div key={item.id} className="item">
            <img src={family} alt={item.itemName} />
            <h3>{item.itemName}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}
